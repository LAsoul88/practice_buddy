import Link from 'next/link'
import { DroneTool } from '@/app/_components/DroneTool'
import { MetronomeTool } from '@/app/_components/MetronomeTool'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <h1 className="">Welcome to Practice Buddy!</h1>
      <p className="text-center text-lg my-12 md:mx-36">This application is developed with musicians in mind. I want to provide a suite of tools to promote a rapid, structured approach to learning. <br/>So far, we have a drone and metronome below to use. Stay tuned as we will be adding a practice journal, tuner, and other features in the coming weeks!</p>
      <div className="flex flex-col md:flex-row items-center text-center w-full">
        <section className="flex flex-col items-center w-full min-w-[350px] min-h-[260px]" role="region" aria-label="Drone">
          <h2>Drone</h2>
          <DroneTool />
        </section>
        <section className="flex flex-col items-center w-full min-w-[350px] min-h-[260px]" role="region" aria-label="Metronome">
          <h2>Metronome</h2>
          <MetronomeTool />
        </section>
      </div>
      <Link href={'/journal/66a04214f379ab6c7ea7246f'}>Journal</Link>
    </main>
  )
}
