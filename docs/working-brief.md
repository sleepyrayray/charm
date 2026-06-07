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

### Out Of Scope

1. Home cleaning
2. Private in-unit residential cleaning unless confirmed later
3. Repairs
4. Technical maintenance
5. Pool water maintenance
6. Non-cleaning building work

Clarification:
If "maintenance" means maintaining cleanliness through recurring cleaning, that is in scope.

## Current Design Direction

The official brand system is now available. Use the dedicated brand guide as the source of truth:

[Brand Direction](/Volumes/jon/Jon/business/cleaning/charm/docs/brand/README.md)

The site should feel:

1. clean
2. simple
3. sleek
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
4. A soft glassy treatment can still be used lightly if it stays readable and clean.
5. Prioritize breathing room, short copy, and obvious actions over adding every possible section.
6. Avoid small decorative pill labels above content sections.
7. Use static grid cards for service items and audience items when it improves scanability.
8. Keep those item cards clearly informational, with no hover treatment that makes them feel clickable.
9. Use the official logo and star/sparkle motif sparingly so it feels branded, not busy.
10. Shift away from the temporary pastel startup look toward the official fresh, clean, turquoise-led identity.

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

## Structure Direction From Inspiration

The current design/structure mix should aim for:

1. Therese for visual softness and clean presentation
2. Capital One for hierarchy, flow, and content organization

Likely homepage flow:

1. clear hero with service area and CTA
2. quick overview of what CHARM cleans
3. compact note on who CHARM helps
4. why choose CHARM
5. final contact CTA

Likely design translation:

1. official Charm Turquoise with soft aqua and cloud-white support
2. lots of whitespace
3. clean cards or blocks
4. minimal but polished surfaces
5. easy-to-scan sections without huge text walls
6. no section should feel like a wall of information

## Current Content Availability

### Available

1. Basic business focus
2. General service category
3. General target audience
4. General design preference
5. Official logo files
6. Official brand deck
7. Local Gotham font files for reference

### Missing

1. Photos
2. Reviews or testimonials
3. Exact contact details for public use
4. Final service-area list
5. Final service checklist
6. Confirmation that Gotham can be used as a deployed webfont if the site ever switches away from Montserrat

Build note:
The next version can use the official logo and colour palette, but should not depend on photos, reviews, or unconfirmed trust claims.

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
4. Contact
5. Request a Quote

Likely supporting sections:

1. service overview
2. areas we clean
3. who we work with
4. why choose CHARM
5. quote CTA

Homepage content rule:
The homepage should stay short and selective. Detailed process explanations, long FAQs, service checklists, testimonials, and trust credentials should move to supporting pages or wait until real content is available.

Page-role rule:
Contact is for general inquiries with basic information and a message. Request a Quote is a separate flow for building details, cleaning areas, preferred frequency, language, and follow-up method. FAQ lives at the bottom of the About page and should include the quote process.

## Working Content Notes

Safe early messaging:

1. CHARM provides recurring cleaning for condo common areas in Saint-Laurent and nearby Montreal areas.
2. The business helps keep shared spaces clean, presentable, and well maintained from a cleanliness standpoint.
3. The focus is on clear communication, dependable service, and straightforward quote requests.

Content improvements to make next:

1. Replace internal planning language with visitor-facing business copy.
2. Make the hero headline more direct and service-specific.
3. Reduce homepage sections so visitors are not overwhelmed.
4. Keep FAQ content small at the bottom of About until there are real customer questions.
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

## Decision Log

### 2026-04-28

1. Switched the project direction from general residential cleaning to condo-building common-area cleaning.
2. Chose Astro as the working framework direction.

### 2026-04-28

1. Set `CHARM` as the public-facing brand.
2. Set `Service de Nettoyage` / `Cleaning Services` as supporting subtext.
3. Confirmed recurring cleanliness maintenance is in scope, but repairs and technical maintenance are not.
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
