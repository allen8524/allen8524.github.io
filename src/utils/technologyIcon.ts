export function getTechnologyIcon(technology: string) {
  const value = technology.toLocaleLowerCase();

  if (value.includes("spring security") || value.includes("access control"))
    return "bi-shield-lock";
  if (value.includes("laravel")) return "bi-boxes";
  if (value.includes("php")) return "bi-filetype-php";
  if (value.includes("bootstrap")) return "bi-bootstrap-fill";
  if (
    value.includes("mysql") ||
    value.includes("jpa") ||
    value.includes("flyway")
  )
    return "bi-database";
  if (value.includes("pandas")) return "bi-table";
  if (value.includes("scikit")) return "bi-cpu";
  return "bi-code-slash";
}
