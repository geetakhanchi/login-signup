import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { validateSignup } from "../utils/validation";

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateSignup(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Signup Successful!");
      navigate("/");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-2"
      style={{ backgroundColor: "#BBDCE5" }}
    >
      <div className="bg-white shadow-lg w-full max-w-4xl min-h-[500px]">
        <div
          className="w-full p-4  text-white lex items-center justify-center"
          style={{ backgroundColor: "#075B5E" }}
        >
          {" "}
          <h2 className="text-xl  p-2 text-center">Create New Account</h2>
        </div>
        <div className="p-6 w-full max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <InputField
                  label="Name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <InputField
                  label="New Password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                />
              </div>
              <div>
                <InputField
                  label="Username"
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  error={errors.username}
                />
                <InputField
                  label="Phone"
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
                <InputField
                  label="Confirm New Password"
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-end mt-6">
              <button
                type="submit"
                style={{ backgroundColor: "#075B5E" }}
                className="text-white w-full md:w-1/4 py-2 rounded-xl"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
