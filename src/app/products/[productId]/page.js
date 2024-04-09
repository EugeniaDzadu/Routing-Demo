import { Metadata } from "next";
import { setTimeout } from "timers/promises";

const generateMetadata = async ({ params }) => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`
  };
};

const ProductDetails = ({ params }) => {
  return (
    <h1>Details about the product {params.productId}</h1>
  );
};

export { generateMetadata, ProductDetails };
