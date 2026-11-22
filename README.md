# FORMA — E-Commerce App UI/UX Prototype

A complete, internship-ready UI/UX deliverable for **Task 05 (Advanced) — E-Commerce App UI/UX Design**. FORMA is a premium, editorial store for considered home objects, designed as a self-contained static prototype with no build step and no backend.

## What is included

| File | Purpose |
| --- | --- |
| `index.html` | The interactive 12-screen mobile prototype inside a desktop presentation shell |
| `styles.css` | Design tokens, responsive shell and the complete in-app UI system |
| `app.js` | Product data, routing, cart math, promo, validation, orders, journeys and persistence |
| `journeys.html` / `journeys.css` | Step 1 documentation: research snapshot, three journey maps, IA, wireframes, screen inventory and components |
| `case-study.html` / `case-study.css` | Steps 2–5 documentation: catalog/detail, cart/checkout, prototype, usability evaluation and reflection |
| `assets/screens/*.png` | Twelve captured 390 × 844 phone screens |
| `qa-results.json` | Final automated QA log with pass/fail status for every check |

## How to open

Open `index.html` directly in a modern browser, or serve the folder locally:

```powershell
python -m http.server 8123 --directory "C:\Users\jagri\OneDrive\Desktop\E-Commerce App"
```

Then visit `http://127.0.0.1:8123/index.html`.

> Product photography is loaded from Pexels, so an internet connection is needed for images. Fonts load from Google Fonts with system fallbacks.

## The five workflow steps

1. **User journeys and wireframes** — see `journeys.html`. Three journeys are mapped with actions, thoughts, touchpoints and design opportunities. Six low-fidelity wireframes establish structure before style.
2. **Product listing and detail** — the Shop screen has 16 products, 5 categories, chips, sort, a filter sheet and in-list search. Product detail includes a gallery, variants, quantity, specs and related items.
3. **Cart and checkout** — the bag shows line items, quantity controls, a promo field, free-shipping progress and live totals. Delivery and payment are two focused steps with inline validation and a confirmation screen.
4. **Interactive prototype** — every screen is clickable. Three guided journeys use a coach above the phone. Bag, saved items, orders, recents, address and promo state persist in `localStorage`.
5. **Usability testing** — `case-study.html` documents five task scenarios, the evaluation method, metrics, findings and the iterations they drove. `qa-results.json` contains the final evidence log.

## Try these interactions

- Click one of the three **guided journeys** in the left rail.
- Browse categories, sort by price, or open the filter sheet and apply price/rating/stock filters.
- Use the search screen: try `linen`, `vase`, `oak` or `table lamp`.
- Open a product, change the finish and quantity, then add it to the bag.
- Apply promo code **`FORMA10`** in the bag for 10% off.
- Switch delivery speed and watch the delivery line and grand total update.
- Submit an empty or invalid checkout field to see inline validation.
- Pay with card or UPI, then open the order from **Account → Your orders** and use **Reorder**.
- Press **Ctrl/Cmd + K** to jump to search, **Esc** to close the filter sheet or exit a journey.
- Use **Reset prototype** in the header to restore the demo state.

## Design system

- **Canvas:** 390 × 844 mobile phone inside a responsive desktop stage
- **Display type:** Instrument Serif
- **UI type:** DM Sans
- **Colours:** Ivory `#f7f4ee`, Paper `#fffdf9`, Ink `#1d1a16`, Clay `#b45c39`, Sand `#e9e1d4`, Olive `#5d6553`
- **Components:** product cards, category tiles, chips, pills, icon buttons, quantity steppers, bottom sheet, form fields, tab bar, order cards, status pills and toast

## Final QA summary

The final browser run completed **14/14 checks**:

- 0 console errors and 0 page errors
- 12/12 screens present and reachable from the screen index
- 16/16 product images loaded
- Catalogue filter, sort and search verified
- Filter sheet verified
- All 3 guided journeys completed end to end
- Cart promo, delivery switching, validation and order creation verified
- Persistence across reload and full reset verified
- No horizontal overflow at 1440, 1240, 1024, 980, 900, 760, 390 and 320px
- 12 phone screenshots captured

## Notes for reviewers

This is a high-fidelity front-end prototype. Payments, inventory, authentication and courier tracking are intentionally simulated. The usability evaluation is a task-based walkthrough and heuristic review, not a recruited field study; the case study states this limitation explicitly and proposes a moderated follow-up study as a next step.
