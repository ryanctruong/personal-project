import useRepoCount from "../../services/hooks/repoCount";

const InfoCard = () => {
    const totalRepos = useRepoCount();

    return (
        <div className="h-full w-full shadow-[0_0_0.5em_rgba(0,0,0,0.38)] flex justify-center flex-col items-center rounded-[50px] gap-8 bg-white">
            <h1 className="">Total Repos: {totalRepos}</h1>
        </div>
    );
};

export default InfoCard;