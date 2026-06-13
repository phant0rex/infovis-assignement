const SANITATION_CATEGORIES = [
    "Safely managed",
    "Basic",
    "Limited",
    "Unimproved",
    "Open defecation"
];

const SANITATION_COLORS = ["#2b8cbe", "#7bccc4", "#bae4bc", "#f0f9e8", "#fcae91"];
const MAX_VIEWS = 4;

let sanitationCountries = [];
function renderSanitationStatistic(country) {
    if (sanitationCountries.length >= MAX_VIEWS) {
        alert("Too many views open, close one");
        return;
    }
    const safeId = country.replace(/\s+/g, '');
    sanitationCountries.push(safeId);
    d3.select("#sanitation-views").append("div")
        .attr("id", "view-" + safeId)
        .style("height", "calc(50% - 10px)") // 10px to account for gap, see #sanitation-views in style.css
        .style("aspect-ratio", "1 / 1")
        .style("background-color", "lightgray");

    const viewContainer = document.getElementById("view-" + safeId);
    const width = viewContainer.clientWidth;
    const height = viewContainer.clientHeight;

    const svg = d3.select("#view-" + safeId).append("svg")
        .attr("width", width)
        .attr("height", height);
}