import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

import { createProject } from "@/actions/createProject"
import SubmitProjBtn from "./submit-proj"

const NewProjBtn = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-full">
                    <Plus className="w-4 h-4"/>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-md">
                <DialogHeader>
                    <DialogTitle>New Project</DialogTitle>
                    <DialogDescription>
                        Create a new project to get started.
                    </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col gap-4" action={createProject}>
                    <Label htmlFor="name">Project Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Project Name" />
                    <Label htmlFor="url">URL</Label>
                    <Input type="text" name="url" id="url" placeholder="https://example.com" />
                    <Textarea name="description" id="description" placeholder="Describe your project (Optional)" />
                    <SubmitProjBtn />
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default NewProjBtn