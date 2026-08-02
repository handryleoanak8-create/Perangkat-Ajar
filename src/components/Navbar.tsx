import React from "react";
import {
  Sparkles,
  Printer,
  FileDown,
  RotateCcw,
  FileText,
  Sliders,
  BookOpen,
  HelpCircle,
  Loader2,
} from "lucide-react";

interface NavbarProps {
  viewMode: "document" | "form" | "handout" | "eval";
  setViewMode: (mode: "document" | "form" | "handout" | "eval") => void;
  onGenerateAI: () => void;
  isGenerating: boolean;
  onPrint: () => void;
  onExportWord: () => void;
  onResetPreset: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  viewMode,
  setViewMode,
  onGenerateAI,
  isGenerating,
  onPrint,
  onExportWord,
  onResetPreset,
}) => {
  return (
    <header className="no-print sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-3 gap-3">
          {/* Logo & App Title */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-blue-600 to-indigo-500 p-2.5 rounded-xl shadow-inner">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight text-white">
                  RPM Kurikulum Merdeka
                </h1>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 font-medium px-2 py-0.5 rounded-full border border-indigo-500/30">
                  Deep Learning AI
                </span>
              </div>
              <p className="text-xs text-slate-400">
                UPTD SD Negeri Tuabolok • Handry Samuel Leoanak, S.Pd.
              </p>
            </div>
          </div>

          {/* Center Tab Switches */}
          <div className="flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 self-start md:self-auto overflow-x-auto">
            <button
              onClick={() => setViewMode("document")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === "document"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Dokumen RPM
            </button>
            <button
              onClick={() => setViewMode("form")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === "form"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              Parameter Form
            </button>
            <button
              onClick={() => setViewMode("handout")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === "handout"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Handout Siswa
            </button>
            <button
              onClick={() => setViewMode("eval")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === "eval"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Bank Evaluasi
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={onResetPreset}
              title="Muat Ulang Data Tuabolok"
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Reset SD Tuabolok</span>
            </button>

            <button
              onClick={onGenerateAI}
              disabled={isGenerating}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold rounded-lg shadow-md transition disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  Menggenerasi...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  Generasi AI
                </>
              )}
            </button>

            <button
              onClick={onPrint}
              className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow transition"
            >
              <Printer className="w-3.5 h-3.5" />
              Cetak F4
            </button>

            <button
              onClick={onExportWord}
              className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow transition"
            >
              <FileDown className="w-3.5 h-3.5" />
              Unduh Word
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
