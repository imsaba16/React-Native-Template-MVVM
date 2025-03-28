import { usePreferenceStore } from "@/app/store/PreferenceStore";

export class PreferenceViewModel  {
    static getData() {
        return usePreferenceStore.getState().data;
    }

    static setData(data: string) {
        usePreferenceStore.getState().setData(data);
    }
}