\# IMPORTANT

This README is the single source of truth for the entire project.

Every design decision.

Every coding decision.

Every UX decision.

Every animation.

Every component.

Every layout.

Everything described here is mandatory.

Do not skip sections.

Read this document completely before making architectural decisions.

If there is a contradiction between general knowledge and this README,

the README always wins.

The \`/skills\` directory contains reusable implementation knowledge.

Always consult the relevant skills before implementing any feature.

Never recreate patterns that already exist.

Consistency is more important than originality.

\# Laura Rentería  
\#\# Creative Direction  
\# First Rule

Before generating any code, always inspect the available project documentation.

This includes:

\- /docs  
\- /skills  
\- README files  
\- Existing components  
\- Existing layouts

Never assume how the project works.

Understand the project before extending it.

\---

\# Project Philosophy

This website is not a portfolio.

It is not an agency website.

It is not a coaching website.

It is not an influencer website.

It is the digital headquarters of an international consultant working across branding, creative direction and image consulting.

Every design decision should reinforce one perception:

Laura is someone with exceptional judgement.

The website should never feel loud.

Authority comes from restraint.

Calm communicates expertise.

White space communicates confidence.

Nothing exists only because it looks beautiful.  
Everything must have a purpose.

\---

\# Brand Personality

Editorial.

Timeless.

Calm.

Sophisticated.

Human.

Intelligent.

International.

Minimal without becoming cold.

Luxury without looking expensive.

Fashion-aware without looking fashionable.

Architectural.

Intentional.

\---

\# Emotional Goal

Visitors should feel:

"I trust her."

before

"I like this design."

Trust always comes before aesthetics.

\---

\# Visual References

Primary inspiration

• A Practice For Everyday Life  
• Aesop  
• COS

Secondary inspiration

• Debbie Millman  
• Office of Otto  
• Jessica Walsh

Never imitate.

Extract principles.

\---

\# Design Principles

Less interface.

More editorial.

Less decoration.

More typography.

Less UI.

More rhythm.

Less content.

More breathing room.

Less explanation.

More confidence.

\---

\# White Space

Whitespace is a design element.

Empty areas are intentional.

Never compress sections.

Never reduce spacing to fit content.

Increase spacing before reducing typography.

Every section should feel independent.

\---

\# Typography

Typography is the main visual language.

Large headlines.

Elegant editorial serif.

Neutral grotesk for body copy.

Never use typography as decoration.

Hierarchy should be obvious without using colors.

\---

\# Photography

Photography is the product.

Photography must always dominate over interface.

Portraits feel calm.

Natural light.

Neutral colors.

Editorial styling.

No exaggerated smiles.

No stock photography.

No artificial poses.

\---

\# Composition

Think magazine.

Not dashboard.

Not SaaS.

Not landing page.

Layouts should breathe.

Some sections perfectly aligned.

Some intentionally broken.

Asymmetry should feel designed.

Never random.

\---

\# Interaction

Interaction should disappear.

Animation exists to improve rhythm.

Not to impress.

Every transition should feel inevitable.

\---

\# Motion

Slow.

Soft.

Elegant.

Fade.

Reveal.

Opacity.

Translation.

Nothing rotates.

Nothing bounces.

Nothing scales dramatically.

Nothing spins.

\---

\# Color

Mostly white.

Warm white.

Black.

Cream.

One subtle accent.

No gradients.

No shadows.

No glossy effects.

\---

\# Interface

Interface should almost disappear.

Buttons feel editorial.

Inputs feel architectural.

Cards should almost never look like cards.

Avoid visible containers whenever possible.

\---

\# Overall Feeling

Imagine:

Monocle Magazine

\+

Kinfolk

\+

Aesop

\+

A Practice For Everyday Life

\+

A New York creative consultancy

The result should feel quiet.

Quiet websites feel expensive.

\# Laura Rentería  
\# Design System

\---

\# Design Philosophy

The interface should never compete with the content.

Typography, photography and spacing are the primary design elements.

UI components exist only to support reading, navigation and conversion.

Every element should feel intentional.

If a component feels decorative, remove it.

\---

\# Grid System

Desktop

\- 12-column grid  
\- Max content width: 1440px  
\- Content container: 1280px  
\- Side margins: minimum 8vw  
\- Column gap: 32px

Tablet

\- 8-column grid

Mobile

\- 4-column grid  
\- Side padding: 24px

Never allow content to span edge-to-edge except intentional full-bleed photography.

\---

\# Vertical Rhythm

Whitespace defines hierarchy.

Never compress sections.

Preferred spacing:

Section padding desktop

240px top  
240px bottom

Minimum

160px

Mobile

120px  
120px

Editorial break sections

Minimum height: 80vh

Hero

100vh

CTA

80–100vh

\---

\# Spacing Scale

Use an 8-point system.

4

8

16

24

32

40

48

64

80

96

120

160

240

Avoid arbitrary spacing values.

\---

\# Typography

Typography carries the visual identity.

Never rely on colors to create hierarchy.

\---

\#\# Display

Editorial serif.

Examples

Canela

Editorial New

GT Sectra

Instrument Serif

Playfair Display (fallback)

Weight

400–500

Tracking

\-0.02em

Line-height

1.05–1.12

\---

\#\# Body

Neutral grotesk.

Examples

Söhne

Neue Haas

Suisse

Inter

Weight

400

500

Line-height

1.6–1.8

Maximum width

65 characters.

Never exceed.

\---

\#\# Labels

Uppercase.

Small.

Wide letter spacing.

Tracking

0.15em

Weight

500

\---

\# Heading Scale

Desktop

Display XL

96px

Display L

80px

Display M

64px

Heading

48px

Subheading

32px

Body

20px

Small

16px

Caption

14px

Mobile

Display

48px

Heading

36px

Subheading

28px

Body

18px

Caption

15px

Never reduce typography before increasing whitespace.

\---

\# Color Palette

Primary Background

Warm White

\#FAF9F6

Primary Text

\#141414

Secondary Text

\#666666

Warm Cream

Section backgrounds only

Deep Navy

Accent only

Muted Gold

Very limited use

Rules

No gradients.

No shadows.

No saturated colors.

No glossy effects.

Color should never become the focal point.

Photography should.

\---

\# Borders

Almost invisible.

Border color

rgba(20,20,20,.08)

Maximum radius

2px

Prefer no radius whenever possible.

\---

\# Buttons

Buttons should feel editorial.

Not SaaS.

Height

52px

Padding

20px 32px

Radius

2px

Primary

Black background

White text

Secondary

Transparent

1px border

Hover

Very subtle.

No scaling.

No bouncing.

No glow.

\---

\# Links

Simple.

Elegant.

Hover animation

Underline draws from left to right.

Never change colors dramatically.

\---

\# Forms

Minimal.

Large fields.

Plenty of spacing.

Labels above inputs.

Never floating labels.

Input height

56px

Textarea

Minimum

180px

Focus state

Thin black border only.

No shadows.

\---

\# Cards

Avoid cards whenever possible.

Content should feel placed on the page.

If cards are required

Flat

No shadows

Very subtle borders

Large padding

Lots of breathing room

\---

\# Images

Photography dominates.

Images should never feel like thumbnails.

Use generous crops.

Large aspect ratios.

Preferred

4:5

3:4

16:9 only when cinematic.

\---

\# Icons

Very few.

Line icons only.

24px.

No filled icons.

Never use colorful icons.

\---

\# Dividers

Thin.

Subtle.

Used sparingly.

Whitespace is usually enough.

\---

\# Containers

Avoid nested containers.

Keep layouts simple.

One container.

One purpose.

\---

\# Responsive Philosophy

Desktop is not the master.

Design mobile intentionally.

Every layout should be reconsidered.

Never simply stack desktop elements.

Reading rhythm is more important than preserving layouts.

\---

\# Accessibility

Minimum contrast AA.

Keyboard navigation.

Visible focus states.

Semantic HTML.

ARIA where needed.

Alt text for every image.

Respect reduced motion preferences.

\---

\# UI Rules

Never use glassmorphism.

Never use neumorphism.

Never use gradients.

Never use oversized shadows.

Never use thick borders.

Never use decorative illustrations.

Never use unnecessary icons.

Never use rounded UI everywhere.

Never use containers simply because they exist.

Whitespace is always preferred over decoration.

Typography is always preferred over graphics.

Photography is always preferred over interface.  
\# Laura Rentería  
\# Layout System

\---

\# Philosophy

Layout is communication.

Every layout should create rhythm before decoration.

The user should feel guided naturally through the page.

Every section deserves space.

Every transition deserves intention.

The website should read like a premium editorial publication rather than a traditional marketing website.

\---

\# Reading Rhythm

The experience should alternate between:

Dense

↓

Light

↓

Image

↓

Statement

↓

Information

↓

Breathing room

↓

Image

↓

CTA

Never place two visually heavy sections together.

Always create moments of visual silence.

Whitespace is content.

\---

\# Page Structure

Every page should follow this rhythm:

Hero

↓

Editorial Pause

↓

Content

↓

Image

↓

Content

↓

Editorial Statement

↓

Content

↓

CTA

↓

Footer

\---

\# Hero

Purpose

Immediately establish authority.

The hero should not explain everything.

It should create confidence.

\---

Composition

Large portrait.

Large headline.

Short supporting paragraph.

One primary CTA.

One secondary CTA.

Nothing else.

No statistics.

No badges.

No client logos.

No scrolling galleries.

No excessive UI.

\---

Vertical Alignment

Content sits in the lower third.

Never vertically centered.

Photography occupies most of the viewport.

\---

Hero Height

100vh

Never shorter.

\---

Editorial Break Sections

Purpose

Reset the reading rhythm.

Allow the previous section to breathe.

Increase perceived sophistication.

\---

Composition

Single sentence.

Centered.

Maximum two lines.

No buttons.

No icons.

No images unless abstract texture.

Height

70–100vh.

\---

About Section

Purpose

Build trust.

Not credentials.

The reader should understand Laura's perspective.

\---

Layout

Two-column asymmetrical layout.

Text

Left.

Photography

Right.

Large editorial image.

Never center everything.

Allow asymmetry.

\---

Maximum width

Readable.

Never create long text lines.

\---

What I Do

Purpose

Clarify the offer.

This section should immediately answer:

"What exactly does Laura do?"

\---

Layout

Three equal editorial columns.

Each represents one territory.

Brand.

Communication.

Presence.

Lots of breathing room.

Icons are unnecessary.

Typography leads.

\---

Services

Purpose

Recognition.

Visitors should quickly identify what they need.

\---

Layout

Editorial grid.

Two columns desktop.

Single column mobile.

Avoid oversized cards.

Content should feel integrated into the page.

Hover effects should be subtle.

\---

How I Work

Purpose

Reduce uncertainty.

Demonstrate method.

\---

Layout

Vertical timeline.

Large numbers.

Generous spacing.

Thin connecting line.

Minimal graphics.

The timeline should feel architectural.

\---

Why Work With Me

Purpose

Differentiate.

Not persuade aggressively.

\---

Layout

Simple text blocks.

Alternating rhythm.

Some sections left aligned.

Some right aligned.

No visual overload.

Typography carries hierarchy.

\---

Case Studies

Purpose

Proof.

The work speaks louder than claims.

\---

Layout

Large vertical cards.

One or two per row.

Never three.

Each project should feel like a magazine article.

Large photography.

Generous white margins.

Simple metadata.

\---

Portfolio

Purpose

Visual credibility.

\---

Layout

Editorial masonry.

Different image heights.

Consistent spacing.

No rigid grids.

Photography should feel curated.

Never like a gallery plugin.

\---

FAQ

Purpose

Reduce friction.

\---

Layout

Contained width.

Centered.

Accordion only because content requires it.

Animations

Very subtle.

No exaggerated expansion.

\---

Closing CTA

Purpose

Invite conversation.

Not create urgency.

\---

Layout

Large portrait.

Minimal copy.

Single button.

Nothing competing for attention.

This should feel calm.

\---

Contact

Purpose

Make reaching out effortless.

\---

Layout

Two columns.

Form on the left.

Contact information on the right.

Lots of whitespace.

Never overcrowd fields.

\---

Footer

Purpose

Quiet ending.

Not a sitemap.

\---

Layout

Editorial.

Minimal.

Large margins.

Simple navigation.

Social links.

Legal.

Nothing decorative.

\---

Image Placement

Photography should interrupt reading naturally.

Never place images only because there is empty space.

Every photograph should support the narrative.

Portraits create trust.

Campaign photography creates authority.

Detail photography creates atmosphere.

\---

Section Width

Not every section uses the same width.

Editorial rhythm requires variation.

Examples

Hero

Very wide.

Manifesto

Very narrow.

About

Medium.

Services

Wide.

FAQ

Narrow.

CTA

Wide.

Changing width creates rhythm.

\---

Alignment Rules

Most sections align left.

Some editorial moments align center.

Never center long paragraphs.

Never justify text.

Use asymmetry intentionally.

\---

Negative Space

Whitespace is not empty.

Whitespace slows the reader.

Whitespace creates luxury.

Whitespace creates confidence.

Never remove whitespace to fit content.

Increase page length if necessary.

\---

Responsive Layout

Mobile is redesigned.

Not compressed.

Large typography remains.

Generous spacing remains.

Editorial rhythm remains.

Layouts simplify.

Experience does not.

\---

Things Never Allowed

Never create dashboard layouts.

Never use feature grids.

Never use pricing table aesthetics.

Never use SaaS landing page patterns.

Never use card-heavy interfaces.

Never center every section.

Never fill every available space.

Never place images randomly.

Never create visual noise.

Every page should feel calm.

Every layout should feel inevitable.  
\# Laura Rentería  
\# Component System

\---

\# Philosophy

Components should never feel like UI kits.

Every component should feel custom designed for this website.

The interface must disappear behind typography, photography and content.

No component exists simply because websites usually have one.

Every component must justify its presence.

\---

\# Header

Purpose

Provide orientation without becoming the visual focus.

\---

Behavior

Transparent while hero is visible.

Solid background after scrolling.

Always remains elegant.

Never exaggerated.

\---

Height

Desktop

88px

Mobile

72px

\---

Logo

Small.

Never oversized.

Always aligned with content grid.

\---

Navigation

Minimal.

Home

About

Services

Image Consulting

Work

Portfolio

Contact

Language Switch

EN / ES

Never use flag icons.

\---

CTA

Single button.

Small.

Elegant.

Never dominant.

\---

Mobile Menu

Full screen.

Not a drawer.

The menu itself should feel editorial.

Large typography.

Generous spacing.

Editorial quote visible.

Language selector.

Primary CTA.

Close button.

Nothing else.

\---

Buttons

Buttons should feel timeless.

Not like software.

\---

Primary

Solid background.

Minimal animation.

Text centered.

Height

52px

\---

Secondary

Transparent.

Thin border.

\---

Text Button

No border.

Animated underline.

\---

Button Rules

Never rounded pills.

Never gradients.

Never shadows.

Never icon-only buttons.

Never oversized buttons.

\---

Hover States

Opacity.

Underline.

Very subtle translate.

Nothing dramatic.

\---

Forms

Minimal.

Large fields.

No decorative containers.

Labels always visible.

Large spacing.

\---

Input Fields

Height

56px

Border

1px

Radius

2px

Focus

Thin dark border.

No glow.

No shadow.

\---

Textarea

Large.

Comfortable writing experience.

Minimum height

180px

\---

Select

Custom styled.

Minimal arrow.

No native browser appearance.

\---

Checkbox

Minimal square.

Thin border.

No exaggerated animations.

\---

Validation

Errors should feel calm.

Never aggressive.

Use typography.

Not color alone.

\---

Cards

Cards should almost disappear.

Spacing creates separation.

Not shadows.

\---

Service Card

Typography first.

Description second.

CTA last.

Hover

Very subtle.

\---

Case Study Card

Large image.

Small metadata.

Editorial title.

Minimal interaction.

\---

Portfolio Card

Image dominates.

Title appears below.

Category.

Hover reveals subtle movement.

Nothing more.

\---

Timeline

Thin vertical line.

Large numbers.

Elegant spacing.

No icons.

No illustrations.

\---

Accordion

Used only in FAQ.

Animation

Height transition.

Opacity transition.

Simple.

\---

Testimonials

Very restrained.

Short.

Maximum two sentences.

No quotation graphics.

No oversized avatars.

Typography is enough.

\---

Editorial Quotes

One sentence.

Large serif.

Centered.

Maximum two lines.

No buttons.

No distractions.

These moments create rhythm.

\---

Section Labels

Uppercase.

Small.

Wide tracking.

Muted color.

Consistent position throughout the site.

\---

Images

Never framed heavily.

Never thick borders.

Never decorative masks.

Rectangular compositions only.

Editorial cropping.

\---

Portfolio Gallery

Editorial masonry.

Different heights.

Consistent spacing.

No lightbox.

Navigation should feel natural.

\---

Language Switch

Minimal.

EN

/

ES

Remember visitor preference.

No dropdown required.

No flags.

\---

Cursor

Default cursor.

Optional custom cursor.

Small.

Elegant.

Never playful.

\---

Loading States

Subtle fade.

Simple spinner or progress line.

No bouncing.

No skeleton overload.

No excessive animation.

\---

Empty States

Editorial.

One sentence.

One CTA.

Nothing decorative.

\---

404

Large typography.

Editorial message.

Single button.

No illustrations.

\---

Footer

Simple.

Four-column grid.

Navigation.

Services.

Contact.

Social.

Large top spacing.

Quiet ending.

\---

Icons

Use only when necessary.

Line icons.

24px.

Single stroke weight.

Never filled.

Never colorful.

\---

Dividers

1px.

Very light.

Often unnecessary.

Whitespace replaces most dividers.

\---

Animation Rules

Every component should animate consistently.

Duration

200–500ms.

Ease

Ease Out.

Never Bounce.

Never Elastic.

Never Spring.

\---

Responsive Behavior

Every component is redesigned.

Not resized.

Touch targets

Minimum 44px.

Navigation simplified.

Typography remains generous.

Whitespace remains generous.

\---

Accessibility

Visible keyboard focus.

ARIA labels.

Semantic HTML.

Screen reader friendly.

Reduced motion support.

Minimum AA contrast.

\---

Things Never Allowed

Never glassmorphism.

Never neumorphism.

Never floating cards.

Never floating action buttons.

Never oversized sticky headers.

Never flashy hover effects.

Never animated gradients.

Never morphing buttons.

Never oversized icons.

Never unnecessary microinteractions.

Never decorative UI.

Every component should feel inevitable.

Every interaction should feel effortless.

Every screen should feel calm.  
\# Laura Rentería  
\# Motion Direction

\---

\# Philosophy

Motion should never attract attention.

It should create rhythm.

Animation exists to guide the eye, reinforce hierarchy and make navigation feel effortless.

If a visitor notices the animation before the content, it is too much.

Motion should feel invisible.

\---

\# Overall Feeling

Think of turning the pages of a beautifully designed editorial magazine.

Think of entering a quiet art gallery.

Think of walking through an architectural exhibition.

Everything moves because it needs to.

Nothing moves because it can.

\---

\# Emotional Goal

Movement should communicate:

Calm.

Confidence.

Precision.

Sophistication.

Intentionality.

Never excitement.

Never entertainment.

Never surprise.

\---

\# Motion Principles

Movement follows content.

Content never follows movement.

Animation should support hierarchy.

Not replace it.

Every animation should make reading easier.

Never slower.

Never distracting.

\---

\# Rhythm

The website should breathe.

Content appears.

Pause.

Reader observes.

Reader scrolls.

Next section appears.

Pause again.

Never overwhelm the visitor.

\---

\# Timing

Fast enough to feel responsive.

Slow enough to feel elegant.

Nothing should snap.

Nothing should drag.

Every transition should feel inevitable.

\---

\# Scroll Behavior

Scrolling should feel effortless.

Sections naturally replace one another.

Generous spacing creates rhythm.

Motion should reinforce this rhythm.

Not interrupt it.

\---

\# Hero

The hero introduces the visitor gently.

Large image already exists.

Typography appears afterwards.

Headline.

Pause.

Supporting text.

Pause.

Buttons.

Nothing appears simultaneously.

\---

\# Typography

Typography should feel composed.

Reveal entire lines.

Never reveal individual letters.

Never reveal words randomly.

Never create theatrical effects.

Reading comes first.

\---

\# Images

Images should never fly into the screen.

They already have enough visual weight.

Simple fade.

Very subtle upward movement.

Nothing more.

\---

\# Editorial Quotes

Editorial statements deserve silence.

Fade in slowly.

Remain perfectly still.

Allow time to read.

Never compete with surrounding sections.

\---

\# Navigation

Header transitions should be almost imperceptible.

Transparency becomes solid naturally.

No dramatic color changes.

No sliding headers.

No disappearing navigation.

Navigation should always feel dependable.

\---

\# Buttons

Buttons should respond immediately.

Hover feels tactile.

Underline draws smoothly.

Background changes softly.

Never bounce.

Never pulse.

Never glow.

\---

\# Hover Philosophy

Hover exists for confirmation.

Not entertainment.

Every hover interaction should communicate:

"Yes, this is interactive."

Nothing more.

\---

\# Cards

Hover animations should be minimal.

Very small translate.

Very small opacity adjustment.

Never dramatic scaling.

Never rotation.

Never tilt.

\---

\# Portfolio

Images should never animate aggressively.

Hover should feel like approaching artwork in a gallery.

Subtle zoom.

Very soft.

Typography appears naturally.

\---

\# Forms

Focus transitions should feel immediate.

Validation appears gently.

Errors never shake.

Nothing flashes.

Nothing blinks.

Writing should remain the focus.

\---

\# FAQ

Accordion opens naturally.

Content fades slightly.

Height expands smoothly.

No spring animation.

No bounce.

No exaggerated easing.

\---

\# Page Transitions

Changing pages should feel like moving between chapters.

Not loading another application.

Short.

Elegant.

Editorial.

A soft curtain or fade is preferred.

Never dramatic wipes.

Never rotating transitions.

Never oversized animations.

\---

\# Loading

Loading should reassure.

Not entertain.

Simple progress indicator.

Simple fade.

Avoid skeleton overload.

Avoid looping animations.

\---

\# Microinteractions

Microinteractions should almost disappear.

The visitor remembers the experience.

Not the animation.

\---

\# Reduced Motion

Respect system preferences.

If reduced motion is enabled:

Remove movement.

Keep opacity transitions.

Preserve hierarchy.

Accessibility comes before aesthetics.

\---

\# Motion Hierarchy

Highest priority

Page transitions.

Hero.

Editorial statements.

Medium priority

Section reveals.

Portfolio.

Case studies.

Lowest priority

Buttons.

Links.

Inputs.

Icons.

The most important content receives the most thoughtful motion.

Not the most animation.

\---

\# Things Never Allowed

Never bounce.

Never elastic.

Never rotate elements.

Never spin icons.

Never animate gradients.

Never animate backgrounds.

Never use parallax aggressively.

Never animate every element.

Never stagger large grids dramatically.

Never create animations that delay reading.

Never create motion simply because it looks impressive.

The visitor should remember the ideas.

Not the effects.

\---

\# Final Principle

Good motion is forgotten.

Good rhythm is remembered.

The website should feel alive.

Never animated.  
\# Laura Rentería  
\# Photography Direction

\---

\# Philosophy

Photography is not decoration.

Photography is the product.

The website does not sell services.

It sells trust.

Photography is responsible for creating that trust before the visitor reads a single sentence.

Every photograph should communicate credibility, sophistication and calm.

\---

\# Overall Feeling

Imagine an editorial published by Monocle.

Not Vogue.

Not Harper's Bazaar.

Not a luxury fashion campaign.

Think of contemporary editorial photography.

Minimal.

Architectural.

Intelligent.

Quiet.

Human.

Timeless.

\---

\# Visual Personality

Calm.

Confident.

Natural.

Elegant.

Intentional.

Approachable.

Never intimidating.

Never performative.

Never artificial.

\---

\# Lighting

Natural light whenever possible.

Soft shadows.

Cloudy daylight is preferred over harsh sunlight.

Golden hour only if it feels subtle.

Avoid dramatic lighting.

Avoid cinematic contrast.

Avoid colored lighting.

Avoid neon.

Avoid artificial studio effects unless intentionally editorial.

\---

\# Color Treatment

Warm neutral tones.

Soft whites.

Cream.

Stone.

Charcoal.

Muted navy.

Natural skin tones.

No oversaturated colors.

No heavy color grading.

No trendy LUTs.

The photography should age well.

\---

\# Portrait Direction

Laura should never look like she is posing for social media.

She should look like she was interrupted while working.

The camera observes.

It does not direct.

Expressions should feel genuine.

No exaggerated smiles.

No exaggerated seriousness.

Relaxed confidence.

\---

\# Eye Contact

Use direct eye contact selectively.

Direct gaze creates authority.

Looking away creates reflection.

Alternate both throughout the website.

Never use the same portrait repeatedly.

\---

\# Wardrobe

Neutral palette.

Black.

Cream.

White.

Stone.

Camel.

Charcoal.

Navy.

Avoid bright colors.

Avoid large logos.

Avoid visible branding.

Avoid trendy pieces.

Timeless tailoring.

Natural fabrics.

Structure over fashion.

\---

\# Styling

Everything should feel effortless.

Nothing should look over-styled.

Hair should move naturally.

Minimal accessories.

Simple jewelry.

Clean makeup.

Editorial restraint.

\---

\# Backgrounds

Architecture.

Concrete.

Stone.

Neutral walls.

Editorial interiors.

Natural textures.

Books.

Workspaces.

Minimal furniture.

Never busy environments.

Never colorful backgrounds.

\---

\# Composition

Negative space is encouraged.

Do not center every portrait.

Allow subjects to breathe.

Use architecture as framing.

Large empty areas improve typography placement.

\---

\# Framing

Wide.

Medium.

Close.

Alternate rhythm.

Never crop awkwardly.

Hands should often remain visible.

Gestures communicate personality.

\---

\# Body Language

Relaxed posture.

Natural movement.

Standing.

Walking.

Working.

Conversing.

Writing.

Reviewing.

Thinking.

Avoid crossed arms.

Avoid exaggerated gestures.

Avoid corporate poses.

\---

\# Working Photography

These images build credibility.

Laura reviewing work.

Speaking with clients.

Directing a shoot.

Taking notes.

Using printed materials.

Looking at moodboards.

Reviewing photography.

Walking through a set.

Preparing presentations.

These moments should feel documentary.

Not staged.

\---

\# Editorial Photography

Some photographs exist only to create atmosphere.

Architecture.

Fabric.

Paper.

Books.

Materials.

Light.

Shadows.

Typography.

Objects.

These moments create rhythm between sections.

\---

\# Image Hierarchy

Hero

Most powerful portrait.

About

Working portrait.

Services

Minimal supporting imagery.

Portfolio

Projects dominate.

Image Consulting

Portraits become more intimate.

Closing CTA

Warm portrait with direct gaze.

Footer

No photography required.

\---

\# Black & White

Use intentionally.

Never randomly.

Recommended for:

Personal moments.

Behind the scenes.

Portraits.

Reflection.

Use color for:

Client work.

Campaigns.

Brand projects.

Events.

This creates visual hierarchy.

\---

\# Image Quality

Professional photography only.

No screenshots.

No phone photography.

No inconsistent editing.

Every image should belong to the same visual world.

\---

\# Cropping

Prefer vertical formats.

4:5

3:4

Portrait orientation.

Horizontal only when telling a story.

Never crop aggressively.

Respect breathing room.

\---

\# Photography Rhythm

Every large block of text should be balanced by photography.

Every large photograph should be followed by breathing room.

Alternate image-heavy sections with typography-heavy sections.

Avoid visual fatigue.

\---

\# Image Selection

Only show work that elevates perception.

Less is always better.

Ten extraordinary photographs are more valuable than fifty average ones.

Every image should justify its presence.

\---

\# Things Never Allowed

Never stock photography.

Never cliché business photography.

Never fake meetings.

Never handshake photographs.

Never laptop-on-table imagery.

Never coffee-cup branding clichés.

Never exaggerated luxury.

Never private jets.

Never expensive cars.

Never forced lifestyle imagery.

Never influencer aesthetics.

Never beauty-retouched skin.

Never artificial perfection.

\---

\# Final Principle

Every photograph should answer one question:

"Would this image still feel relevant in ten years?"

If the answer is yes, it belongs.

If not, remove it.  
\# Laura Rentería  
\# Technical Implementation

\---

\# Project Philosophy

Technology exists to support design.

Never the opposite.

Performance is part of the luxury experience.

A premium website should feel effortless.

Every interaction should be immediate.

Every animation should remain smooth.

Every page should load quickly.

\---

\# Core Stack

Framework

Next.js 15 (App Router)

Language

TypeScript

Styling

Tailwind CSS v4

Animation

Framer Motion

CMS

Sanity CMS

Forms

React Hook Form \+ Zod

Icons

Lucide React

Internationalization

next-intl

Image Optimization

next/image

Deployment

Vercel

Analytics

Google Analytics 4

Google Search Console

Meta Pixel (optional)

Email

Resend

\---

\# Development Principles

Everything must be modular.

Everything must be reusable.

Everything must be typed.

Everything must be accessible.

Everything must be performant.

Never duplicate logic.

Never duplicate layouts.

Never hardcode content.

\---

\# Architecture

Use App Router.

Prefer Server Components.

Only use Client Components when interaction requires it.

Separate concerns clearly.

Never mix presentation with business logic.

\---

Recommended Structure

app/

components/

features/

lib/

hooks/

types/

styles/

public/

messages/

sanity/

\---

\# Internationalization

English is the primary language.

Spanish is secondary.

Routing

/en

/es

No automatic language detection.

Remember the user's selected language.

Every route must exist in both languages.

Use localized metadata.

Use hreflang.

\---

\# SEO

Every page requires

Title

Description

Open Graph

Twitter Card

Canonical URL

Structured Data

Robots metadata

Sitemap

Breadcrumb Schema where appropriate.

\---

\# Performance

Target Lighthouse

95+

Largest Contentful Paint

Under 2 seconds.

CLS

Close to zero.

Avoid unnecessary JavaScript.

Prefer server rendering.

Lazy load below-the-fold content.

Optimize every image.

Never ship unused libraries.

\---

\# Images

Always use next/image.

Serve responsive images.

Generate blur placeholders.

Use AVIF or WebP.

Never load full-resolution assets unnecessarily.

\---

\# Fonts

Use next/font.

Host fonts locally whenever licensing allows.

Avoid layout shift.

Limit font families.

Prefer variable fonts.

\---

\# Styling

Tailwind utilities first.

Avoid inline styles.

Avoid custom CSS unless necessary.

Create reusable utility classes.

Use design tokens.

Spacing should always follow the design system.

\---

\# Components

Each component has one responsibility.

Avoid giant components.

Prefer composition.

Keep props minimal.

Use semantic names.

\---

Example

Hero

AboutSection

ServiceGrid

CaseStudyCard

EditorialQuote

PortfolioGallery

ContactForm

Footer

\---

\# Forms

Validation with Zod.

React Hook Form.

Client-side validation.

Server-side validation.

Spam protection.

Accessible labels.

Clear success states.

Graceful error handling.

\---

\# Accessibility

WCAG AA minimum.

Keyboard navigation.

Visible focus.

ARIA where required.

Semantic HTML only.

Respect prefers-reduced-motion.

Meaningful alt text.

Proper heading hierarchy.

\---

\# Motion

Use Framer Motion sparingly.

Only animate meaningful elements.

Prefer opacity and translate.

Avoid layout-breaking animations.

Shared transitions only where beneficial.

\---

\# Responsive

Mobile first.

Tablet optimized.

Desktop refined.

Do not hide content unnecessarily.

Redesign layouts.

Do not simply stack columns.

\---

\# Content

Content comes from Sanity.

No copy should exist inside components.

Support rich text where appropriate.

Allow future scalability.

\---

\# Code Quality

Strict TypeScript.

No any.

No console logs in production.

No commented code.

Meaningful variable names.

Small functions.

Readable code over clever code.

\---

\# Naming Conventions

Components

PascalCase

Hooks

camelCase starting with use

Utilities

camelCase

Constants

UPPER\_SNAKE\_CASE only when appropriate

Files

kebab-case

\---

\# Error Handling

Every async operation must handle failure.

Provide useful fallback UI.

Never expose raw errors.

Always fail gracefully.

\---

\# Security

Never expose secrets.

Environment variables only.

Validate all inputs.

Sanitize user content.

Protect API routes.

\---

\# CMS

Sanity should manage

Pages

Services

Case Studies

Portfolio

Editorial Quotes

Navigation

Footer

SEO Metadata

Global Settings

Translations

Contact Information

\---

\# Animations

Lazy load heavy motion.

Do not animate on every scroll event.

Avoid unnecessary re-renders.

Keep animations GPU accelerated.

\---

\# Code Splitting

Dynamic import when appropriate.

Split heavy sections.

Load only what is needed.

\---

\# Developer Experience

Readable folder structure.

Consistent formatting.

ESLint.

Prettier.

Type-safe imports.

Absolute imports.

Clear documentation.

\---

\# Browser Support

Latest Chrome

Safari

Firefox

Edge

Graceful degradation elsewhere.

\---

\# Final Principle

This project should feel handcrafted.

Not generated.

Every line of code should contribute to:

Performance.

Maintainability.

Accessibility.

Elegance.

If a feature does not improve the experience,

do not build it.  
\# Laura Rentería  
\# Creative Guardrails

\---

\# Purpose

This document defines the non-negotiable principles of the project.

Whenever there is uncertainty, these rules take priority over personal interpretation.

If a decision violates one of these principles, it is the wrong decision.

\---

\# The Website

This website is not:

• an agency website

• a startup landing page

• a SaaS product

• an online course platform

• an influencer portfolio

• a fashion ecommerce

• a template

• a social media extension

It is an editorial digital experience.

\---

\# Simplicity

When in doubt,

remove.

Never add.

Complexity rarely improves quality.

The best solution is usually the simplest one.

\---

\# Whitespace

Whitespace is never empty.

Whitespace is structure.

Whitespace is luxury.

Never reduce spacing because content feels too long.

Increase page height instead.

\---

\# Typography

Typography is the primary design language.

Never compensate weak typography with decorative graphics.

If hierarchy isn't clear using typography alone,

the hierarchy is wrong.

\---

\# Photography

Photography carries the emotional weight.

The interface should always feel secondary.

If photography and interface compete,

the interface loses.

\---

\# Interface

The visitor should remember Laura.

Not the interface.

If a UI element attracts attention,

simplify it.

\---

\# Motion

Motion supports reading.

Motion never becomes entertainment.

If animation feels impressive,

remove it.

\---

\# Components

Components should disappear.

Visitors should remember ideas.

Not cards.

Not buttons.

Not hover effects.

\---

\# Color

Color creates atmosphere.

Not hierarchy.

Not decoration.

Never solve hierarchy with stronger colors.

Use typography and spacing instead.

\---

\# Layout

Layouts should feel inevitable.

Nothing should appear arbitrary.

Every alignment should have intention.

Every offset should have purpose.

\---

\# Reading Experience

This website should be read.

Not scanned.

Never optimize for speed at the expense of rhythm.

Reading comfortably is more important than showing more information.

\---

\# Sections

Every section answers one question.

Never answer two questions in one section.

Never overload sections.

\---

\# Visual Noise

Whenever something feels busy,

remove elements.

Never shrink them.

Never reorganize them.

Delete.

Simplify.

Breathe.

\---

\# Interactions

Every interaction should feel obvious.

Visitors should never wonder:

"What happens if I click this?"

\---

\# Luxury

Luxury is not expensive aesthetics.

Luxury is confidence.

Luxury is restraint.

Luxury is editing.

Luxury is knowing what to leave out.

\---

\# Trust

Trust is built through consistency.

Not through decoration.

Every page should feel like it belongs to the same publication.

\---

\# Navigation

Visitors should always know where they are.

Navigation should never become an exploration game.

Clarity comes first.

\---

\# Accessibility

Accessibility is not optional.

Elegant websites are accessible websites.

Performance is accessibility.

Readability is accessibility.

Semantic HTML is accessibility.

\---

\# Content

Never invent copy.

Never rewrite copy unless explicitly requested.

The copy already defines the strategy.

Design exists to support it.

\---

\# Technology

Technology should disappear.

Visitors never notice great code.

They notice slow websites.

Performance is part of the design.

\---

\# Mobile

Mobile is not desktop compressed.

It is a separate editorial composition.

Every section should be reconsidered.

Not simply stacked.

\---

\# Decision Making

When facing two valid solutions,

choose the quieter one.

When facing three,

choose the simplest one.

When facing uncertainty,

remove.

\---

\# Things Never Allowed

Never use gradients.

Never use glassmorphism.

Never use neumorphism.

Never use oversized shadows.

Never use floating elements.

Never use decorative icons.

Never use decorative shapes.

Never use unnecessary animations.

Never use fake luxury aesthetics.

Never use generic templates.

Never use trendy effects.

Never design to impress other designers.

Always design for the client.

\---

\# Final Principle

This website should feel inevitable.

As if there was never another way to design it.

Every decision should move the project closer to one feeling:

Quiet confidence.

If a decision reduces that feeling,

do not make it.  
\# Laura Rentería  
\# Project Overview

\---

\# Project

Official website for Laura Rentería.

International consultant specializing in:

\- Brand Strategy  
\- Branding  
\- Creative Direction  
\- Marketing Strategy  
\- Content Strategy  
\- Personal Branding  
\- Image Consulting  
\- Presence & Communication  
\- Brand Experience

This website is the digital headquarters of Laura Rentería.

It must position her as a world-class consultant working between New York and Colombia.

The website should feel timeless, editorial and highly intentional.

\---

\# Primary Objective

The website is designed to generate trust before generating leads.

Visitors should immediately understand:

\- who Laura is  
\- what she does  
\- why her approach is different  
\- why they should trust her

Every design decision should reinforce authority.

Never create visual noise.

Never design to impress.

Design to communicate.

\---

\# Project Philosophy

Everything communicates.

Everything.

Spacing communicates.

Typography communicates.

Photography communicates.

Silence communicates.

The website should feel calm, intelligent and confident.

Never loud.

Never trendy.

Never decorative.

\---

\# Experience Goal

Visitors should finish the experience thinking:

"I trust her."

not

"This website looks beautiful."

Beauty is a consequence.

Trust is the objective.

\---

\# Design Inspiration

Primary references

\- A Practice For Everyday Life  
\- Aesop  
\- COS

Secondary references

\- Debbie Millman  
\- Office of Otto  
\- Jessica Walsh

Extract principles.

Never imitate layouts.

Never copy interactions.

Build an original experience.

\---

\# Documentation

This project is documentation-driven.

Before writing code, always read the project documentation.

The documentation defines the project.

The implementation follows the documentation.

Never skip documentation.

\---

\# Project Documentation

Read these files before implementing anything:

01\_CREATIVE\_DIRECTION.md

02\_DESIGN\_SYSTEM.md

03\_LAYOUT\_SYSTEM.md

04\_COMPONENT\_SYSTEM.md

05\_MOTION\_DIRECTION.md

06\_PHOTOGRAPHY\_DIRECTION.md

07\_TECHNICAL\_IMPLEMENTATION.md

08\_CREATIVE\_GUARDRAILS.md

These documents are mandatory.

\---

\# Skills Directory (Highest Priority)

A \`/skills\` directory exists inside the project.

It contains implementation knowledge, reusable solutions, coding patterns and best practices.

Before creating any feature:

Always inspect the \`/skills\` directory.

If a relevant skill exists:

Use it.

Do not recreate it.

Do not invent an alternative implementation.

Do not ignore it.

Consistency is always more important than originality.

\---

\#\# Development Priority

Every implementation should follow this order:

1\. Existing project code

2\. \`/skills\`

3\. Project documentation

4\. Existing design system

5\. Existing components

6\. General engineering knowledge

Never reverse this order.

\---

\# Existing Code

Always inspect existing components before creating new ones.

Prefer extending existing systems.

Avoid duplication.

Keep naming consistent.

Keep architecture consistent.

\---

\# Creative Direction

Editorial before digital.

Typography before graphics.

Photography before interface.

Whitespace before decoration.

Clarity before creativity.

Trust before aesthetics.

Always.

\---

\# Development Principles

Build slowly.

Think first.

Code second.

Delete before adding.

Simplify before redesigning.

Every component must justify its existence.

Every animation must improve usability.

Every line of code must have a purpose.

\---

\# Technical Principles

Performance is design.

Accessibility is design.

SEO is design.

Responsive behavior is design.

Maintainability is design.

Code quality is part of the user experience.

\---

\# Internationalization

Primary language

English

Secondary language

Spanish

The English experience is the primary reference.

Spanish adapts naturally.

Both versions should feel native.

Never use flags.

Always use EN / ES.

\---

\# Content Rules

Never invent copy.

Never rewrite approved copy.

Never shorten copy unless requested.

Never create placeholder marketing text.

Respect the approved copy deck.

The design serves the content.

Not the opposite.

\---

\# Decision Framework

Whenever uncertainty exists, ask:

Does this improve clarity?

Does this improve trust?

Does this improve reading?

Does this improve consistency?

Does this improve performance?

If the answer is no,

do not implement it.

\---

\# Final Principle

This website should feel inevitable.

Quiet.

Editorial.

Timeless.

Confident.

The visitor should remember Laura.

Not the interface.

Not the animations.

Not the technology.

Only the confidence the experience creates.  
\# Laura Rentería  
\# Project Overview

\---

\# Project

Official website for Laura Rentería.

International consultant specializing in:

\- Brand Strategy  
\- Branding  
\- Creative Direction  
\- Marketing Strategy  
\- Content Strategy  
\- Personal Branding  
\- Image Consulting  
\- Presence & Communication  
\- Brand Experience

This website is the digital headquarters of Laura Rentería.

It must position her as a world-class consultant working between New York and Colombia.

The website should feel timeless, editorial and highly intentional.

\---

\# Primary Objective

The website is designed to generate trust before generating leads.

Visitors should immediately understand:

\- who Laura is  
\- what she does  
\- why her approach is different  
\- why they should trust her

Every design decision should reinforce authority.

Never create visual noise.

Never design to impress.

Design to communicate.

\---

\# Project Philosophy

Everything communicates.

Everything.

Spacing communicates.

Typography communicates.

Photography communicates.

Silence communicates.

The website should feel calm, intelligent and confident.

Never loud.

Never trendy.

Never decorative.

\---

\# Experience Goal

Visitors should finish the experience thinking:

"I trust her."

not

"This website looks beautiful."

Beauty is a consequence.

Trust is the objective.

\---

\# Design Inspiration

Primary references

\- A Practice For Everyday Life  
\- Aesop  
\- COS

Secondary references

\- Debbie Millman  
\- Office of Otto  
\- Jessica Walsh

Extract principles.

Never imitate layouts.

Never copy interactions.

Build an original experience.

\---

\# Documentation

This project is documentation-driven.

Before writing code, always read the project documentation.

The documentation defines the project.

The implementation follows the documentation.

Never skip documentation.

\---

\# Project Documentation

Read these files before implementing anything:

01\_CREATIVE\_DIRECTION.md

02\_DESIGN\_SYSTEM.md

03\_LAYOUT\_SYSTEM.md

04\_COMPONENT\_SYSTEM.md

05\_MOTION\_DIRECTION.md

06\_PHOTOGRAPHY\_DIRECTION.md

07\_TECHNICAL\_IMPLEMENTATION.md

08\_CREATIVE\_GUARDRAILS.md

These documents are mandatory.

\---

\# Skills Directory (Highest Priority)

A \`/skills\` directory exists inside the project.

It contains implementation knowledge, reusable solutions, coding patterns and best practices.

Before creating any feature:

Always inspect the \`/skills\` directory.

If a relevant skill exists:

Use it.

Do not recreate it.

Do not invent an alternative implementation.

Do not ignore it.

Consistency is always more important than originality.

\---

\#\# Development Priority

Every implementation should follow this order:

1\. Existing project code

2\. \`/skills\`

3\. Project documentation

4\. Existing design system

5\. Existing components

6\. General engineering knowledge

Never reverse this order.

\---

\# Existing Code

Always inspect existing components before creating new ones.

Prefer extending existing systems.

Avoid duplication.

Keep naming consistent.

Keep architecture consistent.

\---

\# Creative Direction

Editorial before digital.

Typography before graphics.

Photography before interface.

Whitespace before decoration.

Clarity before creativity.

Trust before aesthetics.

Always.

\---

\# Development Principles

Build slowly.

Think first.

Code second.

Delete before adding.

Simplify before redesigning.

Every component must justify its existence.

Every animation must improve usability.

Every line of code must have a purpose.

\---

\# Technical Principles

Performance is design.

Accessibility is design.

SEO is design.

Responsive behavior is design.

Maintainability is design.

Code quality is part of the user experience.

\---

\# Internationalization

Primary language

English

Secondary language

Spanish

The English experience is the primary reference.

Spanish adapts naturally.

Both versions should feel native.

Never use flags.

Always use EN / ES.

\---

\# Content Rules

Never invent copy.

Never rewrite approved copy.

Never shorten copy unless requested.

Never create placeholder marketing text.

Respect the approved copy deck.

The design serves the content.

Not the opposite.

\---

\# Decision Framework

Whenever uncertainty exists, ask:

Does this improve clarity?

Does this improve trust?

Does this improve reading?

Does this improve consistency?

Does this improve performance?

If the answer is no,

do not implement it.

\---

\# Final Principle

This website should feel inevitable.

Quiet.

Editorial.

Timeless.

Confident.

The visitor should remember Laura.

Not the interface.

Not the animations.

Not the technology.

Only the confidence the experience creates.  
\# Documentation & Project Rules

This project is documentation-driven.

The documentation defines the project.

The implementation follows the documentation.

Never skip documentation.

Before writing any code, always read the project documentation.

The documentation is considered the single source of truth for all design, UX, architecture and implementation decisions.

\---

\# Source of Truth

This project is based on an approved Website Copy Deck.

The Website Copy Deck is the strategic foundation of the project.

It defines:

\- Information Architecture  
\- User Journey  
\- Content Hierarchy  
\- Editorial Rhythm  
\- Messaging  
\- Navigation  
\- CTA Placement  
\- Bilingual Strategy  
\- Overall User Experience

Do not reinterpret or reorganize the approved architecture.

Do not change the order of sections.

Do not merge sections.

Do not remove sections.

Do not invent new sections.

Design should reinforce the approved strategy.

Never replace it.

\---

\# Information Architecture

The Home page MUST follow this exact order:

1\. Hero  
2\. Manifesto  
3\. About  
4\. What I Do  
5\. Services  
6\. Editorial Break Line  
7\. How I Work  
8\. Why Work With Me  
9\. Selected Work / Case Studies  
10\. Portfolio  
11\. Editorial Break Line  
12\. FAQ  
13\. Closing CTA  
14\. Contact  
15\. Footer

This sequence has already been strategically defined.

Respect it throughout development.

Never change it unless explicitly instructed.

\---

\# Internal Pages

The project includes the following pages:

\- /about  
\- /services  
\- /services/\[slug\]  
\- /image-consulting  
\- /work  
\- /work/\[slug\]  
\- /portfolio  
\- /contact

Do not remove pages.

Do not merge pages.

Do not rename routes without approval.

\---

\# Copy Integrity

All approved copy is considered final.

Do not rewrite copy.

Do not simplify copy.

Do not shorten copy.

Do not replace headlines.

Do not generate marketing placeholders.

If content is missing,

leave a clear placeholder indicating that content is pending.

Never invent content.

\---

\# Documentation Priority

Whenever documentation exists,

it always has priority over assumptions.

The following documentation is mandatory:

\- README.md  
\- Website Copy Deck  
\- Skills Directory

If multiple documents exist,

follow the one with the highest priority.

\---

\# Skills Directory

A \`/skills\` directory exists inside this project.

It contains reusable implementation knowledge, coding patterns, architecture decisions and best practices.

The skills directory is considered part of the project's documentation.

Always inspect the skills directory before implementing any feature.

\---

\#\# Skills First

Whenever a task matches an existing skill:

Read it.

Understand it.

Reuse it.

Do not recreate existing implementations.

Do not generate alternative approaches unless explicitly requested.

Prefer consistency over originality.

\---

\#\# Development Priority

Every implementation should follow this order:

1\. Website Copy Deck  
2\. README.md  
3\. Existing project code  
4\. /skills  
5\. Existing architecture  
6\. General engineering knowledge

Never reverse this order.

\---

\# Existing Code

Before creating any new component:

Inspect the existing implementation.

Prefer extending.

Avoid duplication.

Respect naming conventions.

Respect project architecture.

Reuse existing patterns.

\---

\# Design Responsibility

The role of design is not to redefine the strategy.

The strategy already exists.

Design exists to amplify it.

Every visual decision should reinforce:

\- trust  
\- clarity  
\- editorial rhythm  
\- authority  
\- elegance

Never redesign the information architecture.

Never redesign the content strategy.

\---

\# Decision Framework

Before implementing anything, ask:

\- Does this respect the approved copy?  
\- Does this respect the documentation?  
\- Does this respect the design system?  
\- Does this reuse existing patterns?  
\- Does this improve consistency?  
\- Does this improve clarity?  
\- Does this improve trust?  
\- Does this improve performance?

If the answer is "No",

do not implement it.

\---

\# Working Method

Never jump directly into coding.

Always follow this workflow:

1\. Understand the request.  
2\. Read the relevant documentation.  
3\. Inspect the relevant skills.  
4\. Review existing components.  
5\. Plan the implementation.  
6\. Implement.  
7\. Verify responsiveness.  
8\. Verify accessibility.  
9\. Verify performance.  
10\. Verify consistency with the documentation.

\---

\# Success Criteria

Before considering any task complete, verify:

✓ Information Architecture remains unchanged.

✓ Approved copy remains unchanged.

✓ Design follows the Creative Direction.

✓ Components follow the Design System.

✓ Layout follows the Layout System.

✓ Motion follows the Motion Direction.

✓ Photography follows the Photography Direction.

✓ Technical implementation follows project standards.

✓ Creative Guardrails are respected.

✓ Existing skills have been reused whenever applicable.

✓ Existing components have been reused whenever possible.

✓ Accessibility has been verified.

✓ Responsive behavior has been verified.

✓ Performance has been verified.

If any answer is "No",

the implementation is not finished.

\---

\# Final Principle

The visitor should remember Laura.

Not the interface.

Not the animations.

Not the technology.

Only the confidence created by the experience.

Every design decision should reinforce that goal.

Every line of code should contribute to that goal.

Everything else is secondary.  
Until the final photography is available:

Use elegant placeholders.

Use gray editorial blocks.

Never redesign layouts based on placeholder images.

Photography will replace placeholders later without affecting the layout.

Design the experience around the expected photography.

Not around temporary assets.  
