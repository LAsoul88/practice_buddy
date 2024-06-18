import { MetronomeTool } from '@/app/(component)/MetronomeTool'
export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Practice Buddy</h1>
      <MetronomeTool />
    </main>
  )
}
