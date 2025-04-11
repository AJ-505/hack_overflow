type InputGroupProps = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  errorMessage?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputGroup = ({label, type, id, placeholder, minLength, maxLength, errorMessage, onBlur, required}: InputGroupProps) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="ml-3 text-white">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        onBlur={onBlur}
        required={required}
        className="w-full block border-none rounded-md p-[0.7rem] bg-[#3b354c] text-white text-base" />
      {errorMessage && (
        <span className="block text-[#ff4444] text-xs ml-3 mt-1">{errorMessage}</span>
      )}
    </div>
  )
}

export default InputGroup;