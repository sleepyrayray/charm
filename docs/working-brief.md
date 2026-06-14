# CHARM Working Brief

This is the living project doc for ideas, decisions, placeholders, and open questions.

It is meant to change as the project evolves.

## Current Identity

### Public Brand Name

`CHARM`

### Supporting Subtext

1. `Service de Nettoyage`
2. `Cleaning Services`

### Legal Name

`CHARM SERVICE DE NETTOYAGE s.e.n.c.`

Usage note:

1. Use `CHARM` as the main visible brand on the website.
2. Use the service descriptor as secondary text under the brand when helpful.
3. Use the full legal name in the footer or legal contexts if needed.

## Business Focus

The business focuses on condo-building and shared-space cleaning in Saint-Laurent and nearby Montreal areas.

Core audience:

1. Condo boards and syndicates
2. Property managers
3. Building administrators

## Service Scope

### In Scope

1. Lobbies
2. Hallways
3. Exit stairs and stairwells
4. Shared washrooms
5. Garbage and recycling areas
6. Pool-side areas
7. Recreational areas
8. Gyms
9. Recurring cleanliness upkeep for shared spaces

### Internal Service Boundaries

1. Home cleaning
2. Private in-unit residential cleaning unless confirmed later
3. Repairs
4. Technical maintenance
5. Pool water maintenance
6. Non-cleaning building work

Clarification:
If "maintenance" means maintaining cleanliness through recurring cleaning, that is in scope.

Public-content rule:
Do not create a front-facing "what we do not offer" section. Keep the website focused on strengths and use follow-up conversations to clarify edge cases.

## Current Design Direction

The official brand system is now available. Use the dedicated brand guide as the source of truth:

[Brand Direction](/Volumes/jon/Jon/business/cleaning/charm/docs/brand/README.md)

The site should feel:

1. clean
2. simple
3. structured
4. bright
5. fresh
6. friendly
7. trustworthy
8. professional
9. easy to navigate

### Official Color Direction

1. Charm Turquoise `#007887` is the primary brand color.
2. Aqua Mist `#78E5DE` should be used for soft highlights.
3. Teal Foam `#38A8AB` should support borders, secondary accents, and section rhythm.
4. Cloud White `#F0FFFF` should support light page backgrounds and calm surfaces.
5. Most page areas should still be white or near-white so the site stays minimal and readable.

### Typography Direction

1. Gotham is the official brand typeface from the design deck.
2. Gotham files are copied locally in `private/fonts/gotham/`, but that folder is ignored by Git.
3. Do not commit or deploy Gotham font files until web embedding rights are confirmed.
4. Use Montserrat for the V1 website because it is safe, free, web-friendly, and close to Gotham's clean geometric feel.

### Visual Notes

1. Keep the layout neat and uncluttered.
2. Avoid intimidating, content-heavy walls of text.
3. Use subtle polished styling instead of loud effects.
4. Remove the glassy-effect direction from the active design system.
5. Use solid white, Cloud White, and soft aqua sections with clean borders.
6. Prioritize breathing room, short copy, and obvious actions over adding every possible section.
7. Avoid small decorative pill labels above content sections.
8. Use static grid cards for service items and audience items when it improves scanability.
9. Keep those item cards clearly informational, with no hover treatment that makes them feel clickable.
10. Use the official logo and star/sparkle motif sparingly so it feels branded, not busy.
11. Shift away from the temporary pastel startup look toward the official fresh, clean, turquoise-led identity.
12. Use selected cleaned-area photos on the homepage where available, and keep future photo additions easy to swap.
13. Use a subtle ScrollReveal-style fade-up on inner content parts, not the navbar, footer, or whole layout wrappers; do not delay actual HTML content, and respect reduced-motion preferences.
14. Use solid Antiman-inspired hover/click states for nav links and buttons, pairing Charm Turquoise, Teal Foam, Cloud White, and white so buttons stay readable without bright Aqua Mist hover fills.
15. Keep the shared desktop content shell slightly wider so photo-and-copy sections feel less cramped on large screens.
16. Avoid hover lift on buttons and controls; use colour, border, and subtle icon changes instead.
17. Use consistent title case for visible headings, buttons, card titles, form labels, and UI labels. Keep small connector words lowercase when appropriate, as in `Contact Us`.

## Inspiration References

### Therese Adoremos

Reference:
<https://www.thereseadoremos.com/>

What to borrow:

1. Soft, airy spacing
2. Minimal and calm page rhythm
3. Pastel-friendly visual tone
4. Rounded, friendly section blocks
5. A polished but not intimidating feel

What not to copy directly:

1. Influencer-style personal tone
2. Heavy social-first emphasis
3. Lifestyle-blog content structure
4. Overly casual lowercase voice for business-critical sections

### Capital One Cars

Reference:
<https://www.capitalone.com/cars/>

What to borrow:

1. Clear content hierarchy
2. Strong scan-friendly section structure
3. Obvious top-of-page action path
4. Reusable content modules
5. Practical grouping of related information
6. Helpful support content near the bottom

What not to copy directly:

1. Overly complex product-search patterns
2. Enterprise-scale density
3. Large marketplace-style navigation

### Davis Janitorial

Reference:
<https://davisjanitorial.com/>

What to borrow:

1. Practical service-business homepage structure
2. Clear contact-first CTA rhythm
3. Services-offered section paired with a cleaned-space image
4. Work/photo section
5. Contact section near the bottom
6. Common questions near the end
7. Simple footer navigation and contact paths

What not to copy directly:

1. Their branding, colours, copy, or imagery
2. Residential-cleaning positioning
3. Client login or customer portal features
4. Unsupported claims, reviews, badges, or proof points
5. Any Jobber-specific flow unless CHARM later chooses that tool

## Structure Direction From Inspiration

The current design/structure mix should aim for:

1. Davis Janitorial for the service-business homepage structure
2. CHARM's official brand system for the visual identity
3. Capital One only as a secondary reference for hierarchy and clear action paths
4. Therese only as a secondary reference for softness and breathing room

Likely homepage flow:

1. header with logo, nav, language switch, and contact CTA
2. hero with service message, CTA, and a selected cleaned-area background image
3. services offered paired with the lobby image
4. our work / cleaned-area image gallery
5. contact CTA that opens the global modal
6. FAQ accordion with soft answer reveal
7. footer

Likely design translation:

1. official Charm Turquoise with soft aqua and cloud-white support
2. lots of whitespace
3. clean solid cards or blocks
4. no glassy-effect containers
5. easy-to-scan sections without huge text walls
6. no section should feel like a wall of information
7. image areas that can be swapped later without changing the whole layout

## Current Content Availability

### Available

1. Basic business focus
2. General service category
3. General target audience
4. General design preference
5. Official logo files
6. Official brand deck
7. Local Gotham font files for reference
8. Selected homepage cleaned-area photos for the hero, services image section, and work gallery

### Missing

1. Reviews or testimonials
2. Exact contact details for public use
3. Final service-area list
4. Final service checklist
5. Confirmation that Gotham can be used as a deployed webfont if the site ever switches away from Montserrat

Build note:
The homepage can use the selected cleaned-area photos, official logo, palette, and Montserrat. It should still avoid reviews, trust claims, final contact details, or unsupported proof points until those are confirmed.

## Site Structure Guidance

When shaping the website structure:

1. Use local condo-cleaning competitor sites as references for familiar sections.
2. Follow content patterns that property managers already expect to see.
3. Only include sections when there is real content for them.
4. Prefer a shorter, clearer version of competitor structures instead of copying their density.

Likely core pages:

1. Home
2. Services
3. About
4. Contact page and legacy `/quote` fallback route

Likely supporting sections:

1. service overview
2. areas we clean
3. work/photo gallery
4. contact CTA
5. FAQ accordion with soft answer reveal

Homepage content rule:
The homepage should follow a practical Davis-inspired service-site flow, but still stay short and selective. Keep the hero focused on one contact CTA, place the services checklist beside the lobby image, keep the inline contact form on the homepage, open the same contact form in a modal when visitors click `Contact Us`, and keep the FAQ collapsed as an accordion so visitors are not overwhelmed.

Page-role rule:
The site now uses a simple one-page contact form instead of a multi-step quote wizard. The homepage keeps the form inline, `Contact Us` opens the same form in a global modal, `/contact` is the direct fallback route, and `/quote` remains only as a legacy fallback so older links do not break. The full FAQ can appear on the homepage and at the bottom of About while the FAQ set is still small.

Contact form rule:
Keep the form short and direct. Collect full name, email, phone, preferred language, preferred contact method, and a message. Use floating labels and field-level validation. On the homepage, place the form in a white card on a full-width dark teal contact band and keep the helper sentence inside the form card. Keep final form delivery disabled until the real receiving inbox and delivery method are confirmed.

Feature rule:
Do not add client login, online accounts, or a customer portal in V1.

## Working Content Notes

Safe early messaging:

1. CHARM provides recurring cleaning for condo common areas in Saint-Laurent and nearby Montreal areas.
2. The business helps keep shared spaces clean, presentable, and well maintained from a cleanliness standpoint.
3. The focus is on clear communication, dependable service, and straightforward contact messages.

Content improvements to make next:

1. Replace internal planning language with visitor-facing business copy.
2. Make the hero headline more direct and service-specific.
3. Reduce homepage sections so visitors are not overwhelmed.
4. Keep FAQ content small until there are real customer questions.
5. Avoid unconfirmed claims such as insurance, eco-friendly products, years of experience, response time, or guarantees.

## Open Questions

1. Final contact phone number
2. Final public email
3. Exact service areas
4. Exact building types served
5. Exact service frequency options
6. Whether the business is insured
7. Whether there are any trust claims that can be published
8. Final French wording for brand subtext
9. Whether Gotham webfont use is licensed for the live website if the site ever switches away from Montserrat
10. Whether brand mockup images from the deck are inspiration only or can be used publicly
11. Whether the current homepage photo set is final enough for launch
12. Which email inbox should receive contact submissions
13. Which form delivery method should be used for the static GitHub Pages site

## Decision Log

### 2026-04-28

1. Switched the project direction from general residential cleaning to condo-building common-area cleaning.
2. Chose Astro as the working framework direction.

### 2026-04-28

1. Set `CHARM` as the public-facing brand.
2. Set `Service de Nettoyage` / `Cleaning Services` as supporting subtext.
3. Confirmed recurring cleanliness upkeep as the main service direction for shared condo-building spaces.
4. Initially set the temporary design direction to minimal, pastel-like, and purple-led before the later teal direction.

### 2026-04-29

1. Switched the temporary main color direction from purple to teal.
2. Tightened the homepage direction toward fewer sections and less on-screen information.
3. Confirmed simplicity and minimalism should guide the homepage polish pass.
4. Removed decorative section labels and switched service/audience lists to static grid cards.

### 2026-05-05

1. Changed the header from a floating rounded panel to a full-width top bar.
2. Changed the footer into a teal full-width reveal panel fixed behind the page content.
3. Added more bottom spacing before the footer reveal on core pages.
4. Added an all-caps creator credit linking to Ray Hernaez's portfolio.

### 2026-06-06

1. Received the official CHARM brand deck and logo files.
2. Saved the brand deck in `docs/brand/`.
3. Saved the primary logo and icon logo in `public/brand/`.
4. Copied Gotham font files locally in `private/fonts/gotham/` and kept them ignored by Git until webfont licensing is confirmed.
5. Updated the design direction to use Charm Turquoise `#007887`, Aqua Mist `#78E5DE`, Teal Foam `#38A8AB`, and Cloud White `#F0FFFF`.
6. Chose Montserrat as the V1 website font while Gotham licensing remains separate.
7. Copied Montserrat into `src/assets` and wired it through `@font-face`.
8. Added official brand colour tokens and favicon metadata to the site foundation.
9. Replaced text-only header and footer branding with the official logo assets.
10. Changed the footer back to a normal scroll footer instead of a fixed reveal footer.
11. Refreshed the homepage visual system with the official logo, palette, soft aqua surfaces, and restrained sparkle accents.
12. Refreshed the Services page with clearer condo common-area cleaning scope, short item descriptions, and the official brand visual system.

### 2026-06-07

1. Pivoted the next design direction toward Davis Janitorial's service-business structure while keeping CHARM's own branding.
2. Confirmed client login is not needed for V1.
3. Confirmed cleaned-area image placeholders should be added until real photos are shared.
4. Removed the glassy-effect direction from the active design plan.
5. Started the homepage redesign with a Davis-inspired flow, solid sections, direct transparent-logo usage, and cleaned-area placeholders.
6. Adjusted the homepage toward the Davis-style centered image hero, checklist services, contact CTA, full FAQ, and dark teal footer using the light logo alternative.
7. Aligned the Services page with the new structure using compact service highlights and category checklists.
8. Aligned About and Contact with the same page system, including the About FAQ accordion and clearer lead-capture flow.

### 2026-06-10

1. Added selected cleaned-area photos to the homepage hero, services image section, and Our Work section.
2. Replaced Our Work placeholders with a nine-photo gallery capped at three columns on desktop.
3. Added a lightbox with previous and next controls, bottom thumbnails, a centered `1/9` counter, image captions, and a plain white `X` close control.
4. Added basic deterrents against casual image right-clicking, dragging, and copying.

### 2026-06-13

1. Treated the homepage as good enough for now and shifted focus to the Services page.
2. Reworked the Services page plan to avoid duplicating homepage content.
3. Set the Services page structure to an integrated service intro, six expanded service rows with image placeholders, a full-width contact CTA, and service-specific FAQ.
4. Moved the mobile contact CTA into the hamburger menu to keep the header cleaner.
5. Replaced the gallery lightbox text `X` with a circular crossed-bar close control.
6. Removed hover lift from buttons and controls; colour and border changes should carry hover states instead.
7. Changed the Services intro to a centered `Our Services` title with a short supporting paragraph.
8. Added photos for all six current `Our Services` rows while keeping placeholders available for future service additions.
9. Replaced the homepage `Our Work` gallery references with the polished PNG image set while keeping the existing display order.
10. Standardized visible English headings, buttons, card titles, and form labels to title case across the site.
11. Removed the Services limitation section so the page stays focused on strengths and follow-up conversations.
12. Moved contact interactions to a global modal with `/contact` as the direct route and `/quote` kept as a legacy fallback.
13. Added a soft slide-down animation for FAQ answers.
14. Merged the Services intro into the main service-detail section and moved the full-width contact CTA above the Services FAQ.
15. Replaced the multi-step lead-capture wizard with a simpler one-page contact form for first messages and follow-up preferences.
