const RelateProd = ({ data }) => {
  return (
    <>
      <main>
        <div className="box">
          {data.map((item, index) => (
            <div className="img" key={index}>
              <img src={item.imgUrl} alt="" />
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default RelateProd;
