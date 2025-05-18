import { create } from 'zustand';

const useStore = create((set) => ({
    displayType: window?.matchMedia?.('(prefers-color-scheme:light)')?.matches ?? false,
    setDisplay: (update) => { set((state) => ({ displayType: typeof update === 'function' ? update(state.displayType) : update, })) },
}));

export default useStore;
