// Pokédex: hämta alla pokémon av en viss typ från PokeAPI.
//
// Varje gång vi hämtar något kan det gå på fyra sätt, och sidan
// ska visa något begripligt i alla fyra:
//
//   laddar  →  det gick bra
//           →  det gick bra, men svaret var tomt
//           →  det gick fel
//
// Vi börjar mot en JSON-fil i projektet och byter sedan till ett
// riktigt API. Datan har samma form i båda, så bara adressen ändras.
//
// HTML:en och CSS:en är klara. Titta i index.html efter id:n.

// Steg 1: Hämta elementen från DOM:en
// ---------------------------------------------------------------

const form = document.querySelector("#search-form");
const input = document.querySelector("#type-input");
const searchButton = document.querySelector("#search-button");
const statusText = document.querySelector("#status");
const list = document.querySelector("#pokemon-list");

// Steg 2: Första fetch, mot en JSON-fil
// ---------------------------------------------------------------
// Öppna data/fire.json och titta på formen först.
//
// Skriv en async-funktion som hämtar "data/fire.json" med fetch,
// gör om svaret med .json() och loggar det. Anropa den.
//
// Varför behövs två await? Vad är det fetch ger oss, om det inte
// är datan? Logga response och titta.
//
// Testa: stava fel på filnamnet. Vad händer i konsolen, och vad
// står i Network-fliken?



// Steg 3: Rendera listan
// ---------------------------------------------------------------
// Varje post i data.pokemon ser ut så här:
//   { pokemon: { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" } }
//
// Bilden finns inte med, men den ligger på en adress som bygger på id:t,
// och id:t står näst sist i url:en. Hur får vi ut det?
//
// renderPokemonList(entries) tömmer listan och lägger till ett kort per post.
//
// createPokemonCard(pokemon) bygger ett kort. Strukturen måste matcha CSS:en:
//
// <li class="pokemon-card">
//   <img class="pokemon-card-image" src="…/4.png" alt="" loading="lazy">
//   <h2 class="pokemon-card-name">charmander</h2>
//   <p class="pokemon-card-id">#4</p>
// </li>
//
// Varför alt="" och inte alt="charmander"?

const SPRITE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";



// Steg 4: Byt till det riktiga API:et
// ---------------------------------------------------------------
// fetchPokemonOfType(type) hämtar från `${API_URL}/type/${type}`
// och returnerar listan med pokémon.
//
// Lyssna på submit i formuläret och anropa den med det som står i
// fältet. Öppna Network-fliken och titta på anropet: metod,
// statuskod och svar.

const API_URL = "https://pokeapi.co/api/v2";



// Steg 5: fetch kastar inget fel vid 404
// ---------------------------------------------------------------
// Sök på "eld". Vad står i konsolen? Vad står i Network-fliken?
//
// Titta på response.ok och response.status, och kasta ett eget fel
// med throw new Error("…") när svaret inte är okej.



// Steg 6: Laddar och fel, med try...catch...finally
// ---------------------------------------------------------------
// showStatus(variant, message) sätter text och läge på statusraden.
// CSS:en har tre lägen: "loading", "error" och "empty".
//
// Innan anropet:  visa att det laddar och stäng av knappen.
// catch:          visa felet.
// finally:        slå på knappen igen.
//
// Testa med Slow 4G och Offline i Network-fliken.
// Vad är skillnaden mellan felet vid "eld" och felet vid Offline?



// Steg 7: Tomt svar
// ---------------------------------------------------------------
// Sök på "stellar". Typen finns, men vad får vi tillbaka?
// Det är inte ett fel, men det ska inte heller se ut som en trasig sida.
