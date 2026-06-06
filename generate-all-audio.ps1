# Generare WAV-uri Hedda pentru Pflege L15 - Abendroutine
# 10 dictat + 48 flashcards = 58 fisiere

$lessonPath = $PSScriptRoot
$audioDir = "$lessonPath\audio"
$lettersDir = "$audioDir\letters"

if (-not (Test-Path $audioDir)) { New-Item -ItemType Directory -Force -Path $audioDir | Out-Null }
if (-not (Test-Path $lettersDir)) { New-Item -ItemType Directory -Force -Path $lettersDir | Out-Null }

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Hedda Desktop')
$synth.Rate = -1

# DICTAT (10)
$dictat = @(
    @{ file='dictat-01.wav'; text='der Schlafanzug.' },
    @{ file='dictat-02.wav'; text='die Bettdecke.' },
    @{ file='dictat-03.wav'; text='der Krautertee.' },
    @{ file='dictat-04.wav'; text='einschlafen.' },
    @{ file='dictat-05.wav'; text='ausschalten.' },
    @{ file='dictat-06.wav'; text='die Zahne putzen.' },
    @{ file='dictat-07.wav'; text='die Tablette.' },
    @{ file='dictat-08.wav'; text='mude.' },
    @{ file='dictat-09.wav'; text='die Pantoffeln.' },
    @{ file='dictat-10.wav'; text='Gute Nacht.' }
)

# FLASHCARDS (48)
$flashcards = @(
    # Abendroutine (8)
    @{ file='abend.wav';            text='der Abend. die Abende.' },
    @{ file='am-abend.wav';         text='am Abend.' },
    @{ file='heute-abend.wav';      text='heute Abend.' },
    @{ file='abendroutine.wav';     text='die Abendroutine.' },
    @{ file='entspannung.wav';      text='die Entspannung.' },
    @{ file='muede.wav';            text='mude.' },
    @{ file='schlaefrig.wav';       text='schlafrig.' },
    @{ file='ins-bett-gehen.wav';   text='ins Bett gehen.' },

    # Abendessen (8)
    @{ file='abendessen.wav';       text='das Abendessen.' },
    @{ file='abendbrot.wav';        text='das Abendbrot.' },
    @{ file='brot.wav';             text='das Brot.' },
    @{ file='belag.wav';            text='der Belag.' },
    @{ file='kaese.wav';            text='der Kase.' },
    @{ file='wurst.wav';            text='die Wurst. die Wurste.' },
    @{ file='suppe.wav';            text='die Suppe.' },
    @{ file='kraeutertee.wav';      text='der Krautertee.' },

    # Pflege am Abend (8)
    @{ file='zaehne-putzen.wav';    text='die Zahne putzen.' },
    @{ file='zahnbuerste.wav';      text='die Zahnburste.' },
    @{ file='zahnpasta.wav';        text='die Zahnpasta.' },
    @{ file='zahnprothese.wav';     text='die Zahnprothese.' },
    @{ file='gesicht-waschen.wav';  text='das Gesicht waschen.' },
    @{ file='haende-waschen.wav';   text='die Hande waschen.' },
    @{ file='seife.wav';            text='die Seife.' },
    @{ file='toilette-gehen.wav';   text='auf die Toilette gehen.' },

    # Schlafanzug + Bett (8)
    @{ file='schlafanzug.wav';      text='der Schlafanzug.' },
    @{ file='nachthemd.wav';        text='das Nachthemd.' },
    @{ file='pantoffeln.wav';       text='die Pantoffeln.' },
    @{ file='bett.wav';              text='das Bett. die Betten.' },
    @{ file='bettdecke.wav';        text='die Bettdecke.' },
    @{ file='kissen.wav';           text='das Kissen. die Kissen.' },
    @{ file='laken.wav';            text='das Laken.' },
    @{ file='nachttisch.wav';       text='der Nachttisch.' },

    # Medikamente + Schlafhilfe (8)
    @{ file='abendmedikamente.wav'; text='die Abendmedikamente.' },
    @{ file='tablette.wav';         text='die Tablette. die Tabletten.' },
    @{ file='blutdruck.wav';        text='der Blutdruck.' },
    @{ file='schlafmittel.wav';     text='das Schlafmittel.' },
    @{ file='schlafhilfe.wav';      text='die Schlafhilfe.' },
    @{ file='kamillentee.wav';      text='der Kamillentee.' },
    @{ file='melissetee.wav';       text='der Melissetee.' },
    @{ file='milch-honig.wav';      text='warme Milch mit Honig.' },

    # sollen/duerfen + verbe separabile (8)
    @{ file='sollen.wav';           text='sollen. Sie sollen die Tablette nehmen.' },
    @{ file='duerfen.wav';          text='durfen. Darf ich Wein trinken?' },
    @{ file='ausziehen.wav';        text='ausziehen. ich ziehe aus.' },
    @{ file='anziehen.wav';         text='anziehen. ich ziehe an.' },
    @{ file='ausschalten.wav';      text='ausschalten. ich schalte aus.' },
    @{ file='zuschliessen.wav';     text='zuschliessen. ich schliesse zu.' },
    @{ file='einschlafen.wav';      text='einschlafen.' },
    @{ file='gute-nacht.wav';       text='Gute Nacht! Schlafen Sie gut!' }
)

$total = $dictat.Count + $flashcards.Count
$ok = 0; $fail = 0; $idx = 0

Write-Host "=== DICTAT ($($dictat.Count)) ===" -ForegroundColor Cyan
foreach ($w in $dictat) {
    $idx++; $wavPath = Join-Path $audioDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: $($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: $($w.file)" -ForegroundColor Red }
}

Write-Host "=== FLASHCARDS ($($flashcards.Count)) ===" -ForegroundColor Cyan
foreach ($w in $flashcards) {
    $idx++; $wavPath = Join-Path $lettersDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: letters/$($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: letters/$($w.file)" -ForegroundColor Red }
}

$synth.Dispose()
Write-Host ""
Write-Host "TOTAL: $ok OK, $fail FAIL din $total" -ForegroundColor $(if ($fail -eq 0) { 'Green' } else { 'Yellow' })
