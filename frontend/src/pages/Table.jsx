import React, { useState, useEffect } from 'react';
import "../Styles/Producttable.css";
import { useNavigate } from 'react-router-dom';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/getproducttable', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setProducts(data.users);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchProducts();
  }, []);
  const handleLoginAgain = () => {
    alert("User Logged Out Successfully!!!");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="product-table-container">
      <h1 className="product-table-title">Product List</h1>
      <button onClick={handleLoginAgain}>Logout</button>
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="product-row">
              <td>
                <img src={product.image} alt={product.name} width="100" height="100" className="product-image" />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>₹{product.price.toFixed(2)}</td>
              <td>{product.stock}</td>

            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-product-btn" onClick={() => navigate('/admin')}>
        Add New Product
      </button>
    </div>
  );
};

export default ProductTable;
