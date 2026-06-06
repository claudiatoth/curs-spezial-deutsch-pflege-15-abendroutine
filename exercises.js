// ============================================
// EXERCISES.JS — Pflege 15: Abendroutine
// 7 exerciții × 10 itemi = 70 itemi total
// Schreiben form: forms.gle/kUztoeQGWNHQRQpg9
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    if (item.sentence) {
        const sentenceClean = item.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
        return item.accept.some(a => {
            const full = sentenceClean.replace(/____+/g, a);
            return normalizeAnswer(full) === u;
        });
    }
    return false;
}

// EX 1: Match seara + pijama + pat
const ex1Data = [
    { id: 'a', de: 'der Abend', accept: ['seara', 'seara (substantiv)'], correct: 'seara' },
    { id: 'b', de: 'das Abendessen', accept: ['cina'], correct: 'cina' },
    { id: 'c', de: 'der Schlafanzug', accept: ['pijama', 'pijamaua'], correct: 'pijamaua (set)' },
    { id: 'd', de: 'das Nachthemd', accept: ['camasa de noapte', 'camasa noapte'], correct: 'cămașă de noapte' },
    { id: 'e', de: 'die Bettdecke', accept: ['plapuma', 'plapuma (de pat)'], correct: 'plapuma' },
    { id: 'f', de: 'der Kräutertee', accept: ['ceai de plante', 'ceai plante', 'ceaiul de plante'], correct: 'ceaiul de plante' },
    { id: 'g', de: 'die Zahnprothese', accept: ['proteza dentara', 'proteza'], correct: 'proteza dentară (scoasă seara!)' },
    { id: 'h', de: 'das Schlafmittel', accept: ['somnifer', 'somniferul'], correct: 'somniferul (PRUDENȚĂ!)' },
    { id: 'i', de: 'einschlafen', accept: ['a adormi', 'adormi'], correct: 'a adormi (separabil)' },
    { id: 'j', de: 'müde', accept: ['obosit', 'obosita'], correct: 'obosit/obosită' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌙 Scrie traducerea</strong> pentru vocabularul rutinei de seară.</div>';
    ex1Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇩🇪 ${it.de}</label><input type="text" id="ex1-${it.id}" placeholder="Scrie traducerea..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx1() { ex1Data.forEach(it => { const i = document.getElementById(`ex1-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex1-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 2: sollen vs müssen vs dürfen
const ex2Data = [
    { id: 'a', sentence: 'Sie ____ um 21 Uhr die Blutdrucktablette nehmen. (TREBUIE — plan)', translation: 'TREBUIE (pentru că doctorul a scris) la 21 pastila.', correct: 'sollen', accept: ['sollen'] },
    { id: 'b', sentence: '____ ich Wein trinken? (AM VOIE?)', translation: 'AM VOIE să beau vin?', correct: 'Darf', accept: ['darf'] },
    { id: 'c', sentence: 'Ich ____ jetzt schlafen, ich bin so müde. (TREBUIE — necesitate)', translation: 'TREBUIE să dorm (corpul cere).', correct: 'muss', accept: ['muss'] },
    { id: 'd', sentence: 'Sie ____ kein Schlafmittel ohne Rezept. (NU AVEȚI VOIE)', translation: 'NU AVEȚI VOIE somnifere fără rețetă.', correct: 'dürfen', accept: ['dürfen', 'duerfen'] },
    { id: 'e', sentence: 'Was ____ ich Ihnen zum Tee machen? (TREBUIE — sfat, eu)', translation: 'Ce SĂ vă fac la ceai?', correct: 'soll', accept: ['soll'] },
    { id: 'f', sentence: 'Frau Müller ____ viel Wasser trinken. (TREBUIE — sfat medical)', translation: 'TREBUIE (sfat medical) să bea multă apă.', correct: 'soll', accept: ['soll'] },
    { id: 'g', sentence: 'Sie ____ noch 30 Minuten fernsehen. (AVEȚI VOIE)', translation: 'AVEȚI VOIE încă 30 min TV.', correct: 'dürfen', accept: ['dürfen', 'duerfen'] },
    { id: 'h', sentence: 'Ich ____ jetzt einkaufen gehen. (TREBUIE — necesitate)', translation: 'TREBUIE să merg la cumpărături.', correct: 'muss', accept: ['muss'] },
    { id: 'i', sentence: '____ ich Ihnen vorlesen? (TREBUIE — sfat)', translation: 'SĂ vă citesc?', correct: 'Soll', accept: ['soll'] },
    { id: 'j', sentence: 'Sie ____ keine Schokolade vor dem Schlafen essen. (NU AVEȚI VOIE)', translation: 'NU AVEȚI VOIE ciocolată înainte de somn.', correct: 'dürfen', accept: ['dürfen', 'duerfen'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎯 sollen / müssen / dürfen.</strong> sollen = TREBUIE (din plan/altcineva) · müssen = TREBUIE (necesitate internă) · dürfen = AM VOIE (permisiune).</div>';
    ex2Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx2() { ex2Data.forEach(it => { const i = document.getElementById(`ex2-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex2-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 3: Audio dictat
const ex3Data = [
    { id: 'a', audio: 'audio/dictat-01.wav', correct: 'der Schlafanzug', accept: ['der schlafanzug', 'schlafanzug'] },
    { id: 'b', audio: 'audio/dictat-02.wav', correct: 'die Bettdecke', accept: ['die bettdecke', 'bettdecke'] },
    { id: 'c', audio: 'audio/dictat-03.wav', correct: 'der Kräutertee', accept: ['der kraeutertee', 'der kräutertee', 'kraeutertee', 'kräutertee'] },
    { id: 'd', audio: 'audio/dictat-04.wav', correct: 'einschlafen', accept: ['einschlafen'] },
    { id: 'e', audio: 'audio/dictat-05.wav', correct: 'ausschalten', accept: ['ausschalten'] },
    { id: 'f', audio: 'audio/dictat-06.wav', correct: 'die Zähne putzen', accept: ['die zaehne putzen', 'die zähne putzen', 'zaehne putzen', 'zähne putzen'] },
    { id: 'g', audio: 'audio/dictat-07.wav', correct: 'die Tablette', accept: ['die tablette', 'tablette'] },
    { id: 'h', audio: 'audio/dictat-08.wav', correct: 'müde', accept: ['muede', 'müde'] },
    { id: 'i', audio: 'audio/dictat-09.wav', correct: 'die Pantoffeln', accept: ['die pantoffeln', 'pantoffeln'] },
    { id: 'j', audio: 'audio/dictat-10.wav', correct: 'Gute Nacht', accept: ['gute nacht'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎙️ Audio dictat — Seara + pijama + medicamente.</strong></div>';
    ex3Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><div class="audio-dictat-row"><button class="audio-btn-mini" id="btn-${it.audio}" onclick="toggleAudio(event, 'audio-dictat-${it.id}')">▶</button><audio id="audio-dictat-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio><span style="color:#6b7280; font-size:0.9rem;">Ascultă și scrie:</span></div><input type="text" id="ex3-${it.id}" placeholder="Scrie cuvântul..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx3() { ex3Data.forEach(it => { const i = document.getElementById(`ex3-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex3-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 4: Verbe separabile seara
const ex4Data = [
    { id: 'a', sentence: 'Ich ____ den Schlafanzug ____ . (a îmbrăca — anziehen)', translation: 'ÎMI ÎMBRAC pijamaua.', correct: 'ziehe an', accept: ['ziehe an', 'ziehe ... an', 'ziehe...an'] },
    { id: 'b', sentence: 'Sie ____ das Licht ____ . (a stinge — ausschalten)', translation: 'STING lumina.', correct: 'schaltet aus', accept: ['schaltet aus', 'schaltet ... aus'] },
    { id: 'c', sentence: 'Wir ____ die Tür ____ . (a încuia — zuschließen)', translation: 'ÎNCUIEM ușa.', correct: 'schließen zu', accept: ['schließen zu', 'schliessen zu'] },
    { id: 'd', sentence: 'Frau Müller ____ um zehn Uhr ____ . (a adormi — einschlafen)', translation: 'ADOARME la 10.', correct: 'schläft ein', accept: ['schläft ein', 'schlaeft ein'] },
    { id: 'e', sentence: 'Bitte ____ Sie die Bluse ____ . (a dezbrăca — ausziehen)', translation: 'DEZBRĂCAȚI-VĂ bluza.', correct: 'ziehen aus', accept: ['ziehen aus', 'ziehen ... aus'] },
    { id: 'f', sentence: 'Andreea ____ den Fernseher ____ . (a opri — ausschalten)', translation: 'STINGE televizorul.', correct: 'schaltet aus', accept: ['schaltet aus', 'schaltet ... aus'] },
    { id: 'g', sentence: 'Wir ____ das Fenster ____ . (a închide — zumachen)', translation: 'ÎNCHIDEM fereastra.', correct: 'machen zu', accept: ['machen zu', 'machen ... zu'] },
    { id: 'h', sentence: 'Ich ____ die Pantoffeln ____ . (a îmbrăca — anziehen)', translation: 'ÎMI PUN papucii.', correct: 'ziehe an', accept: ['ziehe an', 'ziehe ... an'] },
    { id: 'i', sentence: 'Können Sie nicht ____ ? (a adormi — einschlafen, infinitiv)', translation: 'Nu puteți ADORMI?', correct: 'einschlafen', accept: ['einschlafen'] },
    { id: 'j', sentence: 'Ich ____ alle Türen ____ . (a încuia — zuschließen)', translation: 'ÎNCUI toate ușile.', correct: 'schließe zu', accept: ['schließe zu', 'schliesse zu'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🔌 Verbe separabile.</strong> Verb conjugat la POZIȚIA 2, prefix la FINAL (KLAMMER din L4). Ex: Ich ZIEHE den Schlafanzug AN.</div>';
    ex4Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="verb + prefix..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx4() { ex4Data.forEach(it => { const i = document.getElementById(`ex4-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex4-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 5: Dialog Gap-Fill (Dialog 2 — Insomnie + Kamillentee)
const ex5Data = [
    { id: 'a', sentence: 'Frau Müller: „Andreea, ich kann nicht ____." (a adormi)', translation: 'Nu pot să ADORM.', correct: 'einschlafen', accept: ['einschlafen'] },
    { id: 'b', sentence: 'Andreea: „Ich ____ sofort." (a veni)', translation: 'VIN imediat.', correct: 'komme', accept: ['komme'] },
    { id: 'c', sentence: 'Frau Müller: „Ich denke an ____." (numele soțului)', translation: 'Mă gândesc la KLAUS.', correct: 'Klaus', accept: ['klaus'] },
    { id: 'd', sentence: 'Andreea: „Möchten Sie einen ____tee?" (mușețel)', translation: 'Vreți un ceai de MUȘEȚEL?', correct: 'Kamillen', accept: ['kamillen'] },
    { id: 'e', sentence: 'Frau Müller: „Und vielleicht etwas ____?" (MUZICĂ)', translation: 'Și poate puțină MUZICĂ?', correct: 'Musik', accept: ['musik'] },
    { id: 'f', sentence: 'Andreea: „Klassik leise, ____?" (compozitor)', translation: 'Clasic încet, MOZART?', correct: 'Mozart', accept: ['mozart'] },
    { id: 'g', sentence: 'Andreea: „Soll ich Ihnen auch ____?" (a citi cu voce tare)', translation: 'Să vă CITESC?', correct: 'vorlesen', accept: ['vorlesen'] },
    { id: 'h', sentence: 'Frau Müller: „Aus dem ____." (CARTE)', translation: 'Din CARTE.', correct: 'Buch', accept: ['buch'] },
    { id: 'i', sentence: 'Frau Müller: „Sie sind so ____, Andreea." (RĂBDĂTOARE)', translation: 'Sunteți așa de RĂBDĂTOARE.', correct: 'geduldig', accept: ['geduldig'] },
    { id: 'j', sentence: 'Andreea: „Sie sind nicht ____." (singură)', translation: 'NU sunteți SINGURĂ.', correct: 'allein', accept: ['allein'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌙 Dialog gap-fill — Insomnia + Kamillentee + vorlesen (Dialog 2).</strong></div>';
    ex5Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx5() { ex5Data.forEach(it => { const i = document.getElementById(`ex5-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex5-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 6: Traducere RO → DE
const ex6Data = [
    { id: 'a', ro: 'Ce ați vrea la cină?', correct: 'Was möchten Sie zum Abendessen?', accept: ['was moechten sie zum abendessen', 'was möchten sie zum abendessen', 'was moechten sie zum abendessen?'] },
    { id: 'b', ro: 'Trebuie la toaletă?', correct: 'Müssen Sie auf die Toilette?', accept: ['muessen sie auf die toilette', 'müssen sie auf die toilette', 'muessen sie auf die toilette?'] },
    { id: 'c', ro: 'Nu uitați proteza.', correct: 'Vergessen Sie die Prothese nicht.', accept: ['vergessen sie die prothese nicht'] },
    { id: 'd', ro: 'Vreți un ceai de mușețel?', correct: 'Möchten Sie einen Kamillentee?', accept: ['moechten sie einen kamillentee', 'möchten sie einen kamillentee', 'moechten sie einen kamillentee?'] },
    { id: 'e', ro: 'Nu puteți adormi?', correct: 'Können Sie nicht einschlafen?', accept: ['koennen sie nicht einschlafen', 'können sie nicht einschlafen', 'koennen sie nicht einschlafen?'] },
    { id: 'f', ro: 'Trebuie să luați pastila de tensiune.', correct: 'Sie sollen die Blutdrucktablette nehmen.', accept: ['sie sollen die blutdrucktablette nehmen'] },
    { id: 'g', ro: 'Să sting lumina?', correct: 'Soll ich das Licht ausschalten?', accept: ['soll ich das licht ausschalten', 'soll ich das licht ausschalten?'] },
    { id: 'h', ro: 'Sunt imediat alături.', correct: 'Ich bin gleich nebenan.', accept: ['ich bin gleich nebenan'] },
    { id: 'i', ro: 'Somn ușor!', correct: 'Schlafen Sie gut!', accept: ['schlafen sie gut'] },
    { id: 'j', ro: 'Noapte bună, doamnă Müller!', correct: 'Gute Nacht, Frau Müller!', accept: ['gute nacht frau mueller', 'gute nacht frau müller'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌍 Traducere RO → DE.</strong></div>';
    ex6Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇷🇴 ${it.ro}</label><input type="text" id="ex6-${it.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => {
        const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx6() { ex6Data.forEach(it => { const i = document.getElementById(`ex6-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex6-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 7: Schreiben — Raport noapte pentru Petra
function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    c.innerHTML = `
        <div class="schreiben-wrapper">
            <div class="schreiben-prompt">
                <h4>✍️ Tema ta de scriere — Raport noapte pentru Petra</h4>
                <p>Petra (fiica Frauei Müller) îți cere un <strong>raport scurt</strong> a doua zi dimineața despre cum a fost noaptea. <strong>Scrie un mesaj WhatsApp (5-8 propoziții)</strong> în care îi spui ce a mâncat seara, când s-a culcat, dacă a luat pastilele, cum a dormit, dacă a fost vreo problemă.</p>
                <p>Include: <em>cina (Brot mit Käse / Suppe), ora culcării, pastilele (Blutdrucktablette mit Wasser), Schlafhilfe (Kamillentee / vorlesen dacă a fost nevoie), starea generală a nopții, MULT Perfekt cu sein/haben + sollen</em>.</p>

                <div class="schreiben-hints">
                    <h5>💡 Structuri utile</h5>
                    <p>Gestern Abend hat sie ... gegessen · Sie hat ihre Blutdrucktablette genommen · Um 21:30 ist sie ins Bett gegangen · Sie hat gut geschlafen / Sie hat schlecht geschlafen · Um 23:30 hat sie mich gerufen · Ich habe ihr einen Kamillentee gemacht · Dann ist sie eingeschlafen · Schönen Tag!</p>
                </div>
            </div>

            <textarea id="ex7-text" class="schreiben-textarea" placeholder="Schreib hier den Nachtbericht auf Deutsch...
Beispiel:
Hallo Petra. Hier ein kurzer Bericht über die Nacht..."></textarea>

            <details class="schreiben-model">
                <summary>📝 Vezi un model de răspuns</summary>
                <div class="model-text">
                    <p><em>Beispiel-Antwort:</em></p>
                    <p>Hallo Petra. Hier ein kurzer Bericht über die Nacht. Gestern Abend hat Ihre Mutter Brot mit Käse und eine kleine Suppe gegessen. Um 20 Uhr hat sie die Tagesschau gesehen. Sie hat ihre Blutdrucktablette mit einem Glas Wasser genommen. Um 21:30 ist sie ins Bett gegangen. Aber um 23:30 hat sie mich gerufen — sie konnte nicht einschlafen. Ich habe ihr einen Kamillentee gemacht und Mozart leise gespielt. Dann ist sie ruhig eingeschlafen. Die Nacht war insgesamt gut. Schönen Tag! Andreea.</p>
                    <p class="model-translation"><em>Traducere:</em> Bună Petra. Iată un raport scurt despre noapte. Aseară mama dumneavoastră a mâncat pâine cu brânză și o supă mică. La 20 a văzut Tagesschau. A luat pastila de tensiune cu un pahar de apă. La 21:30 s-a dus la culcare. Dar la 23:30 m-a chemat — nu putea adormi. I-am făcut un ceai de mușețel și am pus Mozart încet. Apoi a adormit liniștită. Noaptea a fost în general bună. O zi frumoasă! Andreea.</p>
                </div>
            </details>

            <div class="schreiben-cta">
                <a href="https://forms.gle/kUztoeQGWNHQRQpg9" target="_blank" class="btn-google-form-big">
                    ✍️ Vrei feedback PERSONAL de la Annette? Trimite raportul aici
                </a>
                <p class="schreiben-promise">📩 Răspunde Annette personal în 24-48 ore — corectare + sfaturi.</p>
            </div>
        </div>
    `;
}

function checkExercise(n) {
    const checkers = { 1: checkEx1, 2: checkEx2, 3: checkEx3, 4: checkEx4, 5: checkEx5, 6: checkEx6 };
    if (!checkers[n]) return;
    const result = checkers[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (!scoreEl) return;
    const pct = Math.round((result.correct / result.total) * 100);
    let emoji = '💪', msg = 'Mai exersează!';
    if (pct === 100) { emoji = '🏆'; msg = 'Perfect!'; }
    else if (pct >= 80) { emoji = '⭐'; msg = 'Foarte bine!'; }
    else if (pct >= 60) { emoji = '👍'; msg = 'Bine!'; }
    else if (pct >= 40) { emoji = '📚'; msg = 'Continuă!'; }
    scoreEl.className = 'score show';
    scoreEl.innerHTML = `<div class="score-value">${emoji} ${result.correct}/${result.total} (${pct}%)</div><div class="score-message">${msg}</div>`;
}

function resetExercise(n) {
    const resetters = { 1: resetEx1, 2: resetEx2, 3: resetEx3, 4: resetEx4, 5: resetEx5, 6: resetEx6 };
    if (resetters[n]) resetters[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) { scoreEl.className = 'score'; scoreEl.innerHTML = ''; }
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = event.currentTarget;
    if (!audio || !btn) return;
    if (audio.paused) {
        audio.play().then(() => { btn.textContent = '⏸'; }).catch(() => {});
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause(); btn.textContent = '▶';
    }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
