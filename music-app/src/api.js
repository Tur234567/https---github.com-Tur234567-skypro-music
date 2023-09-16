import { info } from "./components/cntrcontent.jsx";
export async function getTodos() {
    const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');
    const data = await response.json();
    return data;
}

export async function getTodosId() {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${info}`);
    const data = await response.json();
    return data;
}