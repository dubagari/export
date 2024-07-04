import "./RelateProduct.css";

const RelateProd = ({ data }) => {
  return (
    <>
      <main>
        <div className="related-box">
          {data.map((item, index) => (
            <div className="related-img" key={index}>
              <img src={item.imgUrl} alt="" />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default RelateProd;
