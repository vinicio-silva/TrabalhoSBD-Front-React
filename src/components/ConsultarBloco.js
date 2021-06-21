import React, { Fragment, useEffect, useState } from "react";
import UpdateBloco from "./UpdateBloco";

const ConsultarBloco = () => {

  const [blocos,setBlocos] = useState([]);

  const deleteBloco = async id => {
    try {
      const deleteBloco = await fetch(`http://localhost:5000/bloco/${id}`,{
        method: "DELETE"
      });
      setBlocos(blocos.filter(bloco => bloco.idbloco !== id))
      console.log(deleteBloco);
    } catch (err) {
      console.error(err.message)      
    }
  }

  const getBlocos = async () => {
  
    try{
      const response = await fetch("http://localhost:5000/bloco")
      const jsonData = await response.json();

      setBlocos(jsonData);
    }catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getBlocos();
  },[]);

  return(
    <Fragment>
    <table className="table m-5 text-center">
    <thead>
      <tr>
        <th>IDBLOCO</th>
        <th>NOMEBLOCO</th>
        <th>UPDATE</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>
      {blocos.map(bloco => (
      <tr key={bloco.idbloco}>
        <td>{bloco.idbloco}</td>
        <td>{bloco.nomebloco}</td>
        <td><UpdateBloco bloco={bloco}/></td>
        <td><button className="btn btn-danger" onClick={() => deleteBloco(bloco.idbloco)}>DELETE</button></td>
      </tr>
    ))}
         
    </tbody>
  </table>
  </Fragment>
  )
};

export default ConsultarBloco;