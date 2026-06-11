# CHARM Site Architecture

This document defines the current website structure before development starts.

It is a planning doc, not a final design spec.

Brand source of truth:

[Brand Direction](/Volumes/jon/Jon/business/cleaning/charm/docs/brand/README.md)

## Purpose

The website should feel:

1. clean
2. structured
3. easy to scan
4. professional
5. fresh and polished
6. practical

The structure should feel familiar to property managers and condo decision-makers, while staying shorter and simpler than most competitor sites.

## Current Design Reference Shift

The current structural reference is:

[Davis Janitorial](https://davisjanitorial.com/)

This is a structure reference only. The CHARM site should not copy Davis Janitorial's wording, branding, colours, imagery, or business claims.

What to borrow:

1. service-business homepage rhythm
2. clear top navigation with a strong quote CTA
3. hero section that explains the service quickly
4. short specialties section
5. practical services-offered section
6. work/photo section showing cleaned spaces
7. strong quote request section near the bottom
8. common questions near the end of the page
9. simple footer with direct navigation and contact paths

What not to borrow for V1:

1. client login
2. external customer portal
3. online account features
4. claims, reviews, or trust badges that are not confirmed
5. residential-cleaning positioning
6. image-heavy layouts that require final photos before the page works

CHARM translation:

1. Use the official CHARM logo and teal/turquoise palette.
2. Keep the business focus on condo-building common-area cleaning.
3. Use selected cleaned-area photos where available, starting with the homepage hero, specialties image, and work gallery.
4. Use solid, clean sections instead of glassy surfaces.
5. Keep the site calm and readable, not overly glossy.

## Core Navigation

### Desktop Navbar

Left:

1. primary CHARM logo
2. accessible text label for `CHARM`

Center or right:

1. Home
2. Services
3. About
4. Contact

Far right:

1. `Request a Quote` button
2. `FR` language switcher

### Mobile Navbar

Top row:

1. CHARM logo or compact icon logo
2. accessible text label for `CHARM`
3. hamburger menu

Mobile menu items:

1. Home
2. Services
3. About
4. Contact
5. Request a Quote
6. FR

### Navbar Behavior

1. Sticky on scroll
2. Use a solid or near-solid white surface for clarity
3. Keep it compact
4. The quote CTA should stay easy to find at all times
5. Use Charm Turquoise `#007887` or a high-contrast neutral treatment for the CTA
6. Do not add a client login link unless the business later adopts a real client portal

## Homepage Wireframe

The homepage should be clear, structured, and conversion-focused.

Current direction:
Use a Davis-inspired service-business structure while keeping CHARM's own brand, shorter copy, and condo common-area focus.

Presentation rule:
Avoid decorative pill labels above homepage sections. Cards should be used for clear category blocks only; simple lists should stay visually simple unless they need stronger separation.

Visual rule:
Remove the glassy-effect direction. Use solid white, Cloud White, and soft aqua sections with clean borders, simple cards, and selected cleaned-area images where available.

### Section 1: Hero

Goal:
Explain who CHARM is, what CHARM does, where CHARM works, and what action to take next.

Content:

1. Real text brand and service messaging for SEO
2. Headline
3. Short supporting paragraph
4. Primary CTA: `Request a Quote`
5. Secondary CTA: keep out of the hero for now so the first action stays focused on quote requests.
6. Optional phone/email line once public contact details are confirmed
7. Full-width cleaned-area background image

Suggested message direction:

1. recurring cleaning for condo common areas
2. Saint-Laurent and nearby Montreal
3. clear communication and dependable service

Layout note:

1. Center the main hero copy over the image-style background.
2. Keep the image area full-width like a service-business landing page.
3. Use a branded dark teal fallback if the photo ever needs to be removed.
4. Keep the hero direct and calm
5. Use the logo star/sparkle motif sparingly as an accent, not as a repeated decoration

### Section 2: Specialties

Goal:
Show the business focus in a compact, confidence-building way.

Suggested cards:

1. Condo common areas
2. Recurring cleaning
3. Clear communication

Layout note:
This section replaces generic "why us" claims with practical specialties that are already true. Use three cards with no heading for now so the section feels light after the hero.

### Section 3: Services Offered

Goal:
Let visitors confirm the service fit quickly.

Format:
Centered heading and checklist

Suggested checklist items:

1. Lobbies
2. Hallways
3. Stairwells
4. Shared washrooms
5. Garbage and recycling areas
6. Gyms and recreation areas

Layout note:

1. Use checklist rows instead of service cards.
2. Keep labels short and remove extra descriptions from this section.
3. Use three columns and two rows on desktop when the six service items are shown.
4. Keep the `See service details` button centered under the checklist.

### Section 4: Our Work / Cleaned Areas

Goal:
Show selected cleaned-area photos without overwhelming the homepage.

Format:
Clickable image gallery

Current content:

1. Pool and amenity area
2. Condo hallway
3. Shared washroom sinks
4. Shared washroom stall
5. Elevator area
6. Stairwell
7. Garage area
8. Polished floor area
9. Floor detail

Gallery rules:

1. Show a maximum of three images per row on desktop.
2. Keep the section heading centered and remove the extra paragraph under it.
3. Use white centered captions on hover.
4. Clicking an image opens a lightbox with previous and next navigation.
5. The lightbox should show a centered `1/9` counter, a plain white `X` close control, bottom thumbnails, and the current image title.
6. Hide the site header while the lightbox is open.
7. Add practical image-copy deterrents such as disabling right-click, drag, and image copy behavior, while understanding this cannot fully protect public web assets.
8. Keep meaningful alt text for all gallery images.
9. Do not imply before/after proof or unconfirmed results.

### Section 5: Quote Request Form

Goal:
Let visitors send building details directly from the homepage.

Content:

1. `Get an estimate` heading
2. short reminder of the details needed
3. embedded multi-step quote request form
4. clear note until form delivery is connected
5. field-level validation messages
6. centered confirmation action

Quote form behavior:

1. Use compact steps for contact details, property details, areas to clean, cleaning needs, availability, and review.
2. Use floating field labels so the form feels polished without extra label clutter.
3. Use field-level validation messages with a small exclamation icon instead of one large error banner.
4. Require email when email is the preferred contact method, phone when phone is preferred, or at least one of the two when either method is acceptable.
5. Keep Province fixed to Quebec for V1.
6. Use future-date availability fields only, with today and past dates unavailable.
7. Keep the final submit disabled until form delivery is connected.

### Section 6: FAQ

Goal:
Borrow the Davis-style end-of-page FAQ rhythm while answering practical questions.

Suggested questions:

1. What spaces does CHARM clean?
2. Do you offer recurring cleaning?
3. How do quote requests work?

Layout note:
Show the full current FAQ on the homepage and keep it mirrored on the About page for now. Use a collapsed accordion, keep the question list narrower than the main content width, and center the `Read more about CHARM` link below it.

## Supporting Content Moved Off The Homepage

These sections are useful, but should not return to the homepage for now.

### How It Works

Goal:
Make the quote/request flow feel easy.

Simple 3-step flow:

1. Tell us about your building
2. Get a quote or follow-up
3. Set up recurring cleaning

Layout note:

This idea should appear inside the About-page FAQ as a practical answer about the quote process.

### Practical Info / FAQ

Goal:
Answer early objections without making the site feel crowded.

Suggested questions:

1. What areas do you clean?
2. What kinds of buildings do you work with?
3. Do you offer recurring cleaning?
4. Do you handle repairs or technical maintenance?
5. Can we contact you in English or French?

Note:
The full FAQ can appear on the homepage and About page while the content set is still small.

## Homepage Wireframe Summary

```text
Navbar
Hero
Specialties
Services Offered
Our Work / Image Placeholders
Quote Request Form
FAQ
Footer
```

## Services Page Wireframe

Goal:
Give a fuller breakdown of what CHARM actually cleans.

### Recommended Structure

1. Full-width intro hero
2. Three service-fit highlights
3. Common areas we clean
4. Service planning
5. Outside cleaning scope
6. Quote CTA

### Suggested Page Sections

#### Services Hero

1. clear page title
2. short summary paragraph
3. primary quote CTA
4. secondary question/contact CTA

Layout note:
Use the same full-width teal hero direction as the homepage, but keep the page shorter and more practical.

#### Service-Fit Highlights

1. shared spaces
2. recurring upkeep
3. clear limits

Layout note:
Use compact cards directly below the hero so visitors understand fit before reading the longer service breakdown.

#### Common Areas We Clean

Group services into simple categories:

1. entrance and lobby areas
2. hallways and stairwells
3. shared washrooms
4. garbage and recycling spaces
5. gyms and recreational spaces
6. pool-side common areas

Layout note:
Use category cards with simple checklist-style rows inside. Avoid making every item look like a separate clickable card.

#### Service Planning

1. condo buildings
2. multi-unit residential buildings
3. other shared residential properties if applicable
4. daily recurring service
5. weekly recurring service
6. custom frequency

Note:
Only keep options that are truly offered.

#### Outside Cleaning Scope

1. repairs
2. technical maintenance
3. pool water maintenance
4. unrelated building operations

Layout note:
Use clear wording that explains limits without sounding negative or defensive.

#### CTA

1. request a quote
2. contact us

## About Page Wireframe

Goal:
Make CHARM feel real, local, and dependable.

### Recommended Structure

1. Full-width intro hero
2. Short summary card
3. Business focus, values, coverage, and language cards
4. How it works
5. FAQ accordion
6. CTA links where helpful

### Suggested Content

#### Intro

1. CHARM as the public-facing brand
2. short business summary

#### Business Focus

1. condo-building common-area cleaning
2. recurring cleanliness upkeep
3. local Montreal-area focus

#### Values

1. reliable
2. respectful
3. clear
4. consistent

#### Areas Served

1. Saint-Laurent
2. nearby Montreal areas

#### Language Support

1. English available
2. French version available

#### FAQ

Place FAQ at the bottom of the About page.

Suggested questions:

1. What kinds of spaces does CHARM clean?
2. Do you offer recurring cleaning?
3. How does the quote process work?
4. Do you handle repairs or technical maintenance?
5. Can we contact CHARM in English or French?

Layout note:
Use the same collapsed accordion pattern as the homepage so the page stays calm and easy to scan.

## Contact Page Wireframe

Goal:
Make it easy to send a general inquiry without forcing visitors through the full quote request flow.

### Recommended Structure

1. Full-width contact hero
2. General inquiry explainer card
3. Simple inquiry form
4. Quote request CTA
5. Direct contact block once public details are confirmed

### Recommended Form Fields

1. Name
2. Phone
3. Email
4. Message

### Quote CTA

The Contact page should include a clear button to `Request a Quote`.

Layout note:
Contact and Quote should look related, but Contact must stay clearly positioned as a general inquiry page.

## Request A Quote Page Wireframe

Goal:
Collect the practical building details needed for a cleaning quote.

### Recommended Structure

1. Full-width quote hero
2. Quote request explainer card
3. Detailed quote request form
4. Submission note or next-step expectation

### Recommended Form Fields

1. full name
2. building or company name
3. email and phone
4. preferred language
5. preferred contact method
6. street address, unit, city, fixed Quebec province, and postal code
7. building type and optional building size
8. areas to clean
9. cleaning frequency and optional start timeline
10. optional notes
11. optional availability dates and preferred time
12. review step before confirmation

Layout note:
Quote should collect building-specific details and should not feel like the same form as Contact.

### Direct Contact Block

Show when available:

1. phone
2. email
3. response expectations

## Footer Plan

The footer should stay simple and useful while adding a polished finish to the page.

Current behavior:

1. Full-width Charm Turquoise footer panel
2. Normal document-flow footer that appears after the page content
3. White or soft-white text for contrast
4. Footer navigation links should be text-only click targets, not button-like blocks
5. Use `charm-logo-primary-alt.png` on the dark footer background

### Footer Content

1. official CHARM logo or icon
2. supporting subtext where readable
3. short one-line service summary
4. navigation links
5. contact link
6. language switch
7. legal business name if needed
8. all-caps creator credit with `RAY HERNAEZ` linked to the portfolio site

Possible later additions:

1. service area note
2. business hours
3. privacy policy

## Features

## Must-Have Features For V1

1. English-first layout
2. French route structure
3. Mobile-first responsive design
4. Sticky navbar
5. Quote CTA on key pages
6. Separate contact inquiry and quote request forms
7. Clean footer
8. Local SEO basics
9. Fast static pages

## Nice-To-Have Features For V1

1. FAQ accordion
2. subtle scroll reveal animation
3. basic icon system
4. reusable image gallery pattern for cleaned-area photos

## Features To Avoid In V1

1. live chat
2. booking calendar
3. complicated search tools
4. fake review sliders with placeholder content
5. image-heavy hero layouts that depend on missing assets
6. client login or customer portal links
7. glassy-effect UI as a primary design style

## Copy Rules For The Whole Site

1. Keep headlines short
2. Keep paragraphs short
3. Prefer operational clarity over marketing language
4. Only include sections we can support with real information
5. Do not pretend to have reviews, awards, or credentials that are not confirmed

## Design Translation Notes

How to combine the official brand system with the Davis-inspired structure:

### From Davis Janitorial

1. practical service-business homepage sequence
2. quote-first conversion flow
3. clear service category rhythm
4. cleaned-work photo section
5. FAQ/support content near the end
6. simple footer and repeated contact paths

### For CHARM

1. Charm Turquoise `#007887` as the confident primary colour
2. Aqua Mist and Cloud White for bright, fresh sections
3. Teal Foam for secondary accents and borders
4. solid, clean surfaces instead of glassy effects
5. short page sections and practical content order
6. official logo usage instead of text-only placeholders
7. polished without looking corporate or intimidating
8. selected cleaned-area photos where available, with easy replacement later

## Recommended Next Step

Next:

1. Review the homepage gallery order and photo crop choices.
2. Confirm what direct contact details can be shown publicly.
3. Confirm the form delivery method for Contact and Quote submissions.
4. Keep client login out of V1.
