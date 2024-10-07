import React, { useState, useEffect } from 'react';
import "../Styles/Producttable.css";
import { useNavigate,useParams } from 'react-router-dom';

export const Profile = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/api/getprofile/${id}`, {
          method: 'GET',
          headers: {
             "Authorization": `Bearer ${localStorage.getItem("token")}`,
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

    fetchProducts();
  }, []);

  return (
    <div className="product-table-container">
      <h1 className="product-table-title">Product List</h1>
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
            <td>{name}</td>
        
        </tbody>
      </table>
      <button className="add-product-btn" onClick={() => navigate('/admin')}>
        Add New Product
      </button>
    </div>
  );
};

