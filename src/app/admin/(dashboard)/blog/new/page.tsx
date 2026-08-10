import React from "react";
import BlogForm from "../BlogForm";

export default function NewBlogPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">Create New Post</h1>
      <p className="text-gray-400 mb-10">
        Write a new deep-dive for your engineering blog.
      </p>
      <BlogForm />
    </div>
  );
}
