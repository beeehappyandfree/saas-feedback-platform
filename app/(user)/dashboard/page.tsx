import NewProjBtn from "@/components/new-proj"
import { db } from "@/db"
import { projects } from "@/db/schema"
import { auth, currentUser } from "@clerk/nextjs/server"

export default async function Page() {
    const { userId } = auth();
    console.log(userId);
    const allProjects = await db.select().from(projects);
    console.log(allProjects);
    return (
        <div>
            <NewProjBtn />
        </div>
    )
}