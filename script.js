// IoT Dashboard JavaScript

// Simulated data for the dashboard
const simulatedData = {
    devices: [
        { id: 1, name: 'Living Room Thermostat', type: 'Temperature Sensor', status: 'online', lastActive: '2 mins ago' },
        { id: 2, name: 'Kitchen Light', type: 'Smart Light', status: 'online', lastActive: '5 mins ago' },
        { id: 3, name: 'Bedroom Light', type: 'Smart Light', status: 'online', lastActive: '10 mins ago' },
        { id: 4, name: 'Front Door Camera', type: 'Security Camera', status: 'online', lastActive: '1 min ago' },
        { id: 5, name: 'Back Yard Camera', type: 'Security Camera', status: 'online', lastActive: '1 min ago' },
        { id: 6, name: 'Garage Door', type: 'Smart Door', status: 'offline', lastActive: '2 days ago' },
        { id: 7, name: 'Water Leak Sensor', type: 'Leak Detector', status: 'warning', lastActive: '30 mins ago' },
        { id: 8, name: 'Smart TV', type: 'Entertainment', status: 'online', lastActive: '15 mins ago' },
        { id: 9, name: 'Air Purifier', type: 'Air Quality', status: 'online', lastActive: '20 mins ago' },
        { id: 10, name: 'Garden Sprinkler', type: 'Irrigation', status: 'offline', lastActive: '1 day ago' }
    ],
    temperatures: {
        living: { current: 22.5, history: [21.8, 22.0, 22.3, 22.5, 22.4, 22.5, 22.5] },
        kitchen: { current: 23.1, history: [22.5, 22.8, 23.0, 23.2, 23.1, 23.0, 23.1] },
        bedroom: { current: 21.7, history: [21.5, 21.6, 21.7, 21.8, 21.7, 21.6, 21.7] }
    },
    energy: {
        today: 12.5,
        week: 87.3,
        month: 320.6,
        history: [8.2, 10.5, 9.8, 11.2, 12.5, 10.8, 11.3]
    },
    weather: {
        location: 'New York, NY',
        temperature: 24,
        condition: 'Sunny',
        wind: '10 km/h',
        humidity: '45%',
        pressure: '1015 hPa'
    }
};

// DOM Elements
const elements = {
    lastUpdated: document.getElementById('last-updated'),
    activeDevices: document.getElementById('active-devices'),
    alertsCount: document.getElementById('alerts-count'),
    avgTemp: document.getElementById('avg-temp'),
    systemLoad: document.getElementById('system-load'),

    // Temperature sensors
    tempLiving: document.getElementById('temp-living'),
    tempKitchen: document.getElementById('temp-kitchen'),
    tempBedroom: document.getElementById('temp-bedroom'),

    // Lighting controls
    lightLiving: document.getElementById('light-living'),
    lightKitchen: document.getElementById('light-kitchen'),
    lightBedroom: document.getElementById('light-bedroom'),
    brightnessLiving: document.getElementById('brightness-living'),
    brightnessKitchen: document.getElementById('brightness-kitchen'),
    brightnessBedroom: document.getElementById('brightness-bedroom'),
    brightnessLivingValue: document.getElementById('brightness-living-value'),
    brightnessKitchenValue: document.getElementById('brightness-kitchen-value'),
    brightnessBedroomValue: document.getElementById('brightness-bedroom-value'),

    // Energy consumption
    energyToday: document.getElementById('energy-today'),
    energyWeek: document.getElementById('energy-week'),
    energyMonth: document.getElementById('energy-month'),

    // Security system
    securityStatus: document.getElementById('security-status'),
    armBtn: document.getElementById('arm-btn'),
    disarmBtn: document.getElementById('disarm-btn'),

    // Weather
    weatherLocation: document.getElementById('weather-location'),
    weatherTemp: document.getElementById('weather-temp'),
    weatherCondition: document.getElementById('weather-condition'),
    weatherWind: document.getElementById('weather-wind'),
    weatherHumidity: document.getElementById('weather-humidity'),
    weatherPressure: document.getElementById('weather-pressure'),

    // Device list
    deviceList: document.getElementById('device-list'),
    filterBtns: document.querySelectorAll('.filter-btn')
};

// Initialize the dashboard
function initDashboard() {
    updateDateTime();
    updateOverviewStats();
    updateTemperatures();
    setupLightingControls();
    updateEnergyData();
    setupSecurityControls();
    updateWeatherData();
    populateDeviceList();
    setupCharts();
    setupEventListeners();

    // Simulate real-time updates
    setInterval(updateDateTime, 60000); // Update time every minute
    setInterval(simulateDataChanges, 5000); // Simulate data changes every 5 seconds
}

// Update date and time
function updateDateTime() {
    const now = new Date();
    elements.lastUpdated.textContent = now.toLocaleString();
}

// Update overview statistics
function updateOverviewStats() {
    const onlineDevices = simulatedData.devices.filter(device => device.status === 'online').length;
    const warningDevices = simulatedData.devices.filter(device => device.status === 'warning').length;

    elements.activeDevices.textContent = onlineDevices;
    elements.alertsCount.textContent = warningDevices;

    // Calculate average temperature
    const temps = [
        simulatedData.temperatures.living.current,
        simulatedData.temperatures.kitchen.current,
        simulatedData.temperatures.bedroom.current
    ];
    const avgTemp = temps.reduce((sum, temp) => sum + temp, 0) / temps.length;
    elements.avgTemp.textContent = avgTemp.toFixed(1) + '°C';

    // Simulate system load
    const systemLoad = Math.floor(Math.random() * 30) + 20; // Random between 20-50%
    elements.systemLoad.textContent = systemLoad + '%';
}

// Update temperature displays
function updateTemperatures() {
    elements.tempLiving.textContent = simulatedData.temperatures.living.current + '°C';
    elements.tempKitchen.textContent = simulatedData.temperatures.kitchen.current + '°C';
    elements.tempBedroom.textContent = simulatedData.temperatures.bedroom.current + '°C';
}

// Setup lighting controls
function setupLightingControls() {
    // Set initial states (random)
    elements.lightLiving.checked = Math.random() > 0.5;
    elements.lightKitchen.checked = Math.random() > 0.5;
    elements.lightBedroom.checked = Math.random() > 0.5;

    // Setup brightness sliders
    elements.brightnessLiving.addEventListener('input', function () {
        elements.brightnessLivingValue.textContent = this.value + '%';
    });

    elements.brightnessKitchen.addEventListener('input', function () {
        elements.brightnessKitchenValue.textContent = this.value + '%';
    });

    elements.brightnessBedroom.addEventListener('input', function () {
        elements.brightnessBedroomValue.textContent = this.value + '%';
    });
}

// Update energy consumption data
function updateEnergyData() {
    elements.energyToday.textContent = simulatedData.energy.today + ' kWh';
    elements.energyWeek.textContent = simulatedData.energy.week + ' kWh';
    elements.energyMonth.textContent = simulatedData.energy.month + ' kWh';
}

// Setup security system controls
function setupSecurityControls() {
    elements.disarmBtn.addEventListener('click', function () {
        elements.securityStatus.textContent = 'Disarmed';
        elements.securityStatus.parentElement.classList.remove('armed');
        elements.securityStatus.parentElement.classList.add('disarmed');
        elements.securityStatus.previousElementSibling.classList.remove('fa-lock');
        elements.securityStatus.previousElementSibling.classList.add('fa-lock-open');

        elements.disarmBtn.disabled = true;
        elements.armBtn.disabled = false;
    });

    elements.armBtn.addEventListener('click', function () {
        elements.securityStatus.textContent = 'Armed';
        elements.securityStatus.parentElement.classList.remove('disarmed');
        elements.securityStatus.parentElement.classList.add('armed');
        elements.securityStatus.previousElementSibling.classList.remove('fa-lock-open');
        elements.securityStatus.previousElementSibling.classList.add('fa-lock');

        elements.armBtn.disabled = true;
        elements.disarmBtn.disabled = false;
    });
}

// Update weather data
function updateWeatherData() {
    elements.weatherLocation.textContent = simulatedData.weather.location;
    elements.weatherTemp.textContent = simulatedData.weather.temperature + '°C';
    elements.weatherCondition.textContent = simulatedData.weather.condition;
    elements.weatherWind.textContent = simulatedData.weather.wind;
    elements.weatherHumidity.textContent = simulatedData.weather.humidity;
    elements.weatherPressure.textContent = simulatedData.weather.pressure;
}

// Populate device list
function populateDeviceList(filter = 'all') {
    if (!elements.deviceList) return;

    elements.deviceList.innerHTML = '';

    let filteredDevices = simulatedData.devices;
    if (filter !== 'all') {
        filteredDevices = simulatedData.devices.filter(device => device.status === filter);
    }

    filteredDevices.forEach(device => {
        const row = document.createElement('tr');

        const statusClass = device.status === 'online' ? 'text-success' :
            device.status === 'offline' ? 'text-danger' : 'text-warning';

        row.innerHTML = `
            <td>${device.name}</td>
            <td>${device.type}</td>
            <td><span class="${statusClass}">${device.status}</span></td>
            <td>${device.lastActive}</td>
            <td>
                <button class="btn-icon"><i class="fas fa-cog"></i></button>
                <button class="btn-icon"><i class="fas fa-trash"></i></button>
            </td>
        `;

        elements.deviceList.appendChild(row);
    });
}

// Setup charts using Chart.js
function setupCharts() {
    // Temperature charts
    setupTemperatureChart('chart-temp-living', simulatedData.temperatures.living.history);
    setupTemperatureChart('chart-temp-kitchen', simulatedData.temperatures.kitchen.history);
    setupTemperatureChart('chart-temp-bedroom', simulatedData.temperatures.bedroom.history);

    // Energy consumption chart
    setupEnergyChart();
}

// Setup temperature mini charts
function setupTemperatureChart(elementId, data) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const ctx = element.getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                data: data,
                borderColor: '#3498db',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(52, 152, 219, 0.1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false,
                    min: Math.min(...data) - 1,
                    max: Math.max(...data) + 1
                }
            }
        }
    });
}

// Setup energy consumption chart
function setupEnergyChart() {
    const element = document.getElementById('energy-chart');
    if (!element) return;

    const ctx = element.getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Energy Consumption (kWh)',
                data: simulatedData.energy.history,
                backgroundColor: 'rgba(52, 152, 219, 0.7)',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: true,
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Device filter buttons
    if (elements.filterBtns) {
        elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                elements.filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');
                populateDeviceList(filter);
            });
        });
    }

    // Refresh buttons
    document.querySelectorAll('.fa-sync-alt').forEach(btn => {
        btn.addEventListener('click', function () {
            const module = this.closest('.module');
            if (module) {
                module.classList.add('refreshing');
                setTimeout(() => {
                    module.classList.remove('refreshing');
                }, 1000);

                // Simulate data refresh
                simulateDataChanges();
            }
        });
    });
}

// Simulate real-time data changes
function simulateDataChanges() {
    // Simulate temperature changes
    simulatedData.temperatures.living.current += (Math.random() - 0.5) * 0.2;
    simulatedData.temperatures.kitchen.current += (Math.random() - 0.5) * 0.2;
    simulatedData.temperatures.bedroom.current += (Math.random() - 0.5) * 0.2;

    // Update temperature history
    simulatedData.temperatures.living.history.shift();
    simulatedData.temperatures.living.history.push(simulatedData.temperatures.living.current);

    simulatedData.temperatures.kitchen.history.shift();
    simulatedData.temperatures.kitchen.history.push(simulatedData.temperatures.kitchen.current);

    simulatedData.temperatures.bedroom.history.shift();
    simulatedData.temperatures.bedroom.history.push(simulatedData.temperatures.bedroom.current);

    // Simulate energy consumption change
    simulatedData.energy.today += (Math.random() - 0.3) * 0.1;
    if (simulatedData.energy.today < 0) simulatedData.energy.today = 0;

    // Update UI with new data
    updateTemperatures();
    updateEnergyData();
    updateOverviewStats();

    // Randomly change device status
    if (Math.random() > 0.9) {
        const randomDeviceIndex = Math.floor(Math.random() * simulatedData.devices.length);
        const statuses = ['online', 'offline', 'warning'];
        simulatedData.devices[randomDeviceIndex].status = statuses[Math.floor(Math.random() * statuses.length)];

        // Update device list if it's currently displayed
        const activeFilter = document.querySelector('.filter-btn.active');
        if (activeFilter) {
            populateDeviceList(activeFilter.getAttribute('data-filter'));
        }
    }
}

// Initialize the dashboard when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initDashboard);