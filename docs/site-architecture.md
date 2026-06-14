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
2. clear top navigation with a strong contact CTA
3. hero section that explains the service quickly
4. practical services-offered section paired with a cleaned-space image
5. work/photo section showing cleaned spaces
6. strong contact section near the bottom
7. common questions near the end of the page
8. simple footer with direct navigation and contact paths

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
3. Use selected cleaned-area photos where available, starting with the homepage hero, services image, and work gallery.
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

1. `Contact Us` button
2. `FR` language switcher

### Mobile Navbar

Top row:

1. CHARM logo or compact icon logo
2. accessible text label for `CHARM`
3. hamburger menu

Mobile menu items:

1. Contact Us
2. Home
3. Services
4. About
5. Contact
6. French or English language option

### Navbar Behavior

1. Sticky on scroll
2. Use a solid or near-solid white surface for clarity
3. Keep it compact
4. On mobile, keep the contact CTA inside the hamburger menu to avoid crowding the header
5. Use Charm Turquoise `#007887` or a high-contrast neutral treatment for the CTA
6. Use solid brand-colour button states; avoid transparent hover states that reduce contrast on dark teal sections
7. Keep white-button hover states calm by using Cloud White, Charm Turquoise, and Teal Foam instead of bright Aqua Mist fills
8. Do not add a client login link unless the business later adopts a real client portal

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
4. Primary CTA: `Contact Us`
5. Secondary CTA: keep out of the hero for now so the first action stays focused on contact.
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

### Section 2: Services Offered

Goal:
Let visitors confirm the service fit quickly.

Format:
Lobby image on the left with a centered `Services Offered` heading and one-column checklist on the right.

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
3. Keep the six service items in one column beside the image on desktop.
4. Keep the `See Service Details` button centered under the checklist.

### Section 3: Our Work / Cleaned Areas

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
5. The lightbox should show a centered `1/9` counter, a circular crossed-bar close control, bottom thumbnails, and the current image title.
6. Hide the site header while the lightbox is open.
7. Add practical image-copy deterrents such as disabling right-click, drag, and image copy behavior, while understanding this cannot fully protect public web assets.
8. Keep meaningful alt text for all gallery images.
9. Do not imply before/after proof or unconfirmed results.

### Section 4: Contact Form

Goal:
Let visitors send a short message from the homepage without loading a separate page.

Content:

1. `Contact Us` heading
2. full-width dark teal section background
3. simple one-page contact form in a white card
4. short intro text inside the form card: `Send us a message and we'll get back to you as soon as possible.`
5. clear note until form delivery is connected

Contact modal behavior:

1. Open the one-page contact form in a dark overlay with the same close-control language as the homepage gallery lightbox.
2. Use floating field labels so the form feels polished without extra label clutter.
3. Use field-level validation messages with a small exclamation icon instead of one large error banner.
4. Require email when email is the preferred contact method, phone when phone is preferred, or at least one of the two when either method is acceptable.
5. Keep the form short: full name, email, phone, preferred language, preferred contact method, and message.
6. Keep the final submit disabled until form delivery is connected.
7. Keep `/contact` as a fallback route if JavaScript is unavailable.
8. Keep `/quote` as a legacy fallback so older links do not break.

### Section 6: FAQ

Goal:
Borrow the Davis-style end-of-page FAQ rhythm while answering practical questions.

Suggested questions:

1. What spaces does CHARM clean?
2. Do you offer recurring cleaning?
3. How does contacting CHARM work?

Layout note:
Show the full current FAQ on the homepage and keep it mirrored on the About page for now. Use a collapsed accordion, keep the question list narrower than the main content width, separate questions with simple divider lines instead of individual cards, and use the CHARM sparkle motif for the closed state with a matching flat line for the open state.

## Supporting Content Moved Off The Homepage

These sections are useful, but should not return to the homepage for now.

### How It Works

Goal:
Make the contact and follow-up flow feel easy.

Simple 3-step flow:

1. Send a short message
2. Get a follow-up by the preferred contact method
3. Set up recurring cleaning

Layout note:

This idea should appear inside the About-page FAQ as a practical answer about the contact process.

### Practical Info / FAQ

Goal:
Answer early objections without making the site feel crowded.

Suggested questions:

1. What areas do you clean?
2. What kinds of buildings do you work with?
3. Do you offer recurring cleaning?
4. Can we ask questions before deciding?
5. Can we contact you in English or French?

Note:
The full FAQ can appear on the homepage and About page while the content set is still small.

## Homepage Wireframe Summary

```text
Navbar
Hero
Services Offered with image
Our Work / Image Placeholders
Contact Form
FAQ
Footer
```

## Services Page Wireframe

Goal:
Give a fuller breakdown of what CHARM actually cleans.

### Recommended Structure

1. Integrated `Our Services` intro inside the main service detail section
2. Service detail rows
3. Full-width contact CTA band
4. Service-specific FAQ

### Suggested Page Sections

#### Services Intro

1. centered `Our Services` heading
2. short centered paragraph that explains the service focus and benefit

Layout note:
Keep the intro on the same light page background as the service rows so it feels like part of the main content, not a separate hero block.

#### Our Services

Show the six current services in alternating image/text rows:

1. lobbies
2. hallways
3. stairwells
4. shared washrooms
5. garbage and recycling areas
6. gyms and recreation areas

Layout note:
Use the provided service photos for the six current services. Keep the placeholder pattern available for future services that do not have photos yet. On desktop, alternate image and description positions while keeping a simple stacked layout on mobile.
Use equal desktop columns for alternating service rows so every image frame displays at the same size.

#### Services FAQ

Use the same divider-line accordion structure as the homepage FAQ, but with service-specific questions.

#### CTA

1. short reminder to send a message
2. button to the contact form

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
3. How does the contact process work?
4. Can we ask questions before deciding?
5. Can we contact CHARM in English or French?

Layout note:
Use the same collapsed accordion pattern as the homepage so the page stays calm and easy to scan. FAQ answers should open with a soft slide-down reveal rather than appearing abruptly.

## Contact Modal Pattern

Goal:
Make contact messages easy to start from any page without requiring a separate page load.

### Recommended Structure

1. Dark overlay matching the homepage gallery lightbox
2. Circular X close control
3. One-page contact form only
4. Escape key and overlay click should close the modal
5. Dedicated `/contact` page remains as a fallback
6. `/quote` remains as a legacy fallback route

## Contact Fallback Page Wireframe

Goal:
Collect a short message and the preferred way to follow up.

### Recommended Structure

1. Simple contact hero
2. Contact explainer card
3. One-page contact form
4. Submission note or next-step expectation

### Recommended Form Fields

1. full name
2. email and phone
3. preferred language
4. preferred contact method
5. message or questions

Layout note:
The form should match the global contact modal. Detailed quoting questions can happen later by email or phone.

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
5. Contact CTA on key pages
6. Simple one-page contact form
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
2. contact-first conversion flow
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
3. Confirm the form delivery method for contact submissions.
4. Keep client login out of V1.
