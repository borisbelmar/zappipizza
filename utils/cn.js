import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export default function cn(...classes) {
  return clsx(twMerge(...classes))
}
