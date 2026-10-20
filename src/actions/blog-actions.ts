"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { BLOG_POSTS } from "@/lib/data";

export async function getBlogs() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.warn(
      "Supabase blog posts request failed; using local fallback:",
      error.message,
    );
    return BLOG_POSTS;
  }
  if (data.length === 0) {
    console.warn("No blog posts found in Supabase; using local blog data.");
    return BLOG_POSTS;
  }
  return data;
}

export async function getBlogById(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return data;
}

export async function getBlogBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) {
    if (error.code === "PGRST116") {
      return BLOG_POSTS.find((post) => post.slug === slug) ?? null;
    }

    console.warn(
      "Supabase blog post request failed; using local fallback:",
      error.message,
    );
    return BLOG_POSTS.find((post) => post.slug === slug) ?? null;
  }
  return data;
}

export async function createBlog(formData: any) {
  const supabase = await createClient();
  const { error } = await supabase.from("blog_posts").insert([formData]);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}

export async function updateBlog(id: string, formData: any) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("blog_posts")
    .update(formData)
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  revalidatePath(`/blog/${formData.slug}`);
}

export async function deleteBlog(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw new Error("Failed to delete blog post");

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}
