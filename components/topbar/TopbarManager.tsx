"use client";
export default function TopbarManager() {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };

  return (
    <div className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-purple-700 font-bold text-xl">Dashboard Manager</h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
