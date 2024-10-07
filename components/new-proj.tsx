import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

const NewProjBtn = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-full">
                    <Plus className="w-4 h-4 mr-3"/>
                    Create New Project
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-md">
                <DialogHeader>
                    <DialogTitle>New Project</DialogTitle>
                    <DialogDescription>
                        Create a new project to get started.
                    </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col gap-4">
                    <Label htmlFor="name">Project Name</Label>
                    <Input type="text" id="name" placeholder="Project Name" />
                    <Label htmlFor="url">URL</Label>
                    <Input type="text" id="url" placeholder="https://example.com" />
                    <Textarea id="description" placeholder="Describe your project (Optional)" />
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default NewProjBtn