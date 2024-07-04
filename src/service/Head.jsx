import "../service/Head.css";

const Head = ({ title }) => {
  return (
    <>
      <section>
        <div className="nava"></div>
        <div className="product-heading">
          <h1 className="heading">{title}</h1>
        </div>
      </section>
    </>
  );
};

export default Head;
