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

    refresh: false,
    setRefresh: (update) => { set((state) => ({ refresh: typeof update === 'function' ? update(state.refresh) : update, })) },

    item: {},
    setItem: (update) => { set((state) => ({ item: typeof update === 'function' ? update(state.item) : update, })) },

    viewMore: false,
    setViewMore: (update) => { set((state) => ({ viewMore: typeof update === 'function' ? update(state.viewMore) : update, })) },

    stats: { totalItems: 0, totalOpen: 0, totalInProgress: 0, totalRejected: 0, },
    setStats: (update) => { set((state) => ({ stats: typeof update === 'function' ? update(state.stats) : update, })) }
}));

export default useStore;
