/* LOCAL STORAGE COUNTER */

let reviews = Number(localStorage.getItem("reviews")) || 0;

reviews++;

localStorage.setItem("reviews", reviews);

document.querySelector("#reviewCount").textContent = reviews;

/* FOOTER */

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;