'use client'

import AlbumCard from "@/app/components/AlbumCard";
import { getAlbumById } from "@/app/lib/albums";
import { Album } from "@/app/types";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import './pageDetalle.css'


const AlbumPageDetail = () => {

	const { id } = useParams()

	const [loading, setLoading] = useState(false);

	const [album, setAlbum] = useState<Album | null>(null)

	useEffect(() => {
		if (!id) return;

		setLoading(true);

		getAlbumById(id as string)
			.then((data) => setAlbum(data))
			.catch(() => setAlbum(null))
			.finally(() => setLoading(false));
	}, [id]);

	return (

		<div className="albums-page-id">
			<div className="albums-card-id">
				<h1 className="albums-titulo-id">Detalle del Album</h1>


				{loading && <p className="albums-loading-id">Buscando...</p>}

				{album && <AlbumCard album={album} />}
			</div>
		</div>
	)
}	

export default AlbumPageDetail
