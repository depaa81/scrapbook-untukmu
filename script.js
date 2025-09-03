let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
  pages.forEach((p, i) => {
    p.style.display = (i === index) ? "flex" : "none";
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

// tampilkan halaman pertama
showPage(currentPage);
