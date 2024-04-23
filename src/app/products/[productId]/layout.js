function getRandomInt(count, number){
  return Math.floor(Math.random() * count);
}

const ProductsDetailsLayout = ({ children }) => {

  const random = getRandomInt(2)

   if(random ===1)
   throw new Error("Error loading product");

    return (
      <>
        {children}
        <h2>Featured Products</h2>
        {/* Carousel here */}
      </>
    );
  };
  
  export default ProductsDetailsLayout;