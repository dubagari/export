import { Link, useParams } from "react-router-dom";
import ProductCart from "./cart/ProductCart";
import products from "../assets/product";
import relatedProduct from "../assets/relatedProduct";
import { useEffect } from "react";
import RelateProd from "./cart/RelateProd";
import "./css/Details.css";
import Head from "../service/Head";

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
    <>
      <Head title={productName} />
      <section className="service">
        <div className="product_details">
          <div className="product-box">
            <div className="img-image">
              <img src={imgUrl} alt="" />
            </div>
            <div className="description">
              <h3>{productName}</h3>
              <p>{description}</p>
              {relatedProduct.map((item, index) => (
                <ul key={index}>
                  <li>
                    <h4>{item.Acid} </h4> {item.Standard1}
                  </li>
                  <li>
                    <h4>{item.Peroxide} </h4> {item.Standard2}
                  </li>
                  <li>
                    <h4>{item.Iodine} </h4> {item.Standard3}
                  </li>
                  <li>
                    <h4>{item.Color} </h4> {item.Standard4}
                  </li>
                  <li>
                    <h4>{item.Melting} </h4> {item.Standard5}
                  </li>
                  <li>
                    <h4>{item.Deterioration} </h4> {item.Standard6}
                  </li>
                  <li>
                    <h4>{item.Fatty} </h4> {item.FattyAcid}
                  </li>
                  <li>
                    <h4>{item.Saponification} </h4> {item.Standard7}
                  </li>
                  <li>
                    <h4>{item.Unsaponifiable} </h4> {item.Standard8}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="break"></div>
        <div className="relate-prod">
          <h3>{`Releated ${productName} product`}</h3>
          <RelateProd data={filteredProduct} />
        </div>

        <div className="product">
          <h1 className="heading">products</h1>
          <ProductCart />
        </div>
      </section>
    </>
  );
};

export default Details;
