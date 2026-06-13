const COLORS = [
    "orange", "steelblue", "tomato", "mediumaquamarine",
    "orchid", "sandybrown", "lightseagreen", "hotpink"
];

const countryColors = {};
let colorIndex = 0;


// data arrays
let gdpData = [];
let mortalityData = [];
let sanitationData = [];
let healthInsuranceData = [];
let countries = [];

// global parameters
const SAMPLE_RATE = 1;
const DATA_SIZE_THRESHOLD = 50;
const MAX_COUNTRY_NUMBER_SCATTER= 8;
const START_YEAR = 1900;


// assigns colors to country, assigns colors twice when max of eight colors reached
function getColor(country) {
    if (!countryColors[country]) {
        countryColors[country] = COLORS[colorIndex % COLORS.length];
        colorIndex++;
    }
    return countryColors[country];
}

/**
 *
 * function to join mortality of a country to another attribute, eg mortality -> gdp
 *
 * @param {string} country -name of the country
 * @param {Array} otherData - dataset to join with
 * @param {string} otherColumn - name of the column to match to mortality
 *
 * @returns {Array} array like {year, mortality, value} objects
 *
 */
function joinData(country, otherData, otherColumn) {
    const result = [];

    mortalityData
        .filter(d => d.Entity === country)
        .forEach(d => {
            const match = otherData.find(o => o.Entity === country && o.Year === d.Year)
            if (match && match[otherColumn]) { // checks for existance
                result.push({
                    year: +d.Year,
                    mortality: +d["Under-five mortality rate (selected)"],
                    value: +match[otherColumn]
                });
            }
        });
    return result;
}



