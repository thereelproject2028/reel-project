/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursor = document.querySelector(".custom-cursor, .cursor");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

    const interactive = document.querySelectorAll(
        "a, button, input, textarea"
    );

    interactive.forEach((item) => {

        item.addEventListener("mouseenter", () => {
            cursor.classList.add("hover");
        });

        item.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
        });

    });

}


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.classList?.remove;
                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach((element) => {

    observer.observe(element);

});


/* ==========================================
   CLICK SPARKLES
========================================== */

document.addEventListener("click", (e) => {

    const symbols = ["✦", "✧", "♡", "✿"];

    const sparkle = document.createElement("span");

    sparkle.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    sparkle.style.position = "fixed";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.color = "#8c2c45";
    sparkle.style.fontSize = "24px";

    sparkle.style.zIndex = "9999";

    sparkle.style.animation = "sparkleFloat .8s ease-out forwards";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 800);

});


/* ==========================================
   PORTFOLIO PLACEHOLDER
========================================== */

document.querySelectorAll(".project").forEach((project) => {

    project.addEventListener("click", () => {

        const title =
            project.dataset.title || "Coming Soon";

        const description =
            project.dataset.description ||
            "More portfolio projects will be added soon!";

        alert(`${title}\n\n${description}`);

    });

});
