// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"

/**
 * Hybrid Gym Service Card
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function HybridServiceCard(props) {
    const {
        title,
        description,
        iconName,
        accentColor,
        backgroundColor,
        borderColor,
        hoverBorderColor,
    } = props

    const icons = {
        Dumbbell: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 4-4"/><path d="m10 21 4-4"/>
            </svg>
        ),
        Heart: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
            </svg>
        ),
        Flame: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>
            </svg>
        ),
        Users: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        ),
        Waves: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
            </svg>
        ),
    }

    const cardStyle = {
        padding: "24px",
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "16px",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
    }

    const iconContainerStyle = {
        width: "48px",
        height: "48px",
        backgroundColor: `${accentColor}14`, // 8% opacity
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
        color: accentColor,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    }

    const titleStyle = {
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: 500,
        marginBottom: "8px",
        fontFamily: "Inter, sans-serif",
    }

    const descriptionStyle = {
        color: "rgba(255, 255, 255, 0.3)",
        fontSize: "14px",
        lineHeight: 1.6,
        fontFamily: "Inter, sans-serif",
    }

    return (
        <motion.div
            style={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                borderColor: hoverBorderColor,
            }}
        >
            <motion.div
                style={iconContainerStyle}
                whileHover={{ backgroundColor: `${accentColor}1F` }} // 12% opacity
            >
                {icons[iconName]}
            </motion.div>
            <h3 style={titleStyle}>{title}</h3>
            <p style={descriptionStyle}>{description}</p>
        </motion.div>
    )
}

HybridServiceCard.defaultProps = {
    title: "MMA Training",
    description: "Complete mixed martial arts training combining striking, grappling, and submissions.",
    iconName: "Dumbbell",
    accentColor: "#c8ff00",
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    borderColor: "rgba(255, 255, 255, 0.05)",
    hoverBorderColor: "rgba(255, 255, 255, 0.1)",
}

addPropertyControls(HybridServiceCard, {
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "MMA Training",
    },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: "Complete mixed martial arts training combining striking, grappling, and submissions.",
    },
    iconName: {
        title: "Icon",
        type: ControlType.Enum,
        defaultValue: "Dumbbell",
        options: ["Dumbbell", "Heart", "Flame", "Users", "Waves"],
        optionTitles: ["Dumbbell", "Heart", "Flame", "Users", "Waves"],
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
        defaultValue: "rgba(255, 255, 255, 0.1)",
    },
})
