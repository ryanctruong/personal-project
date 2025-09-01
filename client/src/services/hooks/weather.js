import { useState, useEffect } from "react";
import { fetchWeatherStats } from "../weatherService";

const useWeatherStats = () => {
    const [location, setLocation] = useState("");
    const [temp, setTemp] = useState(0);
    const [condition, setCondition] = useState("");

    useEffect(() => {
        const getWeatherStats = async () => {
            const weatherData = await fetchWeatherStats();
            if (weatherData) {
                setLocation(`${weatherData.location.name}, ${weatherData.location.region}`);
                setTemp(weatherData.current.temp_f);
                setCondition(weatherData.current.condition.text);
            }
        };

        getWeatherStats();
    }, []);

    return { location, temp, condition };
}

export default useWeatherStats;