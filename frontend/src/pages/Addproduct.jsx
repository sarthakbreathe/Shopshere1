import React, { useState } from 'react';
import "../Styles/Admin.css"

export const Admin = () => {
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        image: null,
        stock: '',
    });
    
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setProductData({
            ...productData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let imageUrl = null;

        if (productData.image) {
            const image = new FormData();
            image.append("file", productData.image);
            image.append("upload_preset", "eccoh7rx");

            const response = await fetch(
                "https://api.cloudinary.com/v1_1/dqbyuhlyi/image/upload",
                {
                    method: "POST",
                    body: image,
                }
            );
            const imgData = await response.json();
            imageUrl = imgData.secure_url;
        }

        const newProduct = {
            ...productData,
            image: imageUrl,
        };

        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });
            const result = await response.json();
            
            if (response.ok) {
                setMessage('Product added successfully');
                setProductData({
                    name: '',
                    description: '',
                    price: '',
                    image: null,
                    stock: '',
                });
            } else {
                setMessage(result.message || 'Failed to add product');
            }
        } catch (error) {
            setMessage('Error adding product');
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="add-product-container">
                <h2>Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Product Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={productData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={productData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={productData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="stock">Stock Quantity:</label>
                        <input
                            type="number"
                            id="stock"
                            name="stock"
                            value={productData.stock}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="image">Product Image:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>

                    <button type="submit">Add Product</button>
                </form>
                
                {message && <p>{message}</p>}
            </div>
        </>
    );
};






// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../Styles/Admin.css"

// export const Admin = () => {
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState([]);
//   const navigate = useNavigate();

//   const getUsers = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/users", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const data = await response.json();
//       console.log(`Fetched Users: `, data);
//       setUsers(data.users);
//       setName(data.name);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const handleLoginAgain = () => {
//     alert("User Logged Out Successfully!!!");
//     localStorage.removeItem("token");
//     navigate("/logout");
//   };
//   const handleAddPersonalDetails = (id) => {
//     navigate(`/adddetails/${id}`);
//   };
//   const handleback = () => {
//     navigate(0);
//   };

//   return (
//     <>
//       <div className="navbaradmin">
//         <nav className="navbar">
//           <ul className="navbar-links">
//             <button onClick={handleback}>Back</button>
//             <button className="logoutbutton" onClick={handleLoginAgain}>
//               LOGOUT
//             </button>
//           </ul>
//         </nav>
//       </div>
//       <h2 className="adminh1">Personal Details</h2>
//       {
//         <div className="adminbody">
//           <div className="Table">
//             <table className="profiletable">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email ID</th>
//                   <th>Phone No.</th>
//                   <th>Role</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map(
//                   (user) =>
//                     user && (
//                       <tr key={user._id}>
//                         <td>{user.name}</td>
//                         <td>{user.email}</td>
//                         <td>{user.phone}</td>
//                         <td>{user.role}</td>
//                       </tr>
//                     )
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       }
//     </>
//   );
// };


// import React, { useState } from 'react';
// import "../Styles/Admin.css"

// export const Admin = () => {
//     const [productData, setProductData] = useState({
//         name: '',
//         description: '',
//         price: '',
//         image: null,
//         stock: '',
//     });
    
//     const [message, setMessage] = useState(null);

//     // Handle input changes
//     const handleChange = (e) => {
//         setProductData({
//             ...productData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     // Handle image file change
//     const handleFileChange = (e) => {
//         setProductData({
//             ...productData,
//             image: e.target.files[0],
//         });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         // Create FormData object to include image file
//         const formData = new FormData();
//         formData.append('name', productData.name);
//         formData.append('description', productData.description);
//         formData.append('price', productData.price);
//         formData.append('image', productData.image); // Add image file
//         formData.append('stock', productData.stock);
        
//         try {
//             const response = await fetch('http://localhost:5000/api/products', {
//                 method: 'POST',
//                 body: formData, // Send FormData
//             });
//             const result = await response.json();
            
//             if (response.ok) {
//                 setMessage('Product added successfully');
//                 setProductData({
//                     name: '',
//                     description: '',
//                     price: '',
//                     image: null,
//                     stock: '',
//                 });
//             } else {
//                 setMessage(result.message || 'Failed to add product');
//             }
//         } catch (error) {
//             setMessage('Error adding product');
//             console.error('Error:', error);
//         }
//     };

//     return (
//       <>
//         <div className="add-product-container">
//             <h2>Add Product</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Product Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={productData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="description">Description:</label>
//                     <textarea
//                         id="description"
//                         name="description"
//                         value={productData.description}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="price">Price:</label>
//                     <input
//                         type="number"
//                         id="price"
//                         name="price"
//                         value={productData.price}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="stock">Stock Quantity:</label>
//                     <input
//                         type="number"
//                         id="stock"
//                         name="stock"
//                         value={productData.stock}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="image">Product Image:</label>
//                     <input
//                         type="file"
//                         id="image"
//                         name="image"
//                         accept="image/*"
//                         onChange={handleFileChange}
//                     />
//                 </div>

//                 <button type="submit">Add Product</button>
//             </form>
            
//             {message && <p>{message}</p>}
//         </div>
//         </>
//     );
// };

// // export default AddProductPage;