# GameCrate — Indie Gaming Crates

**One‑woman project από τη Despina Karakosta.** Ιδρύθηκε στην **Ελλάδα (2022)**.  
GameCrate είναι μια μοντέρνα single‑page εφαρμογή για συνδρομητικά gaming crates (Standard / Premium) με έντονη neon αισθητική, smooth animations και καθαρή αρχιτεκτονική.

> 💡 Στόχος: εντυπωσιακή παρουσίαση, απλή ροή αγοράς/δώρου και εύκολη μελλοντική επέκταση.

![Hero](src/assets/hero-landing.jpg)

---

## Περιεχόμενα
- [Χαρακτηριστικά](#χαρακτηριστικά)
- [Τεχνολογίες](#τεχνολογίες)
- [Δομή Project](#δομή-project)
- [Σελίδες](#σελίδες)
- [Γρήγορη Εκκίνηση](#γρήγορη-εκκίνηση)
- [Μεταβλητές Περιβάλλοντος (προαιρετικό)](#μεταβλητές-περιβάλλοντος-προαιρετικό)
- [Scripts](#scripts)
- [Στυλ & UI](#στυλ--ui)
- [Οδικός Χάρτης](#οδικός-χάρτης)
- [Άδεια Χρήσης](#άδεια-χρήσης)

---

## Χαρακτηριστικά

- 🎬 **Hero Cinematic**: μία hero εικόνα με neon εφέ (sparkles, glint sweep, parallax tilt στο hover) χωρίς να “φωτίζει” το dark background.
- 🧊 **Καθαρό layout** με επαναχρησιμοποιήσιμα components (`Layout`, `Card`, `Button` κ.λπ.).
- 🧭 **Πλοήγηση** με `react-router-dom`.
- 🛍️ **Plans/Τιμολόγηση**: Standard (€29) & Premium (€59) + gift flow (διάρκειες, tiers).
- 💌 **Gift/Contact** ροές με απλή φόρμα και placeholders για αποστολές email.
- 🧩 **Modular αρχιτεκτονική**: εύκολη προσθήκη νέων sections/σελίδων.
- ✨ **Neon theme & micro‑interactions** με `framer-motion` και `lucide-react` icons.

## Τεχνολογίες

- **React + Vite + TypeScript**
- **Tailwind CSS** (utility-first styling)
- **shadcn/ui** components
- **Framer Motion** (animations)
- **Lucide React** (εικονίδια)
- *(προαιρετικά)* **Supabase** (φάκελος integrations για μελλοντικά δεδομένα/αυθεντικοποίηση)

## Δομή Project

```
src/
├─ assets/
│  ├─ hero-landing.jpg
│  ├─ premium-box.jpg
│  ├─ standard-box.jpg
│  └─ logo.png
├─ components/
│  ├─ layout/
│  │  └─ Layout.tsx
│  ├─ ui/           # κουμπιά, κάρτες κ.λπ. (shadcn/ui)
│  └─ NavLink.tsx
├─ hooks/
├─ integrations/
│  └─ supabase/
├─ lib/
├─ pages/
│  ├─ Index.tsx          # Landing (Hero, Plans, Features)
│  ├─ GiftCrate.tsx      # Δώρο – επιλογή tier/διάρκειας
│  ├─ About.tsx          # Ίδρυση 2022, Ελλάδα, Despina (one‑woman project)
│  ├─ Contact.tsx        # Στοιχεία επικοινωνίας & φόρμα
│  └─ HowItWorks.tsx     # (προαιρετικό) οδηγός
├─ App.tsx
├─ App.css / index.css
├─ main.tsx
└─ vite-env.d.ts
```

> Η δομή μπορεί να διαφέρει ελαφρά ανά branch/commit – αυτή είναι η τρέχουσα πρόθεση αρχιτεκτονικής.

## Σελίδες

- **Landing / Index**: Hero, genres, plans, χαρακτηριστικά, CTA.
- **Gift**: Επιλογή tier (Standard/Premium) & διάρκειας (3/6/12 μήνες), αποδέκτης & μήνυμα.
- **About**: Ιστορία/ταυτότητα — *Independent, one‑woman project by Despina Karakosta. Founded in Greece (2022).* 
- **Contact**: Email/τηλέφωνο/διεύθυνση, φόρμα μηνύματος.
- **How it works** *(αν υπάρχει)*: βήματα συνδρομής/αποστολής.

## Γρήγορη Εκκίνηση

> Προαπαιτούμενα: **Node.js 18+** και **npm** (ή `pnpm`/`yarn`).

```bash
# 1) Κλωνοποίηση
git clone https://github.com/DespinaKr/gamecrate.git
cd gamecrate

# 2) Εγκατάσταση deps
npm install    # ή pnpm install / yarn

# 3) Development
npm run dev

# 4) Build παραγωγής
npm run build

# 5) Προεπισκόπηση του build
npm run preview
```

## Μεταβλητές Περιβάλλοντος (προαιρετικό)

Αν ενεργοποιήσεις Supabase ή εξωτερικές υπηρεσίες, δημιούργησε `.env` στο root:

```bash
# .env
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## Scripts

- `dev` – Vite development server
- `build` – παραγωγικό build
- `preview` – τοπική προεπισκόπηση build

*(Αν χρησιμοποιείς `pnpm`/`yarn`, αντικατάστησε αναλόγως.)*

## Στυλ & UI

- Tailwind theme με neon αποχρώσεις (primary/secondary) και dark background.
- shadcn/ui για βασικά components (Card, Button, κ.λπ.).
- Framer Motion για:
  - hover **parallax tilt** του hero,
  - **glint sweep** & **sparkles**,
  - μικρά transitions στα sections.
- Εικόνες στο `src/assets/` (π.χ. `hero-landing.jpg`, `premium-box.jpg`, `standard-box.jpg`, `logo.png`).

## Οδικός Χάρτης

- [ ] Hook up πραγματικές πληρωμές/checkout.
- [ ] Αποστολή gift emails (scheduler + transactional service).
- [ ] User accounts (Supabase Auth) & preferences per genre/platform.
- [ ] CMS/Panel για διαχείριση μηνιαίων boxes.
- [ ] i18n (EL/EN) & βελτιώσεις προσβασιμότητας (a11y).

## Άδεια Χρήσης

© 2025 **Despina Karakosta**. Όλα τα δικαιώματα διατηρούνται.  
Ο κώδικας/περιεχόμενο προορίζεται για portfolio/demo & προσωπική χρήση.  
Για εμπορική αξιοποίηση/διάθεση, επικοινώνησε πρώτα μαζί μου.

---

### Credits
- Εικονίδια: [lucide.dev](https://lucide.dev)
- UI: [shadcn/ui](https://ui.shadcn.com)
- Animations: [Framer Motion](https://www.framer.com/motion/)

---

> Αν θέλεις να αλλάξουμε άδεια (MIT/Apache-2.0 κ.λπ.), άνοιξε ένα issue ή ενημέρωσέ με και θα προσαρμόσω το `README.md` + `LICENSE`.

