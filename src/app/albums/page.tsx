'use client';
import { useState } from "react"
import { Album } from "../types"
import { useRouter } from "next/navigation";
import { getAlbumByNameArtist } from "../lib/albums";
import { useLista } from "../context/MusicContext";


const AlbumPage=()=>{
    const router = useRouter()
    const { addLista } = useLista();


    const[results,setResults]=useState<Album[]>([])
    const [error,setError]=useState<string|null>(null)
    const [loading,setLoading]=useState(false)
    const[name,setName]=useState('')



    const HandleBotton = async () => {
        const artistName = name.trim()
        if (!artistName) {
            setError("Por favor, ingresa el nombre de un artista")
            return
        }
        setLoading(true)
        setError(null)
        try {
            const data = await getAlbumByNameArtist(artistName)
            setResults(data || [])
        } catch (e) {
            setError("Error al buscar los álbumes")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h1>Albums</h1>
            
            <input
                type="text"
                placeholder="Buscar..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
           />

           <button onClick={HandleBotton} disabled={loading}>
            {loading ? 'Buscando...' : 'Buscar'}
           </button>


            <button 
                className="album-page-result-button" 
                style={{ marginTop: '20px' }}
                onClick={() => router.push('/')}>
                Volver al inicio
            </button>
           
            {results.map((album) => (
                        <div key={album.collectionId || album.artistId} className="ablum-item">
                            <h2 className="album-name">{album.collectionName}</h2>
                            <img src={album.artworkUrl60} alt={album.collectionName}></img>
                            <button
                                className="album-button"
                                onClick={() => router.push(`/album/${album.collectionId}`)}
                            >
                                Ver detalle
                            </button>

                            <button
                                className="album-page-result-button"
                                onClick={() => {
                                    addLista(album);
                                    //router.push('/addToList');
                                }}
                            >
                                añadir a lista
                            </button>

                            
                        </div>
                    ))}
           
         
            
        </div>
    )
}

export default AlbumPage