"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import toast from "react-hot-toast";

const RegisterPage = () => {

  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Password Validation
    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      return setError("Password must contain one lowercase letter");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {

      await createUser(email, password);

      toast.success("Registration Successful");

      form.reset();

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full border p-3 rounded-lg"
            required
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border p-3 rounded-lg"
            required
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Register
          </button>

        </form>

        <p className="text-center mt-5">

          Already have an account?

          <Link
            href="/login"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>

        </p>

      </div>
    </div>
  );
};

export default RegisterPage;