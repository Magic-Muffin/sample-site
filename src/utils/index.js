const TOKEN_KEY = 'token';

export const saveToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
    return token;
}

export const clearToken = () => {
    localStorage.setItem(TOKEN_KEY,'');
}