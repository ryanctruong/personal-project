const API_URL = "http://127.0.0.1:5000/ryan/pokemon-colors";

export const fetchPokemon = async () => {
    const shiny = Math.random() < 0.1;
    const number = Math.floor(Math.random() * 1025) + 1;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 'pokemon_id': number, 'shiny': shiny }),
        });

        if (response.ok) {
            return await response.json();
        } else {
            console.error("Error fetching pokemon:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }
};