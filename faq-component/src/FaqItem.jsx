/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react";

const FaqItem = ({ faq, index }) => {
  const [isShow, SetIsShow] = useState(false);

  useEffect(() => {
    if (index === 0) {
      SetIsShow(true);
    }
  }, []);

  const handleBtn = () => {
    SetIsShow((isShow) => !isShow);
  };

  return (
    <div className="faq-box">
      <div className="question">
        <button className={isShow ? "arrow" : ""} onClick={handleBtn}>
          {" "}
          🔼{" "}
        </button>
        <h3> {faq.question} </h3>
      </div>

      {isShow && <div className="answer"> {faq.answer} </div>}
    </div>
  );
};

export default FaqItem;
