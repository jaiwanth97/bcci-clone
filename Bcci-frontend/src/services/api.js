const API_KEY = "4dc9d9a4-bb30-4be2-bad3-782998ef1676";
const BASE_URL = "https://api.cricapi.com/v1/";

export const searchPlayers = async (query) => {
    const response = await fetch(`${BASE_URL}players?apikey=${API_KEY}&search=${encodeURIComponent(query)}`);
    const data = await response.json();
    
    if (data.status === "success" && data.data) {
        return data.data; 
    } else {
        return [];
    }
};

export const getPlayerDetails = async (playerId) => {
    const response = await fetch(`${BASE_URL}players_info?apikey=${API_KEY}&id=${playerId}`);
    const data = await response.json();
    console.log("Player Image URL:", data.data.playerImg);

    
    console.log("Player API Response:", data);
    
    if (data.status === "success" && data.data) {
        return {
            name: data.data.name,
            country: data.data.country,
            role: data.data.role,
            battingStyle: data.data.battingStyle,
            bowlingStyle: data.data.bowlingStyle,
            playerImg: data.data.playerImg,
            stats: data.data.stats
        };
    } else {
        return null;
    }
};
