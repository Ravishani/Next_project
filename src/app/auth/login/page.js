"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { IconMail, IconLock } from "@tabler/icons-react";
export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        form,
        {
          withCredentials: true,
        },
      );

      toast.success(data.message);

      router.push("/admin/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="min-h-screen flex items-center py-10 bg-white">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {/* Bootstrap: row justify-content-center */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Bootstrap: col-lg-10 mx-auto */}
          <div className="lg:col-span-10 lg:col-start-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-xl shadow-2xl bg-white">
              {/* Left Side */}
              <div className="lg:col-span-5 bg-gradient-to-br from-black to-indigo-700 text-white p-10 lg:p-14 flex flex-col justify-center">
                <h1 className="text-[35px] mt-4 font-[900] leading-[42px]">
                  Welcome Back 👋
                </h1>

                <p className="text-blue-100 leading-7 mb-10">
                  Sign in to access your dashboard, manage your projects,
                  invoices, payments, and much more.
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      ✓
                    </div>
                    <span>Secure Authentication</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      ⚡
                    </div>
                    <span>Fast Dashboard Access</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      🔒
                    </div>
                    <span>Your Data is Fully Protected</span>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-8 flex items-center">
                <div className="w-full max-w-md mx-auto">
                  <h2 className="text-[35px] mt-4 font-[900] leading-[42px]">
                    Login
                  </h2>

                  <p className="text-black mt-2 mb-8">
                    Enter your credentials to continue.
                  </p>

                  <form className="space-y-2" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-5">
                      <label className="block mb-2 font-medium text-gray-700">
                        Email Address
                      </label>

                      <div className="relative">
                        <IconMail
                          size={20}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full h-11 rounded-xl border border-gray-300 pl-12 pr-4"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                      <label className="block mb-2 font-medium text-gray-700">
                        Password
                      </label>

                      <div className="relative">
                        <IconLock
                          size={20}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          type="password"
                          name="password"
                          value={form.password}
                          onChange={handleChange}
                          placeholder="••••••••"
                          className="w-full h-11 rounded-xl border border-gray-300 pl-12 pr-4"
                        />
                      </div>
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex items-center justify-between mb-4">
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                        Remember Me
                      </label>

                      <a
                        href="/forgot-password"
                        className="text-sm font-medium text-[var(--ve-gold)] hover:text-black"
                      >
                        Forgot Password?
                      </a>
                    </div>

                    {/* Login Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-yellow-600 py-3 text-white font-semibold hover:bg-yellow-700"
                    >
                      {loading ? "Logging in..." : "Login"}
                    </button>

                    {/* Divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>

                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-4 text-gray-500">OR</span>
                      </div>
                    </div>

                    {/* Google */}
                    <button
                      type="button"
                      className="w-full rounded-xl border border-gray-300 py-3 font-medium hover:bg-gray-50 transition duration-300"
                    >
                      Continue with Google
                    </button>

                    {/* Register */}
                    <p className="text-center text-gray-600 mt-3">
                      Don't have an account?
                      <a
                        href="/register"
                        className="ml-2 font-semibold text-[var(--ve-gold)] hover:text-black"
                      >
                        Create Account
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
