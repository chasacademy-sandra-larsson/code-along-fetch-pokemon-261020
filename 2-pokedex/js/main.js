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

// Steg 1: Hämta och logga
//   Skriv async function fetchPokemonOfType(type). Hämta
//   https://pokeapi.co/api/v2/type/<typ> med fetch, gör om svaret
//   med .json(), logga det och returnera data.pokemon.
//   Varför två await? Logga response och titta.
//
//   Lyssna på submit och anropa funktionen med det som står i
//   fältet. Varför behövs await även här?
//   Öppna Network-fliken: metod, statuskod och svar.
//

const BASE_URL = "https://pokeapi.co/api/v2/type/"

async function fetchPokemonOfType(type) {
  try {
    // Medan data hämtas från Pokemon API så blockeras inget med att använda await. Så datat kommer när kommer.
    const response = await fetch(`${BASE_URL}${type}`);

    // fetch den kastar inget fel vid 4xx, så det får vi kolla själva.
    if (!response.ok) {
      throw new Error(`Det finns ingen typ som heter ${type}`);
    }

    const result = await response.json();

    return result.pokemon;

  } catch (error) {
    console.log("Error", error);
  }
}

// Steg 2: Rendera
//   I submit-lyssnaren: ett li per pokémon, med namnet som text.
//

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const type = input.value.trim().toLowerCase();

  // Laddar, visas tills svaret har kommit
  showStatus("loading", "Laddar...");

  list.replaceChildren();

  try {
    
    // Hämta data som är av en viss type, typ "fire", "water2"
    const entries = await fetchPokemonOfType(type);
    console.log(entries);

    // Om entries är en tom array
    if(entries.length === 0) {
         showStatus("empty", `Det finns inga pokemons av typen ${type}`);
         return;
    }

    // Loopa igen varje post
    for(const entry of entries) {
      const li = document.createElement("li");
      console.log(entry);
      li.textContent = entry.pokemon.name;
      list.append(li);
    }

    showStatus("fulfilled", `${entries.length} pokemons av typen ${type}`);

  } catch (error) {
     console.log(error);
     showStatus("error", error.message);
  }
});

// Steg 3: 404
//   Sök på "eld". Varför syns inget fel i konsolen?
//   Kolla response.ok i fetchPokemonOfType och kasta ett eget fel.
//
// Steg 4: Tomt
//   Sök på "stellar". Visa något begripligt när listan är tom.
//
// Steg 5: Laddar och fel
//   I submit-lyssnaren: visa "Laddar…" innan anropet. Lägg anropet
//   och renderingen i try...catch och visa felet i catch.
//   Testa med Slow 4G och Offline i Network-fliken.
