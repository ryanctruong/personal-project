import Profile from "../../components/Profile/Profile"
import Description from "../../components/Description/Description";
import InfoCard from "../../components/InfoCard/InfoCard";

const Home = () => {
    return (
        <div className="flex justify-between h-[75%] w-[75%] gap-4">
            <Profile />
            <div className="flex flex-col items-center h-full w-[75%] gap-4">
                <Description />
                <div className="flex gap-4 h-[40%] w-full">
                    <InfoCard />
                    <InfoCard />
                </div>

            </div>

        </div>

    )
};

export default Home;