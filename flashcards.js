// ============================================
// FLASHCARDS — Pflege 15: Abendroutine
// 48 carduri în 6 categorii (8 fiecare)
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

const flashcardsData = [
    // === 1. ABENDROUTINE (8) ===
    { de: "der Abend · die Abende", ro: "🌅 seara · masculin · 18:00-22:00", audio: "audio/letters/abend.wav" },
    { de: "am Abend", ro: "🌅 seara (când) · construcție Dativ", audio: "audio/letters/am-abend.wav" },
    { de: "heute Abend", ro: "🌅 diseară", audio: "audio/letters/heute-abend.wav" },
    { de: "die Abendroutine", ro: "🌙 rutina de seară · 5 pași stabili", audio: "audio/letters/abendroutine.wav" },
    { de: "die Entspannung", ro: "😌 relaxarea · feminin", audio: "audio/letters/entspannung.wav" },
    { de: "müde", ro: "😴 obosit", audio: "audio/letters/muede.wav" },
    { de: "schläfrig", ro: "😴 somnoros", audio: "audio/letters/schlaefrig.wav" },
    { de: "ins Bett gehen", ro: "🛏️ a se duce la culcare", audio: "audio/letters/ins-bett-gehen.wav" },

    // === 2. ABENDESSEN (8) ===
    { de: "das Abendessen", ro: "🍽️ cina (oficial)", audio: "audio/letters/abendessen.wav" },
    { de: "das Abendbrot", ro: "🍞 cina (tradițional · pâinea de seară)", audio: "audio/letters/abendbrot.wav" },
    { de: "das Brot", ro: "🍞 pâinea · neutru", audio: "audio/letters/brot.wav" },
    { de: "der Belag", ro: "🧀 topping (mezel/brânză)", audio: "audio/letters/belag.wav" },
    { de: "der Käse", ro: "🧀 brânza · 🚨 MASCULIN în DE!", audio: "audio/letters/kaese.wav" },
    { de: "die Wurst · die Würste", ro: "🌭 cârnatul · cu Umlaut", audio: "audio/letters/wurst.wav" },
    { de: "die Suppe", ro: "🍲 supa · ușoară seara", audio: "audio/letters/suppe.wav" },
    { de: "der Kräutertee", ro: "🍵 ceaiul de plante · Kamille/Melisse", audio: "audio/letters/kraeutertee.wav" },

    // === 3. PFLEGE AM ABEND (toaleta) (8) ===
    { de: "die Zähne putzen", ro: "🦷 a se spăla pe dinți", audio: "audio/letters/zaehne-putzen.wav" },
    { de: "die Zahnbürste", ro: "🪥 periuța de dinți", audio: "audio/letters/zahnbuerste.wav" },
    { de: "die Zahnpasta", ro: "🪥 pasta de dinți", audio: "audio/letters/zahnpasta.wav" },
    { de: "die Zahnprothese", ro: "🦷 proteza dentară · scoasă seara!", audio: "audio/letters/zahnprothese.wav" },
    { de: "das Gesicht waschen", ro: "🧖‍♀️ a se spăla pe față", audio: "audio/letters/gesicht-waschen.wav" },
    { de: "die Hände waschen", ro: "🧼 a se spăla pe mâini", audio: "audio/letters/haende-waschen.wav" },
    { de: "die Seife", ro: "🧼 săpunul", audio: "audio/letters/seife.wav" },
    { de: "auf die Toilette gehen", ro: "🚽 a merge la toaletă · ÎNTÂI înainte de pat", audio: "audio/letters/toilette-gehen.wav" },

    // === 4. SCHLAFANZUG + BETT (8) ===
    { de: "der Schlafanzug", ro: "👕 pijamaua (set)", audio: "audio/letters/schlafanzug.wav" },
    { de: "das Nachthemd", ro: "👗 cămașă de noapte (femei)", audio: "audio/letters/nachthemd.wav" },
    { de: "die Pantoffeln", ro: "🥿 papucii de casă · plural", audio: "audio/letters/pantoffeln.wav" },
    { de: "das Bett · die Betten", ro: "🛏️ patul · neutru", audio: "audio/letters/bett.wav" },
    { de: "die Bettdecke", ro: "🛌 plapuma", audio: "audio/letters/bettdecke.wav" },
    { de: "das Kissen · die Kissen", ro: "🛏️ perna", audio: "audio/letters/kissen.wav" },
    { de: "das Laken", ro: "🛏️ cearșaful", audio: "audio/letters/laken.wav" },
    { de: "der Nachttisch", ro: "🛏️ noptiera · cu pahar de apă", audio: "audio/letters/nachttisch.wav" },

    // === 5. MEDIKAMENTE + SCHLAFHILFE (8) ===
    { de: "die Abendmedikamente", ro: "💊 medicamentele de seară · plural", audio: "audio/letters/abendmedikamente.wav" },
    { de: "die Tablette · die Tabletten", ro: "💊 pastila · cu pahar de apă", audio: "audio/letters/tablette.wav" },
    { de: "der Blutdruck", ro: "🩺 tensiunea arterială · adesea seara", audio: "audio/letters/blutdruck.wav" },
    { de: "das Schlafmittel", ro: "💊 somniferul · 🚨 PRUDENȚĂ MAXIMĂ!", audio: "audio/letters/schlafmittel.wav" },
    { de: "die Schlafhilfe", ro: "🌿 ajutorul pentru somn (preferi natural)", audio: "audio/letters/schlafhilfe.wav" },
    { de: "der Kamillentee", ro: "🌼 ceaiul de mușețel · calmant blând", audio: "audio/letters/kamillentee.wav" },
    { de: "der Melissetee", ro: "🌿 ceaiul de melisă · anti-anxietate", audio: "audio/letters/melissetee.wav" },
    { de: "warme Milch mit Honig", ro: "🥛 lapte cald cu miere · tradițional", audio: "audio/letters/milch-honig.wav" },

    // === 6. SOLLEN/DÜRFEN + VERBE SEPARABILE SEARA (8) ===
    { de: "sollen → soll", ro: "📋 TREBUIE (plan medical) · Sie sollen die Tablette nehmen", audio: "audio/letters/sollen.wav" },
    { de: "dürfen → darf", ro: "✅ AM VOIE (permisiune) · Darf ich Wein trinken?", audio: "audio/letters/duerfen.wav" },
    { de: "ausziehen", ro: "👔 a (se) dezbrăca · separabil · ziehe AUS", audio: "audio/letters/ausziehen.wav" },
    { de: "anziehen", ro: "👕 a (se) îmbrăca · separabil · ziehe AN", audio: "audio/letters/anziehen.wav" },
    { de: "ausschalten", ro: "🔌 a stinge · separabil · schalte AUS", audio: "audio/letters/ausschalten.wav" },
    { de: "zuschließen", ro: "🔒 a încuia · separabil · schließe ZU", audio: "audio/letters/zuschliessen.wav" },
    { de: "einschlafen", ro: "😴 a adormi · separabil · schläft EIN", audio: "audio/letters/einschlafen.wav" },
    { de: "Gute Nacht! Schlafen Sie gut!", ro: "🌙 Noapte bună! Somn ușor!", audio: "audio/letters/gute-nacht.wav" }
];

let currentFlashcardIndex = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="flashcard-intro">
            <p>🎯 <strong>48 flashcards în 6 categorii</strong> — Abendroutine · Abendessen · Pflege seara · Schlafanzug+Bett · Medikamente+Schlafhilfe · sollen/dürfen+verbe separabile.</p>
        </div>
        <div class="flashcard-wrapper">
            <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
                <button class="flashcard-audio-btn" id="flashcard-audio-btn" onclick="event.stopPropagation(); playFlashcardAudio()" aria-label="Asculta pronunția">🔊</button>
                <div class="flashcard-content">
                    <div class="de" id="flashcard-de"></div>
                    <div class="ro" id="flashcard-ro"></div>
                </div>
                <div class="flashcard-hint">👆 Apasă cardul pentru traducere · 🔊 pentru pronunție</div>
                <audio id="flashcard-audio" preload="none"></audio>
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-btn" onclick="prevFlashcard()">← Înapoi</button>
                <span class="flashcard-counter" id="flashcard-counter">1 / 48</span>
                <button class="flashcard-btn" onclick="nextFlashcard()">Înainte →</button>
            </div>
            <div class="flashcard-progress">
                <div class="flashcard-progress-fill" id="flashcard-progress-fill"></div>
            </div>
        </div>
    `;
    showFlashcard(0);
}

function showFlashcard(index) {
    const card = flashcardsData[index];
    if (!card) return;
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const progress = document.getElementById('flashcard-progress-fill');
    const audio = document.getElementById('flashcard-audio');
    if (de) de.textContent = card.de;
    if (ro) ro.textContent = card.ro;
    if (audio && card.audio) { audio.pause(); audio.src = card.audio; audio.load(); }
    if (counter) counter.textContent = `${index + 1} / ${flashcardsData.length}`;
    if (progress) progress.style.width = ((index + 1) / flashcardsData.length * 100) + '%';
    isFlipped = false;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.remove('flipped');
}

function playFlashcardAudio() {
    const audio = document.getElementById('flashcard-audio');
    if (!audio || !audio.src) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function flipFlashcard() {
    isFlipped = !isFlipped;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

buildFlashcards();
