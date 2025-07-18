let input = document.querySelector("input");
let qrdiv = document.querySelector(".qrdiv");
let generateqr = document.querySelector(".generateqr");
let downloadqr = document.querySelector(".downloadqr");

let lastQRcode = null;

function genqr(text) {
    qrdiv.innerHTML = "";

    if (text.trim() === "") {
        qrdiv.innerText = "Please enter some text or URL.";
        return;
    }
    let qrcode = new QRCode(qrdiv, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    lastQRcode = qrcode;
}
generateqr.onclick = () => {
    genqr(input.value);
};
downloadqr.onclick = () => {
    let img = qrdiv.querySelector("img");

    if (!img) {
        alert("Please generate a QR code first.");
        return;
    }
    let link = document.createElement("a");
    link.href = img.src;
    link.download = "QR-by-AK.png";
    link.click();
};