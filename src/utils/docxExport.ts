import { RPMInputParams, RPMGeneratedData } from "../types";

export function exportToWordDoc(
  params: RPMInputParams,
  data: RPMGeneratedData
) {
  const documentTitle = `RPM_${params.topikPembelajaran.replace(
    /[^a-zA-Z0-9]/g,
    "_"
  )}_${params.namaSekolah.replace(/[^a-zA-Z0-9]/g, "_")}`;

  const htmlContent = `
<html xmlns:o="urn:schemas-microsoft-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<title>${params.topikPembelajaran}</title>
<!--[if gte mso 9]>
<xml>
 <w:WordDocument>
  <w:View>Print</w:View>
  <w:Zoom>100</w:Zoom>
  <w:DoNotOptimizeForBrowser/>
 </w:WordDocument>
</xml>
<![endif]-->
<style>
  @page {
    size: 215mm 330mm; /* F4 / Folio */
    margin: 20mm 15mm 20mm 15mm;
  }
  body {
    font-family: 'Times New Roman', Times, serif;
    font-size: 10pt;
    line-height: 1.4;
    color: #000;
  }
  h1 {
    font-size: 14pt;
    font-weight: bold;
    text-align: center;
    margin-bottom: 4px;
    text-transform: uppercase;
  }
  h2 {
    font-size: 11pt;
    font-weight: bold;
    margin-top: 14px;
    margin-bottom: 6px;
    border-bottom: 1.5pt solid #000;
    padding-bottom: 2px;
    text-transform: uppercase;
  }
  h3 {
    font-size: 10pt;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 4px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 6px;
    margin-bottom: 10px;
    font-size: 10pt;
  }
  table.table-bordered, table.table-bordered th, table.table-bordered td {
    border: 1pt solid #000;
  }
  th {
    background-color: #f2f2f2;
    font-weight: bold;
    text-align: center;
    padding: 5px;
  }
  td {
    padding: 4px 6px;
    vertical-align: top;
  }
  .page-break {
    page-break-before: always;
    clear: both;
    mso-break-type: page-break;
  }
  .text-center { text-align: center; }
  .text-bold { font-weight: bold; }
  .signature-table td {
    border: none !important;
    text-align: center;
    vertical-align: top;
    padding-top: 20px;
  }
  .bg-header {
    background-color: #e6f2ff;
  }
</style>
</head>
<body>

  <!-- HEADER DOKUMEN -->
  <h1>RENCANA PEMBELAJARAN MENDALAM (RPM)</h1>
  <h1 style="font-size: 12pt;">KURIKULUM MERDEKA - DEEP LEARNING</h1>
  <p class="text-center text-bold" style="margin-top:2px; margin-bottom:15px;">${params.namaSekolah}</p>

  <!-- TABEL PARAMETER IDENTITAS UTAMA -->
  <h2>1. IDENTITAS PEMBELAJARAN</h2>
  <table class="table-bordered">
    <tr>
      <td width="20%" class="text-bold bg-header">Nama Sekolah</td>
      <td width="30%">${params.namaSekolah}</td>
      <td width="20%" class="text-bold bg-header">Mata Pelajaran</td>
      <td width="30%">${params.mataPelajaran}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Fase / Kelas</td>
      <td>${params.faseKelas}</td>
      <td class="text-bold bg-header">Semester</td>
      <td>${params.semester}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Topik Pembelajaran</td>
      <td><strong>${params.topikPembelajaran}</strong></td>
      <td class="text-bold bg-header">Alokasi Waktu</td>
      <td>${params.alokasiWaktu}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Jumlah Murid</td>
      <td>${params.jumlahMurid}</td>
      <td class="text-bold bg-header">Jumlah Pertemuan</td>
      <td>${params.jumlahPertemuan} (${params.hariTanggal})</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Guru Penyusun</td>
      <td>${params.namaGuru}</td>
      <td class="text-bold bg-header">Kepala Sekolah</td>
      <td>${params.namaKepalaSekolah}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Tujuan Pembelajaran</td>
      <td colspan="3">${params.tujuanPembelajaran}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Karakteristik Peserta Didik</td>
      <td colspan="3">${params.karakteristikPesertaDidik}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Konteks Lingkungan Sekolah</td>
      <td colspan="3">${params.konteksLingkunganSekolah}</td>
    </tr>
  </table>

  <!-- 2. IDENTITAS & IDENTIFIKASI -->
  <h2>2. IDENTITAS & IDENTIFIKASI PESERTA DIDIK</h2>
  <table class="table-bordered">
    <tr>
      <th width="30%">Aspek Identifikasi</th>
      <th>Uraian Analisis Kebutuhan Murid</th>
    </tr>
    <tr>
      <td class="text-bold">Pengetahuan Awal</td>
      <td>${data.identitas.pengetahuanAwal}</td>
    </tr>
    <tr>
      <td class="text-bold">Minat Peserta Didik</td>
      <td>${data.identitas.minat}</td>
    </tr>
    <tr>
      <td class="text-bold">Latar Belakang Sosial-Budaya</td>
      <td>${data.identitas.latarBelakang}</td>
    </tr>
    <tr>
      <td class="text-bold">Kebutuhan & Kesiapan Belajar</td>
      <td>${data.identitas.kebutuhanDanKesiapanBelajar}</td>
    </tr>
  </table>

  <!-- 3. ANALISIS MATERI PEMBELAJARAN -->
  <h2>3. ANALISIS MATERI PEMBELAJARAN</h2>
  <table class="table-bordered">
    <tr>
      <td width="25%" class="text-bold bg-header">Materi Pembelajaran</td>
      <td>${data.analisisMateri.materi}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Konsep Utama</td>
      <td>${data.analisisMateri.konsepUtama}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Kosakata / Istilah Kunci</td>
      <td>${data.analisisMateri.kosakataKunci}</td>
    </tr>
  </table>

  <!-- 4. DESAIN PEMBELAJARAN -->
  <h2>4. DESAIN PEMBELAJARAN (DEEP LEARNING)</h2>
  <table class="table-bordered">
    <tr>
      <td width="30%" class="text-bold bg-header">Dimensi Profil Pelajar Pancasila</td>
      <td>
        <ul>
          ${data.desainPembelajaran.dimensiProfilLulusan
            .map((d) => `<li>${d}</li>`)
            .join("")}
        </ul>
      </td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Indikator Ketercapaian (IKTP)</td>
      <td>
        <ul>
          ${data.desainPembelajaran.indikatorKetercapaian
            .map((i) => `<li>${i}</li>`)
            .join("")}
        </ul>
      </td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Praktik Pedagogis (Deep Learning)</td>
      <td>${data.desainPembelajaran.praktikPedagogis}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Lintas Disiplin Ilmu</td>
      <td>${data.desainPembelajaran.lintasDisiplin}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Pemanfaatan Digital & Media</td>
      <td>${data.desainPembelajaran.pemanfaatanDigital}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Kemitraan Pembelajaran</td>
      <td>${data.desainPembelajaran.kemitraanPembelajaran}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Lingkungan Pembelajaran</td>
      <td>${data.desainPembelajaran.lingkunganPembelajaran}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Sarana & Prasarana</td>
      <td>${data.desainPembelajaran.saranaPrasarana}</td>
    </tr>
  </table>

  <!-- 5. PENGALAMAN BELAJAR -->
  <h2>5. PENGALAMAN BELAJAR & KEGIATAN PEMBELAJARAN</h2>

  <h3>A. Kegiatan Pendahuluan</h3>
  <table class="table-bordered">
    <tr>
      <th width="15%">Waktu</th>
      <th width="425%">Aktivitas Guru</th>
      <th width="42.5%">Aktivitas Murid</th>
    </tr>
    ${data.pengalamanBelajar.pendahuluan
      .map(
        (p) => `
    <tr>
      <td class="text-center text-bold">${p.waktu}</td>
      <td>${p.aktivitasGuru}</td>
      <td>${p.aktivitasMurid}</td>
    </tr>
    `
      )
      .join("")}
  </table>

  <h3>B. Kegiatan Inti (Deep Learning: Memahami, Mengaplikasikan, Merefleksikan)</h3>
  <table class="table-bordered">
    <tr>
      <th width="18%">Tahap & Waktu</th>
      <th width="41%">Aktivitas Guru</th>
      <th width="41%">Aktivitas Murid</th>
    </tr>
    ${data.pengalamanBelajar.kegiatanInti
      .map(
        (k) => `
    <tr>
      <td class="text-bold">
        <strong>${k.tahap}</strong><br>
        <span style="font-size:9pt; color:#444;">(${k.waktu})</span>
      </td>
      <td>${k.aktivitasGuru}</td>
      <td>${k.aktivitasMurid}</td>
    </tr>
    `
      )
      .join("")}
  </table>

  <h3>C. Kegiatan Penutup</h3>
  <table class="table-bordered">
    <tr>
      <th width="15%">Waktu</th>
      <th width="42.5%">Aktivitas Guru</th>
      <th width="42.5%">Aktivitas Murid</th>
    </tr>
    ${data.pengalamanBelajar.penutup
      .map(
        (p) => `
    <tr>
      <td class="text-center text-bold">${p.waktu}</td>
      <td>${p.aktivitasGuru}</td>
      <td>${p.aktivitasMurid}</td>
    </tr>
    `
      )
      .join("")}
  </table>

  <!-- 6. ASESMEN PEMBELAJARAN -->
  <h2>6. ASESMEN PEMBELAJARAN & RUBRIK PENILAIAN</h2>

  <h3>Ringkasan Asesmen Pembelajaran</h3>
  <table class="table-bordered">
    <tr>
      <th width="30%">Jenis Asesmen</th>
      <th>Bentuk & Instrumen Penilaian</th>
    </tr>
    ${data.asesmenPembelajaran.ringkasan
      .map(
        (r) => `
    <tr>
      <td class="text-bold">${r.jenis}</td>
      <td>${r.deskripsi}</td>
    </tr>
    `
      )
      .join("")}
  </table>

  <h3>Instrumen Penilaian Formatif (Awal, Proses, dan Akhir)</h3>
  <table class="table-bordered">
    <tr>
      <th width="18%">Tahap</th>
      <th width="32%">Instrumen yang Digunakan</th>
      <th width="20%">Bentuk</th>
      <th width="30%">Tujuan Pembelajaran / Indikator</th>
    </tr>
    ${data.asesmenPembelajaran.instrumenFormatif
      .map(
        (i) => `
    <tr>
      <td class="text-bold">${i.tahap}</td>
      <td>${i.instrumen}</td>
      <td>${i.bentuk}</td>
      <td>${i.tujuanIndikator}</td>
    </tr>
    `
      )
      .join("")}
  </table>

  <h3>Rubrik Asesmen Proses (Observasi Kinerja & Sikap)</h3>
  <table class="table-bordered">
    <tr>
      <th width="24%">Kriteria</th>
      <th width="19%">4 (Sangat Baik)</th>
      <th width="19%">3 (Baik)</th>
      <th width="19%">2 (Cukup)</th>
      <th width="19%">1 (Perlu Bimbingan)</th>
    </tr>
    ${data.asesmenPembelajaran.rubrikProses
      .map(
        (rp) => `
    <tr>
      <td class="text-bold">${rp.kriteria}</td>
      <td>${rp.sangatBaik}</td>
      <td>${rp.baik}</td>
      <td>${rp.cukup}</td>
      <td>${rp.perluBimbingan}</td>
    </tr>
    `
      )
      .join("")}
  </table>

  <h3>Kriteria Penilaian LKPD (Instrumen Asesmen Kinerja)</h3>
  <table class="table-bordered">
    <tr>
      <th width="10%">No</th>
      <th>Kriteria Jawaban</th>
      <th width="20%">Skor Maksimal</th>
    </tr>
    ${data.asesmenPembelajaran.kriteriaLKPD
      .map(
        (lk) => `
    <tr>
      <td class="text-center">${lk.no}</td>
      <td>${lk.kriteria}</td>
      <td class="text-center text-bold">${lk.skor}</td>
    </tr>
    `
      )
      .join("")}
    <tr>
      <td colspan="2" class="text-bold text-center">SKOR TOTAL</td>
      <td class="text-center text-bold">100</td>
    </tr>
  </table>

  <h3>Rubrik Asesmen Akhir (Latihan Mandiri)</h3>
  <table class="table-bordered">
    <tr>
      <th width="24%">Kriteria</th>
      <th width="19%">4 (Sangat Baik)</th>
      <th width="19%">3 (Baik)</th>
      <th width="19%">2 (Cukup)</th>
      <th width="19%">1 (Perlu Bimbingan)</th>
    </tr>
    ${data.asesmenPembelajaran.rubrikAkhir
      .map(
        (ra) => `
    <tr>
      <td class="text-bold">${ra.kriteria}</td>
      <td>${ra.sangatBaik}</td>
      <td>${ra.baik}</td>
      <td>${ra.cukup}</td>
      <td>${ra.perluBimbingan}</td>
    </tr>
    `
      )
      .join("")}
  </table>

  <!-- 7. PROGRAM REMEDIAL DAN PENGAYAAN -->
  <h2>7. PROGRAM REMEDIAL DAN PENGAYAAN</h2>
  <table class="table-bordered">
    <tr>
      <td width="20%" class="text-bold bg-header">Remedial</td>
      <td>${data.remedialPengayaan.remedial}</td>
    </tr>
    <tr>
      <td class="text-bold bg-header">Pengayaan</td>
      <td>${data.remedialPengayaan.pengayaan}</td>
    </tr>
  </table>

  <!-- 8. DAFTAR PUSTAKA -->
  <h2>8. DAFTAR PUSTAKA</h2>
  <ul>
    ${data.daftarPustaka.map((dp) => `<li style="margin-bottom:4px;">${dp}</li>`).join("")}
  </ul>

  <!-- TANDA TANGAN -->
  <br>
  <table style="width:100%; border:none;" class="signature-table">
    <tr>
      <td width="50%">
        Mengetahui,<br>
        Kepala Sekolah ${params.namaSekolah}<br><br><br><br>
        <strong><u>${params.namaKepalaSekolah}</u></strong><br>
        ${params.nipKepalaSekolah}
      </td>
      <td width="50%">
        Tuabolok, ${params.hariTanggal.split(", ")[1] || "27 Agustus 2026"}<br>
        Guru Kelas / Penyusun<br><br><br><br>
        <strong><u>${params.namaGuru}</u></strong><br>
        ${params.nipGuru}
      </td>
    </tr>
  </table>

  <!-- PEMISAH HALAMAN UNTUK LAMPIRAN -->
  <br style="page-break-before: always; clear: both; mso-break-type: page-break;" />
  <div class="page-break"></div>

  <!-- LAMPIRAN -->
  <h1>LAMPIRAN PEMBELAJARAN</h1>
  <p class="text-center text-bold">${params.namaSekolah} - ${params.topikPembelajaran}</p>

  <h2>LAMPIRAN 1: LKPD MANDIRI (BERGAMBAR & TERSTRUKTUR)</h2>
  <table class="table-bordered">
    <tr>
      <td class="bg-header text-bold">Judul LKPD: ${data.lampiran.lkpdMandiri.judul}</td>
    </tr>
    <tr>
      <td><strong>Petunjuk Pengerjaan:</strong> ${data.lampiran.lkpdMandiri.petunjuk}</td>
    </tr>
    <tr>
      <td>
        <strong>Pertanyaan Mandiri:</strong>
        <ol>
          ${data.lampiran.lkpdMandiri.soal.map((s) => `<li>${s}</li>`).join("")}
        </ol>
      </td>
    </tr>
  </table>

  <h2>LAMPIRAN 2: LKPD KELOMPOK (DISKUSI & PRESENTASI)</h2>
  <table class="table-bordered">
    <tr>
      <td class="bg-header text-bold">Judul LKPD: ${data.lampiran.lkpdKelompok.judul}</td>
    </tr>
    <tr>
      <td><strong>Petunjuk Pengerjaan:</strong> ${data.lampiran.lkpdKelompok.petunjuk}</td>
    </tr>
    <tr>
      <td>
        <strong>Soal Diskusi Kelompok:</strong>
        <ol>
          ${data.lampiran.lkpdKelompok.soal.map((s) => `<li>${s}</li>`).join("")}
        </ol>
      </td>
    </tr>
  </table>

  <h2>LAMPIRAN 3: BAHAN AJAR TERPERINCI</h2>
  <div style="border:1pt solid #000; padding:10px; margin-bottom:10px;">
    ${data.lampiran.bahanAjarTerperinci}
  </div>

  <h2>LAMPIRAN 4: MEDIA PEMBELAJARAN & SARANA</h2>
  <p>${data.lampiran.mediaPembelajaran}</p>

  <h2>LAMPIRAN 5: RUBRIK KINERJA & KKTP</h2>
  <p><strong>Rubrik Kinerja:</strong> ${data.lampiran.rubrikKinerja}</p>
  <p><strong>KKTP:</strong> ${data.lampiran.kktp}</p>

  <h2>LAMPIRAN 6: INSTRUMEN REFLEKSI GURU & SISWA</h2>
  <table class="table-bordered">
    <tr>
      <th width="50%">Refleksi Guru</th>
      <th width="50%">Refleksi Peserta Didik</th>
    </tr>
    <tr>
      <td>
        <ul>
          ${data.lampiran.refleksiGuruDanSiswa.refleksiGuru
            .map((rg) => `<li>${rg}</li>`)
            .join("")}
        </ul>
      </td>
      <td>
        <ul>
          ${data.lampiran.refleksiGuruDanSiswa.refleksiSiswa
            .map((rs) => `<li>${rs}</li>`)
            .join("")}
        </ul>
      </td>
    </tr>
  </table>

  <!-- PEMISAH HALAMAN UNTUK BANK EVALUASI -->
  <br style="page-break-before: always; clear: both; mso-break-type: page-break;" />
  <div class="page-break"></div>

  <!-- BANK EVALUASI -->
  <h1>BANK EVALUASI PEMBELAJARAN</h1>
  <p class="text-center text-bold">${params.topikPembelajaran} - ${params.faseKelas}</p>

  <h2>A. SOAL PILIHAN GANDA (10 SOAL OPSI A-E)</h2>
  ${data.bankEvaluasi.pilihanGanda
    .map(
      (pg) => `
  <div style="margin-bottom:10px;">
    <p><strong>${pg.no}. ${pg.soal}</strong></p>
    <p style="margin-left:15px; margin-top:2px;">
      A. ${pg.opsi.A}<br>
      B. ${pg.opsi.B}<br>
      C. ${pg.opsi.C}<br>
      D. ${pg.opsi.D}<br>
      E. ${pg.opsi.E}
    </p>
  </div>
  `
    )
    .join("")}

  <h2>B. SOAL URAIAN HOTS (5 SOAL HIERARKI TINGGI)</h2>
  ${data.bankEvaluasi.uraianHots
    .map(
      (uh) => `
  <div style="margin-bottom:12px;">
    <p><strong>${uh.no}. ${uh.soal}</strong></p>
    <p style="margin-left:15px; color:#333; font-style:italic;">
      [Pedoman Jawaban / Rubrik]: ${uh.rubrikJawaban}
    </p>
  </div>
  `
    )
    .join("")}

  <h2>C. KUNCI JAWABAN & PEDOMAN PENSKORAN</h2>
  <table class="table-bordered">
    <tr>
      <th width="50%">Kunci Jawaban Pilihan Ganda</th>
      <th width="50%">Pedoman Penskoran</th>
    </tr>
    <tr>
      <td>
        <ol style="margin:0; padding-left:20px;">
          ${data.bankEvaluasi.pilihanGanda
            .map((pg) => `<li>Soal ${pg.no}: <strong>${pg.kunci}</strong></li>`)
            .join("")}
        </ol>
      </td>
      <td>
        <p>${data.bankEvaluasi.pedomanPenskoran}</p>
      </td>
    </tr>
  </table>

  <!-- PEMISAH HALAMAN UNTUK HANDOUT SISWA -->
  <br style="page-break-before: always; clear: both; mso-break-type: page-break;" />
  <div class="page-break"></div>

  <!-- HANDOUT SISWA PREMIUM (RINGKAS & KONTROL 1 HALAMAN) -->
  <div style="border:2pt solid #1e3a8a; padding:15px; border-radius:4px; background-color:#fafafa;">
    <h1 style="color:#1e3a8a; font-size:14pt; margin-bottom:2px;">${data.handoutSiswa.judul}</h1>
    <p class="text-center" style="font-size:10pt; font-weight:bold; color:#3b82f6; margin-top:0;">${data.handoutSiswa.subJudul} (${data.handoutSiswa.faseKelas})</p>

    <h3 style="color:#1e3a8a; border-bottom:1pt solid #1e3a8a; padding-bottom:2px;">RANGKUMAN MATERI KUNCI</h3>
    <p style="text-align:justify; margin-bottom:10px;">${data.handoutSiswa.ringkasanMateri}</p>

    <h3 style="color:#1e3a8a; border-bottom:1pt solid #1e3a8a; padding-bottom:2px;">KOSAKATA PENTING HARI INI</h3>
    <table class="table-bordered" style="margin-bottom:10px;">
      <tr class="bg-header">
        <th width="30%">Kosakata</th>
        <th>Arti / Makna Kata</th>
      </tr>
      ${data.handoutSiswa.kosakataKunciHighlight
        .map(
          (kh) => `
      <tr>
        <td class="text-bold" style="color:#1e3a8a;">${kh.kata}</td>
        <td>${kh.arti}</td>
      </tr>
      `
        )
        .join("")}
    </table>

    <h3 style="color:#1e3a8a; border-bottom:1pt solid #1e3a8a; padding-bottom:2px;">TIPS SUKSES BELAJAR</h3>
    <ul style="margin:0; padding-left:20px;">
      ${data.handoutSiswa.tipsBelajar.map((tb) => `<li style="margin-bottom:4px;">${tb}</li>`).join("")}
    </ul>
  </div>

</body>
</html>
  `;

  const blob = new Blob(["\ufeff", htmlContent], {
    type: "application/msword;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${documentTitle}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
