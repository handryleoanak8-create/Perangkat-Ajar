import React, { useState } from "react";
import { BankEvaluasiSection, RPMInputParams } from "../types";
import { HelpCircle, Eye, EyeOff, Printer, FileDown, CheckCircle2 } from "lucide-react";

interface EvaluationViewProps {
  evalData: BankEvaluasiSection;
  params: RPMInputParams;
  onPrint: () => void;
  onExportWord: () => void;
}

export const EvaluationView: React.FC<EvaluationViewProps> = ({
  evalData,
  params,
  onPrint,
  onExportWord,
}) => {
  const [showAnswerKey, setShowAnswerKey] = useState(true);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      {/* Banner Controls */}
      <div className="no-print bg-white p-4 rounded-xl shadow border border-slate-200 mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-indigo-600" />
          <span className="font-bold text-sm text-slate-800">
            Bank Evaluasi Pembelajaran (10 PG & 5 Uraian HOTS)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAnswerKey(!showAnswerKey)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg border border-slate-300 transition"
          >
            {showAnswerKey ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-slate-500" /> Sembunyikan Kunci
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-indigo-600" /> Tampilkan Kunci Jawaban
              </>
            )}
          </button>

          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow transition"
          >
            <Printer className="w-3.5 h-3.5" /> Cetak Soal
          </button>
          <button
            onClick={onExportWord}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow transition"
          >
            <FileDown className="w-3.5 h-3.5" /> Unduh Word
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 text-slate-900 font-serif">
        <div className="text-center border-b border-slate-300 pb-4 mb-6">
          <h1 className="text-xl font-bold uppercase tracking-wide text-slate-900">
            BANK EVALUASI & INSTRUMEN ASESMEN
          </h1>
          <p className="text-sm font-semibold text-slate-600">
            {params.namaSekolah} • {params.topikPembelajaran} ({params.faseKelas})
          </p>
        </div>

        {/* 10 Pilihan Ganda */}
        <div className="mb-8">
          <h2 className="text-base font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-4">
            A. SOAL PILIHAN GANDA (10 BUTIR SOAL OPSI A - E)
          </h2>
          <div className="space-y-4">
            {evalData.pilihanGanda.map((pg) => (
              <div
                key={pg.no}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200"
              >
                <div className="font-bold text-sm text-slate-900 flex items-start justify-between gap-2">
                  <span>
                    {pg.no}. {pg.soal}
                  </span>
                  {showAnswerKey && (
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-sans font-bold px-2 py-0.5 rounded border border-emerald-300 shrink-0">
                      Kunci: {pg.kunci}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs font-sans text-slate-700">
                  <div className={`p-1.5 rounded ${showAnswerKey && pg.kunci === "A" ? "bg-emerald-100 font-bold border border-emerald-300" : ""}`}>
                    A. {pg.opsi.A}
                  </div>
                  <div className={`p-1.5 rounded ${showAnswerKey && pg.kunci === "B" ? "bg-emerald-100 font-bold border border-emerald-300" : ""}`}>
                    B. {pg.opsi.B}
                  </div>
                  <div className={`p-1.5 rounded ${showAnswerKey && pg.kunci === "C" ? "bg-emerald-100 font-bold border border-emerald-300" : ""}`}>
                    C. {pg.opsi.C}
                  </div>
                  <div className={`p-1.5 rounded ${showAnswerKey && pg.kunci === "D" ? "bg-emerald-100 font-bold border border-emerald-300" : ""}`}>
                    D. {pg.opsi.D}
                  </div>
                  <div className={`p-1.5 rounded ${showAnswerKey && pg.kunci === "E" ? "bg-emerald-100 font-bold border border-emerald-300" : ""}`}>
                    E. {pg.opsi.E}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Uraian HOTS */}
        <div className="mb-8">
          <h2 className="text-base font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-4">
            B. SOAL URAIAN HOTS (5 BUTIR SOAL HIERARKI TINGGI)
          </h2>
          <div className="space-y-4">
            {evalData.uraianHots.map((uh) => (
              <div
                key={uh.no}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200"
              >
                <div className="font-bold text-sm text-slate-900">
                  {uh.no}. {uh.soal}
                </div>
                {showAnswerKey && (
                  <div className="mt-2.5 p-2.5 bg-indigo-50/60 border border-indigo-200 rounded text-xs font-sans text-indigo-950">
                    <span className="font-bold text-indigo-900">Rubrik Jawaban: </span>
                    {uh.rubrikJawaban}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Kunci & Penskoran */}
        {showAnswerKey && (
          <div>
            <h2 className="text-base font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-4">
              C. KUNCI JAWABAN & PEDOMAN PENSKORAN
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-sm mb-2 text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Kunci Pilihan Ganda
                </h3>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-sans">
                  {evalData.pilihanGanda.map((pg) => (
                    <div key={pg.no} className="bg-white p-1.5 rounded border border-slate-200">
                      Soal {pg.no}: <strong className="text-emerald-700">{pg.kunci}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-sm mb-2 text-slate-900">
                  Pedoman Penskoran
                </h3>
                <p className="text-xs font-sans text-slate-700 leading-relaxed bg-white p-3 rounded border border-slate-200">
                  {evalData.pedomanPenskoran}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
