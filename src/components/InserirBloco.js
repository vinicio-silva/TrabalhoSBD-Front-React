import React, {Fragment, useState} from "react";

const InserirBloco = () => {

const[idbloco,setIdbloco] = useState('');
const[nomebloco,setNomebloco] = useState('');


const onSubmitForm = async (e) => {
  e.preventDefault();
  try {
    const body = { idbloco, nomebloco };
    const response = await fetch("http://localhost:5000/bloco",{
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    console.log(response);
    window.location = "/bloco";
  } catch (err) {
    console.error(err.message);
  }
}

  return (
  <Fragment>
    <h1 className="InserirTitle">INSERIR BLOCO</h1>
    <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={onSubmitForm}>
      <p className="TituloInput">IDBLOCO</p>
      <input 
      type="text" 
      required
      className="form-control w-50" 
      value={idbloco}
      onChange={(e) => setIdbloco(e.target.value)}
      />
      <p className="TituloInput">NOMEBLOCO</p>
      <input 
      type="text"
      required 
      className="form-control w-50 "
      value={nomebloco}
      onChange={(e) => setNomebloco(e.target.value)}
      />

<button className="btn btn-success mt-5 mb-5 w-50">INSERIR</button>

    </form>
  </Fragment>
 
  );
 
};

export default InserirBloco;