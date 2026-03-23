'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { Album } from '../types';

type ListaContextType = {
    lista: Album[];

    addLista: (item: Album) => void;
    deleteLista:(id: number) => void
};

const ListaContext = createContext<ListaContextType|null>(null)

export const ListaProvider=({children}:{children:ReactNode})=>{
    const [lista,setLista]=useState<Album[]>([])

    const addLista=(item:Album)=>{
        if (!lista.some(c => c.collectionId === item.collectionId)) {
            setLista([...lista, item])
        }
    }

    const deleteLista = (id: number) => {
        setLista(lista.filter(c => c.collectionId !== id));
    };

    return(
        <ListaContext.Provider value={{lista, addLista, deleteLista}}>
            {children}
        </ListaContext.Provider>
    )
}



export const useLista =() =>{
    const context = useContext(ListaContext);
    if(!context){
        throw new Error('tsx out of ListaProvider');
    }
    return context
}