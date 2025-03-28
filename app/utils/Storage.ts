import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({id: 'baseAppStorage'}); //Replace

export const setBool = (key: string, value: boolean) => {
    storage.set(key, value);
};

export const setString = (key: string, value: string) => {
    storage.set(key, value);
};

export const setInt = (key: string, value: number) => {
    storage.set(key, value);
};

export const getString = (key: string): string | null => {
    return storage.getString(key) ?? null;
};

export const getBool = (key: string): boolean | null => {
    return storage.getBoolean(key) ?? null;
};

export const getNumber = (key: string): number | null => {
    return storage.getNumber(key) ?? null;
};

export const setItem = (key: string, value: any) => {
    storage.set(key, JSON.stringify(value));
};

export const getItem = <T>(key: string): T | null => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
};

export const remove = (key: string) => {
    storage.delete(key);
};