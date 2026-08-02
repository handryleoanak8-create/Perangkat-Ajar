import React from "react";
import { RPMInputParams } from "../types";
import { Sparkles, Save, RotateCcw, Building2, User, BookOpen, Calendar, Clock, Users, FileText } from "lucide-react";

interface InputFormProps {
  params: RPMInputParams;
  setParams: React.Dispatch<React.SetStateAction<RPMInputParams>>;
  onGenerateAI: () => void;
  isGenerating: boolean;
  onResetPreset: () => void;
  onViewDocument: () => void;
}

export const InputForm: React.FC<InputFormProps> = ({
  params,
  setParams,
  onGenerateAI,
  isGenerating,
  onResetPreset,
  onViewDocument,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Form Title Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-6 py-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-600/30 rounded-xl border border-indigo-400/30">
                <FileText className="w-6 h-6 text-indigo-300" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  Parameter Rencana Pembelajaran Mendalam (RPM)
                </h2>
                <p className="text-xs text-indigo-200 mt-0.5">
                  Lengkapi parameter dalam tabel di bawah ini untuk menggenerasi dokumen Kurikulum Merdeka secara otomatis.
                </p>
              </div>
            </div>

            <button
              onClick={onResetPreset}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg border border-slate-700 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset UPTD SD Tuabolok
            </button>
          </div>
        </div>

        {/* Input Form Table */}
        <div className="p-6">
          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th className="p-3.5 w-1/3 border-r border-slate-200">Parameter Input</th>
                  <th className="p-3.5">Nilai / Isian Parameter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {/* Nama Sekolah */}
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-indigo-600" />
                      Nama Sekolah
                    </div>
                  </td>
                  <td className="p-3">
                    <input
                      type="text"
                      name="namaSekolah"
                      value={params.namaSekolah}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 font-medium"
                      placeholder="e.g. UPTD SD Negeri Tuabolok"
                    />
                  </td>
                </tr>

                {/* Mata Pelajaran */}
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-indigo-600" />
                      Mata Pelajaran
                    </div>
                  </td>
                  <td className="p-3">
                    <input
                      type="text"
                      name="mataPelajaran"
                      value={params.mataPelajaran}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 font-medium"
                      placeholder="e.g. Bahasa Indonesia"
                    />
                  </td>
                </tr>

                {/* Fase / Kelas */}
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200">
                    Fase & Kelas
                  </td>
                  <td className="p-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="faseKelas"
                        value={params.faseKelas}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900"
                        placeholder="e.g. Fase C / Kelas VI"
                      />
                      <select
                        name="semester"
                        value={params.semester}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900 bg-white"
                      >
                        <option value="1 (Ganjil)">Semester 1 (Ganjil)</option>
                        <option value="2 (Genap)">Semester 2 (Genap)</option>
                      </select>
                    </div>
                  </td>
                </tr>

                {/* Topik Pembelajaran */}
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200">
                    Topik Pembelajaran
                  </td>
                  <td className="p-3">
                    <input
                      type="text"
                      name="topikPembelajaran"
                      value={params.topikPembelajaran}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900 font-semibold"
                      placeholder="e.g. Musisi Indonesia yang Mendunia"
                    />
                  </td>
                </tr>

                {/* Alokasi Waktu */}
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-indigo-600" />
                      Alokasi Waktu
                    </div>
                  </td>
                  <td className="p-3">
                    <input
                      type="text"
                      name="alokasiWaktu"
                      value={params.alokasiWaktu}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900"
                      placeholder="e.g. 2 x 35 Menit"
                    />
                  </td>
                </tr>

                {/* Tujuan Pembelajaran */}
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200">
                    Tujuan Pembelajaran
                  </td>
                  <td className="p-3">
                    <textarea
                      rows={2}
                      name="tujuanPembelajaran"
                      value={params.tujuanPembelajaran}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900"
                      placeholder="e.g. Peserta didik dapat menemukan informasi penting dan memahami kosakata baru dari teks informatif tentang musisi Indonesia yang mendunia."
                    />
                  </td>
                </tr>

                {/* Karakteristik Peserta Didik */}
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200">
                    Karakteristik Peserta Didik
                  </td>
                  <td className="p-3">
                    <textarea
                      rows={2}
                      name="karakteristikPesertaDidik"
                      value={params.karakteristikPesertaDidik}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900"
                      placeholder="Sebutkan minat, gaya belajar, kesiapan awal murid..."
                    />
                  </td>
                </tr>

                {/* Konteks Lingkungan Sekolah */}
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200">
                    Konteks Lingkungan Sekolah
                  </td>
                  <td className="p-3">
                    <textarea
                      rows={2}
                      name="konteksLingkunganSekolah"
                      value={params.konteksLingkunganSekolah}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900"
                      placeholder="Kondisi lingkungan sekolah, kearifan lokal, ketersediaan media..."
                    />
                  </td>
                </tr>

                {/* Guru & Kepala Sekolah */}
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-indigo-600" />
                      Guru Penyusun & NIP
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="namaGuru"
                        value={params.namaGuru}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900"
                        placeholder="Nama Guru: Handry Samuel Leoanak, S. Pd"
                      />
                      <input
                        type="text"
                        name="nipGuru"
                        value={params.nipGuru}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900"
                        placeholder="NIP Guru: NIP. 198708042025211031"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200">
                    Kepala Sekolah & NIP
                  </td>
                  <td className="p-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="namaKepalaSekolah"
                        value={params.namaKepalaSekolah}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900"
                        placeholder="Nama Kepala Sekolah: Selfiana Adu, S.Pd."
                      />
                      <input
                        type="text"
                        name="nipKepalaSekolah"
                        value={params.nipKepalaSekolah}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900"
                        placeholder="NIP: NIP. 196909181999032006"
                      />
                    </div>
                  </td>
                </tr>

                {/* Jumlah Murid, Pertemuan, Tanggal */}
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800 bg-slate-50 border-r border-slate-200">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-indigo-600" />
                      Murid & Pertemuan
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Jumlah Murid</label>
                        <input
                          type="text"
                          name="jumlahMurid"
                          value={params.jumlahMurid}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Jumlah Pertemuan</label>
                        <input
                          type="text"
                          name="jumlahPertemuan"
                          value={params.jumlahPertemuan}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Hari / Tanggal</label>
                        <input
                          type="text"
                          name="hariTanggal"
                          value={params.hariTanggal}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-slate-900"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Footer */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <button
              onClick={onViewDocument}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-xl transition shadow"
            >
              <Save className="w-4 h-4 text-emerald-400" />
              Tampilkan Dokumen Terformat
            </button>

            <button
              onClick={onGenerateAI}
              disabled={isGenerating}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transition transform hover:-translate-y-0.5 disabled:opacity-50"
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
              {isGenerating ? "Gemini AI Sedang Menggenerasi..." : "Generasi Dokumen RPM dengan Gemini AI"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
