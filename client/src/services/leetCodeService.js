const API_URL = "https://leetcode-api-faisalshohag.vercel.app/ryantruong21";

export const fetchLeetCodeStats = async () => {
    try {
        const reponse = await fetch(API_URL, {
            method: "GET"
        });
        if (reponse.ok) {
            return await reponse.json();
        } else {
            console.error("Error fetching LeetCode stats:", reponse.statusText);
            return null;
        }
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }
};