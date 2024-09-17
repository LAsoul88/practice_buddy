import { Suspense } from 'react'
import { JournalForm } from '@/app/journal/_components/JournalForm'
import { Entry } from '@/app/journal/_components/Entry'
import { getEntries } from '@/lib/actions'

export default async function Journal({ params }: Params) {

	const entries: JournalEntry[] | string = await getEntries(`/entries/${params.id}`)

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
					(<ul className="flex flex-col w-1/2 gap-4">
						{ entries.map(entry => {
							return <Entry {...entry} key={entry._id} />
						})}
					</ul>)
					: <p>{entries}</p>
				}
			</Suspense>
		</div>
	)
}
