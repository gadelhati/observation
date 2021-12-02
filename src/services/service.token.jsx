class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.accessToken;
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.accessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  getTrue() {
    return true;
  }

  setUser(user) {
    console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUserName() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.username;
  }

  getId() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.id;
  }

  getEmail() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.email;
  }

  removeToken() {
    localStorage.clear()
  }
}

export default new TokenService();