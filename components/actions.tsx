"use client"

import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import { toast } from 'sonner';
import { Link2, Pencil, Trash2 } from 'lucide-react';

import { useApiMutation } from '@/hooks/use-api-mutation';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { api } from '@/convex/_generated/api';
import ConfirmModal from './confirm-modal';
import { Button } from './ui/button';
import { useRenameModal } from '@/store/use-rename-modal';

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

    const { onOpen } = useRenameModal()
    const { mutate, pending } = useApiMutation(api.board.remove)

    const onCopyLink = () => {
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`
        )
            .then(() => toast.success('Link copied'))
            .catch(() => toast.error('Failed to copy link'))
    }

    const onDelete = () => {
        mutate({ id })
            .then(() => toast.success('Board deleted'))
            .catch(() => toast.error('Failed to delete board'))
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
                <DropdownMenuItem className='p-3 cursor-pointer' onClick={() => onOpen(id, title)}>
                    <Pencil className='h-4 w-4 mr-2' />
                    Rename
                </DropdownMenuItem>
                <ConfirmModal
                    header='Delete Board?'
                    description={`Are you sure you want to delete "${title}"?`}
                    disabled={pending}
                    onConfirm={onDelete}
                >
                    <Button
                        variant={'ghost'}
                        className='p-3 cursor-pointer text-sm w-full justify-start font-normal'
                    // onClick={onDelete}
                    >
                        <Trash2 className='h-4 w-4 mr-2' />
                        Delete
                    </Button>
                </ConfirmModal>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Actions