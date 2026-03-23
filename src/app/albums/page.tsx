'use client';
import { useState } from "react"
import { Album } from "../types"


const AlbumPage=()=>{

    const[results,setResults]=useState<Album[]>([])
    const [error,setError]=useState<string|null>(null)
    const [loading,setLoading]=useState(false)
    const[name,setName]=useState('')



    return (
        <div>
            <h1>Albums</h1>
            
        </div>
    )
}

export default AlbumPage