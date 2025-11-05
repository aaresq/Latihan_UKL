"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1500));

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", "Admin");

    router.push("/manager");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Presensi.io
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-gray-700">Email</label>
            <input
              type="email"
              required
              className="w-full mt-1 p-3 border rounded-lg focus:outline-purple-500"
            />
          </div>

          <div>
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              required
              className="w-full mt-1 p-3 border rounded-lg focus:outline-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition ${
              loading
                ? "bg-purple-400"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Menyimpan..." : "Masuk"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-500">
          Lupa password?{" "}
          <span className="text-purple-600 cursor-pointer">Reset</span>
        </p>
      </div>
    </div>
  );
}
