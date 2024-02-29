"use client"

import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import { toast } from 'sonner';
import { Link2 } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface ActionsProps {
    children: React.ReactNode;
    side?: DropdownMenuContentProps['side'];
    sideOffset?: DropdownMenuContentProps['sideOffset'];
    id: string;
    title: string;
}

const Actions = ({
    children,
    side,
    sideOffset,
    id,
    title,
}: ActionsProps) => {

    const onCopyLink = () => {
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`
        )
            .then(() => toast.success('Link copied'))
            .catch(() => toast.error('Failed to copy link'))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent
                side={side}
                sideOffset={sideOffset}
                onClick={(e) => e.preventDefault()}
                className='w-60'
            >
                <DropdownMenuItem className='p-3 cursor-pointer' onClick={onCopyLink}>
                    <Link2 className='h-4 w-4 mr-2' />
                    Copy Board link
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Actions