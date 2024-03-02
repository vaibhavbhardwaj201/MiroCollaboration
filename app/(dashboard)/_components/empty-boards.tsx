"use client"

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useOrganization } from '@clerk/nextjs'
import { toast } from 'sonner'

import { api } from "@/convex/_generated/api"
import { Button } from '@/components/ui/button'
import { useApiMutation } from '@/hooks/use-api-mutation'


const EmptyBoards = () => {
    const router = useRouter()
    const { organization } = useOrganization()
    const { mutate, pending } = useApiMutation(api.board.create)

    const onClick = () => {

        if (!organization) return;

        mutate({
            orgId: organization.id,
            title: "Untitle",
        })
            .then((id) => {
                toast.success("Board created successfully")
                router.push(`/board/${id}`)
            })
            .catch((err) => {
                toast.error("Failed to create board")
            })
    }
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
                <Button disabled={pending} onClick={onClick} size={"lg"}>
                    Create Board
                </Button>
            </div>
        </div>
    )
}

export default EmptyBoards