import Link from 'next/link'
import { DroneTool } from '@/app/_components/DroneTool'
import { MetronomeTool } from '@/app/_components/MetronomeTool'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <h1 className="">Welcome to Practice Buddy</h1>
      <div className="flex flex-col md:flex-row items-center text-center w-full">
        <section className="flex flex-col items-center w-full min-w-[350px] min-h-[260px]" role="region" aria-label="Drone">
          <h2>Drone</h2>
          <DroneTool />
        </section>
        <section className="flex flex-col items-center w-full min-w-[350px] min-h-[260px]" role="region" aria-label="Metronome">
          <h2>Metronome</h2>
          <MetronomeTool />
        </section>
        {/* <section className="flex flex-col items-center w-1/3 min-h-[260px]" role="region" aria-label="Practice Journal">
          <h2>Practice Journal</h2>
        </section> */}
      </div>
      <Link href="/journal">Journal</Link>
    </main>
  )
}
