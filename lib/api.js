
const API_KEY = '563492ad6f91700001000001c96f0ba87bea4467867431e098b294b0';

export const getCuratedPhotos = async () => {
  const res = await fetch(
    `https://api.pexels.com/v1/curated?page=11&per_page=18`,
    {
      headers: {
        Authorization: API_KEY, // The Pexels API key is passed in the Authorization field under the headers.
      },
    }
  );
  const responseJson = await res.json(); // parses the response in JSON format.
  return responseJson;
};


export const getQueryPhotos = async (query) => {
  const res = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const responseJson = await res.json();
  return responseJson.photos;
};

export const getPhotoById = async (id) => {
  const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const responseJson = await res.json();
  return responseJson;
};
