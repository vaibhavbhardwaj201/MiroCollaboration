import { Button } from '@/components/ui/button'
import Image from 'next/image'


const EmptyBoards = () => {
    return (
        <div className='h-full flex flex-col items-center justify-center'>
            <Image
                src='/note.svg'
                alt='Empty Orgs'
                width={110}
                height={110}
            />
            <h2 className='text-2xl font-semibold mt-6'>
                Create your first board
            </h2>
            <p className='text-muted-foreground text-gray-500 mt-2 text-center text-sm'>
                Start by creating a board to get started
            </p>
            <div className="mt-6">
                <Button size={"lg"}>
                    Create Board
                </Button>
            </div>
        </div>
    )
}

export default EmptyBoards