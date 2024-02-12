import Image from 'next/image'
import { CreateOrganization } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from '@/components/ui/dialog'

const EmptyOrg = () => {
    return (
        <div className='h-full flex flex-col items-center justify-center'>
            <Image
                src='/elements.svg'
                alt='Empty Orgs'
                width={200}
                height={200}
            />
            <h2 className='text-2xl font-semibold mt-6'>
                Welcome to MiroBoard
            </h2>
            <p className='text-muted-foreground text-gray-500 mt-2 text-center text-sm'>
                Create your first organization to get started
            </p>
            <div className='mt-6'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size={'lg'}>Create Organization</Button>
                    </DialogTrigger>
                    <DialogContent className='p-0 bg-transparent border-none max-w-[480px]'>
                        <CreateOrganization />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default EmptyOrg