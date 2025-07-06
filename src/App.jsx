import './App.css';
import Navbar from './components/Navbar'; // Import komponen Header
import Header from './components/Header';
import Card from './components/Card';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useState, useEffect } from 'react'; // 1. Import useEffect
import CardList from './components/CardList';

function App() {
  useEffect(() => {
    document.title = "Study Buddy - Platform EduTech";
  }, []);

  // 2. TAMBAHKAN BLOK useEffect DI SINI
  // Hook ini akan berjalan setelah komponen App selesai di-render pertama kali.
  useEffect(() => {
    // Ini adalah 'side effect': mengubah judul tab browser
    document.title = "Study Buddy - Platform EduTech";
  }, []); // <-- Array dependensi kosong berarti efek ini hanya berjalan satu kali.


  // --- DATA UNTUK CARD ---
  // Kita ubah data card menjadi array of objects agar mudah dikelola
  const packagesData = [
    {
      title: "Paket Belajar Pemrograman Dasar",
      description: "Paket belajar ini dirancang untuk pemula yang ingin memahami dasar-dasar pemrograman. Materi mencakup pengenalan bahasa pemrograman, struktur data, dan algoritma dasar. Cocok untuk siswa yang baru memulai perjalanan belajar pemrograman.",
      tag: "#PemrogramanDasar",
      picture: "https://contentstatic.techgig.com/photo/msid-84838745,width-400,resizemode-4/A-brief-guide-for-coders-to-understand-the-programming-paradigms.jpg"
    },
    {
      title: "Paket Belajar Pemrograman Lanjut",
      description: "Paket belajar ini ditujukan bagi mereka yang ingin memperdalam pengetahuan pemrograman mereka. Materi mencakup konsep lanjutan seperti pemrograman berorientasi objek, pengembangan web, dan basis data. Ideal untuk siswa yang telah memiliki dasar pemrograman dan ingin meningkatkan keterampilan mereka.",
      tag: "#PemrogramanLanjut",
      picture: "https://yukcoding.id/wp-content/uploads/2021/12/programming-coding.jpg"
    },
    {
      title: "Paket Belajar Pemrograman Spesialis",
      description: "Paket belajar ini dirancang untuk siswa yang ingin menjadi ahli dalam bidang pemrograman tertentu. Materi mencakup spesialisasi dalam bahasa pemrograman tertentu, pengembangan aplikasi mobile, dan pengembangan perangkat lunak tingkat lanjut. Cocok untuk siswa yang ingin fokus pada bidang tertentu dalam pemrograman.",
      tag: "#PemrogramanSpesialis",
      picture: "https://www.techslang.com/wp-content/uploads/2023/09/learn-programming-language-scaled-e1695915051727.jpg"
    }
  ];

  const mentorsData = [
    {
      title: "Mentor Anna",
      description: "Mentor Anna adalah seorang ahli dalam pengembangan web dengan pengalaman lebih dari 10 tahun. Dia telah bekerja di berbagai proyek besar dan memiliki keahlian dalam HTML, CSS, JavaScript, dan framework modern seperti React dan Angular.",
      tag: "#MentorWebDev",
      picture: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2025/01/08/6-Rahasia-Menjadi-Seorang-yang-Murah-Senyum-dan-Disukai-Banyak-Orang-2673540605.jpg"
    },
    {
      title: "Mentor Budi",
      description: "Mentor Budi adalah seorang programmer berpengalaman yang telah mengajar selama lebih dari 5 tahun. Dia memiliki keahlian dalam bahasa pemrograman Python, Java, dan C++. Budi dikenal karena pendekatannya yang sabar dan mudah dipahami dalam mengajar.",
      tag: "#MentorPython",
      picture: "https://media.istockphoto.com/id/1485546774/id/foto/pria-botak-tersenyum-ke-kamera-berdiri-dengan-tangan-disilangkan.jpg?s=612x612&w=0&k=20&c=hzlkB5Rs5GS080SS5QU9e3pzweE4CIdRjbaMK-G25XQ="
    },
    {
      title: "Mentor Citra",
      description: "Mentor Citra adalah seorang spesialis dalam pengembangan aplikasi mobile. Dia telah mengembangkan berbagai aplikasi untuk platform Android dan iOS. Citra memiliki kemampuan untuk menjelaskan konsep-konsep kompleks dengan cara yang sederhana dan mudah dipahami.",
      tag: "#MentorMobile",
      picture: "https://media.sukabumiupdate.com/media/2023/11/20/1700456008_655ae6485debe_U7NMyDfBw4DOQBiPSYmJ.webp"
    }
  ];

  const testimonialData = [
    {
      name: "Tania Andrew",
      quote: "Saya menemukan solusi untuk semua kebutuhan desain saya dari Creative Tim. Saya menggunakannya sebagai freelancer dalam proyek hobi saya untuk bersenang-senang! Dan itu sangat terjangkau, sangat rendah hati !!!",
      picture: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2025/01/08/6-Rahasia-Menjadi-Seorang-yang-Murah-Senyum-dan-Disukai-Banyak-Orang-2673540605.jpg"
    },
    {
      name: "John Doe",
      quote: "Saya sangat terkesan dengan kualitas kursus yang ditawarkan. Materinya sangat lengkap dan mudah dipahami. Saya merasa lebih percaya diri dalam keterampilan pemrograman saya setelah mengikuti kursus ini.",
      picture: "https://media.istockphoto.com/id/1485546774/id/foto/pria-botak-tersenyum-ke-kamera-berdiri-dengan-tangan-disilangkan.jpg?s=612x612&w=0&k=20&c=hzlkB5Rs5GS080SS5QU9e3pzweE4CIdRjbaMK-G25XQ="
    },
    {
      name: "Andrea Smith",
      quote: "Pengalaman belajar yang luar biasa! Instruktur sangat berpengalaman dan selalu siap membantu. Saya belajar banyak hal baru dan merasa siap untuk menghadapi tantangan di dunia pemrograman.",
      picture: "https://media.sukabumiupdate.com/media/2023/11/20/1700456008_655ae6485debe_U7NMyDfBw4DOQBiPSYmJ.webp"
    },
    {
      name: "Rose Johnson",
      quote: "Pengalaman belajar yang luar biasa! Instruktur sangat berpengalaman dan selalu siap membantu. Saya belajar banyak hal baru dan merasa siap untuk menghadapi tantangan di dunia pemrograman.",
      picture: "https://media.sukabumiupdate.com/media/2023/11/20/1700456008_655ae6485debe_U7NMyDfBw4DOQBiPSYmJ.webp"
    },
    {
      name: "Hugo Brown",
      quote: "Pengalaman belajar yang luar biasa! Instruktur sangat berpengalaman dan selalu siap membantu. Saya belajar banyak hal baru dan merasa siap untuk menghadapi tantangan di dunia pemrograman.",
      picture: "https://media.sukabumiupdate.com/media/2023/11/20/1700456008_655ae6485debe_U7NMyDfBw4DOQBiPSYmJ.webp"
    }
  ];
  return (
    <>
      <Navbar
        nav1="Home"
        nav2="About"
        nav3="Courses"
        nav4="Contact"
        nav5="Hubungi Tutor"
      />
      <Header
        title1="Kursus Online Terbaik di Indonesia"
        title2="Belajar dari Ahlinya, Kapan Saja, Di Mana Saja"
        h1="Video Kursus"
        h2="Kursus Online"
        h3="Kursus Tatap Muka"
        h4="Kursus Privat"
        h5="Cabang di Indonesia"
        h6="Pelanggan Terdaftar"
        h7="Jam Belajar Per Minggu"
        h8="Video Belajar"
        v1="12"
        v2="300+"
        v3="40"
        v4="Unlimited"
        picture="https://media.istockphoto.com/id/2149838473/id/foto/pertemuan-bisnis-latar-belakang-kabur-dan-orang-orang-di-kantor-untuk-kerja-tim-kolaborasi-dan.jpg?s=612x612&w=0&k=20&c=xkalwrUtViw8Peawc56MK-zRzg9xWcNBAnTHzR9zcvc="
      />
      {/* <Card
        h1="Paket Belajar Study Buddy"
        title1="Paket Belajar Pemrograman Dasar"
        title2="Paket Belajar Pemrograman Lanjut"
        title3="Paket Belajar Pemrograman Spesialis"
        description1="Paket belajar ini dirancang untuk pemula yang ingin memahami dasar-dasar pemrograman. Materi mencakup pengenalan bahasa pemrograman, struktur data, dan algoritma dasar. Cocok untuk siswa yang baru memulai perjalanan belajar pemrograman."
        description2="Paket belajar ini ditujukan bagi mereka yang ingin memperdalam pengetahuan pemrograman mereka. Materi mencakup konsep lanjutan seperti pemrograman berorientasi objek, pengembangan web, dan basis data. Ideal untuk siswa yang telah memiliki dasar pemrograman dan ingin meningkatkan keterampilan mereka."
        description3="Paket belajar ini dirancang untuk siswa yang ingin menjadi ahli dalam bidang pemrograman tertentu. Materi mencakup spesialisasi dalam bahasa pemrograman tertentu, pengembangan aplikasi mobile, dan pengembangan perangkat lunak tingkat lanjut. Cocok untuk siswa yang ingin fokus pada bidang tertentu dalam pemrograman."
        tag1="#PemrogramanDasar"
        tag2="#PemrogramanLanjut"
        tag3="#PemrogramanSpesialis"
        picture1="https://contentstatic.techgig.com/photo/msid-84838745,width-400,resizemode-4/A-brief-guide-for-coders-to-understand-the-programming-paradigms.jpg"
        picture2="https://yukcoding.id/wp-content/uploads/2021/12/programming-coding.jpg"
        picture3="https://www.techslang.com/wp-content/uploads/2023/09/learn-programming-language-scaled-e1695915051727.jpg"
      /> */}

      <CardList
        title="Paket Belajar Study Buddy"
        items={packagesData}
      />

      <Testimonials
        // h1="Apa Kata Mereka Tentang Kami?"
        // c1="Tania Andrew"
        // c2="John Doe"
        // c3="Jane Smith"
        // d1="Saya menemukan solusi untuk semua kebutuhan desain saya dari Creative Tim. Saya menggunakannya sebagai freelancer dalam proyek hobi saya untuk bersenang-senang! Dan itu sangat terjangkau, sangat rendah hati !!!"
        // d2="Saya sangat terkesan dengan kualitas kursus yang ditawarkan. Materinya sangat lengkap dan mudah dipahami. Saya merasa lebih percaya diri dalam keterampilan pemrograman saya setelah mengikuti kursus ini."
        // d3="Pengalaman belajar yang luar biasa! Instruktur sangat berpengalaman dan selalu siap membantu. Saya belajar banyak hal baru  dan merasa siap untuk menghadapi tantangan di dunia pemrograman."
        // p1="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2025/01/08/6-Rahasia-Menjadi-Seorang-yang-Murah-Senyum-dan-Disukai-Banyak-Orang-2673540605.jpg"
        // p2="https://media.istockphoto.com/id/1485546774/id/foto/pria-botak-tersenyum-ke-kamera-berdiri-dengan-tangan-disilangkan.jpg?s=612x612&w=0&k=20&c=hzlkB5Rs5GS080SS5QU9e3pzweE4CIdRjbaMK-G25XQ="
        // p3="https://media.sukabumiupdate.com/media/2023/11/20/1700456008_655ae6485debe_U7NMyDfBw4DOQBiPSYmJ.webp"
        h1="Apa Kata Mereka Tentang Kami?"
        testimonials={testimonialData}
      />
      {/* <Card
        h1="Para Mentor Study Buddy"
        title1="Mentor Anna"
        title2="Mentor Budi"
        title3="Mentor Citra"
        description1="Mentor Anna adalah seorang ahli dalam pengembangan web dengan pengalaman lebih dari 10 tahun. Dia telah bekerja di berbagai proyek besar dan memiliki keahlian dalam HTML, CSS, JavaScript, dan framework modern seperti React dan Angular."
        description2="Mentor Budi adalah seorang programmer berpengalaman yang telah mengajar selama lebih dari 5 tahun. Dia memiliki keahlian dalam bahasa pemrograman Python, Java, dan C++. Budi dikenal karena pendekatannya yang sabar dan mudah dipahami dalam mengajar."
        description3="Mentor Citra adalah seorang spesialis dalam pengembangan aplikasi mobile. Dia telah mengembangkan berbagai aplikasi untuk platform Android dan iOS. Citra memiliki kemampuan untuk menjelaskan konsep-konsep kompleks dengan cara yang sederhana dan mudah dipahami."
        tag1="#MentorPemrogramanDasar"
        tag2="#MentorPemrogramanLanjut"
        tag3="#MentorPemrogramanSpesialis"
        picture1="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2025/01/08/6-Rahasia-Menjadi-Seorang-yang-Murah-Senyum-dan-Disukai-Banyak-Orang-2673540605.jpg"
        picture2="https://media.istockphoto.com/id/1485546774/id/foto/pria-botak-tersenyum-ke-kamera-berdiri-dengan-tangan-disilangkan.jpg?s=612x612&w=0&k=20&c=hzlkB5Rs5GS080SS5QU9e3pzweE4CIdRjbaMK-G25XQ="
        picture3="https://media.sukabumiupdate.com/media/2023/11/20/1700456008_655ae6485debe_U7NMyDfBw4DOQBiPSYmJ.webp"
      /> */}

      <CardList
        title="Para Mentor Study Buddy"
        items={mentorsData}
      />

      <ContactSection
        title="Punya Pertanyaan?"
        description="Lihat pertanyaan yang sering diajukan atau kirimkan pertanyaan Anda melalui form di bawah ini."
      />
      <Footer
        title="Study Buddy - EduTech Platform"
        t1="Tentang Kami"
        t2="Komunitas"
        t3="Legal"
        d1="Kursus Online"
        d2="Kursus Tatap Muka"
        d3="Discord"
        d4="Instagram"
        d5="Kebijakan Privasi"
        d6="Syarat & Ketentuan"
        d7="© 2025 Study Buddy. "
        d8="All Rights Reserved."
      />
    </>
  )
}

export default App