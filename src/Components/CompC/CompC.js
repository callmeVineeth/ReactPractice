import React, { useContext, useEffect, useState } from "react";
import { nameState, personState } from "../../App";
import { Link, Outlet } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

const CompC = () => {
  // const { name, setName } = useContext(nameState);
  const [loading, setLoading] = useState(false);
  const personDetail = useContext(personState);
  function changeText(text) {
    if (text === "Simran Vadhwani") {
      // setName("Manish K");
    } else {
      // setName("Simran Vadhwani");
    }
  }

  return (
    <>
      {/* <h4>{name}</h4> */}
      {/* <button onClick={() => changeText(name)}>change text</button> */}
      {/* <div className="data"> */}
      <div className="card-container">
        {loading ? (
          <ColorRing />
        ) : (
          personDetail.map((item, index) => (
            <div className="card" key={index}>
              <h1>{item.name}</h1>
              <p className="price">{item.age}</p>
              <p>Some text about the jeans..</p>

              <Link to={`/persondetail/${item.id}`} key={index}>
                <button onClick={() => setLoading(true)}>go</button>
              </Link>
            </div>
          ))
        )}
      </div>
      <Outlet />
      {/* </div> */}
    </>
  );
};

export default CompC;
