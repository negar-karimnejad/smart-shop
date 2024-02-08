import { getSession } from "next-auth/client";
import prisma from "../../../../lib/prismadb";

export async function POST(req, res) {
  const { productId } = req.body;
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const userId = session.user.userId;
  try {
    const cart = await prisma.order.findFirst({
      where: {
        userId,
      },
      include: {
        products: true,
      },
    });

    if (!cart) {
      return res.status(404).json({ error: "Shopping cart not found" });
    }
    const productExists = cart.products.some(product => product.id === productId);
    if (productExists) {
        return res.status(400).json({ error: 'Product already exists in the cart' });
      }
  } catch (error) {}
}
