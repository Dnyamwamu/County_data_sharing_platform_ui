import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-customGreen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-customGreen">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex items-center border-b border-customGreen py-2">
            <FontAwesomeIcon icon={faUser} className="text-customGreen mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center border-b border-customGreen py-2">
            <FontAwesomeIcon icon={faLock} className="text-customGreen mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-customGreen text-white py-2 px-4 rounded-full hover:bg-green-600"
            >
              Login
            </button>
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-customGreen hover:text-green-700"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
