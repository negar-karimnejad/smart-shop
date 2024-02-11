import Container from "../../../components/ui/Container";
import ProductDetails from "../../../components/share/product-details/ProductDetails";

const getProduct = async (id) => {
  // Fetch products based on the provided query parameters
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  return res.json();
};

async function page({ params }) {
  const product = await getProduct(params.id);

  return (
    <Container>
      <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-10 xl:gap-0">
        <ProductDetails product={product} />
      </div>
    </Container>
  );
}

export default page;
