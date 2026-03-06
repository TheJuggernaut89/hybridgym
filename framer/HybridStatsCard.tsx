// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

/**
 * Hybrid Gym Stats Card
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function HybridStatsCard(props) {
    const {
        value,
        label,
        accentColor,
        backgroundColor,
        borderColor,
        hoverBorderColor,
        enableParallax,
        parallaxOffset,
    } = props

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -parallaxOffset]
    )

    const cardStyle = {
        padding: "32px",
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "16px",
        textAlign: "center",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
    }

    const valueStyle = {
        fontSize: "clamp(32px, 5vw, 48px)",
        fontWeight: 600,
        color: accentColor,
        marginBottom: "8px",
        letterSpacing: "-0.02em",
        fontFamily: "Inter, sans-serif",
    }

    const labelStyle = {
        fontSize: "12px",
        color: "rgba(255, 255, 255, 0.3)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        fontFamily: "Inter, sans-serif",
    }

    const CardContent = () => (
        <motion.div
            ref={ref}
            style={enableParallax ? { ...cardStyle, y } : cardStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: enableParallax ? undefined : 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
                borderColor: hoverBorderColor,
            }}
        >
            <div style={valueStyle}>{value}</div>
            <div style={labelStyle}>{label}</div>
        </motion.div>
    )

    return <CardContent />
}

HybridStatsCard.defaultProps = {
    value: "+100k",
    label: "Clients",
    accentColor: "#c8ff00",
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    borderColor: "rgba(255, 255, 255, 0.05)",
    hoverBorderColor: "rgba(200, 255, 0, 0.2)",
    enableParallax: true,
    parallaxOffset: 50,
}

addPropertyControls(HybridStatsCard, {
    value: {
        title: "Value",
        type: ControlType.String,
        defaultValue: "+100k",
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Clients",
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
    hoverBorderColor: {
        title: "Hover Border",
        type: ControlType.Color,
        defaultValue: "rgba(200, 255, 0, 0.2)",
    },
    enableParallax: {
        title: "Enable Parallax",
        type: ControlType.Boolean,
        defaultValue: true,
    },
    parallaxOffset: {
        title: "Parallax Offset",
        type: ControlType.Number,
        defaultValue: 50,
        min: 0,
        max: 200,
        step: 10,
        hidden: (props) => !props.enableParallax,
    },
})
