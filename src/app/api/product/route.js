import { protectAPI } from "@/app/lib/apiGuard";
import { connectDB } from "@/app/lib/db";
import Product from "@/app/models/Product";

export async function GET(request) {
  const state = protectAPI(request);
  if (state === "blocked") {
    return new Response("Not Found", { status: 404 });
  }

  await connectDB();
  const products = await Product.find();

  return Response.json(products);
}

export async function POST(request) {
  const state = protectAPI(request);
  if (state === "blocked") {
    return new Response("Not Found", { status: 404 });
  }

  await connectDB();
  const body = await request.json();

  const product = await Product.create({
    name: body.name,
    price: body.price,
  });

  return Response.json({ success: true, product });
}
