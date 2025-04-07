const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const content = urlParams.get("content");

document.getElementById("title").textContent = title || "No title found";
document.getElementById("content").innerHTML = content || "<p>Failed to load content.</p>";

// Dark mode logic
const toggleButton = document.getElementById("toggle-darkmode");
const prefersDark = localStorage.getItem("reader-dark") === "true";

if (prefersDark) {
  document.body.classList.add("dark");
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("reader-dark", document.body.classList.contains("dark"));
});
