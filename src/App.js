import React from "react";
import "./App.css";
import cardData from "./cardData";
import Card from "./card";

function App() {
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              cardData.map((obj) => {
                return <Card card={obj} />;
              }) 
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
