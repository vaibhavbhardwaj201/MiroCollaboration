import Image from 'next/image'


const EmptySearch = () => {
    return (
        <div className='h-full flex flex-col items-center justify-center'>
            <Image
                src='/empty-search.svg'
                alt='Empty Orgs'
                width={140}
                height={140}
            />
            <h2 className='text-2xl font-semibold mt-6'>
                No results found
            </h2>
            <p className='text-muted-foreground text-gray-500 mt-2 text-center text-sm'>
                Try searching for something else
            </p>
        </div>
    )
}

export default EmptySearch