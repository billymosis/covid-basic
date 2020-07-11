import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function setData(data) {
  console.log(data);
  const status = {
    confirmed: data.confirmed.value,
    recovered: data.recovered.value,
    deaths: data.deaths.value,
    lastUpdate: data.lastUpdate,
  };
  return status;
}

function App() {
  let { id } = useParams();
  const [mati, setMati] = useState({});
  const [found, setFound] = useState(true);

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries/${id}`)
      .then((response) => response.json())
      //.then((response) => console.log(response))
      .then((data) => setMati(setData(data)))
      .catch((err) => {
        console.log(err);
        setFound(false);
      });
  }, [id]);

  const d = new Date(mati.lastUpdate);
  function err() {
    alert("error, data tidak ditemukan! \nSilahkan refresh!");
  }
  return (
    <>
      {!found ? (
        err()
      ) : (
        <>
          <h1>STATUS COVID {id.toUpperCase()}</h1>
          <p>
            data per: {d.getDate()}-{d.getMonth()}-{d.getFullYear()}
          </p>
          <p>Jumlah Positif: {mati.confirmed}</p>
          <p>Jumlah Sembuh: {mati.recovered}</p>
          <p>Jumlah Mati: {mati.deaths}</p>
        </>
      )}
    </>
  );
}

export default App;

/* function App() {
  const [mati, setMati] = useState({});
  fetch(`https://covid19.mathdro.id/api/countries/indonesia`)
  .then(response => response.json()) 
    //.then(data => console.log(data))
    .then(data => setMati(setData(data)))
    .then(console.log(mati))
 // .catch(console.log('loading'))
 */
