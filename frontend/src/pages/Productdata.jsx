// import { useEffect, useState } from "react";
// import { useNavigate,useParams } from "react-router-dom";
// import "../Styles/Productdata.css"

// export const Productdata = () => {
//   const [product, setProduct] = useState([]);
//   const [name,setName] =useState([])
//   const { id } = useParams(); 
//   const navigate = useNavigate();

//   const getProduct = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/getproductdata/${id}`, {
//         method: "GET",
//         headers: {
//         //   Authorization: `Bearer ${localStorage.getItem("token")}`,
//           "Content-Type": "application/json",
//         },
//       });

//       const data = await response.json();
//       console.log(`Fetched Users: `, data);
//       setProduct(data);
//     //   setName(data.name)

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getProduct();
//   }, [id]);

//   const handleLoginAgain = () => {
//     alert("User Logged Out Successfully!!!");
//     localStorage.removeItem("token");
//     navigate("/logout");
//   };
//   const handleAddPersonalDetails = (id) => {
//     navigate(`/adddetails/${id}`);
//   };
//   const handleback = () => {
//     navigate(-1);
//   };

//   return (
//     <>
//       <div className="navbaradmin">
//         <nav className="navbar">
//           <ul className="navbar-links">
//             {/* <button onClick={handleBack}>Back</button> */}
//             <button className="logoutbutton" onClick={handleLoginAgain}>
//               LOGOUT
//             </button>
//           </ul>
//         </nav>
//       </div>
  
//       <h2 className="adminh1">Product Details</h2>
      
//       {product && (
//         <div className="product-details">
//           <div className="product-info">
//             {/* Product Name */}
//             <h3>{product.name}</h3>
  
//             {/* Product Image */}
//             <img src={product.image} alt={product.name} width={200} />
  
//             {/* Product Description */}
//             <p>{product.description}</p>
  
//             {/* Product Price */}
//             <p>Price: ${product.price}</p>
  
//             {/* Quantity Section */}
//             <div className="quantity-section">
//               <label htmlFor="quantity">Quantity:</label>
//               <input
//                 type="number"
//                 id="quantity"
//                 name="quantity"
//                 min="1"
//                 // value={quantity}
//                 // onChange={(e) => setQuantity(e.target.value)}
//               />
//             </div>
  
//             {/* Total Price based on quantity */}
//             {/* <p>Total Price: ${(quantity * product.price).toFixed(2)}</p> */}
  
//             {/* Add to Cart Button */}
//             {/* <button onClick={handleAddToCart}>
//               Add to Cart
//             </button> */}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }  

//   return (
//     <>
//     <div className="navbaradmin">

//       <nav className="navbar">
//         <ul className="navbar-links">
      
//       <button onClick={handleback}>Back</button>
//       <button className="logoutbutton" onClick={handleLoginAgain}>
//         LOGOUT
//       </button>
//         </ul>
//     </nav>
//     </div>
//     {/* <div className="dashboard-container"> */}
//       <h2 className="adminh1">Product Details</h2>
//       {
//         <div className="adminbody">
//           <div className="Table">

//           <table className="profile-table">
//             <thead>
//             <tr>
//             <th>Name</th>
//             <th>PAN Card:</th>
//             <th>Class 10 Details:</th>
//             <th>Class 12 Details:</th>
//             <th>Aadhar Card:</th>
//             <th>Date of Birth:</th>
//             <th>Gender:</th>
//             <th>Address:</th>
//             <th>Add Details</th>
//             </tr>
//             </thead>
//             <tbody>
//       {name}
//         {/* </div> */}
//       {/* <img src={picture} alt="Profile" width={50} /> */}
//       {/* </div> */}
//       {/* {error && <p className="error-message">{error}</p>} */}
//                 {/* {product.map((user)=>(
//                   user.product &&(
//                     <tr key={user._id}> */}
//                     <tr>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.price}</td>
//               <td>{product.stock}</td>
//                 <td>
//                     <img src={product.image} alt="" srcset="" />
//                 </td>
//               <td>
//                  <button onClick={()=>handleAddPersonalDetails(user._id)}>Add</button>
//                 </td>
//             </tr>
//                 {/* //  )
//                 // ))} */}
//             </tbody>
//         </table>
//         </div>
//       </div>
//       }
//     {/* </div> */}
//     </>
//   );
// };

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaShoppingCart, FaUser, FaFacebook, FaInstagram, FaTwitter, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import "../Styles/Productdata.css"

export const Productdata = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1); 
  const [cart, setCart] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/getproductdata/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      totalPrice: (product.price * quantity).toFixed(2),
    };
    const updatedCart = [...cart, cartItem];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    alert(`${product.name} added to cart with quantity ${quantity}`);
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleLoginAgain = () => {
    alert("User Logged Out Successfully!!!");
    localStorage.removeItem("token");
    navigate("/logout");
  };

  return (
    <>
      <div className="navbaradmin">
        <nav className="navbar">
          <ul className="navbar-links">
            <button className="logoutbutton" onClick={handleLoginAgain}>
              LOGOUT
            </button>
            <li><a href="/addtocart"><FaShoppingCart /> Cart</a></li> 
          </ul>
        </nav>
      </div>

      <h2 className="adminh1">Product Details</h2>

      {product && (
        <div className="product-details">
          <div className="product-info">
            <div className="productimg">
            <img src={product.image} alt={product.name}/>
            </div>
            <div className="details">

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p>Price: ₹{product.price}</p>

            <div className="quantity-section">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-controls">
                <button onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
              </div>
            </div>

            <p>Total Price: ₹{(quantity * product.price).toFixed(2)}</p>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
        </div>
      )}
    </>
  );
};
