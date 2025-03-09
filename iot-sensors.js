// Use "import" instead of "require"
import dotenv from 'dotenv';
import mqtt from 'mqtt';

// Load environment variables
dotenv.config();

const BROKER = process.env.BROKER || "mqtt.eclipseprojects.io";
const PORT = process.env.PORT || 1883;
const TOPIC = process.env.TOPIC || "iot/sensors";

// Connect to MQTT broker
const client = mqtt.connect(`mqtt://${BROKER}:${PORT}`);

client.on('connect', () => {
    console.log(`🚀 Connected to MQTT broker at ${BROKER}:${PORT}`);

    // Publish sensor data every 5 seconds
    setInterval(() => {
        const sensorData = {
            temperature: (Math.random() * 10 + 20).toFixed(2), // Random temp (20-30°C)
            humidity: (Math.random() * 40 + 30).toFixed(2),    // Random humidity (30-70%)
            motion_detected: Math.random() < 0.5,             // Random motion detection
            timestamp: new Date().toISOString()
        };

        const message = JSON.stringify(sensorData);
        client.publish(TOPIC, message);
        console.log(`📡 Sent: ${message}`);
    }, 5000);
});

client.on('error', (err) => {
    console.error("❌ MQTT Error:", err);
});
