import formatDate from '@/lib/dates'

type EntryProps = {
  text: string
  date: Date
  _id: string
}

export const Entry = ({ text, date }: EntryProps) => {
  return (
    <li className="max-w-[300px]">
      <div className="w-full border border-oxfordBlue rounded-md shadow-xl flex flex-col p-4 gap-4">
        <span className="">{text}</span>
        <span className="">{formatDate(date)}</span>
      </div>
    </li>
  )
}