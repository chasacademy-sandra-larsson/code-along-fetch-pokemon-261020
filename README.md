# Fetch och asynkron JavaScript

Code-along i två delar. Först ser vi vad skillnaden mellan synkron och asynkron kod är, och sedan bygger vi en Pokédex som hämtar data från [PokeAPI](https://pokeapi.co/) och visar något begripligt när den laddar, när det går fel och när svaret är tomt.

## Kom igång

Öppna mappen i VS Code och starta Live Server. Öppna DevTools (F12) och ha både **Console** och **Network** synliga.

## Del 1: Synkront och asynkront

`1-synkront-asynkront/` är en sida med fyra knappar. Varje knapp kör en kort demo och loggar resultatet både på sidan och i konsolen. Koden ligger i `js/main.js`. Gissa vad som händer innan du klickar.

Klockan högst upp går så länge sidan lever. Stannar den, och det går inte att skriva i textfältet, är tråden upptagen.

1. **Uppifrån och ner.** Synkron kod, även funktionsanrop.
2. **Blockera i 3 sekunder.** En loop som fryser hela sidan. Så skulle det vara om fetch var synkron.
3. **Vänta i 3 sekunder.** Samma väntan med `setTimeout`, och sidan lever.
4. **setTimeout med 0 ms.** Kommer ändå sist.

## Del 2: Pokédex

`2-pokedex/` hämtar alla pokémon av en typ. HTML:en och CSS:en är klara, och vi skriver JavaScripten i `js/main.js` steg för steg.

1. **Hämta och logga.** En egen `async`-funktion med `fetch`, `await` och `response.json()`.
2. **Rendera.** Ett `li` per pokémon.
3. **404.** `fetch` kastar inget fel när något inte finns. Titta på `response.ok`.
4. **Tomt.** Svaret kom, men listan är tom.
5. **Laddar och fel.** `try...catch`.

### Testa alla lägen

| Läge | Så här får du fram det |
| --- | --- |
| Det gick bra | Sök på `fire`, `water` eller `dragon` |
| Laddar | Network → välj **Slow 4G** i stället för No throttling |
| Tomt svar | Sök på `stellar`. Typen finns, men har inga pokémon |
| Fel: finns inte | Sök på `eld`. Servern svarar 404 |
| Fel: inget svar | Network → välj **Offline** |

## Det här övar du på

- **Synkront och asynkront.** En tråd, en sak i taget, och varför man inte vill att den väntar.
- **Promise, `async` och `await`.**
- **fetch och JSON.** Två steg: först svaret, sedan `response.json()`.
- **HTTP i Network-fliken.** Metod, statuskod och svar.
- **De tre lägena:** laddar, fel och tomt. Det är ett G-krav i u02.

## Bygg vidare

1. Visa en bild på varje pokémon. Id:t står näst sist i `url`, och bilden ligger på `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/<id>.png`.
2. Felet vid Offline säger bara "Failed to fetch". Visa något begripligare. Tips: det felet är ett `TypeError`.
3. Stäng av knappen medan det laddar, och slå på den igen i `finally`.
4. Klicka på en pokémon för att hämta mer om den från `url`, till exempel vikt och förmågor.

*// Sandra*
