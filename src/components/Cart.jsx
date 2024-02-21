import React from "react";
import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
function Cart() {
    const { cart } = useCart();
    // let totalAmount = 0;
    // for (let item of cart) {
    //     totalAmount += item.price * item.quantity;
    // }
    const totalAmount = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    if (cart.length === 0) return <h1>No item found !!</h1>;
    return (
        <div className={styles.cart}>
            <h2 className={styles.cartHeading}>Shopping Cart</h2>
            <div>
                {cart.map((cartItem) => (
                    <CartItem {...cartItem} key={cartItem.id} />
                ))}
            </div>
            <h1>Total Amount: &#8377;{totalAmount}</h1>
        </div>
    );
}

export default Cart;
