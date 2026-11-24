/// <reference types="vite/client" />

const generated = import.meta.glob<string>("/assets/generated-thumbnails/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

export function thumbnailUrl(source: string, size: number): string {
  if (!source.startsWith("assets/img/")) return source;
  const name = source.split("/").pop()?.replace(/\.[^.]+$/, "");
  return generated[`/assets/generated-thumbnails/${name}-${size}.webp`] ?? source;
}
