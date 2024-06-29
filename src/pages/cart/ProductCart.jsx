import { Link } from "react-router-dom";
import image1 from "../../assets/hero.jpg";
import products from "../../assets/product";

const ProductCart = ({ data }) => {
  return (
    <div className="box-container">
      {products.map((items, index) => (
        <div className="box" key={index}>
          <img src={items.imgUrl} alt="" />
          <div className="info">
            <h3>{items.productName}</h3>
            <p>{items.description}</p>
            <div>
              <Link to={`/product/product-details/${items.id}`}>
                <button className="home-bt">product dteails</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
