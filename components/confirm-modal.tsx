"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"

interface ConfirmModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
    disabled?: boolean;
    header: string;
    description?: string;
}

const ConfirmModal = ({
    children,
    onConfirm,
    disabled,
    header,
    description,
}: ConfirmModalProps) => {

    const handleConfirm = () => {
        onConfirm()
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{header}</AlertDialogTitle>
                </AlertDialogHeader>
                {description && (
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                )}
                <AlertDialogFooter>
                    <AlertDialogAction
                        disabled={disabled}
                        onClick={handleConfirm}
                    >
                        Confirm
                    </AlertDialogAction>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ConfirmModal