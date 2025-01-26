import axios from 'axios';


export const fetchImages = async (query) => {
    const API_KEY = '48427757-fc949e79797ba7e940d238484'; 
    const BASE_URL = 'https://pixabay.com/api/';
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };
    const { data } = await axios.get(BASE_URL, { params });
    return data.hits;
};