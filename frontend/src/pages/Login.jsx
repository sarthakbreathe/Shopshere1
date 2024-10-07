import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css"
import { AiOutlineLogout } from "react-icons/ai";

export const Login =()=>{
  const [user,setUser]=useState({
    email:"",
    password:"",     
  })
  const navigate=useNavigate()
    const handleInput =(e)=>{
        let name = e.target.name
        let value = e.target.value
        setUser({
            ...user,
            [name]:value,
        })
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await fetch(`http://localhost:5000/api/login`, {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(user),
          });

          const data = await response.json();
          if (response.ok) {
          localStorage.setItem("token",data.token)
          // const id = data.id;
          if (data.role === 'admin') {
                      navigate("/producttable");  
                    } 
                    else  {
                      navigate(`/`);  
                    }
                    
            alert("User Login successfully!")
              console.log("User registered successfully:", data);
          } else {
            alert("Wrong Details")
              console.log("Registration failed:", data.message);
          }
      } catch (error) {
          console.log("Error:", error);
      }
  };

  return (
    <>
      <section>
        <main>
          <div className="sectionlogin">
            <div className="loginform">
              <h1 className="main-heading">Login Form</h1>
              <form onSubmit={handleSubmit}>
                <label className="loginlabel" htmlFor="email">Email:</label>
                <input className="logininput" type="email" id="email" name="email" required value={user.email} autoFocus onChange={handleInput}/>
                <br />
                <br />

                <label className="loginlabel" htmlFor="password">Password:</label>
                <input className="logininput" type="password" id="password" name="password" required value={user.password} onChange={handleInput}/>
                <br />
                <br />
                <div className="logforgotbtn">
                <button type="submit" >LOGIN
                <AiOutlineLogout />
                </button>
                <a href="" onClick={(e)=>{
                  e.preventDefault()
                   navigate("/forgotpassword")}}>Forgot Password?</a>
                <a href="" onClick={(e)=>{
                  e.preventDefault()
                   navigate("/register")}}>Don't have an account ?</a>
                </div>
                {/* <button type="submit">ADMIN LOGIN</button> */}
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};