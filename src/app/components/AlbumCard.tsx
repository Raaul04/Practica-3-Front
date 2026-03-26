"use client";

import { Album } from "@/app/types";
import { useRouter } from "next/navigation";
import './AlbumCard.css'

type AlbumCardProps = {
    album: Album;

};

const AlbumCard = ({ album }: AlbumCardProps) => {

    const router = useRouter()

    return (
        
        <div className="ALBUMCARD">
            <h2 className="NombreALBUM">{album.collectionName}</h2>
            <h3 className="NombreARTISTA">{album.artistName}</h3>
            <div className="ALBUMINFO">
                <img src={album.artworkUrl60} alt={album.collectionName} className="ALBUMIMAGEN" />

            <button onClick={() => router.push("/albums")} className="BOTONCARD">← Volver</button>

            </div>
        </div>
    );
};

export default AlbumCard;