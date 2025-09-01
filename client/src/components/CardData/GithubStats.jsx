import Card from "../common/Card";
import useRepoCount from "../../services/hooks/repoCount";
import useCommitCount from "../../services/hooks/commitCount";
import Coder from "/images/profile-box/coder.png";

const GithubStats = () => {
    const totalRepos = useRepoCount();
    const totalCommits = useCommitCount();

    return (
        <Card
            title="GitHub Stats"
            image={Coder}
            alt="Coder"
            rows={[
                { label: "Total Repos", value: totalRepos, variant: "primary" },
                { label: "Total Commits", value: totalCommits ? totalCommits : "a lot", variant: "secondary" }
            ]}
        />
    );
};

export default GithubStats;