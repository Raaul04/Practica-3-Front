'use client'

import { useLista } from "@/app/context/MusicContext"
import { useRouter } from "next/navigation"

const AddTolList = () => {
    const { lista } = useLista()
    const router = useRouter()

    return (
       <div className="albums-page-container">
           <div className="album-page-card">
               <h1 className="album-page-title">Albums Favoritos</h1>
               
                   <div className="album-page-results-list">
                       {lista.map((item) => (
                           <div key={item.collectionId} className="cocktail-page-result-item">
                               <h2 className="cocktail-page-result-name">{item.collectionName}</h2>
                               {item.artworkUrl60 && (
                                   <img
                                       src={item.artworkUrl60}
                                       alt={`Imagen de ${item.collectionId}`}
                                       className="cocktail-page-result-image"
                                   />
                               )}
                           </div>
                       ))}
                   </div>
               
               <button 
                  className="album-page-result-button" 
                  style={{ marginTop: '20px' }}
                  onClick={() => router.push('/')}>
                  Volver al inicio
               </button>
           </div>
       </div>
    )
}

export default AddTolList