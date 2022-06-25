import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { realisticConfetti } from "../lib/utils";
const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    realisticConfetti();
  }, []);

  return (
    <div>
      <div className="success-wrapper">
        <div className="success">
          <p className="icon">
            <BsBagCheckFill />{" "}
          </p>
          <h2>Thank you for your order.</h2>
          <p className="email-msg">Check your email inbox for the receipt.</p>
          <p className="description">
            If you have any question, please email
            <a className="email" href="mailto:orden@ejemplo.com">
              orden@ejemplo.com
            </a>
          </p>
          <Link href="/">
            <button type="button" width="300px" className="btn">
              Continue shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default success;
