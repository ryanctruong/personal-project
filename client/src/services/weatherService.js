const API_URL = "http://127.0.0.1:5000/ryan/weather"

export const fetchWeatherStats = async () => {
    try {
        const response = await fetch(API_URL, {
            method: "GET"
        });
        if (response.ok) {
            return await response.json();
        } else {
            console.error("Error fetching weather stats:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }
};