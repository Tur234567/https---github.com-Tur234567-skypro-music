export async function getTodos() {
    const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');
    const data = await response.json();
    return data;
}

export async function getTodosId(e) {
    console.log(e);
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${e}`);
    const data = await response.json();
    console.log(data);
    return data;
}