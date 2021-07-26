import React, {useState} from 'react'

export default function App() {

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');  const armazenar =(chave, valor)=>{
    localStorage.setItem("email", email);
    localStorage.setItem("nome", nome);
    };

  return (
<div>
    <div className='App'>
        </div>
<div>
<label> Digite seu nome  </label>
</div>
<input type="nome" id="nome" placeholder="sophie" onChange={(e)=>setNome(e.target.value)}/>
<div>
<label> Digite seu nome  </label>
</div>
<input type="email" id="email" placeholder="sophie@example.com" onChange={(e)=>setEmail(e.target.value)}/>
<button onClick={()=> armazenar ('Email', email)} class="waves-effect waves-light btn pink accent-2 ">Enviar</button>
</div>
  );
}
