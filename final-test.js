// ============================================
// FINAL TEST — Pflege 15: Abendroutine
// 25 întrebări × 5 categorii
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

function normalizeAnswerFT(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

const finalTestData = [
    // === 1. ABENDROUTINE + ABENDESSEN (5) ===
    { id: 1, category: 'Abendroutine + Abendessen', type: 'mc', question: 'Abendessen sau Abendbrot înseamnă:', options: ['Mic dejun', 'Cina (Abendessen oficial, Abendbrot tradițional „pâinea de seară")', 'Prânz', 'Ronț între mese'], correctIndex: 1, correct: 'Cina ușoară (NU mâncare grea seara!)' },
    { id: 2, category: 'Abendroutine + Abendessen', type: 'fill', question: 'Ceaiul de plante (cu articol): „der ____" (calmant pentru somn)', correct: 'Kräutertee', accept: ['kräutertee', 'kraeutertee'] },
    { id: 3, category: 'Abendroutine + Abendessen', type: 'mc', question: 'Care e RĂU seara pentru Frau Müller?', options: ['Brot mit Käse', 'Schnitzel cu cartofi prăjiți (greu, gaze, scol la 2 noaptea)', 'Hühnersuppe', 'Joghurt cu fructe'], correctIndex: 1, correct: 'Schnitzel/Hackbraten = cere 4-5h digestie, scol noaptea cu disconfort' },
    { id: 4, category: 'Abendroutine + Abendessen', type: 'fill', question: 'Brânza (cu articol): „der ____" 🚨 capcana gen!', correct: 'Käse', accept: ['käse', 'kaese'] },
    { id: 5, category: 'Abendroutine + Abendessen', type: 'fill', question: 'Rutina de seară începe la (ora): „____" :00', correct: '18', accept: ['18', 'achtzehn'] },

    // === 2. PFLEGE AM ABEND + SCHLAFANZUG (5) ===
    { id: 6, category: 'Pflege seara + Schlafanzug', type: 'fill', question: 'Periuța de dinți (cu articol): „die ____"', correct: 'Zahnbürste', accept: ['zahnbürste', 'zahnbuerste'] },
    { id: 7, category: 'Pflege seara + Schlafanzug', type: 'mc', question: 'Proteza dentară seara:', options: ['Rămâne în gură noaptea', 'SCOATEM și punem în paharul cu apă', 'O ștergi cu prosop', 'O lași pe noptieră uscată'], correctIndex: 1, correct: 'Proteza SCOASĂ → în paharul cu apă (curățare + odihnă gingii)' },
    { id: 8, category: 'Pflege seara + Schlafanzug', type: 'fill', question: 'Pijamaua (set, cu articol): „der ____"', correct: 'Schlafanzug', accept: ['schlafanzug'] },
    { id: 9, category: 'Pflege seara + Schlafanzug', type: 'mc', question: 'Înainte de culcare, ușa băii:', options: ['ÎNCUIATĂ', 'ÎNTREDESCHISĂ (pentru lumină reflectă + emergencies noaptea)', 'COMPLET deschisă', 'Nu contează'], correctIndex: 1, correct: 'Ușa baii ÎNTREDESCHISĂ — siguranță noaptea' },
    { id: 10, category: 'Pflege seara + Schlafanzug', type: 'fill', question: 'Plapuma (cu articol): „die ____"', correct: 'Bettdecke', accept: ['bettdecke'] },

    // === 3. MEDIKAMENTE + SCHLAFHILFE (5) ===
    { id: 11, category: 'Medikamente + Schlafhilfe', type: 'mc', question: '🚨 Frau Müller cere „dă-mi un somnifer". Tu:', options: ['I-l dai dacă găsești în dulap', 'Răspunzi „Das muss der Arzt entscheiden. Ich kann einen Tee machen" + Kamillentee', 'O cerți', 'Suni 112'], correctIndex: 1, correct: 'NU dai NICIODATĂ Schlafmittel fără plan + Schlafhilfe NATURALĂ' },
    { id: 12, category: 'Medikamente + Schlafhilfe', type: 'fill', question: 'Ceaiul de mușețel (un cuvânt): „der ____" (cal Mant pentru somn)', correct: 'Kamillentee', accept: ['kamillentee'] },
    { id: 13, category: 'Medikamente + Schlafhilfe', type: 'mc', question: 'Pentru pacient 78 ani, Benzodiazepine (Lorazepam, Zolpidem):', options: ['Foarte sigure', '🚨 RISC CĂDERE MAXIM + dezechilibru + confuzie matinală', 'Recomandate zilnic', 'Doar dacă cere ea'], correctIndex: 1, correct: 'Benzodiazepine + 78 ani = RISC EXTREM cădere' },
    { id: 14, category: 'Medikamente + Schlafhilfe', type: 'fill', question: 'Tensiunea arterială (cu articol): „der ____"', correct: 'Blutdruck', accept: ['blutdruck'] },
    { id: 15, category: 'Medikamente + Schlafhilfe', type: 'fill', question: 'Temperatura optimă pentru somn (camera): aproximativ ____ °C', correct: '18', accept: ['18', 'achtzehn'] },

    // === 4. SOLLEN / MÜSSEN / DÜRFEN (5) ===
    { id: 16, category: 'sollen/müssen/dürfen', type: 'mc', question: 'Diferența sollen vs müssen:', options: ['Sunt sinonime', 'sollen = TREBUIE (DIN PARTEA ALTCUIVA — plan, doctor) · müssen = TREBUIE (necesitate INTERNĂ)', 'sollen = formal, müssen = informal', 'Nicio diferență'], correctIndex: 1, correct: 'sollen = exterior (plan/doctor) · müssen = intern (corpul cere)' },
    { id: 17, category: 'sollen/müssen/dürfen', type: 'fill', question: 'Sie ____ um 20 Uhr die Blutdrucktablette nehmen. (TREBUIE — plan)', correct: 'sollen', accept: ['sollen'] },
    { id: 18, category: 'sollen/müssen/dürfen', type: 'fill', question: '„Am voie să beau vin?" → „____ ich Wein trinken?"', correct: 'Darf', accept: ['darf'] },
    { id: 19, category: 'sollen/müssen/dürfen', type: 'mc', question: 'Sie dürfen kein Schlafmittel ohne Rezept. → înseamnă:', options: ['Trebuie să luați somnifere', 'NU AVEȚI VOIE somnifere fără rețetă', 'Vreți somnifere?', 'Ați luat somnifere?'], correctIndex: 1, correct: 'nicht dürfen = INTERDICȚIE' },
    { id: 20, category: 'sollen/müssen/dürfen', type: 'fill', question: '„Trebuie să dorm acum, sunt obosită." → „Ich ____ jetzt schlafen."', correct: 'muss', accept: ['muss'] },

    // === 5. TRADUCERE + SITUAȚII (5) ===
    { id: 21, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Trebuie la toaletă?" → 🇩🇪 ?', correct: 'Müssen Sie auf die Toilette?', accept: ['muessen sie auf die toilette', 'müssen sie auf die toilette', 'muessen sie auf die toilette?'] },
    { id: 22, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Somn ușor!" → 🇩🇪 ?', correct: 'Schlafen Sie gut!', accept: ['schlafen sie gut'] },
    { id: 23, category: 'Traducere + Situații', type: 'mc', question: '🌙 23:30 — Frau Müller te cheamă „Ich kann nicht einschlafen". Cea mai bună reacție:', options: ['„Vă dau un somnifer"', 'Vii imediat + Kamillentee + Mozart leise + vorlesen + atingere ușoară (Schlafhilfe NATURALĂ)', 'Spui „Mai încearcă singură"', 'O cerți că s-a trezit'], correctIndex: 1, correct: 'Schlafhilfe naturală = Kamillentee + muzică liniștită + vorlesen + prezență' },
    { id: 24, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Nu uitați proteza." → 🇩🇪 ? (Vergessen + nicht)', correct: 'Vergessen Sie die Prothese nicht.', accept: ['vergessen sie die prothese nicht'] },
    { id: 25, category: 'Traducere + Situații', type: 'mc', question: '⚠️ La ce oră aproximativ se culcă Frau Müller (78 ani)?', options: ['20:00 (prea devreme)', '21:30-22:00 (după Tagesschau + Abendpflege)', '00:30 (prea târziu)', '15:00 (siesta)'], correctIndex: 1, correct: '21:30-22:00 = oră ideală după ritualul de seară respectat' }
];

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    let html = `
        <div class="final-test-intro">
            <h4>🎯 Test Final — 25 întrebări</h4>
            <p>5 categorii × 5 întrebări: <strong>Abendroutine+Abendessen · Pflege seara+Schlafanzug · Medikamente+Schlafhilfe · sollen/müssen/dürfen · Traducere+Situații</strong></p>
        </div>
        <div id="ft-questions">`;
    finalTestData.forEach((q, i) => {
        html += `<div class="ft-question" data-q-id="${q.id}">
            <div class="ft-q-header">
                <span class="ft-q-num">Întrebarea ${i + 1} / 25</span>
                <span class="ft-q-category">${q.category}</span>
            </div>
            <div class="ft-q-text">${q.question}</div>`;
        if (q.type === 'mc') {
            q.options.forEach((opt, idx) => {
                html += `<label class="ft-option"><input type="radio" name="ft-${q.id}" value="${idx}"> <span>${opt}</span></label>`;
            });
        } else if (q.type === 'fill') {
            html += `<input type="text" class="ft-input" id="ft-input-${q.id}" placeholder="Scrie răspunsul...">`;
        }
        html += `<div class="ft-feedback" id="ft-fb-${q.id}"></div></div>`;
    });
    html += `</div>
        <div class="ft-controls">
            <button class="btn btn-check" onclick="checkFinalTest()">🎯 Verifică TOT testul</button>
            <button class="btn btn-reset" onclick="resetFinalTest()">↻ Reia testul</button>
        </div>
        <div class="ft-score" id="ft-score"></div>`;
    container.innerHTML = html;
}

function checkFinalTest() {
    let correct = 0;
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (!fb) return;
        let userOk = false;
        if (q.type === 'mc') {
            const checked = document.querySelector(`input[name="ft-${q.id}"]:checked`);
            if (checked && parseInt(checked.value) === q.correctIndex) userOk = true;
        } else if (q.type === 'fill') {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp && q.accept.some(a => normalizeAnswerFT(a) === normalizeAnswerFT(inp.value))) userOk = true;
        }
        fb.className = userOk ? 'ft-feedback correct' : 'ft-feedback incorrect';
        fb.innerHTML = userOk ? `✓ Corect!` : `✗ Răspuns corect: <strong>${q.correct}</strong>`;
        if (userOk) correct++;
    });
    const pct = Math.round((correct / finalTestData.length) * 100);
    const scoreEl = document.getElementById('ft-score');
    if (!scoreEl) return;
    let msg = '';
    if (pct === 100) msg = `🏆 ${correct}/25 (100%) — PERFECT! Nopțile cu Frau Müller sunt liniștite!`;
    else if (pct >= 80) msg = `🎉 ${correct}/25 (${pct}%) — Foarte bine!`;
    else if (pct >= 60) msg = `💪 ${correct}/25 (${pct}%) — Bine.`;
    else msg = `📚 ${correct}/25 (${pct}%) — Mai exersează.`;
    scoreEl.textContent = msg;
    scoreEl.className = 'ft-score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
}

function resetFinalTest() {
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (fb) { fb.className = 'ft-feedback'; fb.innerHTML = ''; }
        if (q.type === 'mc') {
            document.querySelectorAll(`input[name="ft-${q.id}"]`).forEach(r => r.checked = false);
        } else {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp) inp.value = '';
        }
    });
    const scoreEl = document.getElementById('ft-score');
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'ft-score'; }
}

buildFinalTest();
