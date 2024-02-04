import { products } from "@/data";
import { NextResponse } from "next/server";

export async function Get(req, res) {
  console.log(req.body);
  const product = products.find((product) => product.id === req.body.params);
  return NextResponse.json(product);
}
