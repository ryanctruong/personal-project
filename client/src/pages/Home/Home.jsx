import Profile from "../../components/Profile/Profile";
import Description from "../../components/Description/Description";
import GithubStats from "../../components/InfoCard/GithubStats";
import LeetCodeStats from "../../components/InfoCard/LeetCodeStats";
import WeatherStats from "../../components/InfoCard/WeatherStats";
import Pokemon from "../../components/InfoCard/Pokemon";
import SlidingSlot from "../../components/common/SlidingSlot";

const Home = () => {
    return (
        <div className="flex justify-between h-[75%] w-[75%] gap-4">
            <Profile />
            <div className="flex flex-col items-center h-full w-[75%] gap-4">
                <Description />
                <div className="grid grid-cols-2 gap-4 h-[40%] w-full">
                    <SlidingSlot intervalMs={6000}>
                        <WeatherStats />
                        <GithubStats />
                    </SlidingSlot>
                    <SlidingSlot intervalMs={9000}>
                        <LeetCodeStats />
                        <Pokemon />
                    </SlidingSlot>
                </div>
            </div>
        </div>
    );
}

export default Home;