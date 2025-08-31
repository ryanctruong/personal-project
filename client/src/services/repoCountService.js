const API_URL = "https://api.github.com/users/ryanctruong/repos";

export const fetchRepoCount = async () => {
    try {
        const response = await fetch (API_URL, {
            method: "GET"
        });

        if(response.ok) {
            return await response.json();
        } else {
            console.error("Error fetching repo count:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }
};