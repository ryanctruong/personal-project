import InfoCard from "./InfoCard";
import useWeather from "../../services/hooks/weather";

import WeatherMan from "/images/profile-box/weather-man.png"

const WeatherStats = () => {
    const { location, temp, condition } = useWeather();

    return (
        <InfoCard
            title="My Current Weather"
            image={WeatherMan}
            alt="Weather Icon"
            rows={[
                { label: "", value: location, variant: "primary" },
                { label: "", value: `${temp} (°F)`, variant: "secondary" },
                { label: "", value: condition, variant: "primary" }
            ]}
        />
    )
};

export default WeatherStats;