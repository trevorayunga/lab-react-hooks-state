import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      <button
        data-testid={"product-" + product.id}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;