# Hybrid Gym Framer Components

StrongX-inspired component library for building luxurious dark-themed fitness websites in Framer.

## Installation

1. Copy all `.tsx` files from this folder to your Framer project's `/code/` directory
2. Or import via Framer's code editor

## Components

### 1. HybridHero
Full-screen hero section with animated headline, CTAs, and background image.

**Properties:**
- `headline` - Main headline text (use `\n` for line breaks)
- `highlightText` - Text to highlight in accent color
- `subheadline` - Description text
- `ctaText` - Button text
- `hours` - Operating hours badge
- `trustedText` - Social proof text
- `ctaColor` - Accent color (default: #c8ff00)
- `backgroundColor` - Background color (default: #0a0a0a)
- `glowColor` - Ambient glow color
- `imageUrl` - Hero image URL
- `showImage` - Toggle image visibility

### 2. HybridMarquee
Infinite scrolling services banner.

**Properties:**
- `items` - Comma-separated list of services
- `textColor` - Text color
- `dotColor` - Separator dot color
- `speed` - Animation speed in seconds
- `fontSize` - Text size

### 3. HybridServiceCard
Service feature card with icon and hover effects.

**Properties:**
- `title` - Service name
- `description` - Service description
- `iconName` - Icon type (Dumbbell, Heart, Flame, Users, Waves)
- `accentColor` - Icon and hover color
- `backgroundColor` - Card background
- `borderColor` - Border color
- `hoverBorderColor` - Hover border color

### 4. HybridStatsCard
Animated statistics card with parallax scroll effect.

**Properties:**
- `value` - Stat value (e.g., "+100k")
- `label` - Stat label
- `accentColor` - Value color
- `enableParallax` - Enable scroll animation
- `parallaxOffset` - Scroll offset amount

### 5. HybridTransformationCard
Before/after transformation showcase with interactive tabs.

**Properties:**
- `name` - Person's name
- `age` - Person's age
- `duration` - Transformation duration
- `beforeWeight` - Before weight in kg
- `afterWeight` - After weight in kg
- `beforeBodyFat` - Before body fat %
- `afterBodyFat` - After body fat %
- `imageUrl` - Photo URL

### 6. HybridTrainerCard
Team member card with gradient overlay and hover zoom.

**Properties:**
- `name` - Trainer name
- `role` - Trainer role
- `imageUrl` - Photo URL
- `accentColor` - Role text color

### 7. HybridPricingCard
Pricing plan card with features list.

**Properties:**
- `planName` - Plan name
- `price` - Price amount
- `billingPeriod` - Billing period (month/session)
- `features` - List of features (one per line)
- `isPopular` - Highlight as popular plan
- `ctaText` - Button text

### 8. HybridFAQ
Accordion FAQ item with smooth expand/collapse.

**Properties:**
- `question` - Question text
- `answer` - Answer text
- `isOpenDefault` - Start expanded
- `accentColor` - Icon color

### 9. HybridCTA
Call-to-action banner with pattern background.

**Properties:**
- `headline` - CTA headline
- `subheadline` - Supporting text
- `ctaText` - Button text
- `accentColor` - Banner background
- `textColor` - Text color
- `showPattern` - Toggle SVG pattern
- `patternOpacity` - Pattern transparency

## Design Tokens

Default design system values:

```
Background: #0a0a0a
Accent: #c8ff00
Text Primary: #ffffff
Text Secondary: rgba(255, 255, 255, 0.4)
Text Muted: rgba(255, 255, 255, 0.3)
Border: rgba(255, 255, 255, 0.05)
Border Hover: rgba(255, 255, 255, 0.1)
Font: Inter, sans-serif
Border Radius: 16px
Transition: cubic-bezier(0.16, 1, 0.3, 1)
```

## Usage Example

```tsx
import { HybridHero, HybridMarquee, HybridServiceCard } from "./index"

export default function Page() {
  return (
    <>
      <HybridHero />
      <HybridMarquee />
      <HybridServiceCard 
        title="MMA Training"
        description="Complete mixed martial arts training"
        iconName="Dumbbell"
      />
    </>
  )
}
```

## API Key

Framer API Key: `abeb21cf-bcd5-4a15-bd4d-986271055dcf`
Workspace: https://framer.com/join/Harshana-s-Workspace--XtdcLkEUmwtkmyu15owS
