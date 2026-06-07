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
3. Use placeholder image spaces until real cleaned-area photos are added.
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
Avoid decorative pill labels above homepage sections. Service items and audience items can use static grid cards, but they should read as informational blocks rather than clickable controls.

Visual rule:
Remove the glassy-effect direction. Use solid white, Cloud White, and soft aqua sections with clean borders, simple cards, and image placeholders.

### Section 1: Hero

Goal:
Explain who CHARM is, what CHARM does, where CHARM works, and what action to take next.

Content:

1. Official CHARM logo
2. Real text brand and service messaging for SEO
3. Headline
4. Short supporting paragraph
5. Primary CTA: `Request a Quote`
6. Secondary CTA: `View Services` or `Ask a Question`
7. Optional phone/email line once public contact details are confirmed
8. Large image placeholder for a cleaned condo common area until real photos are ready

Suggested message direction:

1. recurring cleaning for condo common areas
2. Saint-Laurent and nearby Montreal
3. clear communication and dependable service

Layout note:

1. Left-aligned copy
2. Right-side or full-width image area inspired by a service-business hero
3. Use a branded placeholder if no photo exists yet
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
This section replaces generic "why us" claims with practical specialties that are already true.

### Section 3: Services Offered

Goal:
Let visitors confirm the service fit quickly.

Format:
Grid of simple cards

Suggested cards:

1. Lobbies
2. Hallways
3. Stairwells
4. Shared washrooms
5. Garbage and recycling areas
6. Gyms and recreation areas

Layout note:

1. Use a simple grid of static information cards
2. Keep the copy very short
3. Avoid hover states that make the cards feel clickable

### Section 4: Our Work / Cleaned Areas

Goal:
Prepare for real cleaned-area photos without depending on them yet.

Format:
Image placeholder grid

Suggested content:

1. Lobby placeholder
2. Hallway placeholder
3. Shared washroom placeholder
4. Amenity area placeholder

Placeholder rules:

1. Use neutral blocks, subtle icons, or soft branded gradients until real photos arrive.
2. Clearly treat them as layout placeholders during development.
3. Do not imply before/after proof until real photos are available.
4. Add meaningful alt text once real images are used.

### Section 5: Who We Help

Goal:
Make the target audience obvious.

Suggested content blocks:

1. condo boards and syndicates
2. property managers
3. building administrators

Layout note:
This section can be compact or merged with Specialties if the homepage feels too long.

### Section 6: Quote CTA

Goal:
Catch visitors who are ready to act without adding another dense section.

Content:

1. short CTA headline
2. 1-sentence reminder of service fit
3. quote request button

### Section 7: Common Questions Preview

Goal:
Borrow the Davis-style end-of-page FAQ rhythm without making the homepage feel heavy.

Suggested questions:

1. What spaces does CHARM clean?
2. Do you offer recurring cleaning?
3. How do quote requests work?

Layout note:
Keep the full FAQ at the bottom of the About page. The homepage can show a short preview only.

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
The full FAQ belongs at the bottom of the About page. A compact homepage FAQ preview is acceptable in the Davis-inspired structure.

## Homepage Wireframe Summary

```text
Navbar
Hero
Specialties
Services Offered
Our Work / Image Placeholders
Who We Help
Quote CTA
Common Questions Preview
Footer
```

## Services Page Wireframe

Goal:
Give a fuller breakdown of what CHARM actually cleans.

### Recommended Structure

1. Intro hero
2. Common areas we clean
3. Building types we work with
4. Recurring cleaning options
5. What is not included
6. Quote CTA

### Suggested Page Sections

#### Services Hero

1. clear page title
2. short summary paragraph
3. CTA button

#### Common Areas We Clean

Group services into simple categories:

1. entrance and lobby areas
2. hallways and stairwells
3. shared washrooms
4. garbage and recycling spaces
5. gyms and recreational spaces
6. pool-side common areas

#### Buildings We Work With

1. condo buildings
2. multi-unit residential buildings
3. other shared residential properties if applicable

#### Recurring Service

1. daily
2. weekly
3. custom frequency

Note:
Only keep options that are truly offered.

#### Not Included

1. repairs
2. technical maintenance
3. pool water maintenance
4. unrelated building operations

#### CTA

1. request a quote
2. contact us

## About Page Wireframe

Goal:
Make CHARM feel real, local, and dependable.

### Recommended Structure

1. Intro / who CHARM is
2. Business focus
3. Values
4. Areas served
5. Language support
6. CTA

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

## Contact Page Wireframe

Goal:
Make it easy to send a general inquiry without forcing visitors through the full quote request flow.

### Recommended Structure

1. Contact hero
2. Simple inquiry form
3. Quote request CTA
4. Direct contact block once public details are confirmed

### Recommended Form Fields

1. Name
2. Phone
3. Email
4. Message

### Quote CTA

The Contact page should include a clear button to `Request a Quote`.

## Request A Quote Page Wireframe

Goal:
Collect the practical building details needed for a cleaning quote.

### Recommended Structure

1. Quote hero
2. Detailed quote request form
3. Submission note or next-step expectation

### Recommended Form Fields

1. Name
2. Phone
3. Email
4. Building or organisation name
5. Property address or area
6. Building type
7. Areas to clean
8. Cleaning frequency needed
9. Preferred language
10. Preferred contact method
11. Message

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
4. image placeholder system for future cleaned-area photos

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
8. image placeholders until real cleaned-area photos are ready

## Recommended Next Step

Before coding:

1. Redesign the homepage around the Davis-inspired section sequence.
2. Replace glassy surfaces with solid clean cards and soft brand sections.
3. Add placeholder spaces for cleaned-area photos.
4. Keep client login out of V1.
5. Confirm what direct contact details can be shown publicly.
