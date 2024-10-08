import NewProjBtn from "@/components/new-proj"
import { db } from "@/db"
import { projects } from "@/db/schema"
import { auth } from "@clerk/nextjs/server"
import ProjectsList from "./projects-list"

export default async function Page() {
    const { userId } = auth();
    console.log(userId);
    const allProjects = await db.select().from(projects);
    console.log(allProjects);
    return (
        <div>
        <div className="flex items-center justify-center gap-3">
            <h1 className="text-3xl my-4 font-bold text-center">Your Projects</h1>
            <NewProjBtn />
        </div>
        <ProjectsList projects={allProjects} />
        </div>
    )
}