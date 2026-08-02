import React, { useState } from "react";
import { RPMInputParams, RPMGeneratedData } from "./types";
import { defaultRPMInput, defaultRPMGeneratedData } from "./data/defaultPreset";
import { Navbar } from "./components/Navbar";
import { InputForm } from "./components/InputForm";
import { DocumentView } from "./components/DocumentView";
import { HandoutView } from "./components/HandoutView";
import { EvaluationView } from "./components/EvaluationView";
import { exportToWordDoc } from "./utils/docxExport";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function App() {
  const [params, setParams] = useState<RPMInputParams>(defaultRPMInput);
  const [data, setData] = useState<RPMGeneratedData>(defaultRPMGeneratedData);
  const [viewMode, setViewMode] = useState<"document" | "form" | "handout" | "eval">("document");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      const resData = await response.json();
      if (!response.ok || !resData.success) {
        throw new Error(resData.error || "Gagal menggenerasi RPM dengan Gemini AI.");
      }

      setData(resData.data);
      setViewMode("document");
      showToast("RPM Kurikulum Merdeka berhasil digenerasi dengan Gemini AI!");
    } catch (err: any) {
      console.error("Generasi gagal:", err);
      showToast(err.message || "Terjadi kesalahan saat menggenerasi dokumen.", "error");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleResetPreset = () => {
    setParams(defaultRPMInput);
    setData(defaultRPMGeneratedData);
    showToast("Data preset UPTD SD Negeri Tuabolok dimuat ulang!");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportWord = () => {
    exportToWordDoc(params, data);
    showToast("File Microsoft Word (.doc) berhasil diunduh!");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900">
      {/* Toast Banner */}
      {toast && (
        <div className={`no-print fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-2xl text-sm font-semibold text-white transition-all ${
          toast.type === "success" ? "bg-emerald-600" : "bg-rose-600"
        }`}>
          {toast.type === "success" ? (
            <CheckCircle className="w-5 h-5 text-emerald-200" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-200" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Loading Overlay */}
      {isGenerating && (
        <div className="no-print fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex flex-col items-center justify-center text-white px-4">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl flex flex-col items-center max-w-md text-center">
            <Loader2 className="w-12 h-12 animate-spin text-indigo-400 mb-4" />
            <h3 className="text-lg font-bold">Menggenerasi Rencana Pembelajaran Mendalam...</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Model Gemini AI sedang menyusun analisis materi, pengalaman belajar (Memahami, Mengaplikasikan, Merefleksikan), instrumen asesmen, lampiran LKPD, bank evaluasi, dan handout siswa.
            </p>
          </div>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        onGenerateAI={handleGenerateAI}
        isGenerating={isGenerating}
        onPrint={handlePrint}
        onExportWord={handleExportWord}
        onResetPreset={handleResetPreset}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {viewMode === "document" && (
          <DocumentView
            params={params}
            data={data}
            setData={setData}
            onPrint={handlePrint}
            onExportWord={handleExportWord}
          />
        )}

        {viewMode === "form" && (
          <InputForm
            params={params}
            setParams={setParams}
            onGenerateAI={handleGenerateAI}
            isGenerating={isGenerating}
            onResetPreset={handleResetPreset}
            onViewDocument={() => setViewMode("document")}
          />
        )}

        {viewMode === "handout" && (
          <HandoutView
            handout={data.handoutSiswa}
            params={params}
            onPrint={handlePrint}
            onExportWord={handleExportWord}
          />
        )}

        {viewMode === "eval" && (
          <EvaluationView
            evalData={data.bankEvaluasi}
            params={params}
            onPrint={handlePrint}
            onExportWord={handleExportWord}
          />
        )}
      </main>

      {/* Printable CSS Helper Rules */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            font-size: 10pt !important;
          }
          .rpm-paper-document {
            max-width: 100% !important;
            width: 100% !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .page-break {
            page-break-before: always !important;
            clear: both !important;
          }
          @page {
            size: 215mm 330mm; /* F4 / Folio Size */
            margin: 15mm 15mm 15mm 15mm;
          }
        }
      `}</style>
    </div>
  );
}
