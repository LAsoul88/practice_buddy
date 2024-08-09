import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { addEntry } from '@/lib/actions'

export const JournalForm = ({ params }: Params) => {
	return (
		<form className="flex flex-col" action={addEntry}>
			<Input
				inputType="textarea"
				id={'text'}
				name={'Text'}
				width={'200px'}
				height={'200px'}
			/>
			<Input
				id={'id'}
				name={'Id'}
				value={params.id}
				type={'hidden'}
			/>
			<Button>Submit</Button>
		</form>
	)
}
