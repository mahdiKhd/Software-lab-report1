/**
 * Temperature Module
 * Handles temperature-related functionality for the IoT dashboard
 */

/**
 * Calculate average temperature from an array of temperature readings
 * @param {Array<number>} temperatures - Array of temperature values
 * @returns {number} - The average temperature, rounded to 1 decimal place
 */
function calculateAverageTemperature(temperatures) {
    if (!Array.isArray(temperatures) || temperatures.length === 0) {
        return 0;
    }

    const sum = temperatures.reduce((total, temp) => total + temp, 0);
    const average = sum / temperatures.length;

    // Round to 1 decimal place
    return Math.round(average * 10) / 10;
}

/**
 * Format temperature value with unit
 * @param {number} temperature - Temperature value
 * @param {string} unit - Temperature unit (default: '°C')
 * @returns {string} - Formatted temperature string
 */
function formatTemperature(temperature, unit = '°C') {
    return `${temperature}${unit}`;
}

/**
 * Check if temperature is within a safe range
 * @param {number} temperature - Temperature value to check
 * @param {number} minSafe - Minimum safe temperature (default: 18)
 * @param {number} maxSafe - Maximum safe temperature (default: 30)
 * @returns {boolean} - True if temperature is within safe range
 */
function isTemperatureSafe(temperature, minSafe = 18, maxSafe = 30) {
    return temperature >= minSafe && temperature <= maxSafe;
}

// Export functions for use in other modules and for testing
export { calculateAverageTemperature, formatTemperature, isTemperatureSafe };