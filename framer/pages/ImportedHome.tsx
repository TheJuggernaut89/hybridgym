// ============================================
// IMPORTED HOME PAGE FOR FRAMER
// Reconstructed from local Global.css (index.css) + Hero.tsx
// ============================================

import { addPropertyControls, ControlType } from "framer"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

/**
 * Imported Home Page
 * Complete page with Global Styles + Hero Section
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight auto
 */
export default function ImportedHome(props) {
    const {
        // Page Settings
        pageBackground,
        fontFamily,
        
        // Navigation
        logoText,
        logoHighlight,
        navItems,
        navCtaText,
        
        // Hero Content
        hoursBadge,
        trustedText,
        headline,
        highlightText,
        subheadline,
        primaryCta,
        secondaryCta,
        heroImageUrl,
        showHeroImage,
        
        // Colors
        accentColor,
        textPrimary,
        textSecondary,
        textMuted,
        borderColor,
    } = props

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Scroll detection for nav
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Parse nav items
    const navLinks = navItems.split(",").map(item => {
        const [name, href] = item.trim().split(":")
        return { name: name?.trim() || "", href: href?.trim() || `#${name?.trim().toLowerCase()}` }
    })

    // Split headline
    const headlineParts = headline.split(highlightText)

    // ============================================
    // GLOBAL STYLES (from Global.css)
    // ============================================
    const globalStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        .imported-home-page {
            font-family: ${fontFamily}, -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: ${pageBackground};
            color: ${textPrimary};
            line-height: 1.5;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        .imported-home-page * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        .imported-home-page ::selection {
            background: ${accentColor};
            color: ${pageBackground};
        }
        
        .imported-home-page button,
        .imported-home-page a {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .imported-home-page button:focus-visible,
        .imported-home-page a:focus-visible {
            outline: 2px solid ${accentColor};
            outline-offset: 2px;
        }
        
        .imported-home-page img {
            background-color: #0f0f0f;
        }
        
        /* Scrollbar */
        .imported-home-page ::-webkit-scrollbar {
            width: 4px;
        }
        .imported-home-page ::-webkit-scrollbar-track {
            background: ${pageBackground};
        }
        .imported-home-page ::-webkit-scrollbar-thumb {
            background: #222;
            border-radius: 2px;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-button { display: block !important; }
        }
        @media (min-width: 769px) {
            .mobile-menu { display: none !important; }
            .mobile-button { display: none !important; }
        }
    `

    // ============================================
    // NAVIGATION STYLES
    // ============================================
    const navStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        backgroundColor: isScrolled ? `${pageBackground}CC` : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
    }

    const navContainerStyle = {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px",
    }

    const navInnerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "80px",
    }

    const logoStyle = {
        fontSize: "20px",
        fontWeight: 600,
        color: textPrimary,
        letterSpacing: "-0.02em",
        textDecoration: "none",
    }

    const logoHighlightStyle = { color: accentColor }

    const navLinkStyle = {
        fontSize: "14px",
        color: textSecondary,
        textDecoration: "none",
        fontWeight: 500,
        transition: "color 0.3s ease",
    }

    const navCtaStyle = {
        padding: "10px 20px",
        backgroundColor: accentColor,
        color: "#000000",
        borderRadius: "9999px",
        fontSize: "14px",
        fontWeight: 500,
        border: "none",
        cursor: "pointer",
    }

    // ============================================
    // HERO SECTION STYLES (from Hero.tsx)
    // ============================================
    const heroSectionStyle = {
        width: "100%",
        minHeight: "100vh",
        backgroundColor: pageBackground,
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

    const heroContentStyle = {
        maxWidth: "896px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
        zIndex: 10,
    }

    const hoursBadgeStyle = {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 16px",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        border: `1px solid ${borderColor}`,
        borderRadius: "9999px",
        marginBottom: "24px",
    }

    const trustedBadgeStyle = {
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
        border: `2px solid ${pageBackground}`,
        marginLeft: "-8px",
    }

    const headlineStyle = {
        fontSize: "clamp(40px, 8vw, 80px)",
        fontWeight: 600,
        color: textPrimary,
        lineHeight: 0.95,
        marginBottom: "32px",
        letterSpacing: "-0.02em",
    }

    const highlightStyle = { color: accentColor }

    const subheadlineStyle = {
        fontSize: "16px",
        color: textMuted,
        maxWidth: "480px",
        margin: "0 auto 40px",
        lineHeight: 1.6,
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
    }

    const secondaryButtonStyle = {
        padding: "14px 32px",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        color: textPrimary,
        borderRadius: "9999px",
        fontSize: "14px",
        fontWeight: 500,
        border: `1px solid ${borderColor}`,
        cursor: "pointer",
    }

    const heroImageStyle = {
        position: "absolute",
        right: 0,
        bottom: 0,
        width: "55%",
        height: "100%",
        objectFit: "cover",
        maskImage: "linear-gradient(to right, transparent 0%, black 50%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 50%)",
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
        backgroundColor: pageBackground,
        zIndex: 50,
        borderLeft: `1px solid ${borderColor}`,
        padding: "96px 24px 24px",
        display: "flex",
        flexDirection: "column" as const,
    }

    return (
        <div className="imported-home-page">
            <style>{globalStyles}</style>
            
            {/* NAVIGATION */}
            <motion.nav
                style={navStyle}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div style={navContainerStyle}>
                    <div style={navInnerStyle}>
                        <a href="#home" style={logoStyle}>
                            {logoText}
                            <span style={logoHighlightStyle}>{logoHighlight}</span>
                        </a>

                        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    style={navLinkStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = textPrimary}
                                    onMouseLeave={(e) => e.currentTarget.style.color = textSecondary}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <motion.button style={navCtaStyle} whileTap={{ scale: 0.98 }}>
                                {navCtaText}
                            </motion.button>
                        </div>

                        <button
                            className="mobile-button"
                            style={{ background: "none", border: "none", color: textPrimary, cursor: "pointer" }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                        />
                        <motion.div
                            style={mobileMenuStyle}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    style={{ ...navLinkStyle, padding: "16px 0", borderBottom: `1px solid ${borderColor}`, fontSize: "18px" }}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                style={{ ...navCtaStyle, marginTop: "32px", textAlign: "center" }}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {navCtaText}
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* HERO SECTION */}
            <section style={heroSectionStyle}>
                <div style={glowStyle} />

                <div style={heroContentStyle}>
                    {/* Hours Badge */}
                    <motion.div
                        style={hoursBadgeStyle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span style={{ color: textSecondary, fontSize: "14px" }}>{hoursBadge}</span>
                    </motion.div>

                    {/* Trusted Badge */}
                    <motion.div
                        style={trustedBadgeStyle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div style={avatarGroupStyle}>
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} style={avatarStyle} />
                            ))}
                        </div>
                        <div style={{ color: accentColor, fontSize: "14px" }}>★★★★★</div>
                        <span style={{ color: textMuted, fontSize: "14px" }}>{trustedText}</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        style={headlineStyle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {headlineParts[0]}
                        <span style={highlightStyle}>{highlightText}</span>
                        {headlineParts[1] || ""}
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
                {showHeroImage && (
                    <motion.img
                        src={heroImageUrl}
                        alt="Gym Training"
                        style={heroImageStyle}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                )}
            </section>
        </div>
    )
}

// ============================================
// FRAMER PROPERTY CONTROLS
// ============================================
ImportedHome.defaultProps = {
    pageBackground: "#0a0a0a",
    fontFamily: "Inter",
    logoText: "Hybrid",
    logoHighlight: "Gym",
    navItems: "Home:#home, Services:#services, Trainers:#trainers, Pricing:#pricing, Contact:#contact",
    navCtaText: "Join Now",
    hoursBadge: "6 a.m - 10 p.m (Mon - Sun)",
    trustedText: "Trusted by 100k+ clients",
    headline: "Transform body and mind at hybrid",
    highlightText: "body and mind",
    subheadline: "With ten years of experience in the health and wellness industry, our fitness solution continues to be a top option throughout the region.",
    primaryCta: "Start Free Trial",
    secondaryCta: "View Programs",
    heroImageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80",
    showHeroImage: true,
    accentColor: "#c8ff00",
    textPrimary: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.5)",
    textMuted: "rgba(255, 255, 255, 0.4)",
    borderColor: "rgba(255, 255, 255, 0.08)",
}

addPropertyControls(ImportedHome, {
    pageBackground: { title: "Page Background", type: ControlType.Color, defaultValue: "#0a0a0a" },
    fontFamily: { title: "Font Family", type: ControlType.String, defaultValue: "Inter" },
    logoText: { title: "Logo Text", type: ControlType.String, defaultValue: "Hybrid" },
    logoHighlight: { title: "Logo Highlight", type: ControlType.String, defaultValue: "Gym" },
    navItems: { title: "Nav Items (Name:href,Name:href)", type: ControlType.String, defaultValue: "Home:#home, Services:#services, Trainers:#trainers, Pricing:#pricing, Contact:#contact" },
    navCtaText: { title: "Nav CTA Text", type: ControlType.String, defaultValue: "Join Now" },
    hoursBadge: { title: "Hours Badge", type: ControlType.String, defaultValue: "6 a.m - 10 p.m (Mon - Sun)" },
    trustedText: { title: "Trusted Text", type: ControlType.String, defaultValue: "Trusted by 100k+ clients" },
    headline: { title: "Headline", type: ControlType.String, defaultValue: "Transform body and mind at hybrid" },
    highlightText: { title: "Highlight Text", type: ControlType.String, defaultValue: "body and mind" },
    subheadline: { title: "Subheadline", type: ControlType.String, defaultValue: "With ten years of experience in the health and wellness industry, our fitness solution continues to be a top option throughout the region." },
    primaryCta: { title: "Primary CTA", type: ControlType.String, defaultValue: "Start Free Trial" },
    secondaryCta: { title: "Secondary CTA", type: ControlType.String, defaultValue: "View Programs" },
    heroImageUrl: { title: "Hero Image URL", type: ControlType.String, defaultValue: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80" },
    showHeroImage: { title: "Show Hero Image", type: ControlType.Boolean, defaultValue: true },
    accentColor: { title: "Accent Color", type: ControlType.Color, defaultValue: "#c8ff00" },
    textPrimary: { title: "Text Primary", type: ControlType.Color, defaultValue: "#ffffff" },
    textSecondary: { title: "Text Secondary", type: ControlType.Color, defaultValue: "rgba(255, 255, 255, 0.5)" },
    textMuted: { title: "Text Muted", type: ControlType.Color, defaultValue: "rgba(255, 255, 255, 0.4)" },
    borderColor: { title: "Border Color", type: ControlType.Color, defaultValue: "rgba(255, 255, 255, 0.08)" },
})
