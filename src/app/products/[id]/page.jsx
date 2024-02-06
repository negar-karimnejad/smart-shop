import SingleProduct from "@/components/SingleProduct";

const getProduct = async (id) => {
  // Fetch products based on the provided query parameters
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  return res.json();
};

async function page({ params }) {
  const product = await getProduct(params.id);

  return <>{product && <SingleProduct />}</>;
}

export default page;
