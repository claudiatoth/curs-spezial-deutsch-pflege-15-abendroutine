// ============================================
// DIALOGS.JS — Pflege 15: Abendroutine
// 2 dialoguri Andreea + Frau Müller (pijama + insomnie cu Schlafhilfe)
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

// ============================================
// DIALOG 1: „Es ist Zeit zu schlafen" — pijama + toaleta + culcare
// 10 replici, ~75 sec
// ============================================
const dialog1Data = {
    id: 'dialog1',
    title: 'Es ist Zeit zu schlafen',
    context: 'Marți, 21:00. Tagesschau s-a terminat. Andreea o întreabă pe Frau Müller să se pregătească pentru somn. Toaleta scurtă + schimbare în Nachthemd + pastila de seară (Blutdruck) + lumini scăzute. Frau Müller e puțin agitată — ploua afară, ascultă. Acest dialog e despre tranziția BLÂNDĂ de la TV → pat.',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 75,
    replici: [
        { id: 1, speaker: 'andreea',    start: 0,  duration: 7, de: 'Frau Müller, es ist neun Uhr. Zeit für die Abendpflege.', ro: 'Doamnă Müller, e ora nouă. Timpul pentru toaleta de seară.' },
        { id: 2, speaker: 'frau-muller', start: 7,  duration: 7, de: 'Oh, schon so spät? Ich war müde vom Fernsehen.', ro: 'Oh, deja așa târziu? Eram obosită de la televizor.' },
        { id: 3, speaker: 'andreea',    start: 14, duration: 8, de: 'Wir gehen erst ins Bad. Müssen Sie auf die Toilette?', ro: 'Mai întâi mergem în baie. Trebuie la toaletă?' },
        { id: 4, speaker: 'frau-muller', start: 22, duration: 6, de: 'Ja, bitte. Und meine Pantoffeln?', ro: 'Da, te rog. Și papucii mei?' },
        { id: 5, speaker: 'andreea',    start: 28, duration: 8, de: 'Hier, neben dem Bett. Vorsicht beim Aufstehen!', ro: 'Aici, lângă pat. Atenție la ridicare!' },
        { id: 6, speaker: 'frau-muller', start: 36, duration: 8, de: 'Danke. Soll ich die Zähne putzen?', ro: 'Mulțumesc. Să mă spăl pe dinți?' },
        { id: 7, speaker: 'andreea',    start: 44, duration: 9, de: 'Ja, und vergessen Sie die Prothese nicht. Dann den Schlafanzug.', ro: 'Da, și nu uitați proteza. Apoi pijamaua.' },
        { id: 8, speaker: 'frau-muller', start: 53, duration: 8, de: 'Und meine Blutdrucktablette?', ro: 'Și pastila mea de tensiune?' },
        { id: 9, speaker: 'andreea',    start: 61, duration: 8, de: 'Hier, mit einem Glas Wasser. Der Doktor hat das so verordnet.', ro: 'Aici, cu un pahar de apă. Doctorul a prescris așa.' },
        { id: 10, speaker: 'frau-muller', start: 69, duration: 6, de: 'Gute Nacht, Andreea. Vielen Dank.', ro: 'Noapte bună, Andreea. Mulțumesc mult.' }
    ]
};

// ============================================
// DIALOG 2: „Ich kann nicht einschlafen" — insomnie + Schlafhilfe naturală
// 10 replici, ~80 sec
// ============================================
const dialog2Data = {
    id: 'dialog2',
    title: 'Ich kann nicht einschlafen',
    context: 'Aceeași noapte, 23:30. Frau Müller sună pe Andreea — nu poate adormi. Mintea-i fuge la Klaus, plouă afară, foșnetul ferestrei o sperie. Andreea vine în pijama+halat. NU dă somnifer (nu e în plan). Folosește Schlafhilfe naturală: Kamillentee + vorlesen calm + atingere ușoară pe mână (recap L9 Beruhigung).',
    audioFile: 'audio/dialog-02.mp3',
    totalDuration: 80,
    replici: [
        { id: 1, speaker: 'frau-muller', start: 0,  duration: 7, de: 'Andreea, ich kann nicht einschlafen.', ro: 'Andreea, nu pot adormi.' },
        { id: 2, speaker: 'andreea',    start: 7,  duration: 8, de: 'Ich komme sofort. Was ist los, Frau Müller?', ro: 'Vin imediat. Ce se întâmplă, doamnă Müller?' },
        { id: 3, speaker: 'frau-muller', start: 15, duration: 9, de: 'Ich denke an Klaus. Und es regnet so laut.', ro: 'Mă gândesc la Klaus. Și plouă așa de tare.' },
        { id: 4, speaker: 'andreea',    start: 24, duration: 9, de: 'Das verstehe ich. Möchten Sie einen Kamillentee?', ro: 'Înțeleg. Vreți un ceai de mușețel?' },
        { id: 5, speaker: 'frau-muller', start: 33, duration: 7, de: 'Ja, das wäre schön. Und vielleicht etwas Musik?', ro: 'Da, ar fi frumos. Și poate puțină muzică?' },
        { id: 6, speaker: 'andreea',    start: 40, duration: 9, de: 'Klassik leise, Mozart? Soll ich Ihnen auch vorlesen?', ro: 'Clasic încet, Mozart? Să vă citesc și?' },
        { id: 7, speaker: 'frau-muller', start: 49, duration: 7, de: 'Vorlesen wäre wunderbar. Aus dem Buch.', ro: 'Cititul ar fi minunat. Din carte.' },
        { id: 8, speaker: 'andreea',    start: 56, duration: 9, de: 'Gut. Ich hole den Tee und das Buch. Bin gleich zurück.', ro: 'Bine. Aduc ceaiul și cartea. Mă întorc imediat.' },
        { id: 9, speaker: 'frau-muller', start: 65, duration: 8, de: 'Sie sind so geduldig. Ich danke Ihnen.', ro: 'Sunteți așa de răbdătoare. Vă mulțumesc.' },
        { id: 10, speaker: 'andreea',    start: 73, duration: 7, de: 'Keine Sorge. Sie sind nicht allein.', ro: 'Fără griji. Nu sunteți singură.' }
    ]
};

// ============================================
// BUILD DIALOG FUNCTION
// ============================================
function buildDialog(dialogData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
        <div class="dialog-container">
            <div class="dialog-context">${dialogData.context}</div>

            <div class="dialog-audio-player">
                <button class="audio-btn dialog-play-btn" id="btn-${dialogData.id}-audio" onclick="toggleDialogAudio('${dialogData.id}')">▶</button>
                <audio id="${dialogData.id}-audio" preload="metadata"><source src="${dialogData.audioFile}" type="audio/mpeg"></audio>
                <span class="dialog-time" id="${dialogData.id}-time">0:00 / ${formatDialogTime(dialogData.totalDuration)}</span>
                <span class="dialog-hint">▶ Ascultă tot dialogul (${dialogData.totalDuration}s)</span>
            </div>

            <div class="dialog-replici">`;

    dialogData.replici.forEach((r, i) => {
        const speakerClass = r.speaker === 'andreea' ? 'character-andreea' : 'character-frau-mueller';
        const speakerName = r.speaker === 'andreea' ? 'Andreea' : 'Frau Müller';
        const avatarContent = r.speaker === 'andreea'
            ? '<img src="images/andreea.png" alt="Andreea">'
            : '<span class="hair">⚪</span><span class="face">👵</span>';
        const speechClass = r.speaker === 'andreea' ? 'speech-andreea' : 'speech-frau-mueller';

        html += `
            <div class="dialog-reply ${speakerClass}" id="${dialogData.id}-reply-${r.id}" data-start="${r.start}" data-duration="${r.duration}">
                <div class="character-avatar ${r.speaker === 'frau-muller' ? 'frau-mueller-avatar' : ''}">${avatarContent}</div>
                <div class="speech-bubble ${speechClass}">
                    <div class="speaker-name speaker-${r.speaker}">${i + 1}. ${speakerName}</div>
                    <div class="speech-de">🇩🇪 ${r.de}</div>
                    <div class="speech-ro">🇷🇴 ${r.ro}</div>
                </div>
            </div>`;
    });

    html += `
            </div>
        </div>`;

    container.innerHTML = html;
}

function formatDialogTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
}

function toggleDialogAudio(dialogId) {
    const audio = document.getElementById(`${dialogId}-audio`);
    const btn = document.getElementById(`btn-${dialogId}-audio`);
    if (!audio || !btn) return;

    ['dialog1', 'dialog2'].forEach(other => {
        if (other !== dialogId) {
            const otherAudio = document.getElementById(`${other}-audio`);
            const otherBtn = document.getElementById(`btn-${other}-audio`);
            if (otherAudio && !otherAudio.paused) {
                otherAudio.pause();
                if (otherBtn) otherBtn.textContent = '▶';
            }
        }
    });

    if (audio.paused) {
        audio.play().then(() => { btn.textContent = '⏸'; }).catch(() => {});
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}

function initDialogSync(dialogData) {
    const audio = document.getElementById(`${dialogData.id}-audio`);
    if (!audio) return;

    const timeEl = document.getElementById(`${dialogData.id}-time`);

    audio.addEventListener('timeupdate', () => {
        const t = audio.currentTime;
        if (timeEl) timeEl.textContent = `${formatDialogTime(t)} / ${formatDialogTime(audio.duration || dialogData.totalDuration)}`;

        dialogData.replici.forEach(r => {
            const el = document.getElementById(`${dialogData.id}-reply-${r.id}`);
            if (!el) return;
            const isActive = t >= r.start && t < r.start + r.duration;
            el.classList.toggle('active-reply', isActive);
        });
    });

    audio.addEventListener('ended', () => {
        const btn = document.getElementById(`btn-${dialogData.id}-audio`);
        if (btn) btn.textContent = '▶';
        dialogData.replici.forEach(r => {
            const el = document.getElementById(`${dialogData.id}-reply-${r.id}`);
            if (el) el.classList.remove('active-reply');
        });
    });
}

buildDialog(dialog1Data, 'dialog1-container');
buildDialog(dialog2Data, 'dialog2-container');

if (document.readyState !== 'loading') {
    initDialogSync(dialog1Data);
    initDialogSync(dialog2Data);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        initDialogSync(dialog1Data);
        initDialogSync(dialog2Data);
    });
}
