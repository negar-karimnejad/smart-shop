import Container from "../../../components/ui/Container";
import SingleProduct from "../../../components/share/single-product/SingleProduct";

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
        <SingleProduct product={product} />
      </div>
    </Container>
  );
}

export default page;
