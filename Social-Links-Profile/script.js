const links = document.querySelector(".links");

const linkItems = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

(function addLink(params) {
  linkItems.forEach((item) => {
    const a = document.createElement("a");
    a.setAttribute("class", "link");
    a.innerText = item;
    links.appendChild(a);
  });
})();
