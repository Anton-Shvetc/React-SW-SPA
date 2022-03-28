import { getApiResource } from "../../utils/network";
import { useState, useEffect } from "react";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";

// import style from "./PeoplePage.module.css";

function PeoplePage() {
  const [people, setPeople] = useState(null);
  const getResource = async (url) => {
    const res = await getApiResource(url);

    const pepoleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);

      const img = getPeopleImg(id);

      return {
        id,
        name,
        img,
      };
    });

    setPeople(pepoleList);
  };
  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);
  return <>{people && <PeopleList people={people} />}</>
}

export default PeoplePage;
