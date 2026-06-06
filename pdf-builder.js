// ============================================
// PDF BUILDER — Pflege L15: Abendroutine
// Claudia Toth · Annettes Deutschkurs · A1.2 (co-creat cu Agnesa)
// ============================================
(function () {
    if (typeof document === 'undefined') return;
    try { buildPDF(); } catch (e) {
        const r = document.getElementById('pdf-content');
        if (r) r.innerHTML = '<pre style="color:red">ERROR: ' + e.message + '\n' + e.stack + '</pre>';
    }

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildPflegeWarn() + buildCast() + buildTheory() + buildDialogs() + buildExercises() + buildFlashcards();
    }

    function buildPflegeWarn() {
        return `<div class="pflege-warn">
            <h4>⚠️ Notă importantă — co-creată cu Agnesa (Pflegerin colaboratoare)</h4>
            <p>Această lecție te pregătește <strong>LINGVISTIC</strong> pentru rutina de seară cu Frau Müller (cină ușoară + toaleta + pijama + medicamente + Schlafhilfe). <strong>NU înlocuiește</strong> calificarea profesională. La medicamente: NU dai <strong>NICIODATĂ Schlafmittel</strong> (somnifere) fără indicație clară în Medikamentenplan. Pentru pacient 78+ ani benzodiazepinele = risc cădere maxim. Preferi <strong>Schlafhilfe naturală</strong>: Kamillentee, Melissetee, lavandă, lumină scăzută.</p>
        </div>`;
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs" · Andreea închide ziua cu Frau Müller</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Pflegerin · tură seară</div></div>
                <div class="cast-card"><div class="frau-mueller-pdf-avatar">👵</div><div class="name">Frau Müller</div><div class="detail">Pacientă · obosită</div></div>
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · Berlin</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · Potsdam</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · Berlin</div></div>
                <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><div class="name">Carolina</div><div class="detail">Fotografă · Berlin</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<audio[^>]*>[\s\S]*?<\/audio>/g, '');
        t = t.replace(/<div class="subsection-header"[^>]*>\s*<h4>([^<]+)<\/h4>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="subsection">/g, '<div class="theory-box">');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="capcana-box">/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="grammar-tip">/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="final-note-box">/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter new-section">📘 1. Teorie — Abendroutine + cina + pijama + Schlafhilfe + sollen/dürfen</h1>` + t;
    }

    function buildDialogs() {
        let html = `<h1 class="chapter new-section">🎬 2. Dialoguri — Pijama de seară + insomnie cu Kamillentee</h1>`;
        [dialog1Data, dialog2Data].forEach((d, idx) => {
            if (!d) return;
            html += `<div class="ex-block">
                <h3>${idx === 0 ? 'Dialog 1' : 'Dialog 2'}: „${d.title}"</h3>
                <div class="instruction">${d.context}</div>
                <div class="dialog-pdf-card">`;
            d.replici.forEach((r, ri) => {
                const spkrName = r.speaker === 'andreea' ? '🧑‍⚕️ Andreea' : '👵 Frau Müller';
                html += `<div class="reply"><span class="spkr">${ri + 1}. ${spkrName}:</span> <span class="de"> ${r.de}</span><br><span class="ro">🇷🇴 ${r.ro}</span></div>`;
            });
            html += `</div></div>`;
        });
        return html;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 3. Exerciții — cu rezolvări complete</h1>`;

        if (typeof ex1Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 1: Match — Vocabular seara + pijama + pat</h3>
                <div class="instruction">Pentru fiecare cuvânt al rutinei de seară, scrii traducerea în RO.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:50%">🇩🇪 Germană</th><th>🇷🇴 Română</th></tr></thead><tbody>`;
            ex1Data.forEach((it, i) => {
                html += `<tr><td class="verb">${i + 1}. ${it.de}</td><td class="ro-text">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        if (typeof ex2Data !== 'undefined') html += fillInBlock('Übung 2: sollen vs müssen vs dürfen', 'sollen = TREBUIE (plan/altcineva) · müssen = TREBUIE (necesitate internă) · dürfen = AM VOIE (permisiune).', ex2Data);
        if (typeof ex4Data !== 'undefined') html += fillInBlock('Übung 4: Verbe separabile seara (ausziehen, ausschalten, zuschließen, einschlafen)', 'Verb conjugat la POZIȚIA 2, prefix la FINAL (KLAMMER din L4).', ex4Data);
        if (typeof ex5Data !== 'undefined') html += fillInBlock('Übung 5: Dialog Gap-Fill — Insomnia + Kamillentee', 'Completează replicile lipsă din Dialog 2.', ex5Data);

        if (typeof ex3Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 3: Audio Dictat — Seara + pijama + medicamente</h3>
                <div class="instruction">Ascultă și scrie ce auzi. (Audio disponibil online.)</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex3Data.forEach((it, i) => {
                html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-a">${it.correct}</div></div></div>`;
            });
            html += `</div>`;
        }

        if (typeof ex6Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 6: Traducere RO → DE</h3>
                <div class="instruction">Scrie frazele rutinei de seară în germană.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:50%">🇷🇴 Română</th><th>🇩🇪 Germană</th></tr></thead><tbody>`;
            ex6Data.forEach((it, i) => {
                html += `<tr><td class="ro-text">${i + 1}. ${it.ro}</td><td class="verb">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        html += `<div class="ex-block"><h3>✍️ Übung 7: Schreiben — Raportul de noapte pentru Petra</h3>
            <div class="instruction">Petra îți cere a doua zi dimineața un raport despre noapte. Scrie WhatsApp 5-8 propoziții: cina, ora culcării, pastilele, Schlafhilfe, starea. MULT Perfekt cu sein/haben + sollen.</div>
            <div class="rezolvare-banner">📝 Model de răspuns</div>
            <p><em>Hallo Petra. Hier ein kurzer Bericht über die Nacht. Gestern Abend hat Ihre Mutter Brot mit Käse und eine kleine Suppe gegessen. Um 20 Uhr hat sie die Tagesschau gesehen. Sie hat ihre Blutdrucktablette mit einem Glas Wasser genommen. Um 21:30 ist sie ins Bett gegangen. Aber um 23:30 hat sie mich gerufen — sie konnte nicht einschlafen. Ich habe ihr einen Kamillentee gemacht und Mozart leise gespielt. Dann ist sie ruhig eingeschlafen. Die Nacht war insgesamt gut. Schönen Tag! Andreea.</em></p>
            <p class="ro-translation">🇷🇴 Bună Petra. Iată un raport scurt despre noapte. Aseară mama dumneavoastră a mâncat pâine cu brânză și o supă mică. La 20 a văzut Tagesschau. A luat pastila de tensiune cu un pahar de apă. La 21:30 s-a dus la culcare. Dar la 23:30 m-a chemat — nu putea adormi. I-am făcut un ceai de mușețel și am pus Mozart încet. Apoi a adormit liniștită. Noaptea a fost în general bună. O zi frumoasă! Andreea.</p>
            </div>`;

        return html;
    }

    function fillInBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            const filled = it.sentence.replace(/_{2,}/g, `<strong style="color:#047857">${it.correct}</strong>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${filled}</div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 4. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> grupate pe 6 categorii: Abendroutine · Abendessen · Pflege seara · Schlafanzug+Bett · Medikamente+Schlafhilfe · sollen/dürfen+verbe separabile.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }
})();
