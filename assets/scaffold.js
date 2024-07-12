const domain = "rdap.org";

const scheme = "https://";
const assetBase = scheme + "about." + domain + "/assets/";
const iconURL = assetBase + "/icon.png";

const links = {
    "Home":                 scheme + "about." + domain,
    "Web Client":           scheme + "client." + domain,
    "Deployment Dashboard": scheme + "deployment." + domain,
    "Validator":            scheme + "validator." + domain,
    "GitHub":               "https://github.com/rdap-org",
    "Feedback":             "mailto:feedback@rdap.org",
};

const meta = document.head.appendChild(document.createElement("meta"));
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1");

const script = document.head.appendChild(document.createElement("script"));
script.setAttribute("src", assetBase + "bootstrap.bundle.js");

const iconLink = document.head.appendChild(document.createElement("link"));
iconLink.setAttribute("rel", "shortcut icon");
iconLink.setAttribute("href", iconURL);

const cssLink = document.head.appendChild(document.createElement("link"));
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("href", assetBase + "/bootstrap.min.css");

const nav = document.body.insertBefore(document.createElement("nav"), document.body.firstChild);
nav.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "shadow-sm");
nav.style.setProperty("padding", "0.25em 1em");

const titleImage = nav.appendChild(document.createElement("img"));
titleImage.classList.add("navbar-brand");
titleImage.style.setProperty("height", "2em");
titleImage.setAttribute("src", iconURL);
titleImage.setAttribute("alt", "[" + domain.toUpperCase() + "]");

const titleLink = nav.appendChild(document.createElement("a"));
titleLink.classList.add("navbar-brand");
titleLink.setAttribute("href", links.Home);

const titleSpan = titleLink.appendChild(document.createElement("span"));
titleSpan.classList.add("text-white", "font-weight-bold");
titleSpan.style.setProperty("font-size", "larger");
titleSpan.appendChild(document.createTextNode("RDAP.ORG"));

const navButton = nav.appendChild(document.createElement("button"));
navButton.classList.add("navbar-toggler");
navButton.setAttribute("type", "button");
navButton.setAttribute("data-bs-toggle", "collapse");
navButton.setAttribute("data-bs-target", "#navbar1");
navButton.setAttribute("aria-controls", "navbar1");
navButton.setAttribute("aria-expanded", false);
navButton.setAttribute("aria-label", "Toggle navigation");
navButton.appendChild(document.createElement("span")).classList.add("navbar-toggler-icon");

const navBar = nav.appendChild(document.createElement("div"));
navBar.classList.add("collapse", "navbar-collapse");
navBar.id = "navbar1";

const navUl = navBar.appendChild(document.createElement("ul"));
navUl.classList.add("navbar-nav", "mr-auto", "mt-2", "mt-lg-0")

for (const [title, href] of Object.entries(links)) {
    const li = navUl.appendChild(document.createElement("li"));
    li.classList.add("nav-item");

    const a = li.appendChild(document.createElement("a"));
    a.classList.add("nav-link");
    if (window.location.origin.startsWith(href)) a.classList.add("active");
    a.setAttribute("href", href);

    a.appendChild(document.createTextNode(title));
}

document.body.insertBefore(document.createElement("br"), nav.nextSibling);

const footer = document.body.appendChild(document.createElement("footer"));
footer.appendChild(document.createTextNode("Copyright " + (new Date).getFullYear() + " RDAP.ORG."));
footer.classList.add("container", "text-sm-center");
footer.style.setProperty("font-style", "italic");
footer.style.setProperty("padding", "1em");
footer.style.setProperty("border-top", "1px solid #ccc");
