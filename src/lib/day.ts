import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

export default function dateFormat(date: Date) {
  return dayjs(date).format(`MMM Do YY - h:mma`)
}