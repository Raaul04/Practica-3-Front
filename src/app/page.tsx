'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import './page.css'

const Home=()=>{
  const router=useRouter();



  const handleAlbums=()=>{

      router.push(`/albums`)
  }


  return (
    <div className="container">
      <div className="card">
        <h1 className="titulo">Albums</h1>
        
        <div className="Buscador">
          <button className="button" onClick={handleAlbums}>
            Albums
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