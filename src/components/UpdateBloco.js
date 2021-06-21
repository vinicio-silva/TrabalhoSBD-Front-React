import React, { Fragment, useState} from "react";

const UpdateBloco = ({ bloco }) => {
  const[idbloco,setIdbloco] = useState(bloco.idbloco);
  const[nomebloco,setNomebloco] = useState(bloco.nomebloco);

  const atualizaBloco = async(e) => {
    e.preventDefault();
    try {
      const body = { idbloco,nomebloco }
      const deleteBloco = await fetch(`http://localhost:5000/bloco/${bloco.idbloco}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(body) 
      });
      window.location = "/bloco";
    } catch (err) {
      console.error(err.message);
    }
  }

 return(
 <Fragment>
   
<button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${bloco.idbloco}`}>
  UPDATE
</button>
<div class="modal" id={`id${bloco.idbloco}`}>
  <div class="modal-dialog">
    <div class="modal-content">
       <div class="modal-header">
        <h4 className="InserirTitle">UPDATE BLOCO</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <p className="TituloInput">IDBLOCO</p>
        <input type="text" className="form-control" value={idbloco} onChange={(e) => setIdbloco(e.target.value)}/>
        <p className="TituloInput">NOMEBLOCO</p>
        <input type="text" className="form-control" value={nomebloco} onChange={(e)=> setNomebloco(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={(e) => atualizaBloco(e)}>UPDATE</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">FECHAR</button>
      </div>

    </div>
  </div>
</div>
 </Fragment>
 )
};

export default UpdateBloco;