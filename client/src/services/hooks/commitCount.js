import { useState, useEffect } from "react";
import { fetchCommitCount } from "../commitCountService";

const useCommitCount = () => {
    const [totalCommits, setTotalCommits] = useState(0);

    useEffect(() => {
        const getCommitCount = async () => {
            let page = 1;
            let totalCommits = 0;
            let hasMoreCommits = true;

            const lastWeekDate = new Date();
            lastWeekDate.setDate(lastWeekDate.getDate() - 30);
            const since = lastWeekDate.toISOString();

            console.log("Fetching commits since:", since);

            while (hasMoreCommits) {
                const commits = await fetchCommitCount({ page, since });

                console.log("Fetched commits:", commits);

                totalCommits += commits.length;
                if (commits.length < 100) {
                    hasMoreCommits = false;
                }

                page++;
            }
            setTotalCommits(totalCommits);
        };

        getCommitCount();
    }, []);

    return totalCommits;
};

export default useCommitCount;