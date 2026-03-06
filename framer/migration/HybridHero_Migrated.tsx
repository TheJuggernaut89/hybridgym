// MIGRATED FROM: src/sections/Hero.jsx
// MCP Migration: Hero Section for Framer

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"

/**
 * Hybrid Gym Hero Section - MIGRATED
 * Original: src/sections/Hero.jsx
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight auto
 */
export default function HybridHero_Migrated(props) {
    const {
        headline,
        highlightText,
        subheadline,
        primaryCta,
        secondaryCta,
        hours,
        trustedText,
        imageUrl,
        showImage,
        accentColor,
        backgroundColor,
    } = props

    const parts = headline.split(highlightText)

    const containerStyle = {
        width: "100%",
        minHeight: "100vh",
        backgroundColor: backgroundColor,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "80px 24px",
    }

    const glowStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "800px",
        backgroundColor: accentColor,
        borderRadius: "50%",
        filter: "blur(150px)",
        opacity: 0.03,
    }

    const contentStyle = {
        maxWidth: "896px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
        zIndex: 10,
    }

    const badgeStyle = {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 16px",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "9999px",
        marginBottom: "24px",
    }

    const badgeDotStyle = {
        width: "16px",
        height: "16px",
        color: accentColor,
    }

    const badgeTextStyle = {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
    }

    const trustedStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        marginBottom: "40px",
    }

    const avatarGroupStyle = {
        display: "flex",
        marginLeft: "8px",
    }

    const avatarStyle = {
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${accentColor}, #a8d900)`,
        border: "2px solid #0a0a0a",
        marginLeft: "-8px",
    }

    const starStyle = {
        color: accentColor,
        fontSize: "14px",
    }

    const trustedTextStyle = {
        color: "rgba(255, 255, 255, 0.4)",
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
    }

    const headlineStyle = {
        fontSize: "clamp(40px, 8vw, 80px)",
        fontWeight: 600,
        color: "#ffffff",
        lineHeight: 0.95,
        marginBottom: "32px",
        letterSpacing: "-0.02em",
        fontFamily: "Inter, sans-serif",
    }

    const highlightStyle = {
        color: accentColor,
    }

    const subheadlineStyle = {
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.4)",
        maxWidth: "480px",
        margin: "0 auto 40px",
        lineHeight: 1.6,
        fontFamily: "Inter, sans-serif",
    }

    const buttonGroupStyle = {
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        justifyContent: "center",
        flexWrap: "wrap",
    }

    const primaryButtonStyle = {
        padding: "14px 32px",
        backgroundColor: accentColor,
        color: "#000000",
        borderRadius: "9999px",
        fontSize: "14px",
        fontWeight: 500,
        border: "none",
        cursor: "pointer",
        fontFamily: "Inter, sans-serif",
    }

    const secondaryButtonStyle = {
        padding: "14px 32px",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        color: "#ffffff",
        borderRadius: "9999px",
        fontSize: "14px",
        fontWeight: 500,
        border: "1px solid rgba(255, 255, 255, 0.08)",
        cursor: "pointer",
        fontFamily: "Inter, sans-serif",
    }

    const imageStyle = {
        position: "absolute",
        right: 0,
        bottom: 0,
        width: "55%",
        height: "100%",
        objectFit: "cover",
        maskImage: "linear-gradient(to right, transparent 0%, black 50%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 50%)",
    }

    return (
        <motion.section
            style={containerStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div style={glowStyle} />
            
            <div style={contentStyle}>
                {/* Hours Badge */}
                <motion.div
                    style={badgeStyle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <svg style={badgeDotStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span style={badgeTextStyle}>{hours}</span>
                </motion.div>

                {/* Trusted Badge */}
                <motion.div
                    style={trustedStyle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div style={avatarGroupStyle}>
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} style={avatarStyle} />
                        ))}
                    </div>
                    <div style={starStyle}>★★★★★</div>
                    <span style={trustedTextStyle}>{trustedText}</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    style={headlineStyle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    {parts[0]}
                    <span style={highlightStyle}>{highlightText}</span>
                    {parts[1] || ""}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    style={subheadlineStyle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    {subheadline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    style={buttonGroupStyle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.button
                        style={primaryButtonStyle}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {primaryCta}
                    </motion.button>
                    <motion.button
                        style={secondaryButtonStyle}
                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.06)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {secondaryCta}
                    </motion.button>
                </motion.div>
            </div>

            {/* Hero Image */}
            {showImage && (
                <motion.img
                    src={imageUrl}
                    alt="Gym Training"
                    style={imageStyle}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
            )}
        </motion.section>
    )
}

HybridHero_Migrated.defaultProps = {
    headline: "Transform\nbody and mind\nat hybrid",
    highlightText: "body and mind",
    subheadline: "With ten years of experience in the health and wellness industry, our fitness solution continues to be a top option throughout the region.",
    primaryCta: "Start Free Trial",
    secondaryCta: "View Programs",
    hours: "6 a.m - 10 p.m (Mon - Sun)",
    trustedText: "Trusted by 100k+ clients",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80",
    showImage: true,
    accentColor: "#c8ff00",
    backgroundColor: "#0a0a0a",
}

addPropertyControls(HybridHero_Migrated, {
    headline: {
        title: "Headline",
        type: ControlType.String,
        defaultValue: "Transform\nbody and mind\nat hybrid",
    },
    highlightText: {
        title: "Highlight Text",
        type: ControlType.String,
        defaultValue: "body and mind",
    },
    subheadline: {
        title: "Subheadline",
        type: ControlType.String,
        defaultValue: "With ten years of experience in the health and wellness industry, our fitness solution continues to be a top option throughout the region.",
    },
    primaryCta: {
        title: "Primary CTA",
        type: ControlType.String,
        defaultValue: "Start Free Trial",
    },
    secondaryCta: {
        title: "Secondary CTA",
        type: ControlType.String,
        defaultValue: "View Programs",
    },
    hours: {
        title: "Hours Badge",
        type: ControlType.String,
        defaultValue: "6 a.m - 10 p.m (Mon - Sun)",
    },
    trustedText: {
        title: "Trusted Text",
        type: ControlType.String,
        defaultValue: "Trusted by 100k+ clients",
    },
    imageUrl: {
        title: "Hero Image URL",
        type: ControlType.String,
        defaultValue: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80",
    },
    showImage: {
        title: "Show Image",
        type: ControlType.Boolean,
        defaultValue: true,
    },
    accentColor: {
        title: "Accent Color",
        type: ControlType.Color,
        defaultValue: "#c8ff00",
    },
    backgroundColor: {
        title: "Background",
        type: ControlType.Color,
        defaultValue: "#0a0a0a",
    },
})
