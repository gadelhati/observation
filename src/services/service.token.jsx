export const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.refreshToken;
}

export const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.accessToken;
}

export const updateLocalAccessToken = (token) => {
  let user = JSON.parse(localStorage.getItem("user"));
  user.accessToken = token;
  localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
}

export const getTrue = () => {
  return true;
}

export const setUser = (user) => {
  console.log(JSON.stringify(user));
  localStorage.setItem("user", JSON.stringify(user));
}

export const getUserName = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.username;
}

export const getId = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.id;
}

export const getEmail = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.email;
}

export const removeToken = () => {
  localStorage.clear()
}