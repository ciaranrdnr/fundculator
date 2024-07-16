import Link from "next/link";
import React from "react";

export const contents = [
  {
    title: "Cara mendaftar reksa dana melalui NAVI by Mirae Asset",
    desc: (
      <div className="list-inside list-decimal">
        <li className="">
          <span>Kunjungi website NAVI by Mirae Asset di </span>
          <Link
            className="text-apricot-50 hover:text-apricot-25"
            href={"https://navi.miraeasset.co.id/"}
          >
            https://navi.miraeasset.co.id/{" "}
          </Link>
          <span>
            {" "}
            atau download aplikasi NAVI di Play Store dan di App Store
          </span>
        </li>
        <li>Login, pilih opsi untuk membuat akun NAVI</li>
        <li>
          Jika kamu memiliki akun di Mirae Asset, login menggunakan User ID dan
          Password yang sama dengan HOTS, lalu klik “Lanjutkan”
        </li>
        <li>
          Isi data sesuai dengan profil dan data diri kamu, lalu klik “Kirim”
        </li>
        <li>
          Kamu akan menerima email notifikasi jika IFUA berhasil dibuat, dan
          dapat melanjutkan transaksi dengan login di laman/aplikasi NAVI
          menggunakan UserID dan Password yang sama dengan HOTS.
        </li>
        <li>
          Jika kamu belum memiliki akun di Mirae Asset, maka kamu dapat membuka
          rekening dulu di website LINK
        </li>
        <li>
          Setelah proses pembukaan akun selesai, kamu dapat melakukan langkah 4
          – 6.
          <br />
          Kamu juga bisa melihat tutorial pendaftaran{" "}
          <Link
            className="text-apricot-50 hover:text-apricot-25"
            href="https://www.youtube.com/watch?v=92oawWJy_84&amp;t=13s"
          >
            di sini.
          </Link>
        </li>
      </div>
    ),
  },
  {
    title: "Cara membeli dan menjual reksa dana di NAVI",
    desc: (
      <div className="flex flex-col gap-4">
        <div className="list-inside list-decimal">
          <li>
            Di laman produk reksa dana, kamu bisa memilih produk yang sesuai
            dengan kebutuhan investasi dan profil risikomu
          </li>
          <li>
            Pastikan kamu memahami prospektus dan fund fact sheet produk reksa
            dana yang akan kamu beli. Kamu juga bisa mempelajari cara membaca
            prospektur &amp; fund fact sheet di sini{" "}
          </li>
          <li>
            Klik “Beli” dan masukkan nominal pembelian reksa dana yang kamu
            inginkan (pastikan sesuai dengan nominal minimum pembelian reksa
            dana tersebut)
          </li>
          <li>
            Centang pernyataan “Saya telah membaca dan menyetujui seluruh isi
            Prospektus dan Keterangan Detail”
          </li>
          <li>Lanjutkan proses dengan klik “Pembayaran”</li>
          <li>
            Pilih rekening dana kamu, (pastikan saldo RDN cukup), lalu klik
            “Lanjut Bayar”
          </li>
          <li>
            Proses pembelian reksa kamu sedang diproses, dan kamu dapat memantau
            status transaksi pada bagian “Transaksi”
          </li>
          <li>
            Kamu akan menerima email notifikasi atas transaksi pembelian reksa
            dana yang kamu lakukan
          </li>
          <li>
            Untuk melakukan penjualan reksa dana, kamu dapat mengunjungi laman
            “portfolio”, lalu pilih “Portfolio List”
          </li>
          <li>
            Pilih produk reksa dana dalam portfolio yang akan kamu jual, lalu
            klik “Jual”
          </li>
          <li>
            Baca keterangan yang muncul dan pastikan kamu memahami sebelum klik
            “Mengerti”
          </li>
          <li>
            Isi “Jumlah Unit” atau “Nominal Indikatif” penjualan kamu, pilih
            RDN, lalu klik “Konfirmasi”.{" "}
          </li>
          <li>
            Pastikan informasi penjualan kamu telah sesuai lalu klik “Jual”.{" "}
          </li>
          <li>
            Kamu akan menerima email notifikasi atas transaksi penjualan reksa
            dana yang kamu lakukan.
          </li>
        </div>
        <p>
          Ketentuan : Transaksi reksa dana yang tercatat masuk sistem sebelum
          pukul 12:00 WIB (cut off time) akan efektif di hari yang sama, jika
          transaksi yang melewati (cut off time) akan efektif pada hari bursa
          berikutnya.
        </p>
      </div>
    ),
  },
  {
    title:
      "Di mana saya bisa membaca keterangan lengkap cara menggunakan NAVI?",
    desc: (
      <div>
        <p>Kamu dapat membaca manual book NAVI di sini.</p>
      </div>
    ),
  },
];
