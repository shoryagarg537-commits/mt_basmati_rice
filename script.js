/* ==================================================
   MT Basmati Rice
   script.js
================================================== */

/* ===========================
   Mobile Navigation
=========================== */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* ===========================
   Product Filter
=========================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        productCards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            } else if (card.classList.contains(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ===========================
   Navbar Shadow on Scroll
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 12px 25px rgba(0,0,0,0.12)";

    } else {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }

});


/* ===========================
   Scroll Reveal Animation
=========================== */

const sections = document.querySelectorAll("section");

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

};

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/* ===========================
   Active Navigation Highlight
=========================== */

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(item => {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + current) {

            item.classList.add("active");

        }

    });

});


/* ===========================
   Smooth Scroll (Backup)
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

console.log("MT Basmati Rice website loaded successfully.");