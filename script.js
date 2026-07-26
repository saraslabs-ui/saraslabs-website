const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const cursorGlow = document.getElementById("cursorGlow");
window.addEventListener("pointermove", event => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const screenshotData = [
  ["Dashboard","assets/screenshots/dashboard.png"],
  ["Login","assets/screenshots/login.png"],
  ["Product Master","assets/screenshots/product-master.png"],
  ["Purchase Entry","assets/screenshots/purchase-entry.png"],
  ["Sales Entry","assets/screenshots/sales-entry.png"],
  ["Inventory","assets/screenshots/inventory.png"],
  ["Party Management","assets/screenshots/party-management.png"],
  ["Reports","assets/screenshots/reports.png"],
  ["Accounts Reports","assets/screenshots/reports-accounts.png"],
  ["Payments","assets/screenshots/payments.png"],
  ["Delivery Challan","assets/screenshots/delivery-challan.png"],
  ["Estimate Entry","assets/screenshots/estimate-entry.png"],
  ["Sale Return","assets/screenshots/sale-return.png"],
  ["Stock Ledger","assets/screenshots/stock-ledger.png"],
  ["Expiry Report","assets/screenshots/expiry-report.png"],
  ["Low Stock Report","assets/screenshots/low-stock-report.png"],
  ["Data Migration Wizard","assets/screenshots/data-migration-wizard.png"],
  ["Settings","assets/screenshots/settings.png"],
  ["Firm Profile","assets/screenshots/firm-profile.png"]
];

const heroSlider = document.getElementById("heroSlider");
let heroIndex = 0;
setInterval(() => {
  heroIndex = (heroIndex + 1) % 6;
  heroSlider.style.opacity = "0";
  setTimeout(() => {
    heroSlider.src = screenshotData[heroIndex][1];
    heroSlider.style.opacity = "1";
  }, 230);
}, 3000);

const showcaseImage = document.getElementById("showcaseImage");
const shotTitle = document.getElementById("shotTitle");
const shotCount = document.getElementById("shotCount");
const thumbStrip = document.getElementById("thumbStrip");
let currentShot = 0;

screenshotData.forEach(([title, src], index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.innerHTML = `<img src="${src}" alt="${title} thumbnail" loading="lazy">`;
  button.addEventListener("click", () => showShot(index));
  thumbStrip.appendChild(button);
});

function showShot(index) {
  currentShot = (index + screenshotData.length) % screenshotData.length;
  const [title, src] = screenshotData[currentShot];
  showcaseImage.style.opacity = "0";
  setTimeout(() => {
    showcaseImage.src = src;
    shotTitle.textContent = title;
    shotCount.textContent = `${String(currentShot + 1).padStart(2,"0")} / ${screenshotData.length}`;
    showcaseImage.style.opacity = "1";
    [...thumbStrip.children].forEach((el, i) => el.classList.toggle("active", i === currentShot));
  }, 180);
}
showShot(0);
document.getElementById("prevShot").addEventListener("click", () => showShot(currentShot - 1));
document.getElementById("nextShot").addEventListener("click", () => showShot(currentShot + 1));

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
document.getElementById("showcaseWindow").addEventListener("click", () => {
  lightboxImg.src = screenshotData[currentShot][1];
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
});
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}
document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });

document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("pointermove", event => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-3px)`;
  });
  card.addEventListener("pointerleave", () => card.style.transform = "");
});
