# THERMO — Temperature Converter Website

A responsive temperature converter dashboard that converts temperatures between Celsius, Fahrenheit, and Kelvin. It includes input validation, absolute-zero checks, and a conversion guide explaining the formulas.

## About the Project

This project was developed as part of the **OASIS INFOBYTE Web Development and Designing Internship — Level 1, Task 3: Temperature Converter Website**.

The objective was to build an interactive temperature conversion tool using HTML5, CSS3, and Vanilla JavaScript. The application allows users to enter a temperature, select its unit, and view the equivalent values in all three temperature scales.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Features

- Convert between Celsius, Fahrenheit, and Kelvin
- Unit selection for the input temperature
- Convert button to perform calculations
- Display results in all three temperature scales
- Clear labels for converted values
- Numeric input validation
- Error messages for invalid or empty input
- Absolute-zero validation to prevent physically impossible temperatures
- Large-number validation with an application input limit
- Enter key support for conversion
- Temperature conversion formula guide
- Explanation of absolute zero
- Responsive dashboard layout
- Clean interface with an ice-blue, white, and slate color palette

## Conversion Formulas

| Conversion | Formula |
|---|---|
| Celsius to Fahrenheit | °F = (°C × 9/5) + 32 |
| Fahrenheit to Celsius | °C = (°F − 32) × 5/9 |
| Celsius to Kelvin | K = °C + 273.15 |
| Kelvin to Celsius | °C = K − 273.15 |
| Fahrenheit to Kelvin | K = (°F − 32) × 5/9 + 273.15 |
| Kelvin to Fahrenheit | °F = (K − 273.15) × 9/5 + 32 |

## Validation

The application includes the following validation checks:

- Empty input is rejected.
- Non-numeric and non-finite values are rejected.
- Temperatures below absolute zero are rejected.
- Input magnitude is limited to 1,000,000,000 to prevent impractically large values.

**Absolute zero reference:**

- 0 Kelvin
- −273.15 Celsius
- −459.67 Fahrenheit

## Project Structure

```text
WebDev-L1-TemperatureConverter/
├── index.html
├── style.css
├── script.js
├── README.md
└── screenshots/
```

## How to Run

1. Clone or download this repository.
2. Open the `WebDev-L1-TemperatureConverter` folder.
3. Open `index.html` in your browser.
4. Alternatively, use the VS Code Live Server extension.

## Screenshots

Screenshots of the temperature converter dashboard, conversion results, validation messages, and conversion guide are available in the `screenshots/` folder.

## Internship

**Organization:** OASIS INFOBYTE  
**Internship Track:** Web Development and Designing  
**Level:** Level 1  
**Task:** Task 3 — Temperature Converter Website

