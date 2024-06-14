const dropdownTop = document.getElementById("dropdownTop");
const dropdownBottom = document.getElementById("dropdownBottom");

dropdownBottom.style.display = "none";

dropdownTop.addEventListener("click", () => {
  if (dropdownBottom.style.display === "none") {
    dropdownBottom.style.display = "block";
  } else {
    dropdownBottom.style.display = "none";
  }
});
