import { cn } from '../utils'

type Options = {
  value: string
  label: string
}

type SelectProps = {
  id: string
  required?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  error?: string
  className?: string
  options: Options[]
  onChange: () => void
}

export const Select = (props: SelectProps) => {
  const { id, required, size = 'md', error, className, options, onChange } = props

  return (
    <select
      id={id}
      required={required}
      className={cn(`select-${size}`, error && 'error', className)}
      onChange={() => onChange()}
    >
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
