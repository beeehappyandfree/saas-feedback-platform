'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { Menu, X, Folder, CreditCard } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
const HeaderMenu = () => {
    const [open, setOpen] = useState<boolean>(false)
    const toggleMenu = () => setOpen(prevOpen => !prevOpen)
    return (
        <DropdownMenu open={open} onOpenChange={toggleMenu}>
            <DropdownMenuTrigger asChild>
                <Button onClick={toggleMenu} className="mr-4" variant="secondary">
                    { open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" /> }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex">
                    <Folder className="h-5 w-5 mr-2" /> <span>Projects</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/payments" className="flex">
                        <CreditCard className="h-5 w-5 mr-2" /><span>Billing</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default HeaderMenu