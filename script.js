
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        alert("Thank you! Your message has been received.");
        form.reset();
    });
});
