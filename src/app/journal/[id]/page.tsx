import { Suspense } from 'react'
import { JournalForm } from '../_components/JournalForm'
import { GET } from '@/lib/fetch'

export default async function Journal({ params }: Params) {

	const entries: JournalEntry[] | string = await GET(`/entries/${params.id}`)

	return (
		<div className="w-full h-full flex">
			<div className="flex flex-col w-1/2 h-full items-center p-10 space-y-3">
				<h2>Practice Journal</h2>
				<JournalForm 
					params={params}
				/>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				{ typeof entries !== 'string' ?
					(<ul className="flex flex-col w-1/2">
						{ entries.map(entry => {
							return <li key={entry._id}>{entry.text}</li>
						})}
					</ul>)
					: <p>{entries}</p>
				}
			</Suspense>
		</div>
	)
}
