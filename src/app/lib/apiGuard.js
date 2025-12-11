export function protectAPI(request) {
  // Allow internal/frontend calls (custom header)
  const internal = request.headers.get("x-internal");
  if (internal === "ok") return "internal";

  // Browser trying to open API in URL bar
  const isBrowser = request.headers.get("sec-fetch-mode") !== null;
  if (isBrowser) return "blocked";

  // Postman or backend usage
  return "allowed";
}
