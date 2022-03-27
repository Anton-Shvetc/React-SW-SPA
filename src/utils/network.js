const SWAPI_ROOT = "https://swapi.dev/api/";
const SWAPI_PEOPLE = "people";




export const getApiResource = async (url) => {
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

(async () => {
    const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
    console.log(body)

})();

// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
// .then(body => console.log(body))


