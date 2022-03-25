let pages = [];
let mainPage = "";
function addPage(id) {
  hidePage(id);
  pages.push(id);
}
function showPage(id) {
  document.getElementById(id).style.display = "";
}
function hidePage(id) {
  document.getElementById(id).style.display = "none";
}
function pagesInit() {
  pages.forEach((page) => {
    hidePage(page);
  });
  if (window.location.hash.substring(1) == "" && mainPage !== "") {
    showPage(mainPage);
  } else {
    showPage(window.location.hash.substring(1));
  }
}
function setMainPage(id) {
  pages.forEach((page) => {
    hidePage(page);
  });
  mainPage = id;
  showPage(id);
}
function goToPage(id) {
  hidePage(window.location.hash.substring(1));
  mainPage !== "" && hidePage(mainPage);
  showPage(id);
}
