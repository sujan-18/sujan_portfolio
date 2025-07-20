// This runs when the page loads
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }
};

// This is the function that runs when you click the toggle button
function toggle_dark_mode() {
  const root = document.documentElement;
  root.classList.toggle("dark");

  // Save user's choice to localStorage
  if (root.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
