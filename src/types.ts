export interface RPMInputParams {
  namaSekolah: string;
  mataPelajaran: string;
  faseKelas: string;
  semester: string;
  topikPembelajaran: string;
  alokasiWaktu: string;
  tujuanPembelajaran: string;
  karakteristikPesertaDidik: string;
  konteksLingkunganSekolah: string;
  namaGuru: string;
  nipGuru: string;
  namaKepalaSekolah: string;
  nipKepalaSekolah: string;
  jumlahMurid: string;
  jumlahPertemuan: string;
  hariTanggal: string;
}

export interface IdentitasSection {
  pengetahuanAwal: string;
  minat: string;
  latarBelakang: string;
  kebutuhanDanKesiapanBelajar: string;
}

export interface AnalisisMateriSection {
  materi: string;
  konsepUtama: string;
  kosakataKunci: string;
}

export interface DesainPembelajaranSection {
  lintasDisiplin: string;
  pemanfaatanDigital: string;
  dimensiProfilLulusan: string[];
  indikatorKetercapaian: string[];
  praktikPedagogis: string;
  kemitraanPembelajaran: string;
  lingkunganPembelajaran: string;
  saranaPrasarana: string;
}

export interface ActivityStep {
  waktu: string;
  aktivitasGuru: string;
  aktivitasMurid: string;
}

export interface CoreActivityStep {
  tahap: "Memahami" | "Mengaplikasikan" | "Merefleksikan" | string;
  waktu: string;
  aktivitasGuru: string;
  aktivitasMurid: string;
}

export interface PengalamanBelajarSection {
  pendahuluan: ActivityStep[];
  kegiatanInti: CoreActivityStep[];
  penutup: ActivityStep[];
}

export interface AsesmenRingkasan {
  jenis: string;
  deskripsi: string;
}

export interface InstrumenFormatif {
  tahap: string;
  instrumen: string;
  bentuk: string;
  tujuanIndikator: string;
}

export interface RubrikProses {
  kriteria: string;
  sangatBaik: string;
  baik: string;
  cukup: string;
  perluBimbingan: string;
}

export interface KriteriaLKPD {
  no: number;
  kriteria: string;
  skor: number;
}

export interface RubrikAkhir {
  kriteria: string;
  sangatBaik: string;
  baik: string;
  cukup: string;
  perluBimbingan: string;
}

export interface AsesmenPembelajaranSection {
  ringkasan: AsesmenRingkasan[];
  instrumenFormatif: InstrumenFormatif[];
  rubrikProses: RubrikProses[];
  kriteriaLKPD: KriteriaLKPD[];
  rubrikAkhir: RubrikAkhir[];
}

export interface RemedialPengayaanSection {
  remedial: string;
  pengayaan: string;
}

export interface RefleksiDetail {
  refleksiGuru: string[];
  refleksiSiswa: string[];
}

export interface LKPDSection {
  judul: string;
  petunjuk: string;
  soal: string[];
}

export interface LampiranSection {
  lkpdMandiri: LKPDSection;
  lkpdKelompok: LKPDSection;
  bahanAjarTerperinci: string;
  mediaPembelajaran: string;
  rubrikKinerja: string;
  kktp: string;
  refleksiGuruDanSiswa: RefleksiDetail;
}

export interface PilihanGandaSoal {
  no: number;
  soal: string;
  opsi: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  kunci: string;
}

export interface UraianHotsSoal {
  no: number;
  soal: string;
  rubrikJawaban: string;
}

export interface BankEvaluasiSection {
  pilihanGanda: PilihanGandaSoal[];
  uraianHots: UraianHotsSoal[];
  pedomanPenskoran: string;
}

export interface KosakataHighlight {
  kata: string;
  arti: string;
}

export interface HandoutSiswaSection {
  judul: string;
  faseKelas: string;
  subJudul: string;
  ringkasanMateri: string;
  kosakataKunciHighlight: KosakataHighlight[];
  tipsBelajar: string[];
}

export interface RPMGeneratedData {
  identitas: IdentitasSection;
  analisisMateri: AnalisisMateriSection;
  desainPembelajaran: DesainPembelajaranSection;
  pengalamanBelajar: PengalamanBelajarSection;
  asesmenPembelajaran: AsesmenPembelajaranSection;
  remedialPengayaan: RemedialPengayaanSection;
  daftarPustaka: string[];
  lampiran: LampiranSection;
  bankEvaluasi: BankEvaluasiSection;
  handoutSiswa: HandoutSiswaSection;
}
