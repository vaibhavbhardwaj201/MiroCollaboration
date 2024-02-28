import Image from 'next/image'


const EmptyFavourite = () => {
    return (
        <div className='h-full flex flex-col items-center justify-center'>
            <Image
                src='/empty-favorites.svg'
                alt='Empty Orgs'
                width={140}
                height={140}
            />
            <h2 className='text-2xl font-semibold mt-6'>
                No favourite boards
            </h2>
            <p className='text-muted-foreground text-gray-500 mt-2 text-center text-sm'>
                Mark your favourite boards to access them quickly
            </p>
        </div>
    )
}

export default EmptyFavourite