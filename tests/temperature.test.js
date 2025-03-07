/**
 * Tests for the Temperature Module
 */

// Import the functions to test
import { calculateAverageTemperature, formatTemperature, isTemperatureSafe } from '../modules/temperature.js';

// Test suite for calculateAverageTemperature function
describe('calculateAverageTemperature', () => {
    // Test case: should calculate the average of an array of temperatures
    test('calculates average temperature correctly', () => {
        const temperatures = [22.5, 23.1, 21.7];
        const result = calculateAverageTemperature(temperatures);
        expect(result).toBe(22.4); // (22.5 + 23.1 + 21.7) / 3 = 22.433... rounded to 22.4
    });

    // Test case: should return 0 for an empty array
    test('returns 0 for empty array', () => {
        expect(calculateAverageTemperature([])).toBe(0);
    });

    // Test case: should return 0 for non-array input
    test('returns 0 for non-array input', () => {
        expect(calculateAverageTemperature(null)).toBe(0);
        expect(calculateAverageTemperature(undefined)).toBe(0);
        expect(calculateAverageTemperature('not an array')).toBe(0);
    });
});

// Test suite for formatTemperature function
describe('formatTemperature', () => {
    // Test case: should format temperature with default unit (°C)
    test('formats temperature with default unit', () => {
        expect(formatTemperature(22.5)).toBe('22.5°C');
    });

    // Test case: should format temperature with custom unit
    test('formats temperature with custom unit', () => {
        expect(formatTemperature(72.3, '°F')).toBe('72.3°F');
    });
});

// Test suite for isTemperatureSafe function
describe('isTemperatureSafe', () => {
    // Test case: should return true for temperatures within default safe range
    test('identifies safe temperatures with default range', () => {
        expect(isTemperatureSafe(20)).toBe(true);
        expect(isTemperatureSafe(25)).toBe(true);
    });

    // Test case: should return false for temperatures outside default safe range
    test('identifies unsafe temperatures with default range', () => {
        expect(isTemperatureSafe(15)).toBe(false);
        expect(isTemperatureSafe(35)).toBe(false);
    });

    // Test case: should work with custom safe range
    test('works with custom safe range', () => {
        expect(isTemperatureSafe(10, 5, 15)).toBe(true);
        expect(isTemperatureSafe(20, 5, 15)).toBe(false);
    });
}); 