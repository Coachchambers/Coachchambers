# CLAUDE.md

Anleitung für Claude Code und Cowork in diesem Repo.

## Worum es geht

Statische Website (reines HTML, CSS, JS, kein Build, kein Framework) für
**CP Coaching**, das Coaching-Business von Coach Chambers in Schwerte.
Hybrid Training und Ernährungsberatung, Zielgruppe ab 30.
Live unter https://coach-chambers.de über GitHub Pages, Branch `main`.

## Sprache und Marke, verbindlich

- Alle Inhalte auf **Deutsch**, in der Ansprache per du.
- **Keine Gedankenstriche** (kein Halbgeviertstrich, kein Geviertstrich) in deutschen Texten.
  Stattdessen Komma, Doppelpunkt oder ein neuer Satz.
- Die Marke heißt **CP Coaching**. Nicht "CP Coach Chambers".
- Öffentlich tritt er als **Coach Chambers** auf, 35 Jahre alt.
- Der Vorname **Jamie darf öffentlich nicht auftauchen**, einzige Ausnahme ist
  das gesetzlich vorgeschriebene Impressum.
- BJJ ist seine **Leidenschaft**, nicht seine Hauptsportart.
  Weltmeisterschaft: **dritter Platz**, BJJ Novice, Las Vegas. Crossfit: **zwei Jahre**.
- Kein Erfinden von Zahlen, Bewertungen, Kundenstimmen oder Garantien.
  Bewertungen nur, wenn sie echt sind und der Kunde zugestimmt hat.

## Struktur

| Pfad | Inhalt |
|---|---|
| `index.html` | Startseite, Abschnitte `#method` `#about` `#pricing` `#app` `#guides` `#testimonials` `#faq` `#contact` |
| `personal-training-schwerte/` | Landingpage Personal Training |
| `ernaehrungsberatung-schwerte/` | Landingpage Ernährungsberatung |
| `impressum/` `datenschutz/` `widerruf/` | Rechtstexte, alle mit `noindex, follow` |
| `css/style.css` | gesamtes Styling, Farben als CSS-Variablen in `:root` |
| `css/fonts.css` | Poppins, lokal gehostet, keine Verbindung zu Google-Servern |
| `js/main.js` | Mobilmenü, Bilder-Slider, Klick-Tracking |
| `images/` | `brand/` `coach/` `guides/` `og/` `testimonials/` |
| `content/` | Marketing-Material: Posts, Highlights, Vorlagen, Aufgabenliste |
| `sitemap.xml` `robots.txt` `llms.txt` | Suchmaschinen und KI-Assistenten |

**Aktueller Arbeitsstand und offene Aufgaben: `content/Aufgaben/naechste-schritte.md`.**

## Design-Token

```
--teal #1D4242   --teal-deep #0F2828
--terracotta #C1683A   --terracotta-light #E08B5C
--cream #F3E8D6   --cream-2 #FBF6EC   ink #20201C
```

Schrift: Poppins für Überschriften und Fließtext, Georgia als Serifen-Akzent.

## Regeln für Bilder

- **Bewegungsfotos werden nicht beschnitten.** Wenn eine Übung zu sehen ist,
  muss die Ausführung komplett drauf sein, inklusive Füße.
- Kein eingebrannter Text in Fotos von ihm.
- Jedes Bild als `<picture>` mit WebP-Quelle und JPEG-Fallback.
  Ohne Fallback ist es auf manchen Geräten schon einmal ausgefallen.
- `width` und `height` als Attribut setzen, `img { height: auto }` steht global im CSS.
- Das Vorher-Nachher-Foto von Denise darf **nur auf der Website** stehen,
  **nicht** im Google Unternehmensprofil (Richtlinien zu Gesundheitsversprechen).

## Kontaktwege auf der Seite

- **Erstgespräch** führt immer auf die Nutrilize-Buchungsseite
  `https://portal.nutrilize.app/appointment/Dg7oV1jcnwQIzPyNgyOn`.
- **Alle bezahlten Pakete** führen auf WhatsApp Business,
  `https://wa.me/4915233956300?text=...` mit einer vorformulierten Frage je Angebot.
- Es steht bewusst **kein separater Telefonlink** auf der Seite.
  Wer anrufen will, macht das aus WhatsApp heraus. Ausnahme: Impressum und Widerruf.
- Geschäftsnummer: **015233956300**, überall zeichengenau gleich.

## Lokal starten und prüfen

Kein Build. Verzeichnis mit einem beliebigen Dateiserver ausliefern:

```
python3 -m http.server 8960
```

Nach jeder Änderung an Layout oder Bildern prüfen, nicht schätzen. Chromium liegt
unter `/opt/pw-browsers/chromium`, Playwright unter `/opt/node22/lib/node_modules/playwright`.
Geprüft wird üblicherweise auf 320, 375, 414 und 1200 Pixel Breite:
seitlicher Überlauf, kaputte Bilder, verzerrte Seitenverhältnisse, fehlende Alt-Texte,
genau eine H1 pro Seite, keine 404.

Wird CSS oder JS geändert, den Versionsstempel `?v=JJJJMMTTx` in allen HTML-Dateien
mit hochziehen, sonst liefern Browser die alte Datei aus.

## Veröffentlichen

Entwickelt wird auf `claude/marketplace-marketing-skills-qinlz8`, danach
Fast-Forward-Merge nach `main` und pushen. GitHub Pages liefert `main` aus.

## Sicherheit

- **Niemals** API-Schlüssel, Tokens oder Passwörter in den Chat, in Dateien oder in den Code.
  Die Seite ist statisch, jeder Besucher könnte sie lesen.
- Kundendaten gehören nicht ins Repo.
