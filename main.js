setInterval(changeOrder, 3000);

function changeOrder() {
    const allSlides = document.querySelectorAll(".single-slide");
    const previous = "1";
    const current = "2";
    const next = "3";

    for (const slide of allSlides) {
        const order = slide.getAttribute("data-order");

        switch (order) {
            case current:
                slide.setAttribute("data-order", previous);
                break;
            case next:
                slide.setAttribute("data-order", current);
                break;
            case previous:
                slide.setAttribute("data-order", next);
                break;
        }
    }
}