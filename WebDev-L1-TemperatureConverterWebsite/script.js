
const temperatureInput = document.getElementById("temperatureInput");
const unitSelect = document.getElementById("unitSelect");
const convertButton = document.getElementById("convertButton");
const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");
const summaryText = document.getElementById("summaryText");

const MAX_INPUT = 1000000000;

function convertToCelsius(value, unit) {
    if (unit === "C") {
        return value;
    }

    if (unit === "F") {
        return (value - 32) * 5 / 9;
    }

    if (unit === "K") {
        return value - 273.15;
    }

    return NaN;
}

function formatTemperature(value) {
    return Number(value.toFixed(2)).toString();
}

function resetResults() {
    celsiusResult.textContent = "--";
    fahrenheitResult.textContent = "--";
    kelvinResult.textContent = "--";

    summaryText.textContent =
        "Enter a temperature above to see your conversion summary.";
}

function showError(message) {
    errorMessage.textContent = message;
    resetResults();
}

function convertTemperature() {
    errorMessage.textContent = "";

    const inputValue = temperatureInput.value.trim();

    if (inputValue === "") {
        showError("Please enter a temperature value.");
        return;
    }

    const value = Number(inputValue);
    const selectedUnit = unitSelect.value;

    // Check for invalid or non-finite numbers.
    if (!Number.isFinite(value)) {
        showError("Invalid input. Please enter a valid numeric value.");
        return;
    }

    // Prevent excessively large values.
    if (Math.abs(value) > MAX_INPUT) {
        showError(
            "Value is too large. Please enter a temperature between -1,000,000,000 and 1,000,000,000."
        );
        return;
    }

    // Convert input to Celsius.
    const celsius = convertToCelsius(value, selectedUnit);

    if (!Number.isFinite(celsius)) {
        showError("Unable to convert this value. Please check your input.");
        return;
    }

    // Check absolute zero.
    if (celsius < -1e-10) {
        showError(
            "Temperature cannot be below absolute zero (0 K, -273.15°C or -459.67°F)."
        );
        return;
    }

    // Prevent tiny floating-point errors around absolute zero.
    const safeCelsius = Math.max(0, celsius);

    // Calculate all three units.
    const fahrenheit = (safeCelsius * 9 / 5) + 32;
    const kelvin = safeCelsius + 273.15;

    // Final safety check before displaying results.
    if (
        !Number.isFinite(fahrenheit) ||
        !Number.isFinite(kelvin)
    ) {
        showError("The converted result is outside the supported range.");
        return;
    }

    // Display results.
    celsiusResult.textContent =
        formatTemperature(safeCelsius) + " °C";

    fahrenheitResult.textContent =
        formatTemperature(fahrenheit) + " °F";

    kelvinResult.textContent =
        formatTemperature(kelvin) + " K";

    // Unit names and symbols.
    const originalUnit = {
        C: "Celsius",
        F: "Fahrenheit",
        K: "Kelvin"
    };

    const originalSymbol = {
        C: "°C",
        F: "°F",
        K: "K"
    };

    // Display conversion summary.
    summaryText.textContent =
        `${formatTemperature(value)} ${originalSymbol[selectedUnit]} (${originalUnit[selectedUnit]}) ` +
        `is equal to ${formatTemperature(safeCelsius)} °C, ` +
        `${formatTemperature(fahrenheit)} °F and ` +
        `${formatTemperature(kelvin)} K.`;
}

// Convert on button click.
convertButton.addEventListener("click", convertTemperature);

// Convert when Enter is pressed.
temperatureInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertTemperature();
    }
});

// Clear errors when the user changes the input.
temperatureInput.addEventListener("input", function() {
    errorMessage.textContent = "";
});

unitSelect.addEventListener("change", function() {
    errorMessage.textContent = "";
});

// Initial display.
resetResults();
