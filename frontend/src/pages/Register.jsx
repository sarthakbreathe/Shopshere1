import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        role: "user",
        password: "",     
    });

    const navigate=useNavigate();
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch(`http://localhost:5000/api/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            const data = await response.json();
            if (response.ok) {
              alert("User registered successfully!")
              setUser({
                name: "",
                email: "",
                phone: "",
                role: "user",
                password: "",
            });
                navigate('/')
            } else {
              alert("User already exixst.Please Log In.")
                console.log("Registration failed:", data.message);
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="registration-form">
                        <h1 className="main-heading">Registration Form</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name"><b>Name:</b></label>
                            <input className="registerinput" type="text" id="name" name="name" required value={user.name} onChange={handleInput} autoFocus/>
                            <br /><br />

                            <label htmlFor="email"><b>Email:</b></label>
                            <input className="registerinput" type="email" id="email" name="email" required value={user.email} onChange={handleInput} />
                            <br /><br />

                            <label htmlFor="phone"><b>Phone</b></label>
                            <input className="registerinput"  type="number" id="phone" name="phone" required value={user.phone} onChange={handleInput} />
                            <br /><br />

                            <label htmlFor="password"><b>Password:</b></label>
                            <input className="registerinput"  type="password" id="password" name="password" required value={user.password} onChange={handleInput} />
                            <br /><br />
                            <label htmlFor="role"><b>Role</b></label>
                            <select className="registerinput" name="role" id="role" value={user.role} onChange={handleInput}>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                            <br /><br />

                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    );
};
