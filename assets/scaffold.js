const meta = document.head.appendChild(document.createElement("meta"));
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1");

const container = document.body.insertBefore(
    document.createElement("div"),
    document.body.firstChild
);
container.classList.add("container");

const nav = document.body.insertBefore(document.createElement("nav"), document.body.firstChild);
nav.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "shadow-sm");

const titleSpan = nav.appendChild(document.createElement("span"));
titleSpan.classList.add("text-white", "font-weight-bold");
titleSpan.style["font-size"] = "larger";

const titleLink = titleSpan.appendChild(document.createElement("a"));
titleLink.classList.add("navbar-brand");
titleLink.setAttribute("href", "#");
titleLink.appendChild(document.createTextNode("RDAP.ORG"));

const navButton = nav.appendChild(document.createElement("button"));
navButton.classList.add("navbar-toggler");
navButton.setAttribute("type", "button");
navButton.setAttribute("data-toggle", "collapse");
navButton.setAttribute("data-target", "#navbar1");
navButton.setAttribute("aria-controls", "navbar1");
navButton.setAttribute("aria-expanded", false);
navButton.setAttribute("aria-label", "Toggle navigation");
navButton.appendChild(document.createElement("span")).classList.add("navbar-toggler-icon");

const navBar = nav.appendChild(document.createElement("div"));
navBar.classList.add("collapse", "navbar-collapse");
navBar.id = "navbar1";

const navUl = navBar.appendChild(document.createElement("ul"));
navUl.classList.add("navbar-nav", "mr-auto", "mt-2", "mt-lg-0")

const links = {
    "Home": "https://about.rdap.org",
    "Web Client": "https://client.rdap.org",
    "Deployment Dashboard": "https://deployment.rdap.org",
    "Validator": "https://validator.rdap.org",
};

for (const [title, href] of Object.entries(links)) {
    const li = navUl.appendChild(document.createElement("li"));
    li.classList.add("nav-item");

    const a = li.appendChild(document.createElement("a"));
    a.classList.add("nav-link");

    if (window.location.origin === href) a.classList.add("active");
    a.setAttribute("href", href);

    a.appendChild(document.createTextNode(title));
}

document.body.insertBefore(document.createElement("br"), container);
