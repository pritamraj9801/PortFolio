export default function ThemeToggle() {
  return (
    <button id="toogleThemeButton" type="button" onClick={ToggleTheme}>
      Toggle Theme
    </button>
  );
}
function ToggleTheme() {
  let bodyElement = document.getElementsByTagName("body")[0];
  if (bodyElement.classList.contains("theme-light")) {
    bodyElement.classList.remove("theme-light");
    bodyElement.classList.add("theme-dark");
  } else {
    bodyElement.classList.remove("theme-dark");
    bodyElement.classList.add("theme-light");
  }
}
