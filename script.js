// ============================================================
// DATA PORTOFOLIO — Roy Christian
// ============================================================

// Foto profil: isi path gambar (mis. "img/foto.jpg"), kosongkan untuk inisial "RC"
const avatarImage = "";

// Daftar Proyek Unggulan
const projects = [
  {
    featured: true,
    visualClass: "",
    icon: "🛒",
    image: "img/unitrade-logo.png",
    title: "UniTrade",
    subtitle: "Marketplace Mahasiswa Kampus · Mobile App & Backend REST API (Tim)",
    tags: ["FEATURED PROJECT", "FLUTTER + FASTAPI"],
    problem: "Mahasiswa sering jual-beli barang bekas (buku, elektronik, perabot kos) dan jasa (joki desain, les, servis) lewat grup WhatsApp yang berantakan, tanpa verifikasi identitas, dan rawan penipuan.",
    solution: "Aplikasi marketplace khusus mahasiswa terverifikasi email kampus (@student.ac.id) untuk transaksi barang & jasa per-kampus — lengkap dari pencarian katalog, in-app chat penjual-pembeli, keranjang, checkout QRIS, hingga struk digital.",
    highlights: [
      "🔐 Registrasi email kampus + autentikasi JWT (HMAC-SHA256)",
      "🛍️ Katalog barang & jasa dengan filter kampus & kategori",
      "💬 In-app chat langsung dengan status pesan dibaca",
      "💳 Keranjang belanja, checkout QRIS & struk invoice",
      "🛡️ Admin dashboard moderasi pengguna, produk & jasa",
      "🔔 Notifikasi real-time, wishlist, dan riwayat pesanan",
    ],
    role: "Developer — membangun antarmuka aplikasi Flutter dan REST API FastAPI (40+ endpoint) dengan akselerasi AI tools untuk efisiensi prototyping.",
    tech: ["Flutter", "Dart", "Python", "FastAPI", "SQLite", "JWT Auth", "REST API"],
    github: "https://github.com/roychristian097",
    demo: "",
  },
  {
    featured: true,
    visualClass: "green",
    icon: "🧺",
    image: "img/laundry-logo.svg",
    title: "LaundryConnect",
    subtitle: "Sistem Franchise & Manajemen Laundry Fisik-Digital · Full Stack Web App",
    tags: ["FEATURED PROJECT", "NEXT.JS + TYPESCRIPT"],
    problem: "Usaha laundry sering mengalami pencatatan pesanan manual yang tercecer, inventaris stok deterjen/pasokan tidak terkontrol, serta pelanggan yang repot menanyakan status cucian berulang kali.",
    solution: "Platform SaaS laundry modern dengan pelacakan status cucian real-time untuk customer tanpa perlu login, serta dashboard operasional lengkap bagi staf & owner untuk kasir transaksi, kelola stok bahan, dan cetak nota digital.",
    highlights: [
      "⏱️ Real-time Order Tracker untuk pelanggan pantau status cucian",
      "📊 Dashboard Owner & Kasir dengan analitik omzet dan transaksi",
      "🧾 Invoice & struk digital otomatis untuk setiap order",
      "🧴 Manajemen stok pasokan (deterjen, softener, packaging)",
      "👥 Database riwayat pesanan pelanggan dan layanan kiloan/satuan",
      "🔐 Autentikasi multi-role (Owner & Pelanggan) dengan JWT & bcrypt",
    ],
    role: "Full Stack Developer — membangun web application end-to-end dari landing page neo-brutalist interaktif hingga dashboard manajemen menggunakan Next.js App Router, React 19, dan Tailwind CSS.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "better-sqlite3", "Framer Motion", "JWT Auth"],
    github: "https://github.com/roychristian097",
    demo: "",
  },
];

const skillGroups = [
  {
    title: "AI WORKFLOW",
    items: [
      ["fa-solid fa-robot", "AI-Assisted Coding", 95],
      ["fa-solid fa-wand-magic-sparkles", "Prompt Engineering", 92],
      ["fa-solid fa-comments", "ChatGPT / Claude / Gemini", 94],
      ["fa-solid fa-bolt", "Rapid Prototyping", 90],
    ],
  },
  {
    title: "FRONTEND & MOBILE",
    items: [
      ["fa-brands fa-android", "Flutter & Dart", 88],
      ["fa-brands fa-react", "Next.js (App Router)", 87],
      ["fa-brands fa-react", "React 19", 85],
      ["fa-brands fa-js", "TypeScript", 82],
      ["fa-solid fa-palette", "Tailwind CSS", 90],
      ["fa-solid fa-film", "Framer Motion", 78],
    ],
  },
  {
    title: "BACKEND & DATABASE",
    items: [
      ["fa-brands fa-python", "Python & FastAPI", 92],
      ["fa-solid fa-plug", "REST API Design", 90],
      ["fa-solid fa-database", "SQLite (better-sqlite3)", 86],
      ["fa-solid fa-key", "JWT Authentication", 88],
      ["fa-solid fa-shield-halved", "Password Hashing (bcrypt)", 84],
    ],
  },
  {
    title: "TOOLS & PRACTICES",
    items: [
      ["fa-brands fa-git-alt", "Git & GitHub", 88],
      ["fa-solid fa-laptop-code", "Product Building", 92],
      ["fa-solid fa-puzzle-piece", "Problem Solving", 90],
      ["fa-solid fa-users", "Team Collaboration", 85],
    ],
  },
];

// ============================================================
// Render Logics
// ============================================================
const chips = arr => `<div class="chips">${arr.map(t => `<span class="chip">${t}</span>`).join("")}</div>`;
const links = p => {
  if (!p.demo) return "";
  return `<div class="links-row">
    <a href="${p.demo}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
  </div>`;
};

if (avatarImage) {
  document.getElementById("avatar").innerHTML = `<img src="${avatarImage}" alt="Roy Christian">`;
}

// Render Featured Projects
document.getElementById("featured").innerHTML = projects
  .filter(p => p.featured)
  .map(p => `
    <article class="featured reveal">
      <div class="visual ${p.visualClass || ""}">
        ${p.image ? `<img src="${p.image}" alt="${p.title}">` : `<span class="ficon">${p.icon}</span>`}
      </div>
      <div class="info">
        <div class="tag-row">${(p.tags || []).map((t, i) => `<span class="ftag ${i ? "alt" : ""}">${t}</span>`).join("")}</div>
        <h3>${p.title}</h3>
        <span class="sub">${p.subtitle}</span>
        <p><b>Masalah:</b> ${p.problem}</p>
        <p><b>Solusi:</b> ${p.solution}</p>
        ${p.highlights ? `<ul class="hl-list">${p.highlights.map(h => `<li>${h}</li>`).join("")}</ul>` : ""}
        <p><b>Peran:</b> ${p.role}</p>
        ${chips(p.tech)}
        ${links(p)}
      </div>
    </article>
  `).join("");

// Render Secondary Projects (jika ada)
const secondary = projects.filter(p => !p.featured);
const projectListEl = document.getElementById("project-list");
if (secondary.length > 0) {
  projectListEl.innerHTML = secondary.map(p => `
    <article class="pcard reveal ${p.placeholder ? "placeholder" : ""}">
      <div class="top"><span class="ico">${p.icon}</span><i class="fa-regular fa-folder-open" style="color:#555"></i></div>
      <h4>${p.title}</h4>
      <span class="sub" style="color:#8a8a8a;font-size:.8rem">${p.subtitle || ""}</span>
      <p>${p.problem}</p>
      ${chips(p.tech)}
      ${links(p)}
    </article>
  `).join("");
} else {
  projectListEl.style.display = "none";
}

// Render Skills
document.getElementById("skill-list").innerHTML = skillGroups.map(g => `
  <div class="sgroup reveal">
    <h4>${g.title}</h4>
    <div class="skill-items">
      ${g.items.map(([ic, n, pct]) => `
        <div class="skill-row">
          <div class="skill-meta">
            <span class="skill-name"><i class="${ic}"></i> ${n}</span>
            <span class="skill-pct">${pct}%</span>
          </div>
          <div class="skill-track">
            <div class="skill-progress" style="width: ${pct}%;"></div>
          </div>
        </div>
      `).join("")}
    </div>
  </div>
`).join("");

// Scroll Reveal (Pop-Out Observer)
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) e.target.classList.add("show");
}), { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Active Nav Pill & Smooth Segment Transition
const navLinks = document.querySelectorAll(".pill-nav a");
let isAutoScrolling = false;

// Active pill detection during manual scroll
const secObs = new IntersectionObserver(es => {
  if (isAutoScrolling) return;
  es.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle("active", a.dataset.sec === e.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("section[id]").forEach(s => secObs.observe(s));

// Smooth Animated Segment Navigation with Button Tap Animation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const targetSec = document.querySelector(targetId);
    if (!targetSec) return;

    e.preventDefault();

    // Tactile button tap animation on navbar
    if (this.closest('.pill-nav')) {
      this.classList.add('nav-tapped');
      setTimeout(() => this.classList.remove('nav-tapped'), 400);

      // Instant active switch on navbar
      navLinks.forEach(a => a.classList.toggle('active', a === this));
    }

    isAutoScrolling = true;

    // Smooth scroll position with fixed navbar offset
    const navOffset = 70;
    const elementPosition = targetSec.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = Math.max(0, elementPosition - navOffset);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Segment Entrance Pop-In & Glowing Beam Flash
    targetSec.classList.remove('segment-focus');
    void targetSec.offsetWidth; // trigger reflow
    targetSec.classList.add('segment-focus');

    // Trigger staggered pop-out of items within the segment
    const innerReveals = targetSec.querySelectorAll('.reveal');
    innerReveals.forEach((el, index) => {
      el.classList.remove('show');
      setTimeout(() => {
        el.classList.add('show');
      }, 70 * (index + 1));
    });

    setTimeout(() => {
      isAutoScrolling = false;
    }, 750);
  });
});

// ============================================================
// Interactive Contact Functions
// ============================================================
function copyEmail() {
  const emailEl = document.getElementById("email-address");
  if (!emailEl) return;
  const emailText = emailEl.textContent.trim();

  navigator.clipboard.writeText(emailText).then(() => {
    const btn = document.getElementById("btn-copy-email");
    if (!btn) return;
    const origHTML = btn.innerHTML;
    
    btn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Tersalin!</span>';
    btn.style.background = '#22c55e';
    btn.style.color = '#0b131f';
    btn.style.borderColor = '#22c55e';

    setTimeout(() => {
      btn.innerHTML = origHTML;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2200);
  }).catch(() => {
    prompt("Salin alamat email manual:", emailText);
  });
}

function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("sender-name").value.trim();
  const email = document.getElementById("sender-email").value.trim();
  const subject = document.getElementById("sender-subject").value.trim();
  const message = document.getElementById("sender-message").value.trim();
  const feedback = document.getElementById("form-feedback");
  const btn = document.getElementById("btn-submit-message");

  if (!name || !email || !message) {
    feedback.textContent = "Mohon lengkapi semua kolom yang wajib diisi.";
    feedback.className = "form-feedback error";
    return;
  }

  const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject || "Kolaborasi Proyek"} — dari ${name}`);
  const mailtoBody = encodeURIComponent(
    `Halo Roy,\n\nNama: ${name}\nKontak/Email: ${email}\nTopik: ${subject}\n\nPesan:\n${message}\n\n---\nDikirim melalui portofolio website Roy Christian`
  );
  const mailtoUrl = `mailto:roychristian402@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  feedback.textContent = "Membuka aplikasi email Anda... 🚀";
  feedback.className = "form-feedback success";
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Membuka Email...</span>';

  setTimeout(() => {
    window.location.href = mailtoUrl;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> <span>Kirim Pesan Sekarang</span>';
  }, 600);
}
