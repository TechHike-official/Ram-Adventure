import { protectAPI } from "@/app/lib/apiGuard";
import { connectDB } from "@/app/lib/db";
import Product from "@/app/models/Product";

export async function GET(request, context) {
  const state = protectAPI(request);
  if (state === "blocked") return new Response("Not Found", { status: 404 });

  await connectDB();
  const params = await context.params;

  const product = await Product.findById(params.id);

  return Response.json(product || { error: "Not Found" });
}

export async function PUT(request, context) {
  const state = protectAPI(request);
  if (state === "blocked") return new Response("Not Found", { status: 404 });

  await connectDB();
  const params = await context.params;
  const body = await request.json();

  const updated = await Product.findByIdAndUpdate(
    params.id,
    { $set: body },
    { new: true }
  );

  return Response.json({ success: true, product: updated });
}

export async function DELETE(request, context) {
  const state = protectAPI(request);
  if (state === "blocked") return new Response("Not Found", { status: 404 });

  await connectDB();
  const params = await context.params;

  const deleted = await Product.findByIdAndDelete(params.id);

  return Response.json({ success: true, deleted });
}
