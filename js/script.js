// buat toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika list menu diclick
document.querySelector("#list").onclick = () => {
  navbarNav.classList.toggle("active");
};
// KLIK DILUAR SIDEBAR UNTUK MENGHILANGKAN NAVIGASI/LIST
const daftarList = document.querySelector("#list");
document.addEventListener("click", function (e) {
  if (!daftarList.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
}); // artinya selama kita klik diluar list maka aktifnya hilang
//toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// Klik diluar elemen
const searchBar = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (!searchBar.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
// Toggle Save
const bookmarksItem = document.querySelector(".bookmarks-item");
document.querySelector("#bookmark-button").onclick = (e) => {
  bookmarksItem.classList.toggle("active");
  e.preventDefault();
};
// toggle off
const bitem = document.querySelector("#bookmark-button");
document.addEventListener("click", function (e) {
  if (!bitem.contains(e.target) && !bookmarksItem.contains(e.target)) {
    bookmarksItem.classList.remove("active");
  }
});
