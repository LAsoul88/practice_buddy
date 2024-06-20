import { DroneTool } from '@/components/DroneTool'
import { MetronomeTool } from '@/components/MetronomeTool'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around bg-celadon text-oxford-blue">
      <h1 className="">Welcome to Practice Buddy</h1>
      <div className="flex items-center text-center w-full">
        <section className="flex flex-col items-center w-1/3">
          <h2>Drone</h2>
          <DroneTool />
        </section>
        <section className="flex flex-col items-center w-1/3 max-w-[390px] min-w-[260px]">
          <h2>Metronome</h2>
          <MetronomeTool />
        </section>
        <section className="flex flex-col items-center w-1/3">
          <h2>Practice Journal</h2>
        </section>
      </div>
    </main>
  )
}
