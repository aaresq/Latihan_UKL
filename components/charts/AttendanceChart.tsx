"use client";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { bulan: "Jan", hadir: 88 },
  { bulan: "Feb", hadir: 90 },
  { bulan: "Mar", hadir: 92 },
  { bulan: "Apr", hadir: 89 },
  { bulan: "Mei", hadir: 94 },
];

export default function AttendanceChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bulan" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="hadir" stroke="#8b5cf6" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}
