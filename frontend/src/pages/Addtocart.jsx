// import React, { useState, useEffect } from 'react';
// import "../Styles/Addtocart.css";
// import { useNavigate } from "react-router-dom";

// export const AddtoCart = () => {
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(savedCart);
//   }, []);

//   const calculateTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   const updateQuantity = (id, newQuantity) => {
//     const updatedCart = cart.reduce((acc, item) => {
//       if (item._id === id) {
//         const updatedQuantity = Math.max(item.quantity + newQuantity, 0);
//         if (updatedQuantity > 0) {
//           acc.push({ ...item, quantity: updatedQuantity });
//         }
//       } else {
//         acc.push(item);
//       }
//       return acc;
//     }, []);

//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const handleBuyNow = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Please Login or SignUp");
//         navigate('/login');
//         return;
//       } else {
//         navigate('/buynow');
//       }
//     } catch (error) {
//       console.error('Error during checkout:', error);
//     }
//   };

//   const back = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="cart-page">
//       <button onClick={back} className="back-button">Back</button>
//       <h1>Your Cart</h1>
//       <div className="cart-items">
//         <table className='cart-table'>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item) => (
//               <tr key={item._id}>
//                 <td>{item.name}</td>
//                 <td><img src={item.image} alt={item.name} width={120} /></td>
//                 <td>₹{item.price.toFixed(2)}</td>
//                 <td>
//                   <button onClick={() => updateQuantity(item._id, -1)} className="quantity-button">-</button>
//                   {item.quantity}
//                   <button onClick={() => updateQuantity(item._id, 1)} className="quantity-button">+</button>
//                 </td>
//                 <td>₹{(item.price * item.quantity).toFixed(2)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="cart-summary">
//           <h2>Total Price: ₹{calculateTotalPrice()}</h2>
//           <button onClick={handleBuyNow} className="buy-now">
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };




import React, { useState, useEffect } from 'react';
import "../Styles/Addtocart.css";
import { useNavigate } from "react-router-dom";

export const AddtoCart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cart.reduce((acc, item) => {
      if (item._id === id) {
        const updatedQuantity = Math.max(item.quantity + newQuantity, 0); // Prevent negative quantity
        if (updatedQuantity > 0) {
          acc.push({ ...item, quantity: updatedQuantity }); // Keep the item if quantity > 0
        }
      } else {
        acc.push(item); // Keep other items
      }
      return acc;
    }, []);

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleBuyNow = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please Login or SignUp");
        navigate('/login');
        return;
      } else {
        navigate('/buynow');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="cart-page">
      <button onClick={back}>Back</button>
      <h1>My Cart</h1>
      <div className="cart-items">
        <table className='cart-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td><img src={item.image} alt="" width={120} /></td>
                <td>₹{item.price.toFixed(2)}</td>
                <td className='quantity-button'>
                  <button onClick={() => updateQuantity(item._id, -1)}>-</button>
                  {item.quantity}
                  <button onClick={() => updateQuantity(item._id, 1)}>+</button>
                </td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-summary">
          <h2>Total Price: ₹{calculateTotalPrice()}</h2>
          <button onClick={handleBuyNow} className="buy-now">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};





// import React, { useState, useEffect } from 'react';
// import "../Styles/Addtocart.css";
// import { useNavigate } from "react-router-dom";

// export const AddtoCart = () => {
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(savedCart);
//   }, []);

//   const calculateTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   const updateQuantity = (id, newQuantity) => {
//     const updatedCart = cart.map(item => 
//       item._id === id ? { ...item, quantity: Math.max(item.quantity + newQuantity, 1) } : item
//     );
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const handleBuyNow =async() => {
//     // alert('Proceeding to checkout...');
//       try {
//         const response = await fetch('http://localhost:5000/api/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           // body: JSON.stringify({ })
//         });
  
//     const token = localStorage.getItem("token")    
//     if(!token){
//       alert("Please Login or SignUp")
//       navigate('/login');
//       return;
//     }
//     else{
//       navigate('/buynow')
//   }
// }catch (error) {
//   console.error('Error during checkout:', error);
// }
// }
// const back=()=>{
//   navigate(-1);
// }
//   return (
//     <div className="cart-page">
//       <button onClick={back}>Back</button>
//       <h1>Your Cart</h1>
//       <div className="cart-items">
//         <table className='cart-table' >
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item) => (
//               <tr key={item._id}>
//                 <td>{item.name}</td>
//                 <td><img src={item.image} alt="" srcset="" width={120} /></td>
//                 <td>₹{item.price.toFixed(2)}</td>
//                 <td>
//                   <button onClick={() => updateQuantity(item._id, -1)}>-</button>
//                   {item.quantity}
//                   <button onClick={() => updateQuantity(item._id, 1)}>+</button>
//                 </td>
//                 <td>₹{(item.price * item.quantity).toFixed(2)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="cart-summary">
//           <h2>Total Price: ₹{calculateTotalPrice()}</h2>
//           <button onClick={handleBuyNow} className="buy-now">
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };











// // import React, { useState, useEffect } from 'react';
// // import "../Styles/Addtocart.css"
// // import { useNavigate } from "react-router-dom";
// // export const AddtoCart = () => {
// //   const [cart, setCart] = useState([]);

// //   useEffect(() => {
// //     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
// //     setCart(savedCart);
// //   }, []);

// //   const calculateTotalPrice = () => {
// //     return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
// //   };

// //   const increaseQuantity = (id) => {
// //     const updatedCart = cart.map(item =>
// //       item._id === id ? { ...item, quantity: item.quantity + 1 } : item
// //     );
// //     setCart(updatedCart);
// //     localStorage.setItem('cart', JSON.stringify(updatedCart));
// //   };
  
// //   const decreaseQuantity = (id) => {
// //     const updatedCart = cart.map(item =>
// //       item._id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
// //     );
// //     setCart(updatedCart);
// //     localStorage.setItem('cart', JSON.stringify(updatedCart));
// //   };

  
// //   const navigate=useNavigate();
// //   const handleBuyNow = () => {
// //     navigate('/buynow')
// //     alert('Proceeding to checkout...');
// //   };

// //   return (
// //     <div className="cart-page">
// //       <h1>Your Cart</h1>
// //       {cart.length === 0 ? (
// //         <p>Your cart is empty.</p>
// //       ) : (
// //         <div className="cart-items">
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Name</th>
// //                 <th>Price</th>
// //                 <th>Quantity</th>
// //                 <th>Total</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {cart.map((item) => (
// //                 <tr key={item._id}>
// //                   <td>{item.name}</td>
// //                   <td>₹{item.price.toFixed(2)}</td>
// //                   <td>
// //                     <button onClick={() => decreaseQuantity(item._id)}>-</button>
// //                     {item.quantity}
// //                     <button onClick={() => increaseQuantity(item._id)}>+</button>
// //                     {/* <button onClick={() => removeQuantity(item._id)}>Remove</button> */}
// //                   </td>
// //                   <td>₹{(item.price * item.quantity).toFixed(2)}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //           <div className="cart-summary">
// //             <h2>Total Price: ₹{calculateTotalPrice()}</h2>
// //             <button onClick={handleBuyNow} className="buy-now">
// //               Buy Now
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };