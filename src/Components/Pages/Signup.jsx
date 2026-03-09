import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({
      name: "",
      email: "",
      password: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("https://e-commerce-backend-2-w237.onrender.com/user/signup", data);

    alert("Signup Successful");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
