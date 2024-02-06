import SingleProduct from "@/components/SingleProduct";

const getProduct = async (id) => {
  // Fetch products based on the provided query parameters
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  return res.json();
};

async function page({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="main-container mt-5 grid md:grid-cols-2 grid-cols-1">
      <SingleProduct product={product} />
    </div>
  );
}

export default page;
