import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch product data using fetch API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Add product to cart and open the modal
  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowModal(true); // Open the modal
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">API MODAL</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Show the cart modal if the modal is open */}
      {showModal && <CartModal cart={cart} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
