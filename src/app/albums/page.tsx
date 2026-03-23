'use client';
import { useState } from "react"
import { Album } from "../types"
import { useRouter } from "next/navigation";


const AlbumPage=()=>{

      const router=useRouter();
    
    const[results,setResults]=useState<Album[]>([])
    const [error,setError]=useState<string|null>(null)
    const [loading,setLoading]=useState(false)
    const[name,setName]=useState('')



    return (
        <div>
            <h1>Albums</h1>

            
            

                            <button
                    className="album-page-result-button"
                    style={{ marginTop: '20px' }}
                    onClick={() => router.push('/')}>
                    Volver al inicio
                </button>
        </div>
    )
}

export default AlbumPage