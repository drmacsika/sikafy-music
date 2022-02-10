import spotifyApi from './spotify';


 const refreshAccessToken = async (token) => {
    try {
        spotifyApi.setAccessToken(token.accessToken);
        spotifyApi.setRefreshToken(token.refreshToken);
    
        const  { body: refreshedToken } = await spotifyApi.refreshAccessToken();
        return {
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    
        }
    } catch (error) {
        return {
            ...token,
            error: "RefreshAccessTokenError",
        }
    }
}

export default refreshAccessToken;