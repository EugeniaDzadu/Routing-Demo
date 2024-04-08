const { metadata } = require("../../about/page");

metadata


const generateMetadata = ({ params }) => {
  return {
    title: `Product ${params.productId}`
  };
};

const ProductDetails = ({ params }) => {
  return <h1>Details about the product {params.productId}</h1>;
};

module.exports = {
  generateMetadata,
  ProductDetails
};


