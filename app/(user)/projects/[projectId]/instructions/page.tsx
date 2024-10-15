import CopyBtn from "@/components/copy-btn"
const page = ({ params }: { params: { projectId: string } }) => {
    if (!params.projectId) {
        return <div>Project not found</div>
    }
    if (!process.env.WIDGET_URL) {
        return <div>Widget URL not found</div>
    }
    return (
        <div>
            <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
            <p className="text-lg text-secondary">Embed the widget on your website to start collecting feedback.</p>
            <div className="bg-blue-950 mt-6 p-6 rounded-md relative">
                <code className="text-white">
                    {`<my-widget project-id="${params.projectId}"></my-widget>`}
                    <br />
                    {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
                </code>
                <CopyBtn text={`<my-widget project="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`} />
            </div>
        </div>
    )
}
export default page;