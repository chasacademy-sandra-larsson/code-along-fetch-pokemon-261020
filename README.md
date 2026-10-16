# Fetch och asynkron JavaScript

Code-along i två delar. Först ser vi vad skillnaden mellan synkron och asynkron kod är, och sedan bygger vi en Pokédex som hämtar data från [PokeAPI](https://pokeapi.co/) och visar något begripligt när den laddar, när det går fel och när svaret är tomt.

## Kom igång

Öppna mappen i VS Code och starta Live Server. Öppna DevTools (F12) och ha både **Console** och **Network** synliga.

Det måste vara Live Server. Med `file://` får fetch inte läsa filer, och då fungerar inte steg 2 i Pokédexen.

## Del 1: Synkront och asynkront

`1-synkront-asynkront/` är en sida med sju knappar och en extra. Varje knapp kör en kort demo och loggar resultatet både på sidan och i konsolen. Koden ligger i `js/main.js`. Gissa vad som händer innan du klickar.

Klockan högst upp går så länge sidan lever. Stannar den, och det går inte att skriva i textfältet, är tråden upptagen.

1. **Uppifrån och ner.** Synkron kod, även funktionsanrop.
2. **Blockera i 3 sekunder.** En loop som fryser hela sidan. Så skulle det vara om fetch var synkron.
3. **Vänta i 3 sekunder.** Samma väntan med `setTimeout`, och sidan lever.
4. **setTimeout med 0 ms.** Kommer ändå sist.
5. **Vad returnerar fetch?** Ett Promise, inte datan.
6. **Det vanligaste felet.** Att använda svaret innan det har kommit.
7. **async och await.** `await` pausar funktionen, inte programmet.
8. **Extra: Vem går först?** Varför `Promise.then` går före `setTimeout`.

## Del 2: Pokédex

`2-pokedex/` hämtar alla pokémon av en typ. HTML:en och CSS:en är klara, och vi skriver JavaScripten i `js/main.js` steg för steg.

1. Hämta elementen från DOM:en.
2. Första fetch, mot JSON-filen `data/fire.json`.
3. Rendera listan.
4. Byt till det riktiga API:et. Samma form på datan, ny adress.
5. `fetch` kastar inget fel vid 404. Titta på `response.ok`.
6. Laddar och fel med `try...catch...finally`.
7. Tomt svar.

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
- **Promise, `.then`, `async` och `await`.**
- **fetch och JSON.** Två steg: först svaret, sedan `response.json()`.
- **HTTP i Network-fliken.** Metod, statuskod och svar.
- **De tre lägena:** laddar, fel och tomt. Det är ett G-krav i u02.
- **Två sorters fel.** Servern svarar med fel statuskod, eller servern svarar inte alls.

## Bygg vidare

1. Klicka på ett kort för att hämta mer om den pokémonen, till exempel vikt och förmågor, från `url` i listan.
2. Knappen stängs av medan det laddar. Ta bort det och sök två gånger snabbt. Kan fel lista hamna på sidan?
3. Visa bara de 20 första och lägg till en knapp **Visa fler**.
4. Hämta listan över alla typer från `https://pokeapi.co/api/v2/type` och fyll `datalist` från den i stället för att ha typerna i HTML:en.

*// Sandra*
