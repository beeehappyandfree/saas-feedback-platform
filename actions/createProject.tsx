'use server'

import { db } from "@/db"
import { projects } from "@/db/schema"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export async function createProject(formData: FormData) {
    const { userId } = auth();
    if (!userId) {
        throw new Error("User not logged in");
    }
    const project = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        url: formData.get('url') as string,
        userId: userId
    }
    
    const [newProject]= await db.insert(projects).values(project).returning({ insertedId: projects.id });
    console.log(newProject);
    return redirect(`/projects/instructions/${newProject.insertedId}`);
}