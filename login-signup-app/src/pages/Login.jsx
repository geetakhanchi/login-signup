import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { validateLogin } from "../utils/validation";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Login Successful!");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen  px-2"
      style={{ backgroundColor: "#BBDCE5" }}
    >
      <div className="bg-white shadow-lg w-full max-w-4xl min-h-[500px] flex-col items-center  justify-center">
        <div
          className="w-full p-4  text-white lex items-center justify-center"
          style={{ backgroundColor: "#075B5E" }}
        >
          {" "}
          <h2 className="text-2xl p-2 text-center">Login</h2>
          <p className="text-sm text-center">Sign in to continue</p>
        </div>

        <div className="p-6 w-full max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <InputField
              label="Username"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              error={errors.username}
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />

            <button
              type="submit"
              className=" text-white w-1/2 py-2 rounded mx-auto block mt-10"
              style={{ backgroundColor: "#075B5E" }}
            >
              Login
            </button>
            <p
              className="mt-4 text-black-600 cursor-pointer text-center hover:underline"
              onClick={() => navigate("/signup")}
            >
              Don’t have an account? Sign Up
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
