import { Link } from "react-router-dom";
import Select from 'react-select'
import { useState } from "react";


const Home = () => {
  
  const[selected,setSelected] = useState('');

  const options = [
    { value: 'bloco', label: 'Bloco' },
    { value: 'pessoa', label: 'Pessoa' },
  ]
  console.log(selected);
  return(
    <div className="Home">
      <h1 className="mt-5">ESCOLHA A TABELA</h1>
      <div className="h3 mt-5">
      </div>
      <div class="react-select-container">
      
      </div>     <Select placeholder="Selecione a tabela..." options={options} onChange={(e) => setSelected(e.value)}/>
      <button className="btn btn-primary mt-5 mb-5 w-25">
      <Link className="Links" to={{pathname: `/${selected}`}}>CONSULTAR</Link>
      </button>   
      
    </div>
  
  );
}
export default Home;