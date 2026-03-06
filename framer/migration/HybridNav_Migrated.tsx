// MIGRATED FROM: src/components/Navigation.jsx
// MCP Migration: Navigation Bar for Framer

import { addPropertyControls, ControlType } from "framer"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

/**
 * Hybrid Gym Navigation - MIGRATED
 * Original: src/components/Navigation.jsx
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight auto
 */
export default function HybridNav_Migrated(props) {
    const {
        logoText,
        logoHighlight,
        navItems,
        ctaText,
        accentColor,
        backgroundColor,
        scrollThreshold,
    } = props

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > scrollThreshold)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [scrollThreshold])

    const navLinks = navItems.split(",").map(item => {
        const [name, href] = item.trim().split(":")
        return { name: name.trim(), href: href ? href.trim() : `#${name.trim().toLowerCase()}` }
    })

    const navStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        backgroundColor: isScrolled ? `${backgroundColor}CC` : "transparent", // CC = 80% opacity
        backdropFilter: isScrolled ? "blur(20px)" : "none",
    }

    const containerStyle = {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px",
    }

    const innerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "80px",
    }

    const logoStyle = {
        fontSize: "20px",
        fontWeight: 600,
        color: "#ffffff",
        letterSpacing: "-0.02em",
        fontFamily: "Inter, sans-serif",
        textDecoration: "none",
    }

    const logoHighlightStyle = {
        color: accentColor,
    }

    const desktopNavStyle = {
        display: "flex",
        alignItems: "center",
        gap: "32px",
    }

    const navLinkStyle = {
        fontSize: "14px",
        color: "rgba(255, 255, 255, 0.5)",
        textDecoration: "none",
        fontWeight: 500,
        fontFamily: "Inter, sans-serif",
        transition: "color 0.3s ease",
    }

    const ctaButtonStyle = {
        padding: "10px 20px",
        backgroundColor: accentColor,
        color: "#000000",
        borderRadius: "9999px",
        fontSize: "14px",
        fontWeight: 500,
        border: "none",
        cursor: "pointer",
        fontFamily: "Inter, sans-serif",
    }

    const mobileButtonStyle = {
        display: "none",
        background: "none",
        border: "none",
        color: "#ffffff",
        cursor: "pointer",
        padding: "8px",
    }

    const mobileMenuOverlayStyle = {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        backdropFilter: "blur(20px)",
        zIndex: 40,
    }

    const mobileMenuStyle = {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: "300px",
        backgroundColor: backgroundColor,
        zIndex: 50,
        borderLeft: "1px solid rgba(255, 255, 255, 0.05)",
        padding: "96px 24px 24px",
        display: "flex",
        flexDirection: "column",
    }

    const mobileLinkStyle = {
        fontSize: "18px",
        color: "rgba(255, 255, 255, 0.6)",
        textDecoration: "none",
        fontWeight: 500,
        fontFamily: "Inter, sans-serif",
        padding: "16px 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    }

    const mobileCtaStyle = {
        marginTop: "32px",
        padding: "16px 24px",
        backgroundColor: accentColor,
        color: "#000000",
        borderRadius: "9999px",
        fontSize: "16px",
        fontWeight: 500,
        border: "none",
        cursor: "pointer",
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
    }

    // Responsive styles via CSS media query string
    const responsiveStyles = `
        @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-button { display: block !important; }
        }
        @media (min-width: 769px) {
            .mobile-menu { display: none !important; }
        }
    `

    return (
        <>
            <style>{responsiveStyles}</style>
            <motion.nav
                style={navStyle}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div style={containerStyle}>
                    <div style={innerStyle}>
                        {/* Logo */}
                        <a href="#home" style={logoStyle}>
                            {logoText}
                            <span style={logoHighlightStyle}>{logoHighlight}</span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="desktop-nav" style={desktopNavStyle}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    style={navLinkStyle}
                                    onMouseEnter={(e) => e.target.style.color = "#ffffff"}
                                    onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.5)"}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <motion.button
                                style={ctaButtonStyle}
                                whileHover={{ backgroundColor: "#d4ff33" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {ctaText}
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-button"
                            style={mobileButtonStyle}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12"/>
                                    <line x1="3" y1="6" x2="21" y2="6"/>
                                    <line x1="3" y1="18" x2="21" y2="18"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            style={mobileMenuOverlayStyle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mobile-menu"
                        />
                        <motion.div
                            style={mobileMenuStyle}
                            className="mobile-menu"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    style={mobileLinkStyle}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onMouseEnter={(e) => e.target.style.color = accentColor}
                                    onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.6)"}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                style={mobileCtaStyle}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {ctaText}
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

HybridNav_Migrated.defaultProps = {
    logoText: "Hybrid",
    logoHighlight: "Gym",
    navItems: "Home:#home, Services:#services, Trainers:#trainers, Pricing:#membership, Contact:#contact",
    ctaText: "Join Now",
    accentColor: "#c8ff00",
    backgroundColor: "#0a0a0a",
    scrollThreshold: 50,
}

addPropertyControls(HybridNav_Migrated, {
    logoText: {
        title: "Logo Text",
        type: ControlType.String,
        defaultValue: "Hybrid",
    },
    logoHighlight: {
        title: "Logo Highlight",
        type: ControlType.String,
        defaultValue: "Gym",
    },
    navItems: {
        title: "Nav Items (format: Name:href,Name:href)",
        type: ControlType.String,
        defaultValue: "Home:#home, Services:#services, Trainers:#trainers, Pricing:#membership, Contact:#contact",
    },
    ctaText: {
        title: "CTA Button",
        type: ControlType.String,
        defaultValue: "Join Now",
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
    scrollThreshold: {
        title: "Scroll Threshold (px)",
        type: ControlType.Number,
        defaultValue: 50,
        min: 0,
        max: 500,
        step: 10,
    },
})
