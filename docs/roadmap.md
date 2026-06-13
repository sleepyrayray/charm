# CHARM Roadmap

This is the single source of truth for the project roadmap.

All planning docs can reference this file instead of maintaining separate roadmap sections.

## Current Status

Current phase:

1. project scaffold complete
2. content skeleton in progress
3. Davis-inspired design pivot in progress

Already completed:

1. business focus clarified
2. target audience clarified
3. competitor review notes collected
4. working brief created
5. site architecture drafted
6. Astro chosen as the working framework direction
7. Astro project initialized
8. TypeScript and Tailwind CSS configured
9. English-first route structure created
10. French route structure created for future translation work
11. base layouts, header, footer, and page shells created
12. initial placeholder content added for Home, Services, About, and Contact
13. dedicated Quote route created separately from Contact
14. FAQ added to the About page
15. build and Astro checks passing locally
16. official CHARM brand deck received and saved
17. official primary logo and icon logo saved
18. Gotham font files copied locally and kept out of Git until webfont licensing is confirmed
19. Montserrat chosen as the safe V1 website font
20. Montserrat copied into `src/assets` and self-hosted through `@font-face`
21. official colour tokens added to the global stylesheet
22. icon logo wired as the favicon and theme colour set to Charm Turquoise
23. header and footer refreshed with the official logo assets
24. homepage visual system refreshed around the official logo, palette, and restrained sparkle accents
25. Services page refreshed with the official brand system and clearer condo common-area service scope
26. Davis Janitorial selected as a structure reference for the next homepage redesign
27. client login excluded from V1 unless the business adopts a real portal later
28. homepage Davis-inspired redesign started with solid sections and cleaned-area placeholders
29. homepage structure adjusted to use a centered image-style hero, three-column checklist services, embedded quote form, FAQ accordion, and dark footer with the alt logo
30. Services page aligned with the Davis-inspired structure using a full-width hero, service highlights, category checklists, planning cards, and clearer scope limits
31. About, Contact, and Quote pages aligned with the new page system, including About FAQ accordion and separate inquiry/quote flows
32. homepage cleaned-area photos added for the hero, specialties section, and Our Work gallery
33. Our Work gallery replaced placeholders with a nine-photo grid, hover captions, and a lightbox with thumbnails, counter, arrows, and close control
34. basic image-copy deterrents added for right-click, dragging, and copying
35. quote request UI rebuilt as a multi-step estimate wizard with floating labels, field-level validation, contact-method rules, future-date availability fields, review step, and CHARM sparkle progress indicators
36. FAQ accordions simplified with divider lines, CHARM sparkle toggles, and no extra homepage About CTA

## Phase 1 - Direction Lock

Goal:
Lock the structure and core direction before coding.

Tasks:

1. Confirm the homepage wireframe
2. Confirm the core navigation
3. Confirm the page list for V1
4. Confirm brand usage for `CHARM`
5. Confirm what contact details can be public
6. Confirm that FAQ can appear on the homepage and at the bottom of the About page while the content set is small
7. Confirm that Contact and Request a Quote are separate flows
8. Confirm the Davis-inspired homepage structure for CHARM
9. Confirm that image placeholders are acceptable until real cleaned-area photos are added
10. Confirm that client login is out of scope for V1

Done when:

1. homepage structure is approved
2. nav structure is approved
3. V1 page scope is approved

## Phase 2 - Project Setup

Goal:
Initialize the technical foundation.

Tasks:

1. Initialize Astro
2. Set up TypeScript
3. Set up Tailwind CSS
4. Set up page routing for English-first structure
5. Set up the future French route structure
6. Create base layout files
7. Create reusable section/component folders

Done when:

1. the project runs locally
2. the base route structure exists
3. layout and component foundations exist

## Phase 3 - Content Skeleton

Goal:
Add honest, minimal placeholder content based on what is already known.

Tasks:

1. Add homepage placeholder content
2. Add services page placeholder content
3. Add about page placeholder content
4. Add contact page placeholder content
5. Add quote page placeholder content
6. Add temporary FAQ content to About
7. Keep all copy free of unconfirmed claims

Done when:

1. every V1 page has usable draft content
2. the site communicates the service clearly even without photos or reviews

## Phase 4 - Design System

Goal:
Replace the temporary visual system with the official CHARM brand direction.

Tasks:

1. Replace the temporary teal direction with the official palette
2. Use Charm Turquoise `#007887` as the main brand colour
3. Add Aqua Mist, Teal Foam, and Cloud White as supporting tokens
4. Use Montserrat as the V1 website font
5. Define the final typography stack and scale
6. Define spacing, surface, border, and shadow styles
7. Create button styles using the official palette
8. Create card and section styles that feel clean, fresh, and minimal
9. Remove glassy-effect styling from the active design direction
10. Create solid section blocks and image areas for cleaned-area photos
11. Make sure the interface stays readable and accessible

Done when:

1. the visual language feels consistent
2. key UI patterns are reusable
3. the official logo, palette, and Montserrat typography are integrated cleanly
4. the site works well without photos or reviews
5. selected photos can be swapped later without rebuilding the layout

## Phase 5 - Core Page Build

Goal:
Build the main site pages from the approved wireframes.

Tasks:

1. Rebuild the homepage around the Davis-inspired structure
2. Keep the services page focused on condo common-area cleaning
3. Build the about page
4. Build the contact page
5. Build the quote request page
6. Build the navbar
7. Build the footer
8. Build FAQ blocks for the homepage and About
9. Build the quote CTA blocks
10. Add cleaned-area photo spaces and replace placeholders where selected photos are available

Done when:

1. all V1 pages exist
2. navigation works across the whole site
3. mobile and desktop layouts both function properly

## Phase 6 - Form And Contact Flow

Goal:
Make lead capture practical and easy.

Tasks:

1. Build the general contact inquiry form UI
2. Build the detailed quote request form UI - done for the frontend wizard
3. Add validation - done for the frontend quote wizard
4. Choose the form delivery method after the receiving inbox, required fields, confirmation message, and spam approach are confirmed
5. Add contact details once confirmed
6. Add confirmation/success states

Done when:

1. a visitor can submit a general inquiry
2. a visitor can submit a quote request through the chosen delivery method
3. both forms are clear, easy to complete, and connected end to end

## Phase 7 - SEO And Accessibility

Goal:
Make the site search-friendly and usable.

Tasks:

1. Add page titles and meta descriptions
2. Add sitemap
3. Add robots configuration
4. Add basic structured data
5. Check heading structure
6. Check keyboard navigation
7. Check form labels and error handling
8. Check color contrast and focus states

Done when:

1. the site has a solid local SEO foundation
2. the site meets a practical accessibility baseline

## Phase 8 - French Structure

Goal:
Prepare the site for bilingual use.

Tasks:

1. Create French route structure
2. Mirror page structure in French
3. Add translation placeholders
4. Add language switch behavior
5. Keep English and French layouts aligned

Done when:

1. the route structure supports French cleanly
2. French content can be added without restructuring the site

## Phase 9 - Content Upgrade

Goal:
Replace placeholders with real business content.

Tasks:

1. Add final contact details
2. Add final service area list
3. Add final service checklist
4. Add photos if available
5. Add reviews if available
6. Add any confirmed trust claims
7. Add final French copy once reviewed
8. Keep selected cleaned-area photos updated and add stronger launch photos if better assets become available

Done when:

1. the site reflects real business information
2. placeholder copy has been replaced where needed

## Phase 10 - Launch Prep

Goal:
Finish testing and ship the first version.

Tasks:

1. Test on mobile
2. Test on desktop
3. Test navigation
4. Test language switching
5. Test the form
6. Check performance
7. Check SEO metadata
8. Deploy

Done when:

1. the site is stable
2. the contact path works
3. the production site is live

## Phase 11 - Post-Launch Growth

Goal:
Use the site as part of the larger client-generation system.

Tasks:

1. Improve the Google Business Profile
2. Add the website link everywhere relevant
3. Start review collection
4. Track quote requests and inquiries
5. Improve content based on real questions from leads
6. Add stronger trust signals over time

Done when:

1. the site is actively supporting business growth
2. post-launch improvements are based on real use

## Current Priority Order

1. review the refreshed Services, About, Contact, and Quote pages with real screenshots
2. replace cleaned-area placeholders with real photos when available
3. connect the real quote and contact flows
4. strengthen SEO and accessibility basics
5. add fuller French page content

## Notes

1. This roadmap should be updated as the project changes.
2. Other docs should reference this file instead of duplicating roadmap sections.
