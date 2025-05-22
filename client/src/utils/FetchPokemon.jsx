import fetchData from "./ApiUtils";
import useStore from "./VariableStore";

export const fetchPokemonData = () => {
    const {
        setPokeName,
        setPokeIMG
    } = useStore((state) => ({
        setPokeName: state.setPokeName,
        setPokeIMG: state.setPokeIMG,
    }))

    const fetchPokemon = () => {
        const number = Math.floor(Math.random() * 1025) + 1;
        const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

        fetchData(url, (data) => {
            const frontDefault = data.sprites.other['official-artwork'].front_default;
            const frontShiny = data.sprites.other['official-artwork'].front_shiny;

            const availableImages = [];

            if (frontDefault) availableImages.push({ url: frontDefault, type: 'default' });
            if (frontShiny) availableImages.push({ url: frontShiny, type: 'shiny' });

            const randomChoice = availableImages[Math.floor(Math.random() * availableImages.length)];
            setPokeIMG(randomChoice.url);

            const pokemonName = randomChoice.type === 'shiny' ? `Shiny ${data.name}` : data.name;
            setPokeName(pokemonName);
        });
    };

    return fetchPokemon;
};

const getRandomColors = (colorArray) => {
    const indices = new Set();

    while (indices.size < 2) {
        indices.add(Math.floor(Math.random() * colorArray.length));
    }

    const [index1, index2] = [...indices];
    return [colorArray[index1], colorArray[index2]];
};

export const handleRandomColors = () => {
    const { setColors } = useStore((state) => ({ setColors: state.setColors }))

    const handleColors = (extractedColors) => {
        const [base, complementary] = getRandomColors(extractedColors);
        setColors({
            baseColor: base,
            complementaryColor: complementary,
        });
    }

    return handleColors;
};