const DUCKMATH = "https://cdn.jsdelivr.net/gh/freezenovasrl/cdn/duckmath.svg";
const stage = document.getElementById("stage");

function renderStickmanFromHash() {
  // Accepts: ...svg#/class/<symbol-id>
  const m = location.hash.match(/^#\/class\/([a-zA-Z0-9_-]+)$/);
  if (!m) {
    stage.innerHTML = '<p><em>Click a stickman class above.</em></p>';
    return;
  }
  const id = m[1];
  stage.innerHTML = `
    <svg width="240" height="240" role="img" aria-label="${id}">
      <use href="${DUCKMATH}#${id}"></use>
    </svg>
    <p class="stickman-label">Class: <code>${id}</code></p>
  `;
}

window.addEventListener("hashchange", renderStickmanFromHash);
renderStickmanFromHash();

// ---- Search filter for #games ----
const searchInput = document.getElementById("searchInput");
const gamesContainer = document.getElementById("games");

function filterGames() {
  const q = searchInput.value.trim().toLowerCase();
  gamesContainer.querySelectorAll("a").forEach(a => {
    const label = a.querySelector("img")?.alt?.toLowerCase() ?? a.href;
    a.style.display = label.includes(q) ? "" : "none";
  });
}
searchInput.addEventListener("input", filterGames);
document.getElementById("searchBtn").addEventListener("click", filterGames);


const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});
