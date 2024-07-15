interface EntryListProps {
  initEntries: JournalEntry[]
}

export const EntryList = ({ initEntries }: EntryListProps) => {
  return (
    <ul className="flex flex-col w-1/2">
      { initEntries.map(entry => {
        return <li key={entry._id}>{entry.text}</li>
      })}
    </ul>
  )
}