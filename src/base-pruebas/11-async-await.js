export const getImagen = async () => {
  try {
    const apiKey = "ZI6Fwz8hBgqVCYygtmI1lVzgg9jr1hFp";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
    
  } catch (error) {
    return "No se encontro la imagen";
  }
};
