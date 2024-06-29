import { Link, useParams } from "react-router-dom";
import ProductCart from "./cart/ProductCart";
import products from "../assets/product";
import relatedProduct from "../assets/relatedProduct";
import { useEffect } from "react";
import RelateProd from "./cart/RelateProd";

const Details = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  const { productName, imgUrl, description } = product;

  useEffect(() => {
    window.scrollTo(0, 10);
  }, [product]);

  const filteredProduct = relatedProduct.filter(
    (item) => item.productName === productName
  );
  console.log(filteredProduct);

  return (
    <section className="service">
      <div className="product-heading">
        <h1 className="heading">{productName}</h1>
      </div>
      <div className="product_details">
        <div className="product-box">
          <div className="img-image">
            <img src={imgUrl} alt="" />
          </div>
          <div className="description">
            <h3>{productName}</h3>
            <p>{description}</p>
            <h1>details page</h1>
          </div>
        </div>
      </div>
      <div className="break"></div>
      <div className="relate-prod">
        <h3>{`Releated ${productName} product`}</h3>
        <RelateProd data={filteredProduct} />
      </div>
      <div className="product-Items">
        <h1 className="heading">products</h1>
        <ProductCart />
      </div>
    </section>
  );
};

export default Details;
