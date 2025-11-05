"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function AnalisisPresensiPage() {
  const data = [
    { day: "Sen", hadir: 42 },
    { day: "Sel", hadir: 44 },
    { day: "Rab", hadir: 39 },
    { day: "Kam", hadir: 41 },
    { day: "Jum", hadir: 38 },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-purple-700">Analisis Presensi</h2>

      {/* Card Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Total Pegawai", value: 120 },
          { label: "Rata-rata Kehadiran", value: "92%" },
          { label: "Tidak Hadir Bulan Ini", value: 7 },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-5 border border-purple-100"
          >
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-2xl font-bold text-purple-700 mt-1">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Grafik Line */}
      <div className="bg-white rounded-xl shadow p-6 h-72 border border-purple-100">
        <p className="text-lg font-semibold text-purple-700 mb-4">
          Tren Kehadiran Mingguan
        </p>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="hadir"
              stroke="#7e57c2"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
