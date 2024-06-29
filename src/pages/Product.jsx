import ProductCart from "./cart/ProductCart";

const Product = () => {
  return (
    <section className="service">
      <div className="product-heading">
        <h1 className="heading">products</h1>
      </div>

      <ProductCart />
    </section>
  );
};

export default Product;
