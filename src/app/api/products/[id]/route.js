import { products } from "@/data";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { id } = res.params;

  const product = products.find((product) => product.id === id);
  return NextResponse.json(product);
}
