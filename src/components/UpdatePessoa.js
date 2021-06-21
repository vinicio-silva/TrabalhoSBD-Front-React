import React, { Fragment, useState} from "react";

const UpdatePessoa = ({ pessoa }) => {
  const[idpes,setIdpes] = useState(pessoa.idpes);
  const[nomepes,setNomepes] = useState(pessoa.nomepes);
  const[datanascim,setDatanascim] = useState(pessoa.datanascim);

  const atualizaPessoa = async(e) => {
    e.preventDefault();
    try {
      const body = { idpes,nomepes,datanascim }
      const deletePessoa = await fetch(`http://localhost:5000/pessoa/${pessoa.idpes}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(body) 
      });
      window.location = "/pessoa";
    } catch (err) {
      console.error(err.message);
    }
  }

 return(
 <Fragment>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${pessoa.idpes}`}>
  UPDATE
</button>
<div class="modal" id={`id${pessoa.idpes}`}>
  <div class="modal-dialog">
    <div class="modal-content">
       <div class="modal-header">
        <h4 className="InserirTitle">UPDATE PESSOA</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <p className="TituloInput">IDPESSOA</p>
        <input type="text" className="form-control" value={idpes} onChange={(e) => setIdpes(e.target.value)}/>
        <p className="TituloInput">NOMEPESSOA</p>
        <input type="text" className="form-control" value={nomepes} onChange={(e)=> setNomepes(e.target.value)}/>
        <p className="TituloInput">DATANASCIMENTO</p>
        <input type="text" className="form-control" value={datanascim} onChange={(e)=> setDatanascim(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={(e) => atualizaPessoa(e)}>UPDATE</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">FECHAR</button>
      </div>
    </div>
  </div>
</div>
 </Fragment>
 )
};

export default UpdatePessoa;