import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // API endpoint for Gemini generation
  app.post("/api/generate", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "GEMINI_API_KEY environment variable is not configured.",
        });
      }

      const params = req.body;
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const prompt = `
Anda adalah seorang pakar pengembang kurikulum pendidikan Indonesia spesialis Kurikulum Merdeka dan Rencana Pembelajaran Mendalam (RPM) / Deep Learning (Mindful, Meaningful, Joyful Learning).

Tugas Anda: Buatkan Rencana Pembelajaran Mendalam (RPM) yang sangat lengkap, rinci, profesional, dan sesuai dengan standar Kurikulum Merdeka berdasarkan parameter berikut:

PARAMETER INPUT USER:
- Nama Sekolah: ${params.namaSekolah || "UPTD SD Negeri Tuabolok"}
- Mata Pelajaran: ${params.mataPelajaran || "Bahasa Indonesia"}
- Fase / Kelas: ${params.faseKelas || "Fase C / Kelas VI"}
- Semester: ${params.semester || "1 (Ganjil)"}
- Topik Pembelajaran: ${params.topikPembelajaran || "Musisi Indonesia yang Mendunia"}
- Alokasi Waktu: ${params.alokasiWaktu || "2 x 35 Menit"}
- Tujuan Pembelajaran: ${params.tujuanPembelajaran || "Peserta didik dapat menemukan informasi penting dan memahami kosakata baru dari teks informatif tentang musisi Indonesia yang mendunia."}
- Karakteristik Peserta Didik: ${params.karakteristikPesertaDidik || "Peserta didik memiliki keberagaman minat, latar belakang, serta kemampuan awal yang bervariasi (visual, auditori, kinestetik)."}
- Konteks Lingkungan Sekolah: ${params.konteksLingkunganSekolah || "Lingkungan sekolah pedesaan yang kaya budaya lokal dengan akses teknologi terbatas namun berdaya guna."}
- Nama Guru Penyusun: ${params.namaGuru || "Handry Samuel Leoanak, S. Pd"}
- NIP Guru: ${params.nipGuru || "NIP. 198708042025211031"}
- Nama Kepala Sekolah: ${params.namaKepalaSekolah || "Selfiana Adu, S.Pd."}
- NIP Kepala Sekolah: ${params.nipKepalaSekolah || "NIP. 196909181999032006"}
- Jumlah Murid: ${params.jumlahMurid || "28 Murid"}
- Jumlah Pertemuan: ${params.jumlahPertemuan || "1 Pertemuan"}
- Hari / Tanggal: ${params.hariTanggal || "Kamis, 27 Agustus 2026"}

Silakan hasilkan keluaran berupa JSON dengan struktur persis sebagai berikut:

{
  "identitas": {
    "pengetahuanAwal": "penjelasan pengetahuan awal murid...",
    "minat": "penjelasan minat...",
    "latarBelakang": "penjelasan latar belakang...",
    "kebutuhanDanKesiapanBelajar": "penjelasan kebutuhan & kesiapan belajar..."
  },
  "analisisMateri": {
    "materi": "rangkuman materi utama...",
    "konsepUtama": "konsep-konsep inti yang dipelajari...",
    "kosakataKunci": "kosakata atau istilah kunci beserta artinya..."
  },
  "desainPembelajaran": {
    "lintasDisiplin": "keterkaitan dengan disiplin ilmu lain (misal Seni Musik, IPS, PKn)...",
    "pemanfaatanDigital": "penggunaan teknologi/media digital...",
    "dimensiProfilLulusan": ["Dimensi 1", "Dimensi 2", "Dimensi 3"],
    "indikatorKetercapaian": ["Indikator 1", "Indikator 2", "Indikator 3"],
    "praktikPedagogis": "Deskripsi Deep Learning (Mindful, Meaningful, Joyful Learning)...",
    "kemitraanPembelajaran": "kemitraan dengan orang tua/komunitas/rekan sejawat...",
    "lingkunganPembelajaran": "penataan kelas & fisik/psikologis...",
    "saranaPrasarana": "alat, bahan, teks, instrumen..."
  },
  "pengalamanBelajar": {
    "pendahuluan": [
      {"waktu": "10 Menit", "aktivitasGuru": "...", "aktivitasMurid": "..."}
    ],
    "kegiatanInti": [
      {
        "tahap": "Memahami",
        "waktu": "20 Menit",
        "aktivitasGuru": "Guru memberikan stimulasi teks/audio...",
        "aktivitasMurid": "Murid membaca dan mengidentifikasi informasi..."
      },
      {
        "tahap": "Mengaplikasikan",
        "waktu": "20 Menit",
        "aktivitasGuru": "Guru memandu diskusi kelompok LKPD...",
        "aktivitasMurid": "Murid berdiskusi dan mengisi LKPD..."
      },
      {
        "tahap": "Merefleksikan",
        "waktu": "10 Menit",
        "aktivitasGuru": "Guru memfasilitasi refleksi bersama...",
        "aktivitasMurid": "Murid menyimpulkan dan menyampaikan pendapat..."
      }
    ],
    "penutup": [
      {"waktu": "10 Menit", "aktivitasGuru": "...", "aktivitasMurid": "..."}
    ]
  },
  "asesmenPembelajaran": {
    "ringkasan": [
      {"jenis": "Asesmen Proses", "deskripsi": "Observasi diskusi kelompok (Rubrik Asesmen Proses)."},
      {"jenis": "Asesmen Kinerja", "deskripsi": "Penilaian hasil LKPD dan kalimat/tulisan pada kegiatan inti."},
      {"jenis": "Asesmen Akhir", "deskripsi": "1 soal latihan mandiri pada kegiatan penutup."}
    ],
    "instrumenFormatif": [
      {
        "tahap": "Asesmen Awal",
        "instrumen": "Kuis diagnostik (2 soal) + Rubrik Penilaian Butir Kritis + Interpretasi Skor",
        "bentuk": "Tertulis/lisan singkat, di awal pembelajaran",
        "tujuanIndikator": "Mengukur kesiapan awal peserta didik terhadap capaian..."
      },
      {
        "tahap": "Asesmen Proses",
        "instrumen": "Rubrik Asesmen Proses (observasi kinerja dan sikap)",
        "bentuk": "Observasi langsung selama Kegiatan Inti",
        "tujuanIndikator": "Mengukur proses pencapaian indikator ketercapaian..."
      },
      {
        "tahap": "Asesmen Akhir",
        "instrumen": "Kriteria Penilaian LKPD (Instrumen Asesmen Kinerja) + Rubrik Asesmen Akhir",
        "bentuk": "Produk tertulis (LKPD) dan latihan mandiri pada Kegiatan Penutup",
        "tujuanIndikator": "Mengukur ketercapaian tujuan pembelajaran secara menyeluruh..."
      }
    ],
    "rubrikProses": [
      {
        "kriteria": "Ketepatan hasil kerja",
        "sangatBaik": "Hasil kerja tepat dan rapi",
        "baik": "Hasil kerja cukup tepat",
        "cukup": "Hasil kerja kurang tepat",
        "perluBimbingan": "Belum mampu menyelesaikan hasil kerja"
      },
      {
        "kriteria": "Pemahaman konsep",
        "sangatBaik": "Memahami konsep dengan baik",
        "baik": "Cukup memahami dengan sedikit bimbingan",
        "cukup": "Masih memerlukan bimbingan",
        "perluBimbingan": "Belum memahami konsep"
      },
      {
        "kriteria": "Kerja sama kelompok",
        "sangatBaik": "Aktif berkontribusi dan menghargai pendapat teman",
        "baik": "Cukup aktif dalam diskusi",
        "cukup": "Kurang aktif dalam diskusi",
        "perluBimbingan": "Belum menunjukkan keterlibatan"
      }
    ],
    "kriteriaLKPD": [
      {"no": 1, "kriteria": "Ketepatan menemukan informasi penting dalam teks", "skor": 40},
      {"no": 2, "kriteria": "Ketepatan menjelaskan arti kosakata baru", "skor": 30},
      {"no": 3, "kriteria": "Kejelasan menyampaikan pendapat", "skor": 20},
      {"no": 4, "kriteria": "Keaktifan dalam diskusi", "skor": 10}
    ],
    "rubrikAkhir": [
      {
        "kriteria": "Ketepatan jawaban",
        "sangatBaik": "Seluruh jawaban benar",
        "baik": "Sebagian besar jawaban benar",
        "cukup": "Sebagian kecil jawaban benar",
        "perluBimbingan": "Belum ada jawaban yang benar"
      },
      {
        "kriteria": "Kejelasan alasan / proses berpikir",
        "sangatBaik": "Alasan/proses dijelaskan lengkap dan runtut",
        "baik": "Alasan/proses dijelaskan cukup jelas",
        "cukup": "Alasan/proses kurang lengkap",
        "perluBimbingan": "Belum mampu menjelaskan alasan/proses"
      }
    ]
  },
  "remedialPengayaan": {
    "remedial": "Membaca ulang teks bersama guru dalam kelompok kecil, dibantu menandai kata-kata sulit dan menjelaskannya satu per satu.",
    "pengayaan": "Peserta didik yang sudah mahir mencari informasi tambahan tentang musisi/seniman Indonesia lain yang berprestasi di dunia dari sumber lain."
  },
  "daftarPustaka": [
    "1. Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. Buku Siswa Bahasa Indonesia Kelas VI. Jakarta: Pusat Perbukuan.",
    "2. Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. Buku Guru Bahasa Indonesia Kelas VI. Jakarta: Pusat Perbukuan."
  ],
  "lampiran": {
    "lkpdMandiri": {
      "judul": "LKPD Mandiri: Menemukan Informasi Penting & Kosakata Baru",
      "petunjuk": "Bacalah teks informatif yang tersedia, kemudian jawablah pertanyaan-pertanyaan berikut dengan teliti.",
      "soal": [
        "Temukan 3 informasi penting dalam teks!",
        "Tuliskan arti kosakata baru yang kalian temukan!"
      ]
    },
    "lkpdKelompok": {
      "judul": "LKPD Kelompok: Analisis Musisi Indonesia yang Mendunia",
      "petunjuk": "Diskusikan bersama kelompokmu untuk mengidentifikasi karya, prestasi, dan nilai keteladanan tokoh musisi.",
      "soal": [
        "Siapakah tokoh musisi yang dibahas dan apa prestasi utamanya?",
        "Sebutkan nilai positif yang dapat kita contoh dari perjuangan tokoh tersebut!"
      ]
    },
    "bahanAjarTerperinci": "Uraian materi lengkap mengenai musisi Indonesia yang mendunia (contoh: Joey Alexander, Anggun C. Sasmi, Addie MS) beserta penjelasan kosakata baru...",
    "mediaPembelajaran": "Teks bacaan informatif bergambar, poster infografis musisi, dan rekaman audio/video musik pendek.",
    "rubrikKinerja": "Rubrik detail observasi kinerja individu dan kelompok.",
    "kktp": "Kriteria Ketercapaian Tujuan Pembelajaran (KKTP) interval nilai 0-100.",
    "refleksiGuruDanSiswa": {
      "refleksiGuru": ["Apakah seluruh murid aktif?", "Apakah alokasi waktu mencukupi?"],
      "refleksiSiswa": ["Apa hal baru yang aku pelajari hari ini?", "Bagian mana yang paling menarik bagi saya?"]
    }
  },
  "bankEvaluasi": {
    "pilihanGanda": [
      {
        "no": 1,
        "soal": "Apa yang dimaksud dengan teks informatif?",
        "opsi": {
          "A": "Teks yang berisi cerita rekaan belaka",
          "B": "Teks yang menyajikan fakta dan informasi nyata",
          "C": "Teks yang memuat puisi indah",
          "D": "Teks naskah drama komedi",
          "E": "Teks panduan membuat makanan"
        },
        "kunci": "B"
      },
      {
        "no": 2,
        "soal": "Musisi muda Indonesia yang pernah masuk nominasi Grammy Awards dalam bidang musik piano jazz adalah...",
        "opsi": {
          "A": "Iwan Fals",
          "B": "Joey Alexander",
          "C": "Chrisye",
          "D": "Gombloh",
          "E": "Ismail Marzuki"
        },
        "kunci": "B"
      },
      {
        "no": 3,
        "soal": "Kata 'mendunia' dalam konteks judul memiliki makna...",
        "opsi": {
          "A": "Dikenal dan diakui secara internasional",
          "B": "Hanya terkenal di satu desa",
          "C": "Suka berkeliling dunia tanpa tujuan",
          "D": "Sangat tertutup dari orang lain",
          "E": "Terkenal di sekolah saja"
        },
        "kunci": "A"
      },
      {
        "no": 4,
        "soal": "Sikap positif yang dapat diteladani dari seorang musisi yang berprestasi adalah...",
        "opsi": {
          "A": "Cepat merasa puas",
          "B": "Pantang menyerah dan tekun berlatih",
          "C": "Suka menyombongkan diri",
          "D": "Malas melatih kemampuan",
          "E": "Mencela karya orang lain"
        },
        "kunci": "B"
      },
      {
        "no": 5,
        "soal": "Manakah yang merupakan langkah awal menemukan informasi penting dalam teks?",
        "opsi": {
          "A": "Membaca teks secara sekilas lalu mengabaikannya",
          "B": "Membaca teks dengan cermat dan mencatat poin utama",
          "C": "Langsung menyimpulkan tanpa membaca",
          "D": "Menanyakan jawaban pada teman tanpa membaca",
          "E": "Menulis ulang seluruh teks tanpa berpikir"
        },
        "kunci": "B"
      },
      {
        "no": 6,
        "soal": "Grup musik angklung asal Indonesia yang sering tampil di mancanegara adalah...",
        "opsi": {
          "A": "Saung Angklung Udjo",
          "B": "Orkes Gambus",
          "C": "Keroncong Asli",
          "D": "Band Rock",
          "E": "Srimulat"
        },
        "kunci": "A"
      },
      {
        "no": 7,
        "soal": "Sinonim dari kata 'prestasi' adalah...",
        "opsi": {
          "A": "Kegagalan",
          "B": "Capaian / Hasil luar biasa",
          "C": "Kerugian",
          "D": "Kelemahan",
          "E": "Kemunduran"
        },
        "kunci": "B"
      },
      {
        "no": 8,
        "soal": "Dalam membaca teks informatif, menemukan 'kosakata baru' bertujuan untuk...",
        "opsi": {
          "A": "Memperluas wawasan dan perbendaharaan kata",
          "B": "Menambah beban hafalan",
          "C": "Memperlama waktu belajar",
          "D": "Membuat bingung pembaca",
          "E": "Mengganti bahasa Indonesia dengan bahasa lain"
        },
        "kunci": "A"
      },
      {
        "no": 9,
        "soal": "Gamelan Jawa dan Bali telah diakui oleh UNESCO sebagai...",
        "opsi": {
          "A": "Warisan Budaya Takbenda Dunia",
          "B": "Barang tiruan",
          "C": "Mainan anak-anak",
          "D": "Properti film belaka",
          "E": "Cenderamata biasa"
        },
        "kunci": "A"
      },
      {
        "no": 10,
        "soal": "Gaya belajar yang mengandalkan pendengaran untuk memahami materi lagu atau musik disebut...",
        "opsi": {
          "A": "Kinestetik",
          "B": "Auditori",
          "C": "Visual",
          "D": "Verbal",
          "E": "Spasial"
        },
        "kunci": "B"
      }
    ],
    "uraianHots": [
      {
        "no": 1,
        "soal": "Mengapa penting bagi generasi muda Indonesia untuk mengenal para musisi Indonesia yang berhasil mendunia? Jelaskan dampaknya terhadap rasa cinta tanah air!",
        "rubrikJawaban": "Mengenal musisi mendunia dapat menumbuhkan rasa bangga, rasa cinta tanah air, memotivasi peserta didik untuk mengembangkan bakat, serta menghargai kebudayaan nasional yang mampu bersaing di kancah internasional."
      },
      {
        "no": 2,
        "soal": "Analisislah hubungan antara kebiasaan tekun berlatih dengan keberhasilan seorang musisi di tingkat dunia berdasarkan teks informatif yang telah kamu baca!",
        "rubrikJawaban": "Keberhasilan di kancah internasional memerlukan kedisiplinan tinggi, kerja keras, pantang menyerah saat menghadapi kegagalan, dan ketekunan berlatih secara konsisten."
      },
      {
        "no": 3,
        "soal": "Bagaimana cara kamu mengidentifikasi arti kosakata baru dalam teks informatif apabila kamu tidak membawa kamus di dalam kelas?",
        "rubrikJawaban": "Dengan menganalisis konteks kalimat di sekitar kata tersebut, mencari kata kunci sejajar, atau menanyakan kepada guru/teman dalam kelompok diskusi."
      },
      {
        "no": 4,
        "soal": "Buatlah sebuah paragraf singkat (3-4 kalimat) yang merangkum inspirasi yang kamu dapatkan dari sosok musisi Indonesia yang mendunia!",
        "rubrikJawaban": "Paragraf memuat nama musisi, karya/prestasinya, serta kalimat motivasi pribadi yang logis dan runtut."
      },
      {
        "no": 5,
        "soal": "Jika kelompokmu diminta mempromosikan salah satu alat musik tradisional Indonesia ke tingkat internasional, ide kreatif apa yang akan kalian usulkan?",
        "rubrikJawaban": "Menggabungkan alat musik tradisional dengan genre musik modern, membuat konten infografis/video digital, atau berkolaborasi dengan komunitas seni."
      }
    ],
    "pedomanPenskoran": "Skor PG: 10 soal x 5 = 50. Skor Uraian: 5 soal x 10 = 50. Skor Total Max = 100."
  },
  "handoutSiswa": {
    "judul": "HANDOUT SISWA: MUSISI INDONESIA YANG MENDUNIA",
    "faseKelas": "${params.faseKelas || "Fase C / Kelas VI"}",
    "subJudul": "Mengenal Tokoh & Budaya Bangsa Melalui Teks Informatif",
    "ringkasanMateri": "Indonesia memiliki banyak talenta musik luar biasa yang berhasil memukau dunia internasional, mulai dari Joey Alexander (pianis jazz termuda nominasi Grammy), Anggun C. Sasmi, hingga kebudayaan Gamelan dan Saung Angklung Udjo. Melalui teks informatif, kita dapat mempelajari rekam jejak perjuangan, ketekunan, dan nilai-nilai inspiratif mereka.",
    "kosakataKunciHighlight": [
      {"kata": "Informatif", "arti": "Bersifat memberi informasi atau pengetahuan fakta."},
      {"kata": "Virtuoso", "arti": "Orang yang sangat ahli dalam memainkan instrumen musik."},
      {"kata": "Mendunia", "arti": "Terkenal dan diakui secara internasional."},
      {"kata": "Prestasi", "arti": "Hasil yang telah dicapai dari yang telah dilakukan."}
    ],
    "tipsBelajar": [
      "1. Bacalah teks dengan cermat dan garis bawahi kata-kata sulit.",
      "2. Temukan gagasan pokok pada setiap paragraf.",
      "3. Diskusikan bersama teman kelompokmu dan buatlah rangkuman."
    ]
  }
}

Pastikan respons Anda MURNI JSON tanpa teks pembuka atau penutup.
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const rawText = response.text || "{}";
      const parsedData = JSON.parse(rawText);
      return res.json({ success: true, data: parsedData });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      return res.status(500).json({
        error: "Gagal menggenerasi RPM dengan Gemini API: " + err.message,
      });
    }
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
