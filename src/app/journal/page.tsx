import { JournalForm } from './_components/JournalForm'
import { GET, POST } from '@/lib/fetch'

export default async function Journal() {

	const createEntry = async (body: any) => {
		'use server'
		await POST('/entries', body)
	}

	const getEntries = async () => {
    'use server'
		console.log('this got called')
    return await GET('/entries')
  }

	const entries: JournalEntry[] = await getEntries()

	return (
		<div className="w-full h-full flex">
			<div className="flex flex-col w-1/2 h-full items-center p-10 space-y-3">
				<h2>Practice Journal</h2>
				<JournalForm 
					submit={createEntry}
				/>
			</div>
			<ul className="flex flex-col w-1/2">
				{ entries.map(entry => {
					return <li key={entry._id}>{entry.text}</li>
				})}
			</ul>
		</div>
	)
}
