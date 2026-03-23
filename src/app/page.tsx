'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import './page.css'

const Home=()=>{
  const router=useRouter();

  const[search,setSearch]=useState('');

  return (
    <div className="container">
      <div className="card">
        <h1 className="titulo">Albums</h1>
        
        <div className="Buscador">
          <input
            type="text"
            placeholder="Buscar albums..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input"
          />

          <button className="button" >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;