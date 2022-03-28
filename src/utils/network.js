// const SWAPI_ROOT = "https://swapi.dev/api/";
// const SWAPI_PEOPLE = "people";

//  const API_PEOPLE = SWAPI_ROOT + SWAPI_PEOPLE;


export const getApiResource = async (url) => {
    console.log(url)
  try {
   
    const res = await fetch(url);
    if(!res.ok) {
        console.error('Что-то пошло не так', res.status)
        return false
    }
    return await res.json()
  } catch (error) {
      console.error('Что-то пошло не так', error.message)

      return false;
  }
};

// (async () => {
//     const body = await getApiResource(API_PEOPLE);
//     console.log(body)

// })();

// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
// .then(body => console.log(body))



