import { getApiResource } from "../../utils/network";
import { withErrorApi } from "../../hoc-helper/withErrorApi";
import { useState, useEffect } from "react";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";

// import style from "./PeoplePage.module.css";

function PeoplePage({setErrorApi}) {
  const [people, setPeople] = useState(null);
  // const [errorApi, setErrorApi] = useState(false);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
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
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);
  return (
    <>

    <h1>Navigation</h1>
    {people && <PeopleList people={people} />}
  </>
  );
}

export default withErrorApi(PeoplePage);
