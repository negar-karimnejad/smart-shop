const getProduct = async (id) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  return res.json();
};
async function page({ params }) {
//   console.log(params);
  const product = await getProduct(params.id);
  return (
    // <>
    //   {product && (
    //     <>
    //       <h1>{product.name}</h1>
    //       <p>{product.description}</p>
    //       <img src={product.images[0].image} alt="" />
    //     </>
    //   )}
    // </>
    <></>
  );
}

export default page;
