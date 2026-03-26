'use client'

import { useLista } from "@/app/context/MusicContext"
import { useRouter } from "next/navigation"
import './pageFavortios.css'

const AddTolList = () => {
    const { lista, deleteLista } = useLista()
    const router = useRouter()

    return (
       <div className="albums-page-container">
           <h1 className="titulo">Álbumes Favoritos</h1>
           
           <div className="album-page-results-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
               {lista.map((item) => (
                   <div key={item.collectionId} className="album-page-card">
                       <h2 className="titulo">{item.collectionName}</h2>
                       {item.artworkUrl60 && (
                           <img
                               src={item.artworkUrl60}
                               alt={`Imagen de ${item.collectionName}`}
                               style={{ borderRadius: '4px', maxWidth: '100%' }}
                           />
                       )}
                        <div className="botones">
                            <button
                                className="favorites-remove-button"
                                onClick={() => {
                                    deleteLista(item.collectionId);
                                }}
                            >
                                Eliminar de lista
                            </button>
                        </div>
                   </div>
               ))}
           </div>
                 
           <div className="botones" style={{ marginTop: '20px' }}>
               <button 
                  className="btn-volver" 
                  onClick={() => router.push('/')}>
                  Volver al inicio
               </button>
           </div>
       </div>
    )
}

export default AddTolList