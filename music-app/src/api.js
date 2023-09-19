export async function getTodos() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  )
  const dataError = `Произошла ошибка сервера : ${response.status + ' ' + response.statusText}`;
  if (!(response.ok)) {
    return dataError;
  } else {
    const data = response.json();
    return data;
  }

}

export async function getTodosId(e) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${e}`
  );
  if (!response.ok) {
    throw new Error("Произошла ошибка сервера");
  }
  const data = await response.json();
  console.log(data);
  return data;
}
