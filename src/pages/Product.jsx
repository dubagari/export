import Head from "../service/Head";
import ProductCart from "./cart/ProductCart";

const Product = () => {
  return (
    <main>
      <Head title="products" />
      <section className="product">
        {/* <h1 className="heading">products</h1> */}
        <ProductCart />
      </section>
    </main>
  );
};

export default Product;
