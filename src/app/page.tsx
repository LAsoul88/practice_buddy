import { MetronomeTool } from '@/components/MetronomeTool'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around bg-celadon text-oxford-blue">
      <h1 className="">Welcome to Practice Buddy</h1>
      <section className="flex flex-col items-center w-1/2 max-w-[390px] min-w-[260px]">
        <h2>Metronome</h2>
        <MetronomeTool />
      </section>
    </main>
  )
}
