import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Cart = ({ invCount }) => {
  return (
    <div class="cart">
      <label class="cart__button">
        {invCount}
        <ShoppingCartIcon
          style={{
            marginTop: "-10px",
            height: "25px",
            width: "25px",
            marginBottom: "10px",
          }}
        />
      </label>
    </div>
  );
};

export default Cart;
