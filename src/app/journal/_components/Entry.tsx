import formatDate from '@/lib/dates'

type EntryProps = {
  text: string
  date: Date
  _id: string
}

export const Entry = ({ text, date }: EntryProps) => {
  return (
    <li className="max-w-[300px]">
      <div className="w-full border border-oxfordBlue rounded-md shadow-2xl flex flex-col p-4 gap-4 bg-platinum-100">
        <span className="text-xl">{text}</span>
        <span className="text-sm italic">{formatDate(date)}</span>
      </div>
    </li>
  )
}