"use client";

import { useState, FormEvent,useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  const { login, error, user } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    login(email, password);
  };

  useEffect(() => {
  if (user) {
    router.push("/");
  }
}, [user, router]);


  return (
    <div className="flex flex-col items-center bg-transparent min-h-screen bg-gradient-to-br from-orange-150 to-yellow-50">
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-80 flex flex-col gap-4 mt-28"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        {/*  Error Message */}
    {error && (
      <div className="bg-red-100 text-red-600 px-3 py-2 rounded-md text-sm text-center">
        {error}
      </div>
    )}

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-orange-400 text-white py-2 rounded">
          Login
        </button>

        <p className="text-center">
          Don't have an account ?{" "}
          <Link href="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
