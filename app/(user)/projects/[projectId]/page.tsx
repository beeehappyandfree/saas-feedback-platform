import { db } from "@/db";
import { eq } from "drizzle-orm";
import { projects } from "@/db/schema";
const Page = async ({params}: {params: {projectId: string}}) => {
    if(!params.projectId) {
        return <div>Project not found</div>
    }
    const project = await db.query.projects.findMany({
        where: (eq(projects.id, parseInt(params.projectId)))
    })
    console.log(project)
    
    return (
        <div>
            <h1>Project {params.projectId}</h1>
        </div>
    )
}

export default Page;