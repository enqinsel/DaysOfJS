function getAttributes() {
    let w3r = document.getElementById("w3r")
    alert(`
    Href:${w3r.href}
    Hreflang: ${w3r.hreflang}
    Rel: ${w3r.rel}
    Target: ${w3r.target}
    Type Attributes: ${w3r.type}`);
}