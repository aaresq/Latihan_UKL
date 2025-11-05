"use client";

export default function ManagerDashboard() {
  return (
    <div className="w-full">
      {/* Header Welcome */}
      <div className="bg-purple-200 rounded-2xl p-8 flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 mb-2">
            Hello, Welcome Back 👋
          </h2>
          <p className="text-gray-700 text-sm">
            Siap mengecek presensi hari ini?
          </p>
        </div>

        {/* Illustration Placeholder */}
        <div className="w-40 h-32 bg-purple-300 rounded-xl"></div>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-yellow-400 text-white p-4 rounded-xl shadow">
          <h3 className="text-sm">Hadir</h3>
          <p className="text-3xl font-bold">83%</p>
        </div>

        <div className="bg-purple-500 text-white p-4 rounded-xl shadow">
          <h3 className="text-sm">Sakit</h3>
          <p className="text-3xl font-bold">10%</p>
        </div>

        <div className="bg-pink-500 text-white p-4 rounded-xl shadow">
          <h3 className="text-sm">Izin</h3>
          <p className="text-3xl font-bold">5%</p>
        </div>

        <div className="bg-indigo-400 text-white p-4 rounded-xl shadow">
          <h3 className="text-sm">Alpha</h3>
          <p className="text-3xl font-bold">2%</p>
        </div>
      </div>

      {/* Overview List Dummy */}
      <h3 className="text-lg font-semibold text-purple-800 mb-3">Info Penting</h3>

      <div className="space-y-4">
        {/* Card 1 */}
        <div className="bg-white shadow rounded-xl p-4 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-gray-800">
              INFO
            </h4>
            <p className="text-sm text-gray-500">
              Jika mengalami kendala, segera hubungi wali kelas atau admin presensi
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-xl p-4 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-gray-800">
              CATATAN
            </h4>
            <p className="text-sm text-gray-500">
              Keterlambatan atau tidak melakukan presensi akan tercatat sebagai Alpha
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
