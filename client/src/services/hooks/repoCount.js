import { useState, useEffect } from 'react';
import { fetchRepoCount } from '../repoCountService';

const useRepoCount = () => {
    const [totalRepos, setTotalRepos] = useState(0);
    
    useEffect(() => {
        const getRepoCount = async () => {
            const repos = await fetchRepoCount();
            if (repos) {
                setTotalRepos(repos.length);
            }   
        };

        getRepoCount();
    }, []);

    return totalRepos;
}

export default useRepoCount;