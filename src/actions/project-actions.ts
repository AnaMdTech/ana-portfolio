"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

// 1. Fetch all projects
export async function getProjects() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
  return data;
}

// 2. Fetch single project by ID (for Editing)
export async function getProjectById(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching project:", error);
    return null;
  }
  return data;
}

export async function getProjectBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) return null;
  return data;
}

// 3. Create new project
export async function createProject(formData: any) {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").insert([formData]);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/projects");
  revalidatePath("/work");
  revalidatePath("/");
}

// 4. Update existing project
export async function updateProject(id: string, formData: any) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("projects")
    .update(formData)
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/projects");
  revalidatePath("/work");
  revalidatePath(`/work/${formData.slug}`);
}

// 5. Delete project
export async function deleteProject(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) throw new Error("Failed to delete project");

  revalidatePath("/admin/projects");
  revalidatePath("/work");
  revalidatePath("/");
}
