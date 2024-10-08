import Loading from "./loading"
import { Suspense } from "react"
export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto w-full max-w-screen-xl py-20">
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </div>
  )
}