function myTax() {
    let s = document.getElementById("sal").value;
    let m = document.getElementById("mle").checked;
    let f = document.getElementById("fmle").checked;
    let a = document.getElementById("age").value;

    if (s < 300000) {
        document.getElementById("out").value = (a >= 18 && a < 60) ? m === true ? 8 * (s / 100) : (8 * (s / 100)) - (10 * (8 * (s / 100) / 100)) : (8 * (s / 100)) - (50 * (8 * (s / 100) / 100));
    } else if (s > 300000 && s <= 500000) {
        document.getElementById("out").value = (a >= 18 && a < 60) ? m === true ? 10 * (s / 100) : (10 * (s / 100)) - (10 * (10 * (s / 100) / 100)) : (8 * (s / 100)) - (50 * (8 * (s / 100) / 100));
    } else if (s > 500000 && s <= 800000) {
        document.getElementById("out").value = (a >= 18 && a < 60) ? m === true ? 12 * (s / 100) : (12 * (s / 100)) - (10 * (12 * (s / 100) / 100)) : (8 * (s / 100)) - (50 * (8 * (s / 100) / 100));
    } else if (s > 800000 && s <= 1000000) {
        document.getElementById("out").value = (a >= 18 && a < 60) ? m === true ? 14 * (s / 100) : (14 * (s / 100)) - (10 * (14 * (s / 100) / 100)) : (8 * (s / 100)) - (50 * (8 * (s / 100) / 100));
    } else {
        document.getElementById("out").value = (a >= 18 && a < 60) ? m === true ? 16 * (s / 100) : (16 * (s / 100)) - (10 * (16 * (s / 100) / 100)) : (8 * (s / 100)) - (50 * (8 * (s / 100) / 100));
    }
}


