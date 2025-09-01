import useRepoCount from "../../services/hooks/repoCount";
import useCommitCount from "../../services/hooks/commitCount";

import Coder from '/images/profile-box/coder.png'

const GithubStats = () => {
    const totalRepos = useRepoCount();
    const totalCommits = useCommitCount();

    return (
        <div className="h-full w-full shadow-[0_0_0.5em_rgba(0,0,0,0.38)] flex justify-evenly items-center rounded-[50px] bg-white">
            <img src={Coder} alt="coder" className="h-[60%] w-[35%]" />
            <div className="flex flex-col items-center gap-2">
                <p className="font-medium underline text-xl">Github Stats</p>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-lg">Total Repos: <span className="font-medium text-blue-600">{totalRepos}</span></p>
                    <p className="text-lg">Total Commits: <span className="font-medium text-blue-400">{totalCommits ? totalCommits : "a lot"}</span></p>
                </div>
            </div>
        </div>
    );
};

export default GithubStats;