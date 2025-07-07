import useStore from "./VariableStore";

export const fetchPokemonData = () => {
    const {
        setColors,
        setPokeName,
        setPokeIMG
    } = useStore((state) => ({
        setColors: state.setColors,
        setPokeName: state.setPokeName,
        setPokeIMG: state.setPokeIMG,
    }))

    const fetchPokemon = async () => {
        const shiny = Math.random() < 0.5;
        const number = Math.floor(Math.random() * 1025) + 1;
        try {
            const response = await fetch('http://127.0.0.1:5000/ryan/pokemon-colors', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ 'pokemon_id': number, 'shiny': shiny })
            });

            if (!response.ok) {
                throw new Error(`Error fetching Pokemon: ${response.statusText}`);
            }
            const data = await response.json();
            const name = data.name;
            const imageUrl = data.img_url; 
            const baseColor = data.colors[0];  
            const complementary = data.colors[1];   
            
            setPokeName(name);
            setPokeIMG(imageUrl);
            setColors({
                baseColor,
                complementaryColor: complementary
            });

        } catch (error) {
            console.log(`Error: ${error}`)
        };
    };

    return fetchPokemon;
};