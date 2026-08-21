# Prompt für lokale Claude-Code-Sitzung: Website komplett neu bauen

Kopier den folgenden Block komplett und füg ihn im Terminal (in der laufenden `claude`-Sitzung, im Ordner `~/Desktop/TP/Coachchambers`) ein.

---

Bau mir eine komplett neue, hochwertige One-Page-Website für CP Coach Chambers (chambers.body.performance), ein Hybrid-Training- und Ernährungscoaching-Business in Schwerte. Arbeite eigenständig im Auto Mode durch, ohne bei jedem einzelnen Schritt nachzufragen. Nutze dabei:

**Design-System (bereits etabliert, überall im Repo konsistent zu verwenden):**
- Farben: dunkles Teal #1D4242 (primär), Terracotta #C1683A (Akzent), Cream #F3E8D6 (Hintergrund), Body-Text #2b2b2b
- Font: Poppins (Bold/ExtraBold für Headlines, Regular für Body). Bindest du über Google Fonts ein.
- Look: "The Training Ledger" — ehrlich, direkt, warm, aber unpoliert-vertrauenswürdig. Flach (keine Schatten), scharfe bis leicht abgerundete Ecken (~20px auf Boxen), keine Hochglanz-Corporate-Ästhetik.
- Logo liegt bereits im Repo unter `images/brand/cp-coaching-logo-teal-transparent.png` (auf hellem Hintergrund) und `cp-coaching-logo-white-transparent.png` (auf dunklem Hintergrund).

**Struktur der Seite (echte Inhalte, keine Platzhalter):**
1. **Hero**: "Hybrid Training & Ernährung in Schwerte", kurzer Claim, CTA-Button "Schreib mir 'START'" verlinkt auf https://www.instagram.com/chambers.body.performance
2. **Über mich**: Nutze den vollständigen Text aus `content/About_Text/about-website.md` (BJJ-Weltmeister-Geschichte, seit 2017 Coaching, 35 Jahre alt)
3. **Angebot mit echten Preisen**:
   - Erstgespräch: kostenlos, einmalig
   - FlowClub Member: 10€/Monat
   - 1 Monat Sport & Ernährung: 120€ einmalig
   - 2 Monate: 100€/Monat (200€ gesamt)
   - 3 Monate: 90€/Monat (270€ gesamt)
   - 6 Monate: 80€/Monat (480€ gesamt)
   - 10 Tage Ernährung: 25€
   Als klare Preiskarten/Cards, keine Tabelle.
4. **FAQ**: die drei Fragen, die schon in index.html + Schema.org FAQPage stehen
5. **Kontakt/CTA**: nochmal klarer DM-CTA, kein Kontaktformular (Instagram DM ist der einzige Funnel)

**Technisch:**
- Bleib bei purem HTML/CSS/JS ohne Build-Step (siehe CLAUDE.md), aber mach das CSS deutlich hochwertiger: sauberes Grid/Flexbox-Layout, responsive für Mobile, dezente Hover-/Scroll-Animationen, echte visuelle Hierarchie statt Fließtext untereinander.
- Behalte die bestehenden JSON-LD Schema-Blöcke (Organization, Person, FAQPage), robots.txt, llms.txt, sitemap.xml unverändert bei, die sind schon korrekt.
- Committe und pushe die fertige Seite auf den aktuellen Branch, wenn du fertig bist.

Frag mich nur, falls dir eine echte Information fehlt (z. B. weitere Trainingsangebote), erfinde nichts.

---
