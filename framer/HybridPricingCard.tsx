// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"

/**
 * Hybrid Gym Pricing Card
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function HybridPricingCard(props) {
    const {
        planName,
        price,
        billingPeriod,
        features,
        isPopular,
        accentColor,
        backgroundColor,
        borderColor,
        ctaText,
    } = props

    const cardStyle = {
        padding: "24px",
        backgroundColor: isPopular ? accentColor : backgroundColor,
        border: `1px solid ${isPopular ? accentColor : borderColor}`,
        borderRadius: "16px",
        transition: "all 0.3s ease",
    }

    const planNameStyle = {
        fontSize: "18px",
        fontWeight: 500,
        color: isPopular ? "#000000" : "#ffffff",
        marginBottom: "24px",
        fontFamily: "Inter, sans-serif",
    }

    const priceContainerStyle = {
        display: "flex",
        alignItems: "baseline",
        gap: "4px",
        marginBottom: "32px",
    }

    const priceStyle = {
        fontSize: "40px",
        fontWeight: 600,
        color: isPopular ? "#000000" : "#ffffff",
        letterSpacing: "-0.02em",
        fontFamily: "Inter, sans-serif",
    }

    const periodStyle = {
        fontSize: "14px",
        color: isPopular ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.4)",
        fontFamily: "Inter, sans-serif",
    }

    const featuresListStyle = {
        listStyle: "none",
        padding: 0,
        margin: "0 0 32px 0",
        display: "flex",
        flexDirection: "column" as const,
        gap: "12px",
    }

    const featureItemStyle = {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    }

    const checkIconStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: isPopular ? "rgba(0, 0, 0, 0.1)" : `${accentColor}1A`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    }

    const checkMarkStyle = {
        width: "10px",
        height: "10px",
        borderLeft: `2px solid ${isPopular ? "#000000" : accentColor}`,
        borderBottom: `2px solid ${isPopular ? "#000000" : accentColor}`,
        transform: "rotate(-45deg) translate(1px, -1px)",
    }

    const featureTextStyle = {
        fontSize: "14px",
        color: isPopular ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.4)",
        fontFamily: "Inter, sans-serif",
    }

    const buttonStyle = {
        width: "100%",
        padding: "12px",
        backgroundColor: isPopular ? "#000000" : accentColor,
        color: isPopular ? accentColor : "#000000",
        borderRadius: "9999px",
        border: "none",
        fontSize: "14px",
        fontWeight: 500,
        cursor: "pointer",
        fontFamily: "Inter, sans-serif",
    }

    const featureArray = features.split("\n").filter(f => f.trim())

    return (
        <motion.div
            style={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
        >
            <h3 style={planNameStyle}>{planName}</h3>
            <div style={priceContainerStyle}>
                <span style={priceStyle}>${price}</span>
                <span style={periodStyle}>/{billingPeriod}</span>
            </div>
            <ul style={featuresListStyle}>
                {featureArray.map((feature, index) => (
                    <li key={index} style={featureItemStyle}>
                        <div style={checkIconStyle}>
                            <div style={checkMarkStyle} />
                        </div>
                        <span style={featureTextStyle}>{feature}</span>
                    </li>
                ))}
            </ul>
            <motion.button
                style={buttonStyle}
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
            >
                {ctaText}
            </motion.button>
        </motion.div>
    )
}

HybridPricingCard.defaultProps = {
    planName: "Gym",
    price: "24",
    billingPeriod: "month",
    features: "Use the gym equipment\nUse steam room\nUse the shower\nUse the locker",
    isPopular: false,
    accentColor: "#c8ff00",
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    borderColor: "rgba(255, 255, 255, 0.05)",
    ctaText: "Get Started",
}

addPropertyControls(HybridPricingCard, {
    planName: {
        title: "Plan Name",
        type: ControlType.String,
        defaultValue: "Gym",
    },
    price: {
        title: "Price",
        type: ControlType.String,
        defaultValue: "24",
    },
    billingPeriod: {
        title: "Billing Period",
        type: ControlType.String,
        defaultValue: "month",
    },
    features: {
        title: "Features (one per line)",
        type: ControlType.String,
        defaultValue: "Use the gym equipment\nUse steam room\nUse the shower\nUse the locker",
        displayTextArea: true,
    },
    isPopular: {
        title: "Popular Plan",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    accentColor: {
        title: "Accent Color",
        type: ControlType.Color,
        defaultValue: "#c8ff00",
    },
    backgroundColor: {
        title: "Background",
        type: ControlType.Color,
        defaultValue: "rgba(255, 255, 255, 0.02)",
    },
    borderColor: {
        title: "Border",
        type: ControlType.Color,
        defaultValue: "rgba(255, 255, 255, 0.05)",
    },
    ctaText: {
        title: "CTA Text",
        type: ControlType.String,
        defaultValue: "Get Started",
    },
})
