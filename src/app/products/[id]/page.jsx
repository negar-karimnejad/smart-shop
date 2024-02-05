import Image from "next/image";

const getProduct = async (id) => {
  // Fetch products based on the provided query parameters
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  return res.json();
};

async function page({ params }) {
  const product = await getProduct(params.id);
  return (
    <>
      {product && (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <Image
            height={100}
            width={100}
            src={product.images[0].image}
            alt={product.name}
          />
        </>
      )}
    </>
  );
}

export default page;
