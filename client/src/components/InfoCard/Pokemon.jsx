import InfoCard from "./InfoCard";
import usePokemon from "../../services/hooks/pokemon";
import usePokemonStore from "../../store/usePokemonStore";

const Pokemon = () => {
    const { name, imageUrl } = usePokemonStore((state) => ({
        name: state.name,
        imageUrl: state.imageUrl,
    }));
    usePokemon();

    console.log(imageUrl);

    return (
        <InfoCard
            title="Pokemon Theme"
            image={imageUrl}
            alt={name}
            rows={[
                { label: "", value: name, variant: "primary" },
            ]}
        />
    );
};

export default Pokemon;