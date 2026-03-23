"use client";

import { Album } from "@/app/types";
import { useRouter } from "next/navigation";

type AlbumCardProps = {
    album: Album;

};

const AlbumCard = ({ album }: AlbumCardProps) => {

    const router = useRouter()

    return (
        <div className="album">

            <button onClick={() => router.push("/")}>← Volver</button>
            <h2 className="NombreCocktel">{album.collectionName}</h2>
            <h3 className="NombreArtista">{album.artistName}</h3>
            <div className="cocktailinfo">
                <img src={album.artworkUrl60} alt={album.collectionName} className="cocktailimagen" />

            </div>
        </div>
    );
};

export default AlbumCard;