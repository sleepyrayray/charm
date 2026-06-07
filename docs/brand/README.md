# CHARM Brand Direction

This document is the working brand guide for the website redesign.

It is based on the official brand deck and logo files received on 2026-06-06.

## Brand Assets

Committed project assets:

1. `docs/brand/CharmServicedeNettoyage-BrandDesign.pdf`
2. `public/brand/charm-logo-primary.png`
3. `public/brand/charm-logo-icon.png`
4. `src/assets/fonts/montserrat/`

Local-only font assets:

1. `private/fonts/gotham/`

Important:
The Gotham font files are copied locally for design reference, but `private/` is ignored by Git. Do not move Gotham files into `public/` or commit them until the business confirms the license allows website embedding and public deployment.

## Brand Personality

The website should now feel:

1. clean
2. friendly
3. trustworthy
4. professional
5. fresh
6. simple
7. slightly bold

The brand should not feel:

1. generic
2. overly corporate
3. overly playful
4. cluttered
5. luxury for the sake of luxury
6. dependent on stock photos
7. glassy or glossy as the main visual style

## Logo Usage

### Primary Logo

Use `public/brand/charm-logo-primary.png` for:

1. desktop header
2. homepage hero brand moment
3. footer brand area
4. larger marketing surfaces

Usage notes:

1. Keep enough clear space around the logo.
2. Do not stretch, recolor, outline, or add shadows to the logo.
3. Keep the logo readable; the subtext is small and should not be forced into tiny sizes.
4. Use real text headings near the logo for SEO instead of relying on the logo image as the only brand text.

### Icon Logo

Use `public/brand/charm-logo-icon.png` for:

1. favicon or app icon
2. mobile header if the full logo becomes too small
3. small decorative brand accents
4. social/profile-style usage

Usage notes:

1. The icon should support the layout, not replace the full brand everywhere.
2. The star/sparkle can inspire subtle visual details, but it should not become noisy.

## Colour Palette

Official palette from the brand deck:

| Name | Hex | Suggested Website Role |
| --- | --- | --- |
| Charm Turquoise | `#007887` | primary brand colour, footer, main CTA, key accents |
| Aqua Mist | `#78E5DE` | soft highlights, gentle backgrounds, small accents |
| Teal Foam | `#38A8AB` | secondary accents, borders, hover states, supporting blocks |
| Cloud White | `#F0FFFF` | light background tint, soft sections, subtle card surfaces |

Recommended supporting neutrals:

| Name | Hex | Suggested Website Role |
| --- | --- | --- |
| Ink | `#172426` | primary body text |
| Soft Ink | `#4D6266` | secondary text |
| White | `#FFFFFF` | main page background and card surfaces |

Design notes:

1. Use Charm Turquoise more confidently than the temporary teal.
2. Keep most page surfaces white or Cloud White so the site stays bright.
3. Use Aqua Mist sparingly; it can look too loud if it becomes the main background.
4. Use Teal Foam for gentle contrast and supporting elements.
5. Check contrast carefully, especially when using light aqua text or buttons.

## Typography

The brand deck specifies Gotham. For the live website, Montserrat is the selected V1 font because it is free, web-friendly, and close enough to Gotham's clean geometric feel.

Recommended website roles if Gotham web usage is licensed:

1. Gotham Book or Regular for body copy.
2. Gotham Medium for navigation, labels, and short support text.
3. Gotham Bold for headings and primary buttons.
4. Gotham Ultra only for rare display moments, if needed.

V1 website font direction:

1. Use Montserrat for body copy, headings, navigation, buttons, and form UI.
2. Use medium and bold weights for hierarchy instead of adding extra typefaces.
3. Keep the CSS font stack ready to swap if Gotham web usage is licensed later.
4. Self-host Montserrat through `@font-face` in `src/styles/global.css`.

Typography rules:

1. Do not add another script font; the logo already carries the script personality.
2. Keep headings short and confident.
3. Use generous line height for readability.
4. Use uppercase sparingly for small labels, nav text, and brand-like details.
5. Avoid very thin weights for body text because they can feel weak and reduce readability.

## Visual System Direction

The redesign should move away from the temporary pastel/glassy startup look and toward a cleaner service-business structure inspired by Davis Janitorial, while keeping the official CHARM brand system:

1. crisp white and Cloud White page surfaces
2. deeper Charm Turquoise for strong brand moments
3. soft Aqua Mist and Teal Foam accents
4. rounded but cleaner containers
5. solid sections and cards instead of glassy effects
6. light water/foam-inspired colour blocks only when helpful
7. small sparkle details inspired by the logo star, used sparingly
8. placeholder image areas for future cleaned-space photos

The site should stay simple. Do not add many decorative elements just because the brand has a sparkle motif.

## Structural Reference

Current structure inspiration:

[Davis Janitorial](https://davisjanitorial.com/)

Use this as a layout and content-flow reference only. Do not copy Davis Janitorial's brand, wording, colours, images, reviews, or customer-portal features.

Borrow:

1. service-business homepage rhythm
2. strong quote CTA
3. specialties section
4. services-offered section
5. cleaned-work/photo section
6. quote section near the bottom
7. common questions near the end

Do not include in V1:

1. client login
2. customer portal
3. online account features
4. unsupported trust claims

## Page-Level Design Notes

### Header

1. Use the primary logo on desktop.
2. Consider the icon logo on tight mobile screens.
3. Keep navigation simple and readable.
4. The quote CTA should use Charm Turquoise or a high-contrast variant.

### Homepage

1. Shift to a Davis-inspired service-site flow.
2. Use the logo and official palette to create a stronger first impression.
3. Add placeholder image spaces for cleaned areas until real photos are ready.
4. Keep content selective so the page does not feel intimidating.
5. Avoid glassy-effect cards and translucent panels.

### Services

1. Keep service cards practical and clear.
2. Use official colours for section rhythm, not to decorate every item.
3. Make common-area cleaning feel polished and dependable.

### About

1. Use the brand story from the deck only where it matches confirmed business facts.
2. Keep the tone human and local.
3. Put FAQ at the bottom as currently planned.

### Contact And Quote

1. Keep Contact and Request a Quote visually related but functionally distinct.
2. Use form styling that feels clean and calm.
3. Make the quote action easy to find without making every page feel sales-heavy.

### Footer

1. Keep the full-width teal footer concept.
2. Tune the colour to Charm Turquoise.
3. Use the primary logo or icon depending on contrast and spacing.
4. Keep the creator credit readable but secondary.

## Content Notes From Brand Deck

Brand keywords:

1. reliable
2. friendly
3. trustworthy
4. clean
5. eye-catching
6. bold

Useful phrasing ideas:

1. clean, welcoming spaces
2. reliable common-area cleaning
3. professional and consistent service
4. clear communication
5. dependable long-term care

Content caution:
Only use claims that are true for the business. The deck includes positioning language, but the website should still avoid unconfirmed claims like years of experience, insurance, guarantees, or specific response times until confirmed.

## Redesign Roadmap

Recommended order before touching code:

1. Use Montserrat for the V1 website typography.
2. Decide whether the desktop header should show the full primary logo or a compact logo treatment.
3. Confirm whether the icon should be used as the favicon.
4. Confirm whether brand mockup photos are inspiration only or can be used publicly.
5. Confirm which cleaned-area photos can be added when the user shares them.

Recommended implementation order:

1. Add brand tokens for colour, typography, shadows, borders, and surfaces. Done.
2. Add Montserrat and favicon/icon usage. Done.
3. Refresh header and footer. Done.
4. Refresh homepage visual system. Done.
5. Refresh Services page. Done.
6. Pivot homepage to Davis-inspired structure with CHARM branding and image placeholders.
7. Remove glassy-effect styling from the active design system.
8. Refresh About, Contact, and Quote pages.
9. Run mobile, accessibility, and contrast checks.
