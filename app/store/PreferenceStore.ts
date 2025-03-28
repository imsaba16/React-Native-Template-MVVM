import {create} from "zustand";
import {setItem, getItem, remove, setBool, getBool, setString, getString} from "@/app/utils/Storage";

interface PersistState {
    data: string;
    setData: (data: string) => void;
}

export const usePreferenceStore = create<PersistState>((set, get) => ({
    data : "",
    setData: (data: string) => {
        setString(AppConstants.SAMPLE, data)
        set({
            data: data
        })
    },
}));