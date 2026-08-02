import React from "react";
import { HandoutSiswaSection, RPMInputParams } from "../types";
import { BookOpen, Printer, FileDown, Sparkles } from "lucide-react";

interface HandoutViewProps {
  handout: HandoutSiswaSection;
  params: RPMInputParams;
  onPrint: () => void;
  onExportWord: () => void;
}

export const HandoutView: React.FC<HandoutViewProps> = ({
  handout,
  params,
  onPrint,
  onExportWord,
}) => {
  return (
    <div className="max-w-[215mm] mx-auto py-8 px-4">
      {/* Banner Controls */}
      <div className="no-print bg-white p-4 rounded-xl shadow border border-slate-200 mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <span className="font-bold text-sm text-slate-800">
            Handout Ringkas Siswa (Desain Pas 1 Halaman Cetak)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow transition"
          >
            <Printer className="w-3.5 h-3.5" /> Cetak Handout
          </button>
          <button
            onClick={onExportWord}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow transition"
          >
            <FileDown className="w-3.5 h-3.5" /> Unduh Word
          </button>
        </div>
      </div>

      {/* Handout Card */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-indigo-900 text-slate-900 font-serif leading-relaxed">
        <div className="border-b-2 border-indigo-900 pb-3 mb-4 text-center">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
            {params.namaSekolah} • {handout.faseKelas}
          </span>
          <h1 className="text-xl font-bold text-indigo-950 mt-2 uppercase tracking-wide">
            {handout.judul}
          </h1>
          <p className="text-xs font-bold text-indigo-800 mt-0.5">
            {handout.subJudul}
          </p>
        </div>

        {/* Ringkasan */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-indigo-900 uppercase border-b border-indigo-200 pb-1 mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" /> Rangkuman Materi Pembelajaran
          </h2>
          <p className="text-xs text-justify leading-relaxed bg-indigo-50/40 p-3 rounded border border-indigo-100">
            {handout.ringkasanMateri}
          </p>
        </div>

        {/* Kosakata */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-indigo-900 uppercase border-b border-indigo-200 pb-1 mb-1.5">
            Kosakata Kunci Penting Hari Ini
          </h2>
          <div className="overflow-x-auto border border-indigo-900 rounded">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-indigo-100 font-bold border-b border-indigo-900 text-indigo-950">
                  <th className="p-2 border-r border-indigo-900 w-1/3">Kosakata</th>
                  <th className="p-2">Arti / Maksud Kata</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-200 bg-white">
                {handout.kosakataKunciHighlight.map((kh, idx) => (
                  <tr key={idx}>
                    <td className="p-2 font-bold text-indigo-900 border-r border-indigo-900 bg-indigo-50/30">
                      {kh.kata}
                    </td>
                    <td className="p-2 text-slate-800">{kh.arti}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tips */}
        <div>
          <h2 className="text-sm font-bold text-indigo-900 uppercase border-b border-indigo-200 pb-1 mb-1.5">
            Tips Sukses Belajar Hari Ini
          </h2>
          <ul className="list-disc list-inside text-xs space-y-1.5 text-slate-800 bg-amber-50/40 p-3 rounded border border-amber-200">
            {handout.tipsBelajar.map((tb, idx) => (
              <li key={idx} className="font-medium">
                {tb}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
