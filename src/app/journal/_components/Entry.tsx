
type EntryProps = {
  text: string
  _id: string
}

export const Entry = ({ text }: EntryProps) => {
  return (
    <li>
      <div className="border border-oxfordBlue">
        {text}
      </div>
    </li>
  )
}