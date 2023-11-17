const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '68aed9d7969aa4a2de298156140bd1dd',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
