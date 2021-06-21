import React, {Fragment, useState} from "react";

const InserirPessoa = () => {

  const[idpes,setIdpes] = useState('');
  const[nomepes,setNomepes] = useState('');
  const[datanascim,setDatanascim] = useState(null);


const onSubmitForm = async (e) => {
  e.preventDefault();
  try {
    const body = { idpes,nomepes,datanascim };
    const response = await fetch("http://localhost:5000/pessoa",{
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    console.log(response);
    window.location = "/pessoa";
  } catch (err) {
    console.error(err.message);
  }
}

  return (
  <Fragment>
    <h1 className="InserirTitle">INSERIR PESSOA</h1>
    <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={onSubmitForm}>
      <p className="TituloInput">IDPESSOA</p>
      <input 
      type="text" 
      required
      className="form-control w-50" 
      value={idpes}
      onChange={(e) => setIdpes(e.target.value)}
      />
      <p className="TituloInput">NOMEPESSOA</p>
      <input 
      type="text"
      required 
      className="form-control w-50 "
      value={nomepes}
      onChange={(e) => setNomepes(e.target.value)}
      />
      <p className="TituloInput">DATANASCIMENTO</p>
      <input 
      type="text"
      className="form-control w-50 "
      value={datanascim}
      onChange={(e) => setDatanascim(e.target.value)}
      />

<button className="btn btn-success mt-5 mb-5 w-50">INSERIR</button>

    </form>
  </Fragment>
 
  );
 
};

export default InserirPessoa;