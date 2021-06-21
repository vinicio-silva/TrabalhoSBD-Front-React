import React, { Fragment, useEffect, useState } from "react";
import UpdatePessoa from "./UpdatePessoa";

const ConsultarPessoa = () => {

  const [pessoas,setPessoas] = useState([]);

  const deletePessoa= async id => {
    try {
      const deletePessoa = await fetch(`http://localhost:5000/pessoa/${id}`,{
        method: "DELETE"
      });
      setPessoas(pessoas.filter(pessoa => pessoa.idpes !== id))
      console.log(deletePessoa);
    } catch (err) {
      console.error(err.message)      
    }
  }


  const getPessoas = async () => {
  
    try{
      const response = await fetch("http://localhost:5000/pessoa")
      const jsonData = await response.json();

      setPessoas(jsonData);
      
    }catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getPessoas();
  },[]);

  
  return(
    <Fragment>
    <table className="table m-5 text-center">
    <thead>
      <tr>
        <th>IDPESSOA</th>
        <th>NOMEPESSOA</th>
        <th>DATANASCIMENTO</th>
        <th>UPDATE</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>
      {pessoas.map(pessoa => (
      <tr key={pessoa.idpes}>
        <td>{pessoa.idpes}</td>
        <td>{pessoa.nomepes}</td>
        <td>{pessoa.datanascim.split('T')[0]}</td>
        <td><UpdatePessoa pessoa={pessoa}/></td>
        <td><button className="btn btn-danger" onClick={() => deletePessoa(pessoa.idpes)}>DELETE</button></td>
      </tr>
    ))}
         
    </tbody>
  </table>
  </Fragment>
  )
};

export default ConsultarPessoa;