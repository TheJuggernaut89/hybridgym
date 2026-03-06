// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"

/**
 * Hybrid Gym CTA Banner
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight auto
 */
export default function HybridCTA(props) {
    const {
        headline,
        subheadline,
        ctaText,
        accentColor,
        textColor,
        patternOpacity,
        showPattern,
    } = props

    const containerStyle = {
        width: "100%",
        padding: "48px",
        backgroundColor: accentColor,
        borderRadius: "24px",
        position: "relative" as const,
        overflow: "hidden",
    }

    const patternStyle = {
        position: "absolute" as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: patternOpacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }

    const contentStyle = {
        position: "relative" as const,
        zIndex: 1,
        display: "flex",
        flexDirection: "row" as const,
        alignItems: "center",
        justifyContent: "space-between",
        gap: "32px",
        flexWrap: "wrap" as const,
    }

    const textContainerStyle = {
        flex: 1,
        minWidth: "280px",
    }

    const headlineStyle = {
        fontSize: "clamp(28px, 4vw, 48px)",
        fontWeight: 600,
        color: textColor,
        lineHeight: 1.05,
        marginBottom: "16px",
        letterSpacing: "-0.02em",
        fontFamily: "Inter, sans-serif",
    }

    const subheadlineStyle = {
        fontSize: "16px",
        color: `${textColor}80`, // 50% opacity
        maxWidth: "400px",
        lineHeight: 1.6,
        fontFamily: "Inter, sans-serif",
    }

    const buttonStyle = {
        padding: "14px 32px",
        backgroundColor: textColor,
        color: accentColor,
        borderRadius: "9999px",
        border: "none",
        fontSize: "14px",
        fontWeight: 500,
        cursor: "pointer",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        alignItems: "center",
        gap: "8px",
    }

    const arrowStyle = {
        width: "16px",
        height: "16px",
        transition: "transform 0.3s ease",
    }

    return (
        <motion.section
            style={containerStyle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            {showPattern && <div style={patternStyle} />}
            <div style={contentStyle}>
                <div style={textContainerStyle}>
                    <h2 style={headlineStyle}>{headline}</h2>
                    <p style={subheadlineStyle}>{subheadline}</p>
                </div>
                <motion.button
                    style={buttonStyle}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {ctaText}
                    <svg style={arrowStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </motion.button>
            </div>
        </motion.section>
    )
}

HybridCTA.defaultProps = {
    headline: "Free 7-day trial signup",
    subheadline: "Sign up for free 7-day trial with us and experience all of our services for free at Hybrid.",
    ctaText: "Get Started",
    accentColor: "#c8ff00",
    textColor: "#000000",
    patternOpacity: 0.08,
    showPattern: true,
}

addPropertyControls(HybridCTA, {
    headline: {
        title: "Headline",
        type: ControlType.String,
        defaultValue: "Free 7-day trial signup",
    },
    subheadline: {
        title: "Subheadline",
        type: ControlType.String,
        defaultValue: "Sign up for free 7-day trial with us and experience all of our services for free at Hybrid.",
    },
    ctaText: {
        title: "CTA Text",
        type: ControlType.String,
        defaultValue: "Get Started",
    },
    accentColor: {
        title: "Accent Color",
        type: ControlType.Color,
        defaultValue: "#c8ff00",
    },
    textColor: {
        title: "Text Color",
        type: ControlType.Color,
        defaultValue: "#000000",
    },
    patternOpacity: {
        title: "Pattern Opacity",
        type: ControlType.Number,
        defaultValue: 0.08,
        min: 0,
        max: 1,
        step: 0.01,
    },
    showPattern: {
        title: "Show Pattern",
        type: ControlType.Boolean,
        defaultValue: true,
    },
})
