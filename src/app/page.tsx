'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import './page.css'

const Home=()=>{
  const router=useRouter();

  const[search,setSearch]=useState('');
  const[error,setError]=useState<string|null>(null)

  const handleAlbums=()=>{
      const buscador=search.trim()

      if(!buscador){
        setError('Escribe el nombre de un cocktail para buscar.');
      return;
      }

      setError(null)

      router.push(`/albums`)
  }


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


          <button
            className="cocktail-page-result-button"
            onClick={() => {
                router.push('/favoritos');
            }}>
            Favoritos
        </button>
        </div>
      </div>
    </div>
  );
}

export default Home;