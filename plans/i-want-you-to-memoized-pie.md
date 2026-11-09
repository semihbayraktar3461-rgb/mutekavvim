# MÜTEKAVVİM Multi-Page Website — Remaining Pages Plan

## Context

The full multi-page corporate website for MÜTEKAVVİM has been built across a previous session. All 20+ page components are complete. Three pages remain:

1. `src/pages/TeklifAl.tsx` — 4-step multi-step quote form
2. `src/pages/NotFound.tsx` — 404 page
3. ✅ `src/pages/Iletisim.tsx` — already written this session

---

## TeklifAl — 4-Step Quote Form

State: `step` (1–4) + `completed` (bool). Progress bar at top shows step numbers. Each step renders in a centered card.

**Step 1 — Hizmet Seçimi**
- Grid of 6 service cards (Açık Hava, Matbaa, Promosyon, Dijital, Yazılım, İnşaat)
- Each card: icon + title. Click = selected (purple border + checkmark). Multi-select allowed.
- "İLERİ" button disabled until ≥1 selected.

**Step 2 — Proje Bilgileri**
- Conditional sub-fields based on step 1 selection (e.g. format select for outdoor, print size for matbaa)
- Common fields: Miktar/Adet (number), Şehir (text), İstenen Teslim Tarihi (date input), Tahmini Bütçe (select range)
- Textarea for project description

**Step 3 — Dosya Yükleme**
- Drag-and-drop zone UI (visual only, no real upload backend)
- Accepted formats shown: PDF, AI, EPS, PSD, JPG, PNG
- "Dosya Seç" button (uses `<input type="file" multiple>` attached via ref)
- List of selected files shown with remove (×) buttons
- Skip link: "Şimdilik Dosya Yüklemek İstemiyorum"

**Step 4 — İletişim Bilgileri**
- Fields: Ad Soyad, Şirket (optional), E-posta, Telefon
- KVKK checkbox (required) with link text
- "TEKLİFİ GÖNDER" button

**Completion Screen**
- Purple checkmark circle, "Talebiniz Alındı!" heading, confirmation message
- "ANA SAYFAYA DÖN" Link button

---

## NotFound — 404 Page

- Dark background (`C.dark`), centered vertically
- Large "404" in purple gradient text
- "Sayfa Bulunamadı" heading
- Short message + Link back to home ("ANA SAYFAYA DÖN") and secondary Link to contact ("/iletisim")
- Subtle animated background (CSS keyframe, e.g. slow pulse gradient)

---

## Files to Modify

- `src/pages/TeklifAl.tsx` — create
- `src/pages/NotFound.tsx` — create
- `src/routes.ts` — verify Iletisim, TeklifAl, NotFound are imported and wired (already scaffolded in previous session per summary)

---

## Verification

Run `pnpm exec tsc --noEmit` — expect no errors. Navigate to `/teklif-al` and step through all 4 form steps. Navigate to a nonexistent route (e.g. `/xyz`) and confirm 404 page renders.
