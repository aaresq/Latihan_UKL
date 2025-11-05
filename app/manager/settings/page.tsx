"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("admin@example.com");
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedEmail = localStorage.getItem("userEmail");
    const savedPic = localStorage.getItem("userPic");

    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedPic) setProfilePic(savedPic);
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1200));

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    if (profilePic) localStorage.setItem("userPic", profilePic);

    setLoading(false);
    alert("Perubahan berhasil disimpan ✅");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPic");

    router.push("/login");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setProfilePic(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-2xl font-bold text-purple-700">Pengaturan Akun</h2>

      {/* Profile Picture */}
      <div className="flex flex-col items-center gap-3">
        <img
          src={profilePic || "/user-default.png"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 shadow"
        />
        <label className="cursor-pointer text-purple-600 font-medium">
          Ganti Foto
          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </label>
      </div>

      <form
        onSubmit={handleSave}
        className="space-y-6 bg-white p-6 shadow rounded-xl border border-purple-100 w-full max-w-md text-center"
      >
        {/* Nama */}
        <div className="flex flex-col items-center w-full">
          <label className="text-sm font-medium text-gray-600">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-3 border rounded-lg focus:outline-purple-500 text-center"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col items-center w-full">
          <label className="text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-3 border rounded-lg focus:outline-purple-500 text-center"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white transition ${
            loading
              ? "bg-purple-400"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {loading ? "Menyimpan..." : "Simpan Perubahan"}
        </button>

        {/* Logout Button */}
        <button
          type="button"
          onClick={handleLogout}
          className="w-full py-3 rounded-lg font-semibold text-purple-700 border border-purple-600 hover:bg-purple-100 transition"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
