import React, { useState } from "react";
import { RPMInputParams, RPMGeneratedData } from "../types";
import {
  Edit3,
  Check,
  Printer,
  FileDown,
  BookOpen,
  HelpCircle,
  FileText,
  UserCheck,
  Sparkles,
  Layers,
  Award,
} from "lucide-react";

interface DocumentViewProps {
  params: RPMInputParams;
  data: RPMGeneratedData;
  setData: React.Dispatch<React.SetStateAction<RPMGeneratedData>>;
  onPrint: () => void;
  onExportWord: () => void;
}

export const DocumentView: React.FC<DocumentViewProps> = ({
  params,
  data,
  setData,
  onPrint,
  onExportWord,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="w-full bg-slate-100 min-h-screen py-6 px-2 sm:px-4">
      {/* Top Controls Banner (Screen Only) */}
      <div className="no-print max-w-[215mm] mx-auto mb-4 bg-white p-4 rounded-xl shadow border border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
          <FileText className="w-5 h-5 text-indigo-600" />
          <span>Pratinjau Dokumen F4 (10pt Font)</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
              isEditMode
                ? "bg-amber-500 text-white border-amber-600 shadow-sm"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"
            }`}
          >
            {isEditMode ? (
              <>
                <Check className="w-3.5 h-3.5" /> Selesai Edit
              </>
            ) : (
              <>
                <Edit3 className="w-3.5 h-3.5 text-amber-600" /> Edit Teks Langsung
              </>
            )}
          </button>

          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow transition"
          >
            <Printer className="w-3.5 h-3.5" /> Cetak F4
          </button>

          <button
            onClick={onExportWord}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow transition"
          >
            <FileDown className="w-3.5 h-3.5" /> Unduh Word (.doc)
          </button>
        </div>
      </div>

      {/* PAPER CONTAINER: Styled for F4 / Folio (215mm width) & 10pt font */}
      <div
        contentEditable={isEditMode}
        suppressContentEditableWarning={true}
        className={`rpm-paper-document max-w-[215mm] mx-auto bg-white p-[15mm] shadow-2xl rounded-sm border ${
          isEditMode ? "ring-2 ring-amber-400" : "border-slate-300"
        } text-[10pt] leading-[1.4] text-black font-serif`}
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        {/* HEADER DOKUMEN RPM */}
        <div className="text-center mb-6 border-b-2 border-black pb-4">
          <h1 className="text-[14pt] font-bold uppercase tracking-wide">
            RENCANA PEMBELAJARAN MENDALAM (RPM)
          </h1>
          <h2 className="text-[12pt] font-bold uppercase tracking-wider text-slate-800">
            KURIKULUM MERDEKA - DEEP LEARNING
          </h2>
          <p className="text-[10pt] font-bold mt-1">
            {params.namaSekolah.toUpperCase()}
          </p>
        </div>

        {/* 1. TABEL IDENTITAS PEMBELAJARAN */}
        <div className="mb-6">
          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            1. IDENTITAS PEMBELAJARAN
          </h3>
          <table className="w-full border-collapse border border-black text-[10pt]">
            <tbody>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black w-[20%]">
                  Nama Sekolah
                </td>
                <td className="p-1.5 border-r border-black w-[30%]">
                  {params.namaSekolah}
                </td>
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black w-[20%]">
                  Mata Pelajaran
                </td>
                <td className="p-1.5 w-[30%]">{params.mataPelajaran}</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">
                  Fase / Kelas
                </td>
                <td className="p-1.5 border-r border-black">{params.faseKelas}</td>
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">
                  Semester
                </td>
                <td className="p-1.5">{params.semester}</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">
                  Topik Pembelajaran
                </td>
                <td className="p-1.5 font-bold border-r border-black">
                  {params.topikPembelajaran}
                </td>
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">
                  Alokasi Waktu
                </td>
                <td className="p-1.5">{params.alokasiWaktu}</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">
                  Jumlah Murid
                </td>
                <td className="p-1.5 border-r border-black">{params.jumlahMurid}</td>
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">
                  Pertemuan & Tanggal
                </td>
                <td className="p-1.5">
                  {params.jumlahPertemuan} ({params.hariTanggal})
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">
                  Guru Penyusun
                </td>
                <td className="p-1.5 border-r border-black">{params.namaGuru}</td>
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">
                  Kepala Sekolah
                </td>
                <td className="p-1.5">{params.namaKepalaSekolah}</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">
                  Tujuan Pembelajaran
                </td>
                <td colSpan={3} className="p-1.5">
                  {params.tujuanPembelajaran}
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">
                  Karakteristik Peserta Didik
                </td>
                <td colSpan={3} className="p-1.5">
                  {params.karakteristikPesertaDidik}
                </td>
              </tr>
              <tr>
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">
                  Konteks Lingkungan Sekolah
                </td>
                <td colSpan={3} className="p-1.5">
                  {params.konteksLingkunganSekolah}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2. IDENTITAS & IDENTIFIKASI PESERTA DIDIK */}
        <div className="mb-6">
          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            2. IDENTITAS & IDENTIFIKASI PESERTA DIDIK
          </h3>
          <table className="w-full border-collapse border border-black text-[10pt]">
            <thead>
              <tr className="bg-slate-100 border-b border-black font-bold text-center">
                <th className="p-1.5 border-r border-black w-[30%]">Aspek Identifikasi</th>
                <th className="p-1.5">Uraian Analisis Kebutuhan Murid</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold border-r border-black">Pengetahuan Awal</td>
                <td className="p-1.5">{data.identitas.pengetahuanAwal}</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold border-r border-black">Minat Peserta Didik</td>
                <td className="p-1.5">{data.identitas.minat}</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold border-r border-black">Latar Belakang Sosial-Budaya</td>
                <td className="p-1.5">{data.identitas.latarBelakang}</td>
              </tr>
              <tr>
                <td className="p-1.5 font-bold border-r border-black">Kebutuhan & Kesiapan Belajar</td>
                <td className="p-1.5">{data.identitas.kebutuhanDanKesiapanBelajar}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3. ANALISIS MATERI PEMBELAJARAN */}
        <div className="mb-6">
          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            3. ANALISIS MATERI PEMBELAJARAN
          </h3>
          <table className="w-full border-collapse border border-black text-[10pt]">
            <tbody>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black w-[25%]">Materi Pembelajaran</td>
                <td className="p-1.5">{data.analisisMateri.materi}</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">Konsep Utama</td>
                <td className="p-1.5">{data.analisisMateri.konsepUtama}</td>
              </tr>
              <tr>
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">Kosakata / Istilah Kunci</td>
                <td className="p-1.5">{data.analisisMateri.kosakataKunci}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4. DESAIN PEMBELAJARAN */}
        <div className="mb-6">
          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            4. DESAIN PEMBELAJARAN (DEEP LEARNING)
          </h3>
          <table className="w-full border-collapse border border-black text-[10pt]">
            <tbody>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black w-[30%]">Dimensi Profil Pelajar Pancasila</td>
                <td className="p-1.5">
                  <ul className="list-disc list-inside">
                    {data.desainPembelajaran.dimensiProfilLulusan.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">Indikator Ketercapaian (IKTP)</td>
                <td className="p-1.5">
                  <ul className="list-disc list-inside">
                    {data.desainPembelajaran.indikatorKetercapaian.map((ik, i) => (
                      <li key={i}>{ik}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">Praktik Pedagogis (Deep Learning)</td>
                <td className="p-1.5">{data.desainPembelajaran.praktikPedagogis}</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">Lintas Disiplin Ilmu</td>
                <td className="p-1.5">{data.desainPembelajaran.lintasDisiplin}</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">Pemanfaatan Digital & Media</td>
                <td className="p-1.5">{data.desainPembelajaran.pemanfaatanDigital}</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">Kemitraan Pembelajaran</td>
                <td className="p-1.5">{data.desainPembelajaran.kemitraanPembelajaran}</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">Lingkungan Pembelajaran</td>
                <td className="p-1.5">{data.desainPembelajaran.lingkunganPembelajaran}</td>
              </tr>
              <tr>
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">Sarana & Prasarana</td>
                <td className="p-1.5">{data.desainPembelajaran.saranaPrasarana}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 5. PENGALAMAN BELAJAR */}
        <div className="mb-6">
          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            5. PENGALAMAN BELAJAR & AKTIVITAS PEMBELAJARAN
          </h3>

          <h4 className="font-bold text-[10pt] mt-3 mb-1">A. Kegiatan Pendahuluan</h4>
          <table className="w-full border-collapse border border-black text-[10pt] mb-3">
            <thead>
              <tr className="bg-slate-100 border-b border-black font-bold text-center">
                <th className="p-1.5 border-r border-black w-[15%]">Waktu</th>
                <th className="p-1.5 border-r border-black w-[42.5%]">Aktivitas Guru</th>
                <th className="p-1.5 w-[42.5%]">Aktivitas Murid</th>
              </tr>
            </thead>
            <tbody>
              {data.pengalamanBelajar.pendahuluan.map((p, idx) => (
                <tr key={idx} className="border-b border-black last:border-b-0">
                  <td className="p-1.5 text-center font-bold border-r border-black">{p.waktu}</td>
                  <td className="p-1.5 border-r border-black">{p.aktivitasGuru}</td>
                  <td className="p-1.5">{p.aktivitasMurid}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="font-bold text-[10pt] mt-3 mb-1">
            B. Kegiatan Inti (Deep Learning: Memahami, Mengaplikasikan, Merefleksikan)
          </h4>
          <table className="w-full border-collapse border border-black text-[10pt] mb-3">
            <thead>
              <tr className="bg-slate-100 border-b border-black font-bold text-center">
                <th className="p-1.5 border-r border-black w-[20%]">Tahap & Waktu</th>
                <th className="p-1.5 border-r border-black w-[40%]">Aktivitas Guru</th>
                <th className="p-1.5 w-[40%]">Aktivitas Murid</th>
              </tr>
            </thead>
            <tbody>
              {data.pengalamanBelajar.kegiatanInti.map((k, idx) => (
                <tr key={idx} className="border-b border-black last:border-b-0">
                  <td className="p-1.5 font-bold border-r border-black">
                    <div>{k.tahap}</div>
                    <div className="text-[9pt] font-normal text-slate-700">({k.waktu})</div>
                  </td>
                  <td className="p-1.5 border-r border-black">{k.aktivitasGuru}</td>
                  <td className="p-1.5">{k.aktivitasMurid}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="font-bold text-[10pt] mt-3 mb-1">C. Kegiatan Penutup</h4>
          <table className="w-full border-collapse border border-black text-[10pt] mb-3">
            <thead>
              <tr className="bg-slate-100 border-b border-black font-bold text-center">
                <th className="p-1.5 border-r border-black w-[15%]">Waktu</th>
                <th className="p-1.5 border-r border-black w-[42.5%]">Aktivitas Guru</th>
                <th className="p-1.5 w-[42.5%]">Aktivitas Murid</th>
              </tr>
            </thead>
            <tbody>
              {data.pengalamanBelajar.penutup.map((p, idx) => (
                <tr key={idx} className="border-b border-black last:border-b-0">
                  <td className="p-1.5 text-center font-bold border-r border-black">{p.waktu}</td>
                  <td className="p-1.5 border-r border-black">{p.aktivitasGuru}</td>
                  <td className="p-1.5">{p.aktivitasMurid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6. ASESMEN PEMBELAJARAN */}
        <div className="mb-6">
          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            6. ASESMEN PEMBELAJARAN & RUBRIK PENILAIAN
          </h3>

          <h4 className="font-bold text-[10pt] mt-3 mb-1">Ringkasan Asesmen Pembelajaran</h4>
          <table className="w-full border-collapse border border-black text-[10pt] mb-3">
            <thead>
              <tr className="bg-slate-100 border-b border-black font-bold text-center">
                <th className="p-1.5 border-r border-black w-[30%]">Jenis Asesmen</th>
                <th className="p-1.5">Bentuk & Instrumen Penilaian</th>
              </tr>
            </thead>
            <tbody>
              {data.asesmenPembelajaran.ringkasan.map((r, idx) => (
                <tr key={idx} className="border-b border-black last:border-b-0">
                  <td className="p-1.5 font-bold border-r border-black">{r.jenis}</td>
                  <td className="p-1.5">{r.deskripsi}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="font-bold text-[10pt] mt-3 mb-1">
            Instrumen Penilaian Formatif (Awal, Proses, dan Akhir)
          </h4>
          <table className="w-full border-collapse border border-black text-[10pt] mb-3">
            <thead>
              <tr className="bg-slate-100 border-b border-black font-bold text-center">
                <th className="p-1.5 border-r border-black w-[18%]">Tahap</th>
                <th className="p-1.5 border-r border-black w-[32%]">Instrumen yang Digunakan</th>
                <th className="p-1.5 border-r border-black w-[20%]">Bentuk</th>
                <th className="p-1.5 w-[30%]">Tujuan Pembelajaran / Indikator</th>
              </tr>
            </thead>
            <tbody>
              {data.asesmenPembelajaran.instrumenFormatif.map((i, idx) => (
                <tr key={idx} className="border-b border-black last:border-b-0">
                  <td className="p-1.5 font-bold border-r border-black">{i.tahap}</td>
                  <td className="p-1.5 border-r border-black">{i.instrumen}</td>
                  <td className="p-1.5 border-r border-black">{i.bentuk}</td>
                  <td className="p-1.5">{i.tujuanIndikator}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="font-bold text-[10pt] mt-3 mb-1">
            Rubrik Asesmen Proses (Observasi Kinerja & Sikap)
          </h4>
          <table className="w-full border-collapse border border-black text-[10pt] mb-3">
            <thead>
              <tr className="bg-slate-100 border-b border-black font-bold text-center">
                <th className="p-1.5 border-r border-black w-[24%]">Kriteria</th>
                <th className="p-1.5 border-r border-black w-[19%]">4 (Sangat Baik)</th>
                <th className="p-1.5 border-r border-black w-[19%]">3 (Baik)</th>
                <th className="p-1.5 border-r border-black w-[19%]">2 (Cukup)</th>
                <th className="p-1.5 w-[19%]">1 (Perlu Bimbingan)</th>
              </tr>
            </thead>
            <tbody>
              {data.asesmenPembelajaran.rubrikProses.map((rp, idx) => (
                <tr key={idx} className="border-b border-black last:border-b-0">
                  <td className="p-1.5 font-bold border-r border-black">{rp.kriteria}</td>
                  <td className="p-1.5 border-r border-black">{rp.sangatBaik}</td>
                  <td className="p-1.5 border-r border-black">{rp.baik}</td>
                  <td className="p-1.5 border-r border-black">{rp.cukup}</td>
                  <td className="p-1.5">{rp.perluBimbingan}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="font-bold text-[10pt] mt-3 mb-1">
            Kriteria Penilaian LKPD (Instrumen Asesmen Kinerja)
          </h4>
          <table className="w-full border-collapse border border-black text-[10pt] mb-3">
            <thead>
              <tr className="bg-slate-100 border-b border-black font-bold text-center">
                <th className="p-1.5 border-r border-black w-[10%]">No</th>
                <th className="p-1.5 border-r border-black">Kriteria Jawaban</th>
                <th className="p-1.5 w-[20%]">Skor Maksimal</th>
              </tr>
            </thead>
            <tbody>
              {data.asesmenPembelajaran.kriteriaLKPD.map((lk) => (
                <tr key={lk.no} className="border-b border-black">
                  <td className="p-1.5 text-center border-r border-black">{lk.no}</td>
                  <td className="p-1.5 border-r border-black">{lk.kriteria}</td>
                  <td className="p-1.5 text-center font-bold">{lk.skor}</td>
                </tr>
              ))}
              <tr className="bg-slate-100 font-bold">
                <td colSpan={2} className="p-1.5 text-center border-r border-black">SKOR TOTAL</td>
                <td className="p-1.5 text-center">100</td>
              </tr>
            </tbody>
          </table>

          <h4 className="font-bold text-[10pt] mt-3 mb-1">
            Rubrik Asesmen Akhir (Latihan Mandiri)
          </h4>
          <table className="w-full border-collapse border border-black text-[10pt] mb-3">
            <thead>
              <tr className="bg-slate-100 border-b border-black font-bold text-center">
                <th className="p-1.5 border-r border-black w-[24%]">Kriteria</th>
                <th className="p-1.5 border-r border-black w-[19%]">4 (Sangat Baik)</th>
                <th className="p-1.5 border-r border-black w-[19%]">3 (Baik)</th>
                <th className="p-1.5 border-r border-black w-[19%]">2 (Cukup)</th>
                <th className="p-1.5 w-[19%]">1 (Perlu Bimbingan)</th>
              </tr>
            </thead>
            <tbody>
              {data.asesmenPembelajaran.rubrikAkhir.map((ra, idx) => (
                <tr key={idx} className="border-b border-black last:border-b-0">
                  <td className="p-1.5 font-bold border-r border-black">{ra.kriteria}</td>
                  <td className="p-1.5 border-r border-black">{ra.sangatBaik}</td>
                  <td className="p-1.5 border-r border-black">{ra.baik}</td>
                  <td className="p-1.5 border-r border-black">{ra.cukup}</td>
                  <td className="p-1.5">{ra.perluBimbingan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 7. PROGRAM REMEDIAL DAN PENGAYAAN */}
        <div className="mb-6">
          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            7. PROGRAM REMEDIAL DAN PENGAYAAN
          </h3>
          <table className="w-full border-collapse border border-black text-[10pt]">
            <tbody>
              <tr className="border-b border-black">
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black w-[20%]">Remedial</td>
                <td className="p-1.5">{data.remedialPengayaan.remedial}</td>
              </tr>
              <tr>
                <td className="p-1.5 font-bold bg-slate-100 border-r border-black">Pengayaan</td>
                <td className="p-1.5">{data.remedialPengayaan.pengayaan}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 8. DAFTAR PUSTAKA */}
        <div className="mb-8">
          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            8. DAFTAR PUSTAKA
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            {data.daftarPustaka.map((dp, idx) => (
              <li key={idx}>{dp.replace(/^\d+\.\s*/, "")}</li>
            ))}
          </ol>
        </div>

        {/* TANDA TANGAN */}
        <div className="my-8 pt-4">
          <table className="w-full text-center text-[10pt] border-none">
            <tbody>
              <tr>
                <td className="w-1/2 align-top">
                  <div>Mengetahui,</div>
                  <div>Kepala Sekolah {params.namaSekolah}</div>
                  <div className="h-20"></div>
                  <div className="font-bold underline">{params.namaKepalaSekolah}</div>
                  <div>{params.nipKepalaSekolah}</div>
                </td>
                <td className="w-1/2 align-top">
                  <div>Tuabolok, {params.hariTanggal.split(", ")[1] || "27 Agustus 2026"}</div>
                  <div>Guru Kelas {params.faseKelas.includes("VI") ? "VI" : ""} / Penyusun</div>
                  <div className="h-20"></div>
                  <div className="font-bold underline">{params.namaGuru}</div>
                  <div>{params.nipGuru}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PAGE BREAK UNTUK LAMPIRAN */}
        <div className="page-break my-10 border-t-2 border-dashed border-slate-400 no-print text-center py-2 text-slate-500 font-sans text-xs">
          --- Batas Halaman (Lampiran Dimulai di Lembar Baru) ---
        </div>

        {/* LAMPIRAN DOKUMEN */}
        <div className="mt-8 pt-4">
          <div className="text-center mb-6">
            <h2 className="text-[13pt] font-bold uppercase">LAMPIRAN PEMBELAJARAN</h2>
            <p className="text-[10pt] font-bold">{params.namaSekolah} - {params.topikPembelajaran}</p>
          </div>

          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            LAMPIRAN 1: LKPD MANDIRI (BERGAMBAR & INDIVIDUAL)
          </h3>
          <div className="border border-black p-3 mb-6 bg-slate-50/50">
            <div className="font-bold text-[10pt] mb-1">{data.lampiran.lkpdMandiri.judul}</div>
            <p className="mb-2 italic"><strong>Petunjuk:</strong> {data.lampiran.lkpdMandiri.petunjuk}</p>
            <div className="font-bold mb-1">Daftar Pertanyaan:</div>
            <ol className="list-decimal list-inside space-y-2">
              {data.lampiran.lkpdMandiri.soal.map((s, idx) => (
                <li key={idx} className="bg-white p-2 border border-slate-300 rounded">
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            LAMPIRAN 2: LKPD KELOMPOK (DISKUSI & PRESENTASI)
          </h3>
          <div className="border border-black p-3 mb-6 bg-slate-50/50">
            <div className="font-bold text-[10pt] mb-1">{data.lampiran.lkpdKelompok.judul}</div>
            <p className="mb-2 italic"><strong>Petunjuk:</strong> {data.lampiran.lkpdKelompok.petunjuk}</p>
            <div className="font-bold mb-1">Soal Diskusi Kelompok:</div>
            <ol className="list-decimal list-inside space-y-2">
              {data.lampiran.lkpdKelompok.soal.map((s, idx) => (
                <li key={idx} className="bg-white p-2 border border-slate-300 rounded">
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            LAMPIRAN 3: BAHAN AJAR TERPERINCI
          </h3>
          <div className="border border-black p-3 mb-6 leading-relaxed">
            {data.lampiran.bahanAjarTerperinci}
          </div>

          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            LAMPIRAN 4: MEDIA PEMBELAJARAN & SARANA
          </h3>
          <p className="mb-6">{data.lampiran.mediaPembelajaran}</p>

          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            LAMPIRAN 5: RUBRIK KINERJA & KKTP
          </h3>
          <p className="mb-2"><strong>Rubrik Kinerja:</strong> {data.lampiran.rubrikKinerja}</p>
          <p className="mb-6"><strong>KKTP:</strong> {data.lampiran.kktp}</p>

          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-2">
            LAMPIRAN 6: INSTRUMEN REFLEKSI GURU & SISWA
          </h3>
          <table className="w-full border-collapse border border-black text-[10pt] mb-6">
            <thead>
              <tr className="bg-slate-100 border-b border-black font-bold text-center">
                <th className="p-1.5 border-r border-black w-1/2">Refleksi Guru</th>
                <th className="p-1.5 w-1/2">Refleksi Peserta Didik</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-r border-black align-top">
                  <ul className="list-disc list-inside space-y-1">
                    {data.lampiran.refleksiGuruDanSiswa.refleksiGuru.map((rg, idx) => (
                      <li key={idx}>{rg}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-2 align-top">
                  <ul className="list-disc list-inside space-y-1">
                    {data.lampiran.refleksiGuruDanSiswa.refleksiSiswa.map((rs, idx) => (
                      <li key={idx}>{rs}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PAGE BREAK UNTUK BANK EVALUASI */}
        <div className="page-break my-10 border-t-2 border-dashed border-slate-400 no-print text-center py-2 text-slate-500 font-sans text-xs">
          --- Batas Halaman (Bank Evaluasi Dimulai di Lembar Baru) ---
        </div>

        {/* BANK EVALUASI */}
        <div className="mt-8 pt-4">
          <div className="text-center mb-6">
            <h2 className="text-[13pt] font-bold uppercase">BANK EVALUASI PEMBELAJARAN</h2>
            <p className="text-[10pt] font-bold">{params.topikPembelajaran} - {params.faseKelas}</p>
          </div>

          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-3">
            A. SOAL PILIHAN GANDA (10 SOAL OPSI A-E)
          </h3>
          <div className="space-y-3 mb-6">
            {data.bankEvaluasi.pilihanGanda.map((pg) => (
              <div key={pg.no} className="border-b border-slate-200 pb-2">
                <p className="font-bold">{pg.no}. {pg.soal}</p>
                <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 gap-1 text-[9.5pt] mt-1">
                  <div>A. {pg.opsi.A}</div>
                  <div>B. {pg.opsi.B}</div>
                  <div>C. {pg.opsi.C}</div>
                  <div>D. {pg.opsi.D}</div>
                  <div>E. {pg.opsi.E}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-3">
            B. SOAL URAIAN HOTS (5 SOAL KETERAMPILAN BERPIKIR TINGGI)
          </h3>
          <div className="space-y-3 mb-6">
            {data.bankEvaluasi.uraianHots.map((uh) => (
              <div key={uh.no} className="border border-black p-2.5 bg-slate-50">
                <p className="font-bold">{uh.no}. {uh.soal}</p>
                <p className="mt-1 text-[9pt] italic text-slate-700">
                  <strong>Rubrik Jawaban:</strong> {uh.rubrikJawaban}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-[11pt] font-bold uppercase border-b border-black pb-1 mb-3">
            C. KUNCI JAWABAN & PEDOMAN PENSKORAN
          </h3>
          <table className="w-full border-collapse border border-black text-[10pt]">
            <thead>
              <tr className="bg-slate-100 border-b border-black font-bold text-center">
                <th className="p-1.5 border-r border-black w-1/2">Kunci Jawaban Pilihan Ganda</th>
                <th className="p-1.5 w-1/2">Pedoman Penskoran</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-r border-black align-top">
                  <div className="grid grid-cols-2 gap-1">
                    {data.bankEvaluasi.pilihanGanda.map((pg) => (
                      <div key={pg.no}>
                        Soal {pg.no}: <strong>{pg.kunci}</strong>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="p-2 align-top">{data.bankEvaluasi.pedomanPenskoran}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PAGE BREAK UNTUK HANDOUT SISWA */}
        <div className="page-break my-10 border-t-2 border-dashed border-slate-400 no-print text-center py-2 text-slate-500 font-sans text-xs">
          --- Batas Halaman (Handout Siswa 1 Halaman Pas) ---
        </div>

        {/* HANDOUT SISWA PREMIUM (RINGKAS & DUA SISI/1 HALAMAN PAS) */}
        <div className="mt-8 p-4 border-2 border-indigo-900 rounded bg-indigo-50/20">
          <div className="text-center border-b-2 border-indigo-900 pb-2 mb-3">
            <h2 className="text-[13pt] font-bold text-indigo-950 uppercase">{data.handoutSiswa.judul}</h2>
            <p className="text-[9.5pt] font-bold text-indigo-800">{data.handoutSiswa.subJudul} ({data.handoutSiswa.faseKelas})</p>
          </div>

          <h4 className="font-bold text-indigo-900 text-[10pt] uppercase border-b border-indigo-300 pb-1 mb-1">
            RANGKUMAN MATERI UTAMA
          </h4>
          <p className="text-[9.5pt] text-justify mb-3">{data.handoutSiswa.ringkasanMateri}</p>

          <h4 className="font-bold text-indigo-900 text-[10pt] uppercase border-b border-indigo-300 pb-1 mb-1">
            KOSAKATA KUNCI HARI INI
          </h4>
          <table className="w-full border-collapse border border-indigo-900 text-[9.5pt] mb-3">
            <thead>
              <tr className="bg-indigo-100 font-bold border-b border-indigo-900">
                <th className="p-1 border-r border-indigo-900 w-[30%]">Kosakata</th>
                <th className="p-1">Arti & Makna Kata</th>
              </tr>
            </thead>
            <tbody>
              {data.handoutSiswa.kosakataKunciHighlight.map((kh, idx) => (
                <tr key={idx} className="border-b border-indigo-200 last:border-b-0">
                  <td className="p-1 font-bold text-indigo-900 border-r border-indigo-900">{kh.kata}</td>
                  <td className="p-1">{kh.arti}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="font-bold text-indigo-900 text-[10pt] uppercase border-b border-indigo-300 pb-1 mb-1">
            TIPS BELAJAR EFEKTIF
          </h4>
          <ul className="list-disc list-inside text-[9.5pt] space-y-1 text-slate-800">
            {data.handoutSiswa.tipsBelajar.map((tb, idx) => (
              <li key={idx}>{tb}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
