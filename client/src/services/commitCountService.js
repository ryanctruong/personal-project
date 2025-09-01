export const fetchCommitCount = async ({ page, since }) => {
    const API_URL = `https://api.github.com/repos/ryanctruong/personal-project/commits?page=${page}&per_page=100&since=${since}`;

    try {
        const response = await fetch(API_URL, {
            method: "GET"
        });
        if (response.ok) {
            return await response.json();
        } else {
            console.error("Error fetching commit count:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }
};