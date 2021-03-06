import { HTTP, 
    SWAPI_ROOT, 
    SWAPI_PEOPLE, HTTPS, 
    GUIDE_IMG_EXTENSION, 
    URL_IMG_PERSON } from "../constants/api";

const getId = (url, category) => {
  const id = url
  .replace(HTTPS + SWAPI_ROOT + category, "")
  .replace(/\//g, '')

  return id;
};

export const getPeopleId = (url) => {
    return getId(url, SWAPI_PEOPLE)

};

export const getPeopleImg = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`
