import Container from "./Container";
import Product from "./Product";

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
};

async function Products() {
  const products = await getProducts();
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}

export default Products;
