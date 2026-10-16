// Synkront och asynkront
//
// JavaScript i webbläsaren har en enda tråd. Den gör en sak i taget,
// och medan den gör den saken kan den inte göra något annat: inte
// rita om sidan, inte reagera på klick, inte ta emot tangenttryck.
//
// Synkron kod körs rad för rad, och nästa rad väntar tills den förra
// är klar. Asynkron kod startar något som tar tid (en timer, ett
// nätverksanrop) och går vidare direkt. Svaret tas om hand senare,
// när tråden är ledig.
//
// Klicka på knapparna i ordning. Gissa först, kör sedan.
// Skriv din gissning efter "Min gissning:" innan du klickar.

// Klockan: ett hjärtslag för sidan
// ---------------------------------------------------------------
// setInterval kör funktionen var tiondels sekund, men bara när tråden
// är ledig. Står klockan still är tråden upptagen med något annat.

const clock = document.querySelector("#clock");
const pageStart = performance.now();

setInterval(() => {
  const seconds = (performance.now() - pageStart) / 1000;
  clock.textContent = `${seconds.toFixed(1)} s`;
}, 100);

// Loggen
// ---------------------------------------------------------------
// log() skriver både i konsolen och på sidan, med hur lång tid som
// gått sedan du klickade.

const logList = document.querySelector("#log");
const logTitle = document.querySelector("#log-title");
let demoStart = 0;

function startDemo(title) {
  demoStart = performance.now();
  logList.replaceChildren();
  logTitle.textContent = title;
  console.clear();
  console.log(`--- ${title} ---`);
}

function log(message, value) {
  const seconds = ((performance.now() - demoStart) / 1000).toFixed(2);

  if (value === undefined) {
    console.log(message);
  } else {
    console.log(message, value);
  }

  const time = document.createElement("span");
  time.className = "log-time";
  time.textContent = `${seconds} s`;

  const li = document.createElement("li");
  li.append(time, message);
  logList.append(li);
}

// Demo 1: Synkront, uppifrån och ner
// ---------------------------------------------------------------
// Gissa: i vilken ordning loggas raderna?
// Min gissning:

function demoSync() {
  startDemo("1. Uppifrån och ner");

  log("A: först");
  sayHello();
  log("D: sist");
}

function sayHello() {
  log("B: inuti sayHello");
  log("C: fortfarande inuti sayHello");
}

// Demo 2: Synkron kod som tar lång tid
// ---------------------------------------------------------------
// En loop som snurrar i tre sekunder och inte gör något annat.
// Titta på klockan och försök skriva i textfältet medan den kör.
//
// Gissa: syns "Start" i loggen innan loopen börjar?
// Min gissning:
//
// Så skulle det se ut om fetch var synkron: hela sidan fryser tills
// servern svarar.

function demoBlock() {
  startDemo("2. Blockera i 3 sekunder");

  log("Start, nu fryser sidan");

  const end = Date.now() + 3000;
  while (Date.now() < end) {
    // Gör ingenting, bara upptar tråden
  }

  log("Klar, nu lever sidan igen");
}

// Demo 3: Vänta asynkront med setTimeout
// ---------------------------------------------------------------
// setTimeout säger åt webbläsaren: kör den här funktionen om tre
// sekunder. Sedan går koden vidare direkt.
//
// Gissa: i vilken ordning loggas raderna, och fryser sidan?
// Min gissning:

function demoTimeout() {
  startDemo("3. Vänta i 3 sekunder");

  log("A: innan setTimeout");

  setTimeout(() => {
    log("B: inuti setTimeout, tre sekunder senare");
  }, 3000);

  log("C: efter setTimeout");
}

// Demo 4: setTimeout med 0 millisekunder
// ---------------------------------------------------------------
// Gissa: om vi väntar 0 ms, kommer B då före C?
// Min gissning:

function demoTimeoutZero() {
  startDemo("4. setTimeout med 0 ms");

  log("A: innan setTimeout");

  setTimeout(() => {
    log("B: inuti setTimeout");
  }, 0);

  log("C: efter setTimeout");
}

// Knapparna
// ---------------------------------------------------------------
// En lyssnare för alla knappar, som i todolistan. data-demo på
// knappen säger vilken funktion som ska köras.

const demos = {
  sync: demoSync,
  block: demoBlock,
  timeout: demoTimeout,
  timeoutZero: demoTimeoutZero,
};

document.querySelector("#demo-buttons").addEventListener("click", (event) => {
  const button = event.target.closest("[data-demo]");
  if (button === null) {
    return;
  }

  demos[button.dataset.demo]();
});
