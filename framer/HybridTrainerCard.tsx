// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"

/**
 * Hybrid Gym Trainer Card
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function HybridTrainerCard(props) {
    const {
        name,
        role,
        imageUrl,
        accentColor,
    } = props

    const cardStyle = {
        position: "relative" as const,
        borderRadius: "16px",
        overflow: "hidden",
        aspectRatio: "3/4",
        cursor: "pointer",
    }

    const imageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover" as const,
    }

    const gradientOverlayStyle = {
        position: "absolute" as const,
        bottom: 0,
        left: 0,
        right: 0,
        height: "50%",
        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
    }

    const contentStyle = {
        position: "absolute" as const,
        bottom: 0,
        left: 0,
        right: 0,
        padding: "20px",
    }

    const nameStyle = {
        fontSize: "18px",
        fontWeight: 500,
        color: "#ffffff",
        marginBottom: "4px",
        fontFamily: "Inter, sans-serif",
    }

    const roleStyle = {
        fontSize: "14px",
        color: accentColor,
        fontFamily: "Inter, sans-serif",
    }

    return (
        <motion.div
            style={cardStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
        >
            <motion.img
                src={imageUrl}
                alt={name}
                style={imageStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
            <div style={gradientOverlayStyle} />
            <div style={contentStyle}>
                <h3 style={nameStyle}>{name}</h3>
                <p style={roleStyle}>{role}</p>
            </div>
        </motion.div>
    )
}

HybridTrainerCard.defaultProps = {
    name: "Alex Thompson",
    role: "Head MMA Coach",
    imageUrl: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop",
    accentColor: "#c8ff00",
}

addPropertyControls(HybridTrainerCard, {
    name: {
        title: "Name",
        type: ControlType.String,
        defaultValue: "Alex Thompson",
    },
    role: {
        title: "Role",
        type: ControlType.String,
        defaultValue: "Head MMA Coach",
    },
    imageUrl: {
        title: "Image URL",
        type: ControlType.String,
        defaultValue: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop",
    },
    accentColor: {
        title: "Accent Color",
        type: ControlType.Color,
        defaultValue: "#c8ff00",
    },
})
