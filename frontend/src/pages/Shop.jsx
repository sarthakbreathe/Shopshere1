import React, { useState, useEffect } from 'react';
import "../Styles/Homepage.css";
import { LuLogOut } from "react-icons/lu";
import { FaShoppingCart, FaUser, FaFacebook, FaInstagram, FaTwitter, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import myImage from "../pages/logo1.jpg";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [visibleDescription, setVisibleDescription] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/getproduct?page=${currentPage}&limit=8`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage]); 

  const addToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item._id === product._id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      savedCart.push({ ...product, quantity: 1 });
      alert(`${product.name} added to cart!`);
    }
    localStorage.setItem('cart', JSON.stringify(savedCart));
    setCart(savedCart)

    //Add to cart increments function 
    const count = savedCart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
    
  };

  const productdetail = (id) => {
    navigate(`/product/${id}`);
  };

  const handleLoginAgain = () => {
    alert("User Logged Out Successfully!!!");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleDescription = (id) => {
    setVisibleDescription(visibleDescription === id ? null : id);
  };


  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleAccountClick = () => {
    const token = localStorage.getItem("token"); 
    if (token) {
      navigate("/"); 
    } else {
      alert("Please log in to access your account.");
      navigate("/login"); 
    }
  };

  const updateQuantity = (productId, action) => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = savedCart.find(item => item._id === productId);
  
    if (existingProduct) {
      if (action === 'increment') {
        existingProduct.quantity += 1;
        alert(`${existingProduct.name} quantity increased!`);
      } else if (action === 'decrement') {
        existingProduct.quantity -= 1;
        alert(`${existingProduct.name} quantity decreased!`);

        // Remove product from cart if quantity is zero
        if (existingProduct.quantity <= 0) {
          const updatedCart = savedCart.filter(item => item._id !== productId);
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          setCart(updatedCart);
          setCartCount(updatedCart.reduce((total, item) => total + item.quantity, 0));
          return; // Exit early as product is removed
        }
      }
    }
  
    localStorage.setItem('cart', JSON.stringify(savedCart));
    setCart(savedCart);
    
    const count = savedCart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  };
  

  return (
    <div className='main-container'>
       <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/"><FaHome /> Home</a></li>
          <li><a href="/shop"><FaShoppingCart /> Shop</a></li>
          <li><a href="/about"><FaInfoCircle /> About</a></li>
      </ul>
        <div className="logo">
          <img src={myImage} alt=""/>
        </div>
        <ul className="nav-links">
          <li><a href="/addtocart" onClick={handleAccountClick}><FaUser /> Account</a></li>
          <li><a href="/addtocart" ><FaShoppingCart /> Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>} 
          </a></li> 
          <li><a href="/addtocart" onClick={handleLoginAgain}> <LuLogOut /> Logout</a></li> 
        </ul>
      </nav>
      <section className="featured-products">
        <h2>All Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product._id} onClick={() => toggleDescription(product._id)}>
              <div className="product-card-img">
              <img loading='lazy' src={product.image} alt={product.name} width="150" height="150" />
              </div>
              <div className="productdetailhome">
                <button onClick={() => productdetail(product._id)} className='more-detail-btn'>More Detail</button>
                <h2 className='productname'>{product.name}</h2>
                <p className='productprice'>₹ {product.price.toFixed(2)}</p>
                {/* <button className='addtocart' onClick={() => addToCart(product)}>Add to Cart</button> */}
  
                <button className='addtocart' onClick={() => addToCart(product)}>
                <button onClick={() => updateQuantity(product._id, 'increment')}>+</button>
                  Add to Cart
                <button onClick={() => updateQuantity(product._id, 'decrement')}>-</button>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>Our social media:</p>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </footer>
    </div>
  );
};
