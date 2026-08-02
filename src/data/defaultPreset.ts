import { RPMInputParams, RPMGeneratedData } from "../types";

export const defaultRPMInput: RPMInputParams = {
  namaSekolah: "UPTD SD Negeri Tuabolok",
  mataPelajaran: "Bahasa Indonesia",
  faseKelas: "Fase C / Kelas VI (Enam)",
  semester: "1 (Ganjil)",
  topikPembelajaran: "Musisi Indonesia yang Mendunia",
  alokasiWaktu: "2 x 35 Menit",
  tujuanPembelajaran:
    "Peserta didik dapat menemukan informasi penting dan memahami kosakata baru dari teks informatif tentang musisi Indonesia yang mendunia.",
  karakteristikPesertaDidik:
    "Peserta didik beragam minat dan bakat, dominan gaya belajar visual-auditori, menyukai aktivitas literasi berbasis media dan diskusi kelompok.",
  konteksLingkunganSekolah:
    "Lingkungan pedesaan yang kaya akan kearifan lokal seni musik, memiliki ruang kelas kondusif, media cetak, serta perangkat digital sederhana.",
  namaGuru: "Handry Samuel Leoanak, S. Pd",
  nipGuru: "NIP. 198708042025211031",
  namaKepalaSekolah: "Selfiana Adu, S.Pd.",
  nipKepalaSekolah: "NIP. 196909181999032006",
  jumlahMurid: "28 Murid",
  jumlahPertemuan: "1 Pertemuan",
  hariTanggal: "Kamis, 27 Agustus 2026",
};

export const defaultRPMGeneratedData: RPMGeneratedData = {
  identitas: {
    pengetahuanAwal:
      "Peserta didik telah memahami konsep dasar teks bacaan dan mampu mengidentifikasi ide pokok serta kalimat utama secara sederhana.",
    minat:
      "Memiliki minat yang tinggi terhadap bidang seni, musik, cerita inspiratif tokoh, serta aktivitas pembelajaran interaktif berbasis visual.",
    latarBelakang:
      "Berasal dari latar belakang keluarga di Tuabolok yang menghargai nilai-nilai kebersamaan dan budaya lokal.",
    kebutuhanDanKesiapanBelajar:
      "Sebagian peserta didik sudah siap membaca mandiri, sebagian memerlukan bimbingan penjelas kata-kata sulit (pendampingan kelompok kecil).",
  },
  analisisMateri: {
    materi:
      "Teks informatif tentang rekam jejak dan kebanggaan musisi Indonesia yang berhasil meraih prestasi hingga tingkat internasional.",
    konsepUtama:
      "Struktur teks informatif, teknik menemukan informasi penting, serta pemaknaan kosakata baru sesuai kontekstual bacaan.",
    kosakataKunci:
      "Informatif (fakta nyata), Virtuoso (ahli musik), Mendunia (dikenal internasional), Prestasi (capaian kebanggaan), Konser (pertunjukan musik).",
  },
  desainPembelajaran: {
    lintasDisiplin:
      "Seni Musik (apresiasi nada & genre), IPS (geografi kancah internasional), dan PPKn (semangat nasionalisme & Profil Pelajar Pancasila).",
    pemanfaatanDigital:
      "Penggunaan slide presentasi visual, audio pemutar musik/lagu musisi Indonesia, serta modul digital sederhana.",
    dimensiProfilLulusan: [
      "Bernalar Kritis (mengidentifikasi fakta & menganalisis kosakata)",
      "Gotong Royong (berdiskusi dalam kelompok kerja LKPD)",
      "Kreatif (menyampaikan gagasan & apresiasi karya)",
    ],
    indikatorKetercapaian: [
      "Menemukan sekurang-kurangnya 3 informasi penting dari teks informatif.",
      "Menjelaskan arti 4 kosakata baru sesuai konteks bacaan dengan tepat.",
      "Menunjukkan sikap aktif dan saling menghargai saat diskusi kelompok.",
    ],
    praktikPedagogis:
      "Deep Learning (Mindful Learning melalui kesadaran menyimak, Meaningful Learning melalui keterkaitan tokoh kebanggaan, dan Joyful Learning melalui apresiasi audio-visual).",
    kemitraanPembelajaran:
      "Kolaborasi dengan rekan sejawat guru seni budaya serta pelibatan orang tua untuk memotivasi minat baca anak di rumah.",
    lingkunganPembelajaran:
      "Suasana kelas yang inklusif, kondusif, disusun meja berkelompok, dan kaya dengan sudut pajangan karya siswa.",
    saranaPrasarana:
      "Buku Siswa Bahasa Indonesia Kelas VI, lembar teks informatif bergambar, proyektor/audio speaker, LKPD mandiri & kelompok.",
  },
  pengalamanBelajar: {
    pendahuluan: [
      {
        waktu: "10 Menit",
        aktivitasGuru:
          "Guru membuka pelajaran dengan salam, berdoa bersama, memeriksa kehadiran, melakukan apersepsi memutar potongan lagu musisi Indonesia, dan menyampaikan tujuan pembelajaran.",
        aktivitasMurid:
          "Murid merespons salam, berdoa, mendengarkan apersepsi lagu dengan antusias, dan menyimak tujuan pembelajaran.",
      },
    ],
    kegiatanInti: [
      {
        tahap: "Memahami (Mindful & Meaningful)",
        waktu: "20 Menit",
        aktivitasGuru:
          "Guru membagikan teks informatif 'Musisi Indonesia yang Mendunia', memberikan pemantik pertanyaan, serta membimbing siswa menandai kosakata baru.",
        aktivitasMurid:
          "Murid membaca teks secara cermat, menemukan informasi penting, dan mengidentifikasi kata-kata baru yang belum dipahami.",
      },
      {
        tahap: "Mengaplikasikan (Meaningful & Joyful)",
        waktu: "20 Menit",
        aktivitasGuru:
          "Guru membentuk kelompok kecil (4-5 murid), membagikan LKPD Kelompok, dan mendampingi kelompok yang membutuhkan bimbingan khusus.",
        aktivitasMurid:
          "Murid berdiskusi kelompok menyelesaikan LKPD, mencocokkan arti kosakata, dan mempresentasikan hasil diskusi di depan kelas.",
      },
      {
        tahap: "Merefleksikan (Joyful & Deep Learning)",
        waktu: "10 Menit",
        aktivitasGuru:
          "Guru memberikan umpan balik positif terhadap presentasi, mengklarifikasi konsep yang keliru, serta memandu refleksi pemahaman.",
        aktivitasMurid:
          "Murid mendengarkan umpan balik guru, menyampaikan poin refleksi diri, dan mencatat kesimpulan materi.",
      },
    ],
    penutup: [
      {
        waktu: "10 Menit",
        aktivitasGuru:
          "Guru memandu penyimpulan materi, memberikan 1 soal latihan mandiri (asesmen akhir), menyampaikan pesan moral, dan menutup pembelajaran dengan doa.",
        aktivitasMurid:
          "Murid menyimpulkan materi bersama guru, mengerjakan latihan mandiri secara individu, dan berdoa bersama.",
      },
    ],
  },
  asesmenPembelajaran: {
    ringkasan: [
      {
        jenis: "Asesmen Proses",
        deskripsi: "Observasi diskusi kelompok (Rubrik Asesmen Proses).",
      },
      {
        jenis: "Asesmen Kinerja",
        deskripsi:
          "Penilaian hasil LKPD dan kalimat/tulisan pada kegiatan inti.",
      },
      {
        jenis: "Asesmen Akhir",
        deskripsi: "1 soal latihan mandiri pada kegiatan penutup.",
      },
    ],
    instrumenFormatif: [
      {
        tahap: "Asesmen Awal",
        instrumen:
          "Kuis diagnostik (2 soal) + Rubrik Penilaian Butir Kritis + Interpretasi Skor",
        bentuk: "Tertulis/lisan singkat, di awal pembelajaran",
        tujuanIndikator:
          "Mengukur kesiapan awal peserta didik terhadap capaian: Peserta didik dapat menemukan informasi penting dan memahami kosakata baru dari teks informatif tentang musisi Indonesia yang mendunia.",
      },
      {
        tahap: "Asesmen Proses",
        instrumen:
          "Rubrik Asesmen Proses (observasi kinerja dan sikap)",
        bentuk: "Observasi langsung selama Kegiatan Inti",
        tujuanIndikator:
          "Mengukur proses pencapaian indikator ketercapaian (kerja sama, keaktifan, dan pemahaman konsep selama kegiatan berlangsung).",
      },
      {
        tahap: "Asesmen Akhir",
        instrumen:
          "Kriteria Penilaian LKPD (Instrumen Asesmen Kinerja) + Rubrik Asesmen Akhir (Latihan Mandiri)",
        bentuk:
          "Produk tertulis (LKPD) dan latihan mandiri pada Kegiatan Penutup",
        tujuanIndikator:
          "Mengukur ketercapaian tujuan pembelajaran secara menyeluruh: Peserta didik dapat menemukan informasi penting dan memahami kosakata baru dari teks informatif tentang musisi Indonesia yang mendunia.",
      },
    ],
    rubrikProses: [
      {
        kriteria: "Ketepatan hasil kerja",
        sangatBaik: "Hasil kerja tepat dan rapi",
        baik: "Hasil kerja cukup tepat",
        cukup: "Hasil kerja kurang tepat",
        perluBimbingan: "Belum mampu menyelesaikan hasil kerja",
      },
      {
        kriteria: "Pemahaman konsep",
        sangatBaik: "Memahami konsep dengan baik",
        baik: "Cukup memahami dengan sedikit bimbingan",
        cukup: "Masih memerlukan bimbingan",
        perluBimbingan: "Belum memahami konsep",
      },
      {
        kriteria: "Kerja sama kelompok",
        sangatBaik:
          "Aktif berkontribusi dan menghargai pendapat teman",
        baik: "Cukup aktif dalam diskusi",
        cukup: "Kurang aktif dalam diskusi",
        perluBimbingan: "Belum menunjukkan keterlibatan",
      },
    ],
    kriteriaLKPD: [
      {
        no: 1,
        kriteria: "Ketepatan menemukan informasi penting dalam teks",
        skor: 40,
      },
      {
        no: 2,
        kriteria: "Ketepatan menjelaskan arti kosakata baru",
        skor: 30,
      },
      {
        no: 3,
        kriteria: "Kejelasan menyampaikan pendapat",
        skor: 20,
      },
      {
        no: 4,
        kriteria: "Keaktifan dalam diskusi",
        skor: 10,
      },
    ],
    rubrikAkhir: [
      {
        kriteria: "Ketepatan jawaban",
        sangatBaik: "Seluruh jawaban benar",
        baik: "Sebagian besar jawaban benar",
        cukup: "Sebagian kecil jawaban benar",
        perluBimbingan: "Belum ada jawaban yang benar",
      },
      {
        kriteria: "Kejelasan alasan / proses berpikir",
        sangatBaik:
          "Alasan/proses dijelaskan lengkap dan runtut",
        baik: "Alasan/proses dijelaskan cukup jelas",
        cukup: "Alasan/proses kurang lengkap",
        perluBimbingan: "Belum mampu menjelaskan alasan/proses",
      },
    ],
  },
  remedialPengayaan: {
    remedial:
      "Membaca ulang teks bersama guru dalam kelompok kecil, dibantu menandai kata-kata sulit dan menjelaskannya satu per satu.",
    pengayaan:
      "Peserta didik yang sudah mahir mencari informasi tambahan tentang musisi/seniman Indonesia lain yang berprestasi di dunia dari sumber lain.",
  },
  daftarPustaka: [
    "1. Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. Buku Siswa Bahasa Indonesia Kelas VI. Jakarta: Pusat Perbukuan.",
    "2. Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. Buku Guru Bahasa Indonesia Kelas VI. Jakarta: Pusat Perbukuan.",
  ],
  lampiran: {
    lkpdMandiri: {
      judul: "LKPD MANDIRI: MENEMUKAN INFORMASI PENTING",
      petunjuk:
        "Bacalah teks 'Musisi Indonesia yang Mendunia' dengan seksama, kemudian jawablah pertanyaan berikut!",
      soal: [
        "Sebutkan 3 informasi penting dari teks yang telah kamu baca!",
        "Temukan 2 kosakata baru dan tuliskan artinya berdasarkan bacaan!",
      ],
    },
    lkpdKelompok: {
      judul: "LKPD KELOMPOK: ANALISIS INSPIRASI TOKOH",
      petunjuk:
        "Diskusikan bersama kelompokmu mengenai perjuangan tokoh musisi dalam teks!",
      soal: [
        "Sebutkan nama tokoh musisi dan prestasi internasional yang dicapai!",
        "Nilai karakter apa yang dapat kelompokmu contoh dari perjuangan tokoh tersebut?",
      ],
    },
    bahanAjarTerperinci:
      "Uraian lengkap materi teks informatif: Teks informatif memuat data dan fakta nyata tanpa rekaan. Musisi Indonesia seperti Joey Alexander (pianis jazz termuda yang tampil di Grammy), Anggun C. Sasmi, serta grup musik Saung Angklung Udjo membuktikan bahwa karya anak bangsa diakui dunia.",
    mediaPembelajaran:
      "Teks bacaan informatif cetak bergambar, kartu kosakata, instrumen pemutar lagu/video singkat, dan lembar kerja.",
    rubrikKinerja:
      "Pedoman penilaian observasi kinerja kelompok mencakup aspek kerja sama, keberanian presentasi, dan ketepatan isi.",
    kktp: "KKTP (Kriteria Ketercapaian Tujuan Pembelajaran): Interval 0-60 (Perlu Bimbingan), 61-75 (Cukup), 76-88 (Baik), 89-100 (Sangat Baik).",
    refleksiGuruDanSiswa: {
      refleksiGuru: [
        "Apakah seluruh peserta didik terlibat aktif dalam kegiatan diskusi?",
        "Apakah alokasi waktu kegiatan inti sudah efektif?",
        "Langkah perbaikan apa yang perlu dilakukan untuk pertemuan berikutnya?",
      ],
      refleksiSiswa: [
        "Apa hal paling menarik yang kamu pelajari hari ini?",
        "Kosakata baru apa saja yang sudah kamu pahami?",
        "Bagaimana perasaanmu setelah mengikuti kegiatan belajar kelompok?",
      ],
    },
  },
  bankEvaluasi: {
    pilihanGanda: [
      {
        no: 1,
        soal: "Apa yang dimaksud dengan teks informatif?",
        opsi: {
          A: "Teks yang berisi cerita rekaan belaka",
          B: "Teks yang menyajikan fakta dan informasi nyata",
          C: "Teks yang memuat puisi indah",
          D: "Teks naskah drama komedi",
          E: "Teks panduan membuat makanan",
        },
        kunci: "B",
      },
      {
        no: 2,
        soal: "Musisi muda Indonesia yang pernah masuk nominasi Grammy Awards dalam bidang musik piano jazz adalah...",
        opsi: {
          A: "Iwan Fals",
          B: "Joey Alexander",
          C: "Chrisye",
          D: "Gombloh",
          E: "Ismail Marzuki",
        },
        kunci: "B",
      },
      {
        no: 3,
        soal: "Kata 'mendunia' dalam konteks judul memiliki makna...",
        opsi: {
          A: "Dikenal dan diakui secara internasional",
          B: "Hanya terkenal di satu desa",
          C: "Suka berkeliling dunia tanpa tujuan",
          D: "Sangat tertutup dari orang lain",
          E: "Terkenal di sekolah saja",
        },
        kunci: "A",
      },
      {
        no: 4,
        soal: "Sikap positif yang dapat diteladani dari seorang musisi yang berprestasi adalah...",
        opsi: {
          A: "Cepat merasa puas",
          B: "Pantang menyerah dan tekun berlatih",
          C: "Suka menyombongkan diri",
          D: "Malas melatih kemampuan",
          E: "Mencela karya orang lain",
        },
        kunci: "B",
      },
      {
        no: 5,
        soal: "Manakah yang merupakan langkah awal menemukan informasi penting dalam teks?",
        opsi: {
          A: "Membaca teks secara sekilas lalu mengabaikannya",
          B: "Membaca teks dengan cermat dan mencatat poin utama",
          C: "Langsung menyimpulkan tanpa membaca",
          D: "Menanyakan jawaban pada teman tanpa membaca",
          E: "Menulis ulang seluruh teks tanpa berpikir",
        },
        kunci: "B",
      },
      {
        no: 6,
        soal: "Grup musik angklung asal Indonesia yang sering tampil di mancanegara adalah...",
        opsi: {
          A: "Saung Angklung Udjo",
          B: "Orkes Gambus",
          C: "Keroncong Asli",
          D: "Band Rock",
          E: "Srimulat",
        },
        kunci: "A",
      },
      {
        no: 7,
        soal: "Sinonim dari kata 'prestasi' adalah...",
        opsi: {
          A: "Kegagalan",
          B: "Capaian / Hasil luar biasa",
          C: "Kerugian",
          D: "Kelemahan",
          E: "Kemunduran",
        },
        kunci: "B",
      },
      {
        no: 8,
        soal: "Dalam membaca teks informatif, menemukan 'kosakata baru' bertujuan untuk...",
        opsi: {
          A: "Memperluas wawasan dan perbendaharaan kata",
          B: "Menambah beban hafalan",
          C: "Memperlama waktu belajar",
          D: "Membuat bingung pembaca",
          E: "Mengganti bahasa Indonesia dengan bahasa lain",
        },
        kunci: "A",
      },
      {
        no: 9,
        soal: "Gamelan Jawa dan Bali telah diakui oleh UNESCO sebagai...",
        opsi: {
          A: "Warisan Budaya Takbenda Dunia",
          B: "Barang tiruan",
          C: "Mainan anak-anak",
          D: "Properti film belaka",
          E: "Cenderamata biasa",
        },
        kunci: "A",
      },
      {
        no: 10,
        soal: "Gaya belajar yang mengandalkan pendengaran untuk memahami materi lagu atau musik disebut...",
        opsi: {
          A: "Kinestetik",
          B: "Auditori",
          C: "Visual",
          D: "Verbal",
          E: "Spasial",
        },
        kunci: "B",
      },
    ],
    uraianHots: [
      {
        no: 1,
        soal: "Mengapa penting bagi generasi muda Indonesia untuk mengenal para musisi Indonesia yang berhasil mendunia? Jelaskan dampaknya terhadap rasa cinta tanah air!",
        rubrikJawaban:
          "Mengenal musisi mendunia dapat menumbuhkan rasa bangga, rasa cinta tanah air, memotivasi peserta didik untuk mengembangkan bakat, serta menghargai kebudayaan nasional yang mampu bersaing di kancah internasional.",
      },
      {
        no: 2,
        soal: "Analisislah hubungan antara kebiasaan tekun berlatih dengan keberhasilan seorang musisi di tingkat dunia berdasarkan teks informatif yang telah kamu baca!",
        rubrikJawaban:
          "Keberhasilan di kancah internasional memerlukan kedisiplinan tinggi, kerja keras, pantang menyerah saat menghadapi kegagalan, dan ketekunan berlatih secara konsisten.",
      },
      {
        no: 3,
        soal: "Bagaimana cara kamu mengidentifikasi arti kosakata baru dalam teks informatif apabila kamu tidak membawa kamus di dalam kelas?",
        rubrikJawaban:
          "Dengan menganalisis konteks kalimat di sekitar kata tersebut, mencari kata kunci sejajar, atau menanyakan kepada guru/teman dalam kelompok diskusi.",
      },
      {
        no: 4,
        soal: "Buatlah sebuah paragraf singkat (3-4 kalimat) yang merangkum inspirasi yang kamu dapatkan dari sosok musisi Indonesia yang mendunia!",
        rubrikJawaban:
          "Paragraf memuat nama musisi, karya/prestasinya, serta kalimat motivasi pribadi yang logis dan runtut.",
      },
      {
        no: 5,
        soal: "Jika kelompokmu diminta mempromosikan salah satu alat musik tradisional Indonesia ke tingkat internasional, ide kreatif apa yang akan kalian usulkan?",
        rubrikJawaban:
          "Menggabungkan alat musik tradisional dengan genre musik modern, membuat konten infografis/video digital, atau berkolaborasi dengan komunitas seni.",
      },
    ],
    pedomanPenskoran:
      "Skor PG: 10 soal x 5 = 50. Skor Uraian: 5 soal x 10 = 50. Skor Total Maksimal = 100.",
  },
  handoutSiswa: {
    judul: "HANDOUT SISWA: MUSISI INDONESIA YANG MENDUNIA",
    faseKelas: "Fase C / Kelas VI",
    subJudul: "Mengenal Tokoh & Budaya Bangsa Melalui Teks Informatif",
    ringkasanMateri:
      "Indonesia memiliki banyak talenta musik luar biasa yang berhasil memukau dunia internasional, mulai dari Joey Alexander (pianis jazz termuda nominasi Grammy), Anggun C. Sasmi, hingga kebudayaan Gamelan dan Saung Angklung Udjo. Melalui teks informatif, kita dapat mempelajari rekam jejak perjuangan, ketekunan, dan nilai-nilai inspiratif mereka.",
    kosakataKunciHighlight: [
      {
        kata: "Informatif",
        arti: "Bersifat memberi informasi atau pengetahuan fakta nyata.",
      },
      {
        kata: "Virtuoso",
        arti: "Orang yang sangat ahli dalam memainkan instrumen musik.",
      },
      {
        kata: "Mendunia",
        arti: "Terkenal dan diakui di kancah internasional.",
      },
      {
        kata: "Prestasi",
        arti: "Capaian atau hasil luar biasa dari usaha keras.",
      },
    ],
    tipsBelajar: [
      "1. Bacalah teks dengan cermat dan garis bawahi kata-kata sulit.",
      "2. Temukan gagasan pokok serta informasi penting pada setiap paragraf.",
      "3. Diskusikan bersama teman kelompokmu dan buatlah rangkuman inspiratif.",
    ],
  },
};
