import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
