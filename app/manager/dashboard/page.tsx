"use client";

export default function DashboardPage() {
  return (
    <div className="w-full">
      {/* Greeting Section */}
      <div  >
        <div>
          <h2 className="text-2xl font-bold">Hi, Admin!</h2>
          <p className="text-gray-700">Siap melakukan presensi hari ini?</p>
        </div>

        <div className="w-32 h-32 md:w-40 md:h-40 bg-purple-300 rounded-xl mt-4 md:mt-0" />
      </div>

      {/* Statistik Card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-yellow-400 p-4 rounded-xl text-white">
          <p className="text-3xl font-bold">83%</p>
          <span>Hadir</span>
        </div>

        <div className="bg-purple-500 p-4 rounded-xl text-white">
          <p className="text-3xl font-bold">12</p>
          <span>Izin</span>
        </div> 

        <div className="bg-pink-500 p-4 rounded-xl text-white">
          <p className="text-3xl font-bold">5</p>
          <span>Sakit</span>
        </div>

        <div className="bg-gray-500 p-4 rounded-xl text-white">
          <p className="text-3xl font-bold">2</p>
          <span>Alpha</span>
        </div>
      </div>
    </div>
  );
}
