// Pokédex: hämta alla pokémon av en viss typ från PokeAPI.
//
// När vi hämtar något kan det gå på tre sätt, och sidan ska visa
// något begripligt i alla tre: det laddar, det gick fel, eller
// svaret var tomt.
//
// HTML:en och CSS:en är klara. Titta i index.html efter id:n.

const form = document.querySelector("#search-form");
const input = document.querySelector("#type-input");
const statusText = document.querySelector("#status");
const list = document.querySelector("#pokemon-list");

// Statusraden har tre lägen i CSS:en: "loading", "error" och "empty"

function showStatus(variant, message) {
  statusText.dataset.variant = variant;
  statusText.textContent = message;
}

// Allt vi skriver hamnar i submit-lyssnaren, ett steg i taget.
//
// Steg 1: Hämta och logga
//   Lyssna på submit. Hämta https://pokeapi.co/api/v2/type/<typ>
//   med fetch, gör om svaret med .json() och logga det.
//   Varför två await? Logga response och titta.
//   Öppna Network-fliken: metod, statuskod och svar.
//
// Steg 2: Rendera
//   Ett li per pokémon i data.pokemon, med namnet som text.
//
// Steg 3: 404
//   Sök på "eld". Varför syns inget fel i konsolen?
//   Kolla response.ok och kasta ett eget fel.
//
// Steg 4: Tomt
//   Sök på "stellar". Visa något begripligt när listan är tom.
//
// Steg 5: Laddar och fel
//   Visa "Laddar…" innan anropet. Lägg allt i try...catch och
//   visa felet i catch. Testa med Slow 4G och Offline i Network-fliken.

