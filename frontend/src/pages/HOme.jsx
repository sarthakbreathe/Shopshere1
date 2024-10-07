import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate=useNavigate();
  const handleLoginAgain = () => {
    navigate("/login");  
  };
  const handleRegisterAgain = () => {
    navigate("/register");  
  };

  return (
    <div>
      <h1>Welcome to Home Page </h1>
    <div className="homepage">

      <h2>If you are new Register</h2>
      <button onClick={handleRegisterAgain}>REGISTER HERE</button>
      <h2>If you are already a User</h2>
      <button onClick={handleLoginAgain}>LOGIN HERE</button>
    </div>
    </div>
  );
};