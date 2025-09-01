import { useState, useEffect } from 'react';
import { fetchLeetCodeStats } from '../leetCodeService';

const useLeetCode = () => {
    const [easy, setEasy] = useState(0);
    const [medium, setMedium] = useState(0);
    const [hard, setHard] = useState(0);

    useEffect(() => {
        const getLeetCodeStats = async () => {
            const stats = await fetchLeetCodeStats();
            if (stats) {
                setEasy(stats.easySolved);
                setMedium(stats.totalSubmissions[2].count);
                setHard(stats.totalSubmissions[3].count);
            }
        };

        getLeetCodeStats();
    }, []);

    return { easy, medium, hard };
}

export default useLeetCode;