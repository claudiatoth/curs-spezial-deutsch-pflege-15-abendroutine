// ============================================
// THEORY.JS — Pflege 15: Abendroutine (Agnesa Cap 16)
// Abendessen + toaleta seara + pijama + medicamente + Schlafhilfe + sollen/dürfen
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

const theoryHTML = `
<div class="theory-intro">
  <h4>🌙 Abendroutine — închiderea zilei cu Frau Müller</h4>
  <p>La L14 ai învățat <strong>cum o ții activă</strong> ziua (TV + foto + Spiele). Acum: cum o ajuți să se odihnească. <strong>Seara nu e doar „să se culce"</strong> — e un ritual de tranziție în 5 pași care, dacă e respectat, garantează somnul bun. Dacă e ratat → noapte cu insomnie + anxietate + apel la 3 dimineața.</p>
  <p>Lecția aceasta îți dă: <strong>cina ușoară</strong>, <strong>toaleta de seară</strong>, <strong>pijama + lenjeria</strong>, <strong>medicamentele de noapte</strong> + <strong>Schlafhilfe</strong> (ce să faci dacă NU adoarme), + gramatica <strong>verbe separabile la seară</strong> (zuschließen / ausschalten / ausziehen) + <strong>sollen vs dürfen</strong> (obligație din plan vs permisiune).</p>
</div>

<div class="theory-pillars">
  <h4>🏛️ Cei 6 piloni ai rutinei de seară</h4>
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-icon">🌅</div>
      <div class="pillar-title">Abendroutine</div>
      <div class="pillar-text">18:00-22:00 · 5 pași · liniștire treptată.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🍽️</div>
      <div class="pillar-title">Abendessen</div>
      <div class="pillar-text">Cina ușoară · Brot · Suppe · Kräutertee.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🚿</div>
      <div class="pillar-title">Toaleta</div>
      <div class="pillar-text">Zähne · Gesicht · Hände · WC.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">👕</div>
      <div class="pillar-title">Schlafanzug</div>
      <div class="pillar-text">Pijama · Bettzeug · ușile încuiate.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">💊</div>
      <div class="pillar-title">Medikamente</div>
      <div class="pillar-text">Blutdruck · Schlafhilfe · cu PRUDENȚĂ.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🌙</div>
      <div class="pillar-title">Schlafhilfe</div>
      <div class="pillar-text">Wenn sie nicht einschlafen kann · tehnici.</div>
    </div>
  </div>
</div>

<!-- ============================================
     SUB 1 — Abendroutine (ritualul de 5 pași)
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(0)">
    <h4>1️⃣ Abendroutine — ritualul în 5 pași (18:00 → 22:00)</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-0">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-1" onclick="toggleAudio(event, 'audio-1')">▶</button>
        <audio id="audio-1" preload="none"><source src="audio/01-abendroutine.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Seara cu Frau Müller e o <strong>scară de liniștire</strong>. NU brusc „acum dormi". Treci prin 5 etape, fiecare cu rol clar. Dacă sari o etapă (sau o faci în grabă) — anxietatea crește, somnul fuge. <strong>Răbdarea seara = recompensă noaptea</strong>.</p>

    <h5 style="color:#065f46; margin-top:18px;">⏰ Cele 5 etape (orientativ)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Ora</th><th>Etapa</th><th>Ce faci</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>18:00-18:30</strong></td><td><span class="pflege-fraza">Abendessen</span></td><td>Cina ușoară · NU mâncare grea</td></tr>
          <tr><td><strong>18:30-19:30</strong></td><td><span class="pflege-fraza">Entspannung</span></td><td>TV / radio / citit · LINIȘTIRE</td></tr>
          <tr><td><strong>19:30-20:30</strong></td><td><span class="pflege-fraza">Tagesschau</span></td><td>RITUAL · știrile zilei 20:00</td></tr>
          <tr><td><strong>20:30-21:30</strong></td><td><span class="pflege-fraza">Pflege am Abend</span></td><td>Toaleta · pijama · medicamente</td></tr>
          <tr><td><strong>21:30-22:00</strong></td><td><span class="pflege-fraza">Bettzeit</span></td><td>În pat · lumina jos · liniște</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📋 Vocabular Abendroutine</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>der Abend</strong> · die Abende</td><td>seara · masculin</td></tr>
          <tr><td><strong>am Abend</strong></td><td>seara (când)</td></tr>
          <tr><td><strong>heute Abend</strong></td><td>diseară</td></tr>
          <tr><td><strong>die Abendroutine</strong></td><td>rutina de seară</td></tr>
          <tr><td><strong>die Entspannung</strong></td><td>relaxarea · feminin</td></tr>
          <tr><td><strong>entspannen</strong> / <strong>sich entspannen</strong></td><td>a (se) relaxa</td></tr>
          <tr><td><strong>müde</strong></td><td>obosit</td></tr>
          <tr><td><strong>schläfrig</strong></td><td>somnoros</td></tr>
          <tr><td><strong>die Bettzeit</strong></td><td>ora de culcare</td></tr>
          <tr><td><strong>ins Bett gehen</strong></td><td>a se duce la culcare</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Sfat profesional — STABILITATEA rutinei</h5>
      <p>📌 În fiecare seară aceeași ordine. La aceeași oră (± 15 min).<br>
      📌 NU schimbarea bruscă: dacă Frau Müller s-a obișnuit cu Tagesschau la 20:00, NU spui „azi sărim".<br>
      📌 Anunță cu 5 min înainte: <em>„In fünf Minuten gehen wir ins Bad."</em> NU o iei pe nepregătite.<br>
      📌 La 21:00 lumina se reduce. Nu mai aprinzi neon. Lampă mică, caldă. Asta e <strong>semnal biologic</strong> către melatonină.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 2 — Abendessen
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(1)">
    <h4>2️⃣ Abendessen — cina ușoară (NU mâncare grea seara!)</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-1">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-2" onclick="toggleAudio(event, 'audio-2')">▶</button>
        <audio id="audio-2" preload="none"><source src="audio/02-abendessen.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">În Germania, cina = <strong>das Abendbrot</strong> (literal „pâinea de seară") — NU prânz a doua oară. Sandwich-uri cu mezeluri/brânză, supă ușoară, ceai. La pacientul în vârstă: <strong>cu 2-3 ore înainte de culcare</strong> + <strong>ușor digestibil</strong>. Greutate digestivă = somn agitat = scol noaptea.</p>

    <h5 style="color:#065f46; margin-top:18px;">🍞 Vocabular Abendessen</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>das Abendessen</strong></td><td>cina (oficial)</td></tr>
          <tr><td><strong>das Abendbrot</strong></td><td>cina (tradițional · „pâinea de seară")</td></tr>
          <tr><td><strong>das Brot</strong></td><td>pâinea</td></tr>
          <tr><td><strong>das Brötchen · die Brötchen</strong></td><td>chifla</td></tr>
          <tr><td><strong>der Belag</strong></td><td>topping (mezel / brânză / pastă)</td></tr>
          <tr><td><strong>der Aufschnitt</strong></td><td>mezelurile feliate</td></tr>
          <tr><td><strong>die Wurst</strong> · die Würste</td><td>cârnatul · cu Umlaut</td></tr>
          <tr><td><strong>der Käse</strong></td><td>brânza · 🚨 MASCULIN în DE!</td></tr>
          <tr><td><strong>die Butter</strong></td><td>untul · 🚨 FEMININ în DE!</td></tr>
          <tr><td><strong>die Suppe</strong></td><td>supa · ușoară seara</td></tr>
          <tr><td><strong>der Kräutertee</strong></td><td>ceaiul de plante · Kamille pentru somn</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">✅ DA / ❌ NU pentru cina pacientei</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>✅ DA seara</th><th>❌ NU seara</th></tr>
        </thead>
        <tbody>
          <tr><td>Brot mit Käse (felie subțire)</td><td>Schnitzel / Hackbraten (greu)</td></tr>
          <tr><td>Brot mit Honig sau Marmelade</td><td>Cartofi prăjiți / Pommes</td></tr>
          <tr><td>Suppe ușoară (Hühnersuppe)</td><td>Bohnen / Linsen (gaze)</td></tr>
          <tr><td>Joghurt cu fructe (porție mică)</td><td>Schokolade / Cafea</td></tr>
          <tr><td>Kräutertee (Kamille / Melisse)</td><td>Coca-Cola / suc cu zahăr</td></tr>
          <tr><td>1 felie de pâine + Käse</td><td>Mâncare picantă / cu mult sare</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">💬 Fraze pentru cină (Agnesa)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <tbody>
          <tr><td><strong>Was möchten Sie zum Abendessen?</strong></td><td>Ce ați vrea la cină?</td></tr>
          <tr><td><strong>Brot mit Käse oder mit Wurst?</strong></td><td>Pâine cu brânză sau cu mezel?</td></tr>
          <tr><td><strong>Möchten Sie eine Suppe?</strong></td><td>Vreți o supă?</td></tr>
          <tr><td><strong>Möchten Sie einen Kräutertee?</strong></td><td>Vreți un ceai de plante?</td></tr>
          <tr><td><strong>Schmeckt es Ihnen?</strong></td><td>Vă place?</td></tr>
          <tr><td><strong>Möchten Sie noch etwas?</strong></td><td>Mai vreți ceva?</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 Capcana „mâncare grea seara"</h5>
      <p>NU dai Schnitzel/Hackbraten seara — cere 4-5 ore de digestie + pacientul în vârstă oricum digeră lent. Dacă Petra (fiica) gătește prânzul, seara = doar restul ușor + Brot. Cina grea = scol la 2 noaptea cu disconfort stomacal + Frau Müller sună panică „Mi-e greață".</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 3 — Pflege am Abend (toaleta de seară)
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(2)">
    <h4>3️⃣ Pflege am Abend — toaleta de seară</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-2">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-3" onclick="toggleAudio(event, 'audio-3')">▶</button>
        <audio id="audio-3" preload="none"><source src="audio/03-pflege-abend.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Toaleta de seară ≠ dușul de dimineață. Seara e <strong>scurt + targeted</strong>: dinți + față + mâini + WC. Dacă insistă „vreau să mă spăl", o ajuți cu lavabo (NU duș întreg — risc de cădere + ar fi prea trezitor pentru ora aceea).</p>

    <h5 style="color:#065f46; margin-top:18px;">🚿 Vocabular toaleta seară</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>die Zähne putzen</strong></td><td>a se spăla pe dinți</td></tr>
          <tr><td><strong>die Zahnbürste</strong></td><td>periuța de dinți</td></tr>
          <tr><td><strong>die Zahnpasta</strong></td><td>pasta de dinți</td></tr>
          <tr><td><strong>die Zahnprothese</strong></td><td>proteza dentară · scoasă seara!</td></tr>
          <tr><td><strong>das Gesicht waschen</strong></td><td>a se spăla pe față</td></tr>
          <tr><td><strong>die Hände waschen</strong></td><td>a se spăla pe mâini</td></tr>
          <tr><td><strong>die Seife</strong></td><td>săpunul</td></tr>
          <tr><td><strong>das Handtuch</strong> · die Handtücher</td><td>prosopul · plural cu Umlaut</td></tr>
          <tr><td><strong>auf die Toilette gehen</strong></td><td>a merge la toaletă</td></tr>
          <tr><td><strong>die Nachtcreme</strong></td><td>crema de noapte · pentru piele uscată</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📋 Checklist toaleta de seară (10 minute total)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Pas</th><th>Acțiune</th><th>Timp</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1</strong></td><td>WC (ÎNTÂI! înainte de pat)</td><td>3 min</td></tr>
          <tr><td><strong>2</strong></td><td>Mâinile cu săpun</td><td>1 min</td></tr>
          <tr><td><strong>3</strong></td><td>Față cu apă rece (NU prea rece)</td><td>1 min</td></tr>
          <tr><td><strong>4</strong></td><td>Zähne putzen (periuța)</td><td>2 min</td></tr>
          <tr><td><strong>5</strong></td><td>Proteza dentară SCOASĂ în paharul cu apă</td><td>1 min</td></tr>
          <tr><td><strong>6</strong></td><td>Nachtcreme pe față + mâini (opțional)</td><td>2 min</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">💬 Fraze toaleta seară</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <tbody>
          <tr><td><strong>Wir gehen ins Bad.</strong></td><td>Mergem în baie.</td></tr>
          <tr><td><strong>Müssen Sie auf die Toilette?</strong></td><td>Trebuie la toaletă?</td></tr>
          <tr><td><strong>Bitte putzen Sie Ihre Zähne.</strong></td><td>Vă rog spălați-vă pe dinți.</td></tr>
          <tr><td><strong>Möchten Sie sich die Hände waschen?</strong></td><td>Vreți să vă spălați pe mâini?</td></tr>
          <tr><td><strong>Vergessen Sie die Prothese nicht.</strong></td><td>Nu uitați proteza.</td></tr>
          <tr><td><strong>Soll ich Ihnen helfen?</strong></td><td>Să vă ajut?</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 SIGURANȚĂ — riscul de cădere în baie</h5>
      <p>Baia umedă seara = risc crescut cădere. <strong>Lumina aprinsă</strong>. <strong>Covor antialunecare</strong>. Tu STAI lângă ea — NU pleci „o secundă". Dacă cere intimitate la WC — STAI afară, ușa întredeschisă, întrebi la 2 min „Alles in Ordnung?". Niciodată baia închisă complet seara.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 4 — Schlafanzug + Bett (pijama + pat)
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(3)">
    <h4>4️⃣ Schlafanzug + Bett — pijama + pregătirea patului + ușile încuiate</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-3">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-4" onclick="toggleAudio(event, 'audio-4')">▶</button>
        <audio id="audio-4" preload="none"><source src="audio/04-schlafanzug.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Schimbarea în pijama e <strong>signalul psihologic</strong> că ziua s-a încheiat. Hainele de zi se duc pe scaun (NU pe jos!), pijama pusă, lenjeria patului verificată, lumina principală stinsă, lampă mică, ferestre verificate, ușa de la baie LĂSATĂ deschisă, ușa exterior ÎNCUIATĂ.</p>

    <h5 style="color:#065f46; margin-top:18px;">👕 Vocabular Schlafanzug + Bett</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>der Schlafanzug</strong></td><td>pijamaua (set)</td></tr>
          <tr><td><strong>das Nachthemd</strong></td><td>cămașă de noapte (pt. femei)</td></tr>
          <tr><td><strong>die Pantoffeln</strong></td><td>papucii de casă</td></tr>
          <tr><td><strong>das Bett</strong> · die Betten</td><td>patul</td></tr>
          <tr><td><strong>das Bettzeug</strong></td><td>lenjeria de pat (general)</td></tr>
          <tr><td><strong>die Bettdecke</strong></td><td>plapuma</td></tr>
          <tr><td><strong>das Kissen</strong> · die Kissen</td><td>perna</td></tr>
          <tr><td><strong>das Laken</strong></td><td>cearșaful</td></tr>
          <tr><td><strong>der Bezug</strong></td><td>fața de pernă / plapumă</td></tr>
          <tr><td><strong>der Nachttisch</strong></td><td>noptiera</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🔌 Verbe separabile pentru seară</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Verb</th><th>Sens</th><th>Exemplu</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>ausziehen</strong></td><td>a (se) dezbrăca</td><td><em>Ich ziehe die Bluse AUS.</em></td></tr>
          <tr><td><strong>anziehen</strong></td><td>a (se) îmbrăca</td><td><em>Ich ziehe den Schlafanzug AN.</em></td></tr>
          <tr><td><strong>ausschalten</strong></td><td>a stinge (TV/lumină)</td><td><em>Ich schalte das Licht AUS.</em></td></tr>
          <tr><td><strong>zuschließen</strong></td><td>a încuia</td><td><em>Ich schließe die Tür ZU.</em></td></tr>
          <tr><td><strong>zumachen</strong></td><td>a închide (fereastră)</td><td><em>Ich mache das Fenster ZU.</em></td></tr>
          <tr><td><strong>einschlafen</strong></td><td>a adormi</td><td><em>Sie schläft EIN.</em></td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📋 Checklist sigurNomenire înainte de culcare</h5>
    <ul style="margin: 6px 0 0 22px;">
      <li><strong>🔌 Lumina principală STINSĂ</strong>, lampă mică aprinsă (caldă, gălbuie)</li>
      <li><strong>🪟 Ferestrele ÎNCHISE</strong> (toate, nu lăsa „să intre puțin aer")</li>
      <li><strong>🚪 Ușa principală ÎNCUIATĂ</strong> (zuschließen)</li>
      <li><strong>🚪 Ușa băii ÎNTREDESCHISĂ</strong> (pentru emergence noaptea + lumină reflectă)</li>
      <li><strong>💧 Pahar cu apă pe noptieră</strong></li>
      <li><strong>📞 Telefonul Andreei pe noptiera ei</strong> (sonar maxim)</li>
      <li><strong>🦴 Pantofii de casă lângă pat</strong> (pentru când se ridică noaptea)</li>
      <li><strong>📺 TV STINS</strong> (fără „adorm cu TV pornit")</li>
    </ul>

    <div class="grammar-tip">
      <h5>💡 Verbele separabile recap (regula KLAMMER din L4)</h5>
      <p>📌 Verb separabil = <strong>prefix + verb</strong>. La conjugare prefixul merge la FINAL.<br>
      📌 <em>Ich ziehe den Schlafanzug AN.</em> (NU „Ich anziehe den Schlafanzug.")<br>
      📌 La negație: <em>Ich ziehe den Schlafanzug NICHT AN.</em><br>
      📌 La Perfekt: <em>Ich HABE den Schlafanzug ANgezogen.</em> (ge între prefix și verb)</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 5 — Abendmedikamente + Schlafhilfe
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(4)">
    <h4>5️⃣ Abendmedikamente + Schlafhilfe — pastile + cum o ajuți să adoarmă</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-4">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-5" onclick="toggleAudio(event, 'audio-5')">▶</button>
        <audio id="audio-5" preload="none"><source src="audio/05-medikamente-schlaf.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Pastilele de seară sunt în Medikamentenplan-ul Hausarzt-ului. <strong>NU dai NICIODATĂ Schlafmittel</strong> fără indicație medicală — risc de cădere noaptea (mai ales 78 ani) + dependență. Alternative naturale: <strong>Kamillentee, Melissetee, dormit în cameră răcoroasă, lumină scăzută</strong>. Asta e Schlafhilfe profesională.</p>

    <h5 style="color:#065f46; margin-top:18px;">💊 Vocabular medicație seară</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>die Abendmedikamente</strong></td><td>medicamentele de seară · plural</td></tr>
          <tr><td><strong>die Tablette · die Tabletten</strong></td><td>pastila · cu un pahar de apă</td></tr>
          <tr><td><strong>der Blutdruck</strong></td><td>tensiunea arterială · adesea seara</td></tr>
          <tr><td><strong>das Schlafmittel</strong></td><td>somniferul · cu PRUDENȚĂ MAXIMĂ</td></tr>
          <tr><td><strong>die Schlafhilfe</strong></td><td>ajutorul pentru somn (general)</td></tr>
          <tr><td><strong>einnehmen</strong></td><td>a lua medicament · separabil</td></tr>
          <tr><td><strong>vor dem Schlafen</strong></td><td>înainte de somn</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🌿 Schlafhilfe naturală (preferată!)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <tbody>
          <tr><td><strong>Kamillentee</strong></td><td>Ceai de mușețel · calmant blând</td></tr>
          <tr><td><strong>Melissetee</strong></td><td>Ceai de melisă · anti-anxietate</td></tr>
          <tr><td><strong>warme Milch mit Honig</strong></td><td>Lapte cald cu miere · tradițional</td></tr>
          <tr><td><strong>Lavendelduft</strong></td><td>Mirosul de lavandă · 2 picături pe pernă</td></tr>
          <tr><td><strong>kühle Zimmer (18°C)</strong></td><td>Cameră răcoroasă · optim pentru somn</td></tr>
          <tr><td><strong>leise Musik</strong></td><td>Muzică liniștită · Klassik instrumental</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨🚨 REGULA DE AUR — Schlafmittel + 78 ani = PERICOL!</h5>
      <p>Benzodiazepine (Lorazepam, Diazepam, Zolpidem) + persoană în vârstă = <strong>risc de cădere maximă</strong> (somnolență prelungită, dezechilibru, confuzie matinală). NU le sugerezi tu. <strong>NUMAI dacă Hausarzt-ul a scris în plan.</strong> Dacă pacienta cere („dă-mi un somnifer") — răspunzi: <em>„Das muss der Arzt entscheiden. Ich kann Ihnen einen Tee machen."</em></p>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">💬 Fraze utile pentru Schlafhilfe</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <tbody>
          <tr><td><strong>Können Sie nicht einschlafen?</strong></td><td>Nu puteți adormi?</td></tr>
          <tr><td><strong>Möchten Sie einen Kamillentee?</strong></td><td>Vreți un ceai de mușețel?</td></tr>
          <tr><td><strong>Soll ich Ihnen vorlesen?</strong></td><td>Să vă citesc?</td></tr>
          <tr><td><strong>Möchten Sie das Licht aus?</strong></td><td>Vreți să sting lumina?</td></tr>
          <tr><td><strong>Versuchen Sie sich zu entspannen.</strong></td><td>Încercați să vă relaxați.</td></tr>
          <tr><td><strong>Ich bin gleich nebenan.</strong></td><td>Sunt imediat alături.</td></tr>
          <tr><td><strong>Gute Nacht, Frau Müller!</strong></td><td>Noapte bună, doamnă Müller!</td></tr>
          <tr><td><strong>Schlafen Sie gut!</strong></td><td>Somn ușor!</td></tr>
        </tbody>
      </table>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 6 — Gramatica: sollen vs dürfen
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(5)">
    <h4>6️⃣ Gramatică — sollen vs dürfen (obligație vs permisiune)</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-5">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-6" onclick="toggleAudio(event, 'audio-6')">▶</button>
        <audio id="audio-6" preload="none"><source src="audio/06-grammatik.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Seara folosești des două verbe modale: <strong>sollen</strong> (trebuie — pentru că alt cineva a stabilit) și <strong>dürfen</strong> (am voie — permisiune). Diferența e ESENȚIALĂ în context Pflege: ce SCRIE planul Hausarzt-ului = <em>sollen</em>. Ce permite Frau Müller = <em>dürfen</em>.</p>

    <h5 style="color:#065f46; margin-top:18px;">🎯 Diferența sollen vs müssen vs dürfen</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Verb</th><th>Sens</th><th>Exemplu Pflege</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>sollen</strong></td><td>Trebuie (din partea altcuiva — plan, doctor)</td><td><em>Sie sollen die Tablette nehmen.</em> — Trebuie (pentru că doctorul a spus)</td></tr>
          <tr><td><strong>müssen</strong></td><td>Trebuie (necesitate internă, obligație)</td><td><em>Ich muss schlafen.</em> — Trebuie să dorm (corpul cere)</td></tr>
          <tr><td><strong>dürfen</strong></td><td>A AVEA VOIE (permisiune)</td><td><em>Darf ich Wein trinken?</em> — Am voie să beau vin?</td></tr>
          <tr><td><strong>nicht dürfen</strong></td><td>NU AM VOIE (interdicție)</td><td><em>Sie dürfen NICHT zu viel Salz.</em> — NU AVEȚI VOIE prea multă sare.</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📐 sollen — conjugarea</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Persoana</th><th>Forma</th><th>Traducere RO</th></tr>
        </thead>
        <tbody>
          <tr><td>ich</td><td><strong>soll</strong></td><td>trebuie (eu)</td></tr>
          <tr><td>du</td><td><strong>sollst</strong></td><td>trebuie (tu)</td></tr>
          <tr><td>er/sie/es</td><td><strong>soll</strong></td><td>trebuie (el/ea)</td></tr>
          <tr><td>wir</td><td><strong>sollen</strong></td><td>trebuie (noi)</td></tr>
          <tr><td>ihr</td><td><strong>sollt</strong></td><td>trebuie (voi)</td></tr>
          <tr><td>sie/Sie</td><td><strong>sollen</strong></td><td>trebuie (ei/dvs)</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📐 dürfen — conjugarea</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Persoana</th><th>Forma</th><th>Traducere RO</th></tr>
        </thead>
        <tbody>
          <tr><td>ich</td><td><strong>darf</strong></td><td>am voie</td></tr>
          <tr><td>du</td><td><strong>darfst</strong></td><td>ai voie</td></tr>
          <tr><td>er/sie/es</td><td><strong>darf</strong></td><td>are voie</td></tr>
          <tr><td>wir</td><td><strong>dürfen</strong></td><td>avem voie</td></tr>
          <tr><td>ihr</td><td><strong>dürft</strong></td><td>aveți voie</td></tr>
          <tr><td>sie/Sie</td><td><strong>dürfen</strong></td><td>au voie / aveți voie</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 Capcana sollen vs müssen (cea mai des confundată!)</h5>
      <p>Ambele se traduc „trebuie" în română — DAR:<br>
      ✅ <em>Sie SOLLEN um 21 Uhr die Tablette nehmen.</em> = Trebuie (pentru că DOCTORUL a scris în plan)<br>
      ✅ <em>Ich MUSS jetzt schlafen.</em> = Trebuie (pentru că NU MAI POT)<br>
      📌 În Pflege folosești MULT <strong>sollen</strong> — orice e în Medikamentenplan = sollen.</p>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">💬 Exemple Pflege cu sollen / dürfen</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <tbody>
          <tr><td><strong>Sie sollen um 20 Uhr die Blutdrucktablette nehmen.</strong></td><td>Trebuie (plan) să luați pastila de tensiune la 20.</td></tr>
          <tr><td><strong>Sie sollen viel Wasser trinken.</strong></td><td>Trebuie (sfat medical) să beți multă apă.</td></tr>
          <tr><td><strong>Darf ich noch fernsehen?</strong></td><td>Am voie să mai văd TV?</td></tr>
          <tr><td><strong>Ja, Sie dürfen noch 30 Minuten.</strong></td><td>Da, aveți voie încă 30 min.</td></tr>
          <tr><td><strong>Sie dürfen kein Schlafmittel ohne Rezept.</strong></td><td>NU aveți voie somnifere fără rețetă.</td></tr>
          <tr><td><strong>Was soll ich Ihnen zum Tee machen?</strong></td><td>Ce să vă fac la ceai? (sfat)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="final-note-box">
      <h5>🌟 Sfat de aur — folosește „sollen" CALM, NU rece</h5>
      <p><em>„Frau Müller, jetzt sollen Sie schlafen"</em> = sună ca un ordin sec. <br>
      <em>„Frau Müller, jetzt SOLLEN Sie schlafen — der Doktor hat das so gesagt"</em> = lași responsabilitatea pe DOCTOR, nu pe tine. Te transformi din „șef" în „aliat" al ei. Asta dezarmează rezistența. <strong>Tu NU îi spui ce să facă — doctorul a stabilit.</strong> Tu doar duci planul.</p>
    </div>

  </div>
</div>
`;

function buildTheory() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
}

buildTheory();
