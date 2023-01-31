import axios from "axios";
import { useState, useEffect } from "react";

const Region = () => {
  // let arrayOfObject = [
  //   {
  //     id: 1,
  //     name: "Lukman Hakim",
  //   },
  //   {
  //     id: 2,
  //     name: "Lia ayuningsih",
  //   },
  // ];
  const [data, setData] = useState([{}]);
  const [filteredData, setFilteredData] = useState([{}]);
  const [search, setSearch] = useState("");
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");
  const [url, setUrl] = useState("https://swapi.dev/api/people");

  useEffect(() => {
    if (search !== "") {
      setFilteredData(data.filter((x) => x.name === search));
    } else {
      setFilteredData(data);
    }
  }, [search]);

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setPrev(response.data.previous);
        setNext(response.data.next);
        setData(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={(e) => setSearch(e.target.value)} />
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((x, i) => {
              return (
                <tr key={i.id}>
                  <td>{x.name}</td>
                  <td>{x.gender}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={() => setUrl(prev)}>Previous</button>
        <button onClick={() => setUrl(next)}>Next</button>
      </header>
    </div>
  );
};
export default Region;
