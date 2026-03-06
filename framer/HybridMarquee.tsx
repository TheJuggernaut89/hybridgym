// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"

/**
 * Hybrid Gym Services Marquee
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight auto
 */
export default function HybridMarquee(props) {
    const {
        items,
        textColor,
        dotColor,
        backgroundColor,
        borderColor,
        speed,
        fontSize,
    } = props

    const itemList = items.split(",").map(item => item.trim())

    const containerStyle = {
        width: "100%",
        padding: "20px 0",
        backgroundColor: backgroundColor,
        borderTop: `1px solid ${borderColor}`,
        borderBottom: `1px solid ${borderColor}`,
        overflow: "hidden",
    }

    const marqueeStyle = {
        display: "flex",
        gap: "48px",
        whiteSpace: "nowrap",
    }

    const itemStyle = {
        display: "flex",
        alignItems: "center",
        gap: "48px",
    }

    const textStyle = {
        fontSize: fontSize,
        fontWeight: 500,
        color: textColor,
        textTransform: "lowercase" as const,
        letterSpacing: "-0.02em",
        fontFamily: "Inter, sans-serif",
    }

    const dotStyle = {
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        backgroundColor: dotColor,
        flexShrink: 0,
    }

    return (
        <section style={containerStyle}>
            <motion.div
                style={marqueeStyle}
                animate={{ x: [0, -2000] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {[...itemList, ...itemList, ...itemList, ...itemList, ...itemList, ...itemList].map((item, index) => (
                    <div key={index} style={itemStyle}>
                        <span style={textStyle}>{item}</span>
                        <div style={dotStyle} />
                    </div>
                ))}
            </motion.div>
        </section>
    )
}

HybridMarquee.defaultProps = {
    items: "Gym, yoga, Kickfit, group-x, Swimming",
    textColor: "rgba(255, 255, 255, 0.08)",
    dotColor: "rgba(255, 255, 255, 0.15)",
    backgroundColor: "#0a0a0a",
    borderColor: "rgba(255, 255, 255, 0.05)",
    speed: 30,
    fontSize: "clamp(36px, 6vw, 72px)",
}

addPropertyControls(HybridMarquee, {
    items: {
        title: "Items (comma separated)",
        type: ControlType.String,
        defaultValue: "Gym, yoga, Kickfit, group-x, Swimming",
    },
    textColor: {
        title: "Text Color",
        type: ControlType.Color,
        defaultValue: "rgba(255, 255, 255, 0.08)",
    },
    dotColor: {
        title: "Dot Color",
        type: ControlType.Color,
        defaultValue: "rgba(255, 255, 255, 0.15)",
    },
    backgroundColor: {
        title: "Background",
        type: ControlType.Color,
        defaultValue: "#0a0a0a",
    },
    borderColor: {
        title: "Border",
        type: ControlType.Color,
        defaultValue: "rgba(255, 255, 255, 0.05)",
    },
    speed: {
        title: "Animation Speed (s)",
        type: ControlType.Number,
        defaultValue: 30,
        min: 10,
        max: 60,
        step: 5,
    },
    fontSize: {
        title: "Font Size",
        type: ControlType.String,
        defaultValue: "clamp(36px, 6vw, 72px)",
    },
})
