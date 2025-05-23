import { create } from 'zustand';

const useStore = create((set) => ({
    displayType: window?.matchMedia?.('(prefers-color-scheme:light)')?.matches ?? false,
    setDisplay: (update) => { set((state) => ({ displayType: typeof update === 'function' ? update(state.displayType) : update, })) },

    pokeName: '',
    setPokeName: (update) => { set((state) => ({ pokeName: typeof update === 'function' ? update(state.pokeName) : update, })) },

    pokeIMG: '',
    setPokeIMG: (update) => { set((state) => ({ pokeIMG: typeof update === 'function' ? update(state.pokeIMG) : update, })) },

    colors: { baseColor: '', complementaryColor: '' },
    setColors: (update) => { set((state) => ({ colors: typeof update === 'function' ? update(state.colors) : update, })) },

    selectedTab: 0,
    setSelectedTab: (update) => { set((state) => ({ selectedTab: typeof update === 'function' ? update(state.selectedTab) : update, })) },
}));

export default useStore;
