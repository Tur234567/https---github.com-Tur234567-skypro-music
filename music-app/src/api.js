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
  return data;
}

export async function register(email, password) {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
  method: "POST",
  body: JSON.stringify({
    email,
    password,
    username: email,
  }),
  headers: {
    // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
    "content-type": "application/json",
  },
})
  const data = response.json();
  return data;
}

export async function getLogin(email, password) {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
  method: "POST",
  body: JSON.stringify({
    email,
    password,
  }),
  headers: {
    // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
    "content-type": "application/json",
  },
})
  const data = response.json();
  return data;
}

export async function getToken(email, password) {
  fetch("https://skypro-music-api.skyeng.tech/user/token/", {
  method: "POST",
  body: JSON.stringify({
    email: "gleb@fokin.ru", // изменить
    password: "gleb@fokin.ru", // изменить
  }),
  headers: {
    // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
    "content-type": "application/json",
  },
})
.then((response) => response.json())
.then((json) => {
  localStorage.setItem('tokenForLikeTrack', json.access);
});
}

export async function likeTrack() {
const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${localStorage.getItem('tokenForLikeTrack')}`,
  },
})
const data = response.json();
return data;
}
