/* FOOTER */

document.querySelector('#year').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modified: ${document.lastModified}`;

/* STATIC WEATHER VALUES */

const temperature = 8;
const windSpeed = 10;

/* WIND CHILL FUNCTION */

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

/* DISPLAY WIND CHILL */

const windChillElement =
    document.querySelector('#windchill');

if (temperature <= 10 && windSpeed > 4.8) {

    windChillElement.textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;

} else {

    windChillElement.textContent = 'N/A';
}