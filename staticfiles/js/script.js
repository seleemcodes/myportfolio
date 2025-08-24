// Make sure the script runs only after the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Script is running!");

    // Smooth scrolling
    gsap.registerPlugin(ScrollTrigger);

    // ========== CURSOR INTERACTIONS ==========
    const cursor = document.querySelector(".cursor");
    if (!cursor) {
        console.error("❌ Cursor element is missing! Make sure <div class='cursor'></div> is in the HTML.");
        return;
    }

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: "power2.out"
        });
    });

    document.addEventListener("mousedown", () => {
        gsap.to(cursor, { scale: 1.5, duration: 0.1 });
    });

    document.addEventListener("mouseup", () => {
        gsap.to(cursor, { scale: 1, duration: 0.1 });
    });

    document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            gsap.to(cursor, { scale: 2, backgroundColor: "rgba(255, 255, 255, 0.8)" });
        });
        el.addEventListener("mouseleave", () => {
            gsap.to(cursor, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.5)" });
        });
    });

    // ========== PAGE TRANSITIONS ==========
    gsap.from(".hero", { opacity: 0, y: 50, duration: 1, ease: "power2.out" });

    // ========== NAVIGATION LINK ANIMATIONS ==========
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, { scale: 1.1, duration: 0.2 });
        });
        link.addEventListener("mouseleave", () => {
            gsap.to(link, { scale: 1, duration: 0.2 });
        });
    });

    // ========== SMOOTH PAGE SCROLLING ==========
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                gsap.to(window, { duration: 1, scrollTo: target, ease: "power2.out" });
            }
        });
    });

    console.log("✅ Everything loaded successfully!");
});
