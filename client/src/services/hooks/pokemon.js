import { useState, useEffect } from "react";
import { fetchPokemon } from "../pokemonService";
import usePokemonStore from "../../store/usePokemonStore";

const usePokemon = () => {
    const {
        setName,
        setImageUrl,
        setPrimaryColor,
        setSecondaryColor,
    } = usePokemonStore((state) => ({
        setName: state.setName,
        setImageUrl: state.setImageUrl,
        setPrimaryColor: state.setPrimaryColor,
        setSecondaryColor: state.setSecondaryColor,
    }));

    useEffect(() => {
        const getPokemon = async () => {
            const pokemonData = await fetchPokemon();
            if (pokemonData) {
                setName(pokemonData.name);
                setImageUrl(pokemonData.img_url);
                setPrimaryColor(pokemonData.primary_color);
                setSecondaryColor(pokemonData.secondary_color);

                console.log(pokemonData);
            }
        };

        getPokemon();
    }, []);

    return {};
}

export default usePokemon;