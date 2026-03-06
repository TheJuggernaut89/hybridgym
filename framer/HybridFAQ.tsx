// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

/**
 * Hybrid Gym FAQ Item
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function HybridFAQ(props) {
    const {
        question,
        answer,
        isOpenDefault,
        accentColor,
        backgroundColor,
        borderColor,
        activeBorderColor,
    } = props

    const [isOpen, setIsOpen] = useState(isOpenDefault)

    const containerStyle = {
        border: `1px solid ${isOpen ? activeBorderColor : borderColor}`,
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: isOpen ? "rgba(255, 255, 255, 0.02)" : "transparent",
        transition: "all 0.3s ease",
    }

    const buttonStyle = {
        width: "100%",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left" as const,
    }

    const questionStyle = {
        fontSize: "14px",
        fontWeight: 500,
        color: "#ffffff",
        paddingRight: "16px",
        fontFamily: "Inter, sans-serif",
    }

    const iconContainerStyle = {
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        backgroundColor: isOpen ? accentColor : "rgba(255, 255, 255, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "all 0.3s ease",
    }

    const iconStyle = {
        width: "12px",
        height: "12px",
        position: "relative" as const,
    }

    const lineStyle = (isHorizontal: boolean) => ({
        position: "absolute" as const,
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) ${isHorizontal && isOpen ? "rotate(90deg)" : ""}`,
        width: isHorizontal ? "2px" : "8px",
        height: isHorizontal ? "8px" : "2px",
        backgroundColor: isOpen ? "#000000" : "#ffffff",
        transition: "all 0.3s ease",
    })

    const answerContainerStyle = {
        overflow: "hidden",
    }

    const answerStyle = {
        padding: "0 20px 20px",
        fontSize: "14px",
        color: "rgba(255, 255, 255, 0.4)",
        lineHeight: 1.6,
        fontFamily: "Inter, sans-serif",
    }

    return (
        <motion.div
            style={containerStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <button style={buttonStyle} onClick={() => setIsOpen(!isOpen)}>
                <span style={questionStyle}>{question}</span>
                <div style={iconContainerStyle}>
                    <div style={iconStyle}>
                        <div style={lineStyle(false)} />
                        <div style={lineStyle(true)} />
                    </div>
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        style={answerContainerStyle}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div style={answerStyle}>{answer}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

HybridFAQ.defaultProps = {
    question: "I need consultation about the prices of Hybrid's services?",
    answer: "We offer flexible membership options starting from $24/month. Our Gym plan is perfect for beginners, while our Full Services and Personal Training plans offer additional benefits. Contact us for a free consultation.",
    isOpenDefault: false,
    accentColor: "#c8ff00",
    borderColor: "rgba(255, 255, 255, 0.05)",
    activeBorderColor: "rgba(200, 255, 0, 0.3)",
}

addPropertyControls(HybridFAQ, {
    question: {
        title: "Question",
        type: ControlType.String,
        defaultValue: "I need consultation about the prices of Hybrid's services?",
    },
    answer: {
        title: "Answer",
        type: ControlType.String,
        defaultValue: "We offer flexible membership options starting from $24/month. Our Gym plan is perfect for beginners, while our Full Services and Personal Training plans offer additional benefits. Contact us for a free consultation.",
        displayTextArea: true,
    },
    isOpenDefault: {
        title: "Open by Default",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    accentColor: {
        title: "Accent Color",
        type: ControlType.Color,
        defaultValue: "#c8ff00",
    },
    borderColor: {
        title: "Border",
        type: ControlType.Color,
        defaultValue: "rgba(255, 255, 255, 0.05)",
    },
    activeBorderColor: {
        title: "Active Border",
        type: ControlType.Color,
        defaultValue: "rgba(200, 255, 0, 0.3)",
    },
})
