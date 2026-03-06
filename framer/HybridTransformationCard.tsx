// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

/**
 * Hybrid Gym Transformation Card
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight auto
 */
export default function HybridTransformationCard(props) {
    const {
        name,
        age,
        duration,
        beforeWeight,
        afterWeight,
        beforeBodyFat,
        afterBodyFat,
        imageUrl,
        accentColor,
        backgroundColor,
        borderColor,
    } = props

    const [activeTab, setActiveTab] = useState("before")

    const containerStyle = {
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "900px",
        margin: "0 auto",
    }

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "32px",
        alignItems: "center",
    }

    const imageContainerStyle = {
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
    }

    const imageStyle = {
        width: "100%",
        height: "350px",
        objectFit: "cover",
        borderRadius: "16px",
    }

    const durationBadgeStyle = {
        position: "absolute",
        top: "16px",
        left: "16px",
        backgroundColor: accentColor,
        color: "#000000",
        padding: "8px 16px",
        borderRadius: "9999px",
        fontSize: "14px",
        fontWeight: 500,
        fontFamily: "Inter, sans-serif",
    }

    const infoStyle = {
        display: "flex",
        gap: "32px",
        marginBottom: "24px",
    }

    const infoItemStyle = {
        display: "flex",
        flexDirection: "column",
    }

    const infoLabelStyle = {
        fontSize: "12px",
        color: "rgba(255, 255, 255, 0.3)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        marginBottom: "4px",
        fontFamily: "Inter, sans-serif",
    }

    const infoValueStyle = {
        fontSize: "24px",
        fontWeight: 500,
        color: "#ffffff",
        fontFamily: "Inter, sans-serif",
    }

    const statsGridStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        marginBottom: "24px",
    }

    const statCardStyle = (isActive) => ({
        padding: "20px",
        backgroundColor: isActive ? `${accentColor}14` : "rgba(255, 255, 255, 0.03)",
        border: `1px solid ${isActive ? accentColor + "33" : "rgba(255, 255, 255, 0.05)"}`,
        borderRadius: "16px",
        cursor: "pointer",
    })

    const statLabelStyle = (isActive) => ({
        fontSize: "12px",
        color: isActive ? accentColor : "rgba(255, 255, 255, 0.3)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        marginBottom: "16px",
        fontFamily: "Inter, sans-serif",
    })

    const statValueStyle = {
        display: "flex",
        alignItems: "baseline",
        gap: "4px",
        marginBottom: "4px",
    }

    const statNumberStyle = (isActive) => ({
        fontSize: "32px",
        fontWeight: 500,
        color: isActive ? accentColor : "#ffffff",
        fontFamily: "Inter, sans-serif",
    })

    const statUnitStyle = {
        fontSize: "14px",
        color: "rgba(255, 255, 255, 0.3)",
        fontFamily: "Inter, sans-serif",
    }

    const statNameStyle = {
        fontSize: "12px",
        color: "rgba(255, 255, 255, 0.3)",
        fontFamily: "Inter, sans-serif",
    }

    const tabLabelsStyle = {
        display: "flex",
        gap: "24px",
        marginBottom: "16px",
    }

    const tabLabelStyle = (isActive) => ({
        fontSize: "14px",
        color: isActive ? accentColor : "rgba(255, 255, 255, 0.3)",
        cursor: "pointer",
        fontFamily: "Inter, sans-serif",
    })

    return (
        <motion.div
            style={containerStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <div style={gridStyle}>
                {/* Image */}
                <div style={imageContainerStyle}>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={imageUrl}
                            src={imageUrl}
                            alt={name}
                            style={imageStyle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatePresence>
                    <div style={durationBadgeStyle}>{duration}</div>
                </div>

                {/* Stats */}
                <div>
                    {/* Name & Age */}
                    <div style={infoStyle}>
                        <div style={infoItemStyle}>
                            <span style={infoLabelStyle}>Name:</span>
                            <span style={infoValueStyle}>{name}</span>
                        </div>
                        <div style={{ width: "1px", height: "48px", backgroundColor: "rgba(255, 255, 255, 0.1)" }} />
                        <div style={infoItemStyle}>
                            <span style={infoLabelStyle}>Age:</span>
                            <span style={infoValueStyle}>{age}</span>
                        </div>
                    </div>

                    {/* Before & After Stats */}
                    <div style={statsGridStyle}>
                        {/* Before */}
                        <motion.div
                            style={statCardStyle(activeTab === "before")}
                            onClick={() => setActiveTab("before")}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div style={statLabelStyle(activeTab === "before")}>Before</div>
                            <div style={statValueStyle}>
                                <span style={statNumberStyle(activeTab === "before")}>{beforeWeight}</span>
                                <span style={statUnitStyle}>kg</span>
                            </div>
                            <div style={statNameStyle}>Weight</div>
                            <div style={{ ...statValueStyle, marginTop: "12px" }}>
                                <span style={statNumberStyle(activeTab === "before")}>{beforeBodyFat}</span>
                                <span style={statUnitStyle}>%</span>
                            </div>
                            <div style={statNameStyle}>Body fat</div>
                        </motion.div>

                        {/* After */}
                        <motion.div
                            style={statCardStyle(activeTab === "after")}
                            onClick={() => setActiveTab("after")}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div style={statLabelStyle(activeTab === "after")}>After</div>
                            <div style={statValueStyle}>
                                <span style={statNumberStyle(activeTab === "after")}>{afterWeight}</span>
                                <span style={{ ...statUnitStyle, color: accentColor + "80" }}>kg</span>
                            </div>
                            <div style={statNameStyle}>Weight</div>
                            <div style={{ ...statValueStyle, marginTop: "12px" }}>
                                <span style={statNumberStyle(activeTab === "after")}>{afterBodyFat}</span>
                                <span style={{ ...statUnitStyle, color: accentColor + "80" }}>%</span>
                            </div>
                            <div style={statNameStyle}>Body fat</div>
                        </motion.div>
                    </div>

                    {/* Tab Labels */}
                    <div style={tabLabelsStyle}>
                        <span style={tabLabelStyle(activeTab === "before")} onClick={() => setActiveTab("before")}>Before</span>
                        <span style={tabLabelStyle(activeTab === "after")} onClick={() => setActiveTab("after")}>after</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

HybridTransformationCard.defaultProps = {
    name: "David",
    age: 32,
    duration: "9 weeks",
    beforeWeight: "84",
    afterWeight: "75",
    beforeBodyFat: "27",
    afterBodyFat: "15",
    imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    accentColor: "#c8ff00",
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    borderColor: "rgba(255, 255, 255, 0.05)",
}

addPropertyControls(HybridTransformationCard, {
    name: {
        title: "Name",
        type: ControlType.String,
        defaultValue: "David",
    },
    age: {
        title: "Age",
        type: ControlType.Number,
        defaultValue: 32,
    },
    duration: {
        title: "Duration",
        type: ControlType.String,
        defaultValue: "9 weeks",
    },
    beforeWeight: {
        title: "Before Weight (kg)",
        type: ControlType.String,
        defaultValue: "84",
    },
    afterWeight: {
        title: "After Weight (kg)",
        type: ControlType.String,
        defaultValue: "75",
    },
    beforeBodyFat: {
        title: "Before Body Fat (%)",
        type: ControlType.String,
        defaultValue: "27",
    },
    afterBodyFat: {
        title: "After Body Fat (%)",
        type: ControlType.String,
        defaultValue: "15",
    },
    imageUrl: {
        title: "Image URL",
        type: ControlType.String,
        defaultValue: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
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
})
