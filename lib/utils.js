export { default as cn } from "clsx"

export function generateSlug(title) {
  // Convert title to lowercase and replace spaces with dashes
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  // Remove special characters except dashes
  const cleanedSlug = slug.replace(/[^a-z0-9-]/g, "");

  return cleanedSlug;
}

