import time
import random
import json
import paho.mqtt.client as mqtt

# MQTT Configuration
BROKER = "mqtt.eclipseprojects.io"  # Free MQTT broker for testing
PORT = 1883
TOPIC = "iot/sensors"

# Function to simulate sensor data
def generate_sensor_data():
    return {
        "temperature": round(random.uniform(20.0, 30.0), 2),  # Random temp (20-30°C)
        "humidity": round(random.uniform(30.0, 70.0), 2),     # Random humidity (30-70%)
        "motion_detected": random.choice([True, False]),       # Random motion detection
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
    }

# MQTT Client Setup
client = mqtt.Client()
client.connect(BROKER, PORT, 60)

# Main loop to send data every 5 seconds
try:
    while True:
        sensor_data = generate_sensor_data()
        json_data = json.dumps(sensor_data)
        client.publish(TOPIC, json_data)
        print(f"Sent: {json_data}")
        time.sleep(5)

except KeyboardInterrupt:
    print("Exiting program...")
    client.disconnect()
