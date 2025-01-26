
export const fetchImages = async (query) => {
    const API_KEY = '48427757-fc949e79797ba7e940d238484'; 
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('API request failed');
    }
    const data = await response.json();
    return data.hits;
    } catch (error) {
    console.error(error);
    throw new Error('An error occurred while fetching images');
    }
};