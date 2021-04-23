
/* We start by creating a variable named API_KEY that accesses the
NEXT_PUBLIC_PEXELS_API_KEY environment variable using process.env.*/
//const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

export const getCuratedPhotos = async () => {
  const res = await fetch(
    `https://api.pexels.com/v1/curated?page=11&per_page=18`,
    {
      headers: {
        Authorization: '563492ad6f91700001000001c96f0ba87bea4467867431e098b294b0', // The Pexels API key is passed in the Authorization field under the headers.
      },
    }
  );
  const responseJson = await res.json(); // parses the response in JSON format.
  return responseJson;
};
