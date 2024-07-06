import { JournalForm } from './_components/JournalForm'
import { GET, POST } from '@/lib/fetch'

export default async function Journal() {
	// const entries = await GET('/journal')
	const entries = ['I practiced Giant Steps at 200bpm', 'Portrait of Tracy just getting comfortable with harmonics']

	const createEntry = async (body: any) => {
		'use server'
		await POST('/journal', body)
	}

	return (
		<div className="w-full h-full flex">
			<div className="flex flex-col w-1/2 h-full items-center p-10 space-y-3">
				<h2>Practice Journal</h2>
				<JournalForm 
					submit={createEntry}
				/>
			</div>
			<div className="flex flex-col w-1/2">
				{entries.map((entry: string) => {
					return <div key={entry}>{entry}</div>
				})}
			</div>
		</div>
	)
}
