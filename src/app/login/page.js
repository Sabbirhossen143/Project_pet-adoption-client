"use client";

import Link from "next/link";
import { useContext, useState } from "react";

import { AuthContext } from "@/providers/AuthProvider";

import toast from "react-hot-toast";

const LoginPage = () => {

  const { loginUser, googleLogin } = useContext(AuthContext);

  const [error, setError] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {

      await loginUser(email, password);

      toast.success("Login Successful");

    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {

    try {

      await googleLogin();

      toast.success("Google Login Successful");

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            required
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Login
          </button>

        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 border py-3 rounded-lg hover:bg-gray-100"
        >
          Continue With Google
        </button>

        <p className="text-center mt-5">

          Don&apos;t have an account?

          <Link
            href="/register"
            className="text-blue-600 ml-2"
          >
            Register
          </Link>

        </p>

      </div>
    </div>
  );
};

export default LoginPage;