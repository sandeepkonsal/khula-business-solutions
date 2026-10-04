# UI / UX audit (mobile menu + whole site), fixed

| # | Issue | Severity | Fix |
|---|---|---|---|
| 1 | Mobile menu collapsed to one row after the page was scrolled (blurred header trapped the fixed menu) | Critical | Blur moved to a pseudo-element |
| 2 | Header "Book Appointment" button lost its orange fill | High | Button style restored |
| 3 | Mobile Services list always expanded, CTA below the fold | High | Accordion, collapsed by default, CTA visible |
| 4 | Page scrolled behind open menu; Esc did not close menu/dropdown; no aria-expanded on dropdown | High | Scroll lock, Esc, aria-expanded/controls, click/tap/keyboard toggle |
| 5 | Form: inputs <16px (iOS zoom), validation switched off, error message hidden by inline style | High | 16px inputs, native validation, error visible |
| 6 | Tap targets 18–34px (footer, contact links, slider tabs, testimonial dots) | Medium | 44px targets (24px min for dots) |
| 7 | Small orange labels and gradient headings on light sections ~2.8:1 contrast | Medium | Darker orange on light backgrounds (5:1+) |
| 8 | Hero slider and testimonials could not be paused | Medium | Pause button, pause on hover/focus, autoplay tied to progress bar |
| 9 | Anchor jumps (#enquire) hidden under fixed header | Low | scroll-margin-top |
| 10 | Floating WhatsApp/call buttons covered footer text on phones | Low | Smaller on mobile + footer padding |
| 11 | Orphan words in headings ("LEARNING TO / LIVE,") | Low | text-wrap: balance |

Checked and fine: no horizontal scroll on any page at 375px, one H1 per page, image alt text, no duplicate IDs, reduced-motion support.
