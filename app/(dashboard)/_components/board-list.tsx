"use client"

import React from 'react'
import EmptySearch from './empty-search';
import EmptyFavourite from './empty-favourite';
import EmptyBoards from './empty-boards';

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favourites?: string;
    }
}

const BoardList = ({
    orgId,
    query,
}: BoardListProps) => {

    const data = []; // fetch data from server

    if (!data?.length && query.search) {
        return <EmptySearch />
    }
    if (!data?.length && query.favourites) {
        return <EmptyFavourite />
    }
    if (!data?.length) {
        return <EmptyBoards />
    }

    return (
        <div>{JSON.stringify(query)}</div>
    )
}

export default BoardList