import { protectAPI } from "@/app/lib/apiGuard";
import { serverPing } from "@/app/lib/serverPing";

export async function GET(request) {
  const status = protectAPI(request);

  if (status === "blocked") {
    return new Response("Not Found", { status: 404 });
  }

  return Response.json(await serverPing());
}
