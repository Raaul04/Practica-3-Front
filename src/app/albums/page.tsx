'use client';
import { useState } from "react"
import { Album } from "../types"
import { useRouter } from "next/navigation";
import { getAlbumByNameArtist } from "../lib/albums";
import { useLista } from "../context/MusicContext";
import './page.css'


const AlbumPage = () => {
    const router = useRouter()
    const { addLista} = useLista();
    
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
        <div className="albums-page">
            <h1 className="albums-title">Albums</h1>

            <div className="albums-controls">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                />

                <button className="search-button" onClick={HandleBotton} disabled={loading}>
                    {loading ? 'Buscando...' : 'Buscar'}
                </button>


                <button
                    className="album-page-result-button"
                    onClick={() => router.push('/')}>
                    Volver al inicio
                </button>
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="albums-results">
                {results.map((album) => (
                    <div key={album.collectionId || album.artistId} className="ablum-item">
                        <h2 className="album-name">{album.collectionName}</h2>
                        <img src={album.artworkUrl60} alt={album.collectionName}></img>
                        <button
                            className="album-button"
                            onClick={() => router.push(`/albums/${album.collectionId}`)}
                        >
                            Ver detalle
                        </button>

                        <button
                            className="album-page-result-button"
                            onClick={() => {
                                addLista(album);
                            }}
                        >
                            añadir a lista
                        </button>


                    </div>
                ))}
            </div>
        </div>
    )
}

export default AlbumPage