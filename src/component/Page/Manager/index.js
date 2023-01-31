import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const Decision = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState([{}]);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("http://localhost:8088/api/approval");
  useEffect(() => {});

  useEffect(() => {
    if (search !== "") {
      setFilteredData(data.filter((x) => x.name === search));
    } else {
      setFilteredData(data);
      console.log(data);
    }
  }, [search]);

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setData(response.data.text());
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={(e) => setSearch(e.target.value)} />
        <table>
          <thead>
            <tr>
              <th>ID Travel Request</th>
              <th>NAME</th>
              <th>Status</th>
              <th>Date</th>
              <th>Start City</th>
              <th>Destination City</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Purpose of the trip</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((x, i) => {
              return (
                <tr key={i.id}>
                  <td>{x.id}</td>
                  <td>{x.fullname}</td>
                  <td>{x.status}</td>
                  <td>{x.date}</td>
                  <td>{x.start_city}</td>
                  <td>{x.end_date}</td>
                  <td>{x.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <button onClick={() => setUrl(previous)}>Previous</button>
        <button onClick={() => setUrl(next)}>Next</button> */}
      </header>
    </div>
  );
};
export default Decision;
