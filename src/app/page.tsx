import { MetronomeTool } from '@/components/MetronomeTool'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Practice Buddy</h1>
      <section className="flex p-24 flex-col items-center">
        <h2>Metronome</h2>
        <MetronomeTool />
      </section>
    </main>
  )
}
