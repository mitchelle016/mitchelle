// src/components/SupermarketCart.jsx

import React, { useState } from "react";

const productsData = [
  
];

const SupermarketCart = () => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  // Remove item
  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
  };

  // Calculate total
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
     

      {/* Product Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {productsData.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />

            <h3>{product.name}</h3>

            <p>KES {product.price}</p>

            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "10px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div style={{ marginTop: "40px" }}>
        <h2>🛍 Add to  Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "15px 0",
                }}
              >
                <h3>{item.name}</h3>

                <p>Price: KES {item.price}</p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    -
                  </button>

                  <span>
                    Quantity: {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>
                </div>

                <p>
                  Subtotal: KES{" "}
                  {item.price * item.quantity}
                </p>

                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                  style={{
                    marginTop: "10px",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}

            <h2>
              Total: KES {totalPrice}
            </h2>

            <button
              style={{
                padding: "12px 20px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupermarketCart;