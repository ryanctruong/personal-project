import { create } from "zustand";

const usePokemonStore = create((set) => ({
    name: '',
    setName: (update) => { set((state) => ({ name: typeof update === 'function' ? update(state.name) : update, })) },

    imageUrl: '',
    setImageUrl: (update) => { set((state) => ({ imageUrl: typeof update === 'function' ? update(state.imageUrl) : update, })) },

    primaryColor: '',
    setPrimaryColor: (update) => { set((state) => ({ primaryColor: typeof update === 'function' ? update(state.primaryColor) : update, })) },

    secondaryColor: '',
    setSecondaryColor: (update) => { set((state) => ({ secondaryColor: typeof update === 'function' ? update(state.secondaryColor) : update, })) },
}));

export default usePokemonStore;