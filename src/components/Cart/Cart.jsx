import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import CartItem from "./CartItem";
import Offcanvas from "../UI/Offcanvas";
import "./Cart.css";

const Cart = (props) => {
  const { items, totalAmount, clearItem } = useContext(CartContext);
  const hasItems = items.length > 0;
  const cartItems = (
    <ul className="cart-items">
      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );

  return (
    <Offcanvas onClose={props.onClose}>
      <div className="cart-head">
        <h2>My Basket</h2>
        <a href="/" className="cart-close" onClick={props.onClose}>
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span>Total Price</span>
        <span>{totalAmount.toFixed(2)}£</span>
      </div>
      {hasItems && (
        <div className="actions">
          <button className="cart-order">Order </button>
          <button className="cart-clear" onClick={clearItem}>
            Delete
          </button>
        </div>
      )}
    </Offcanvas>
  );
};

export default Cart;
