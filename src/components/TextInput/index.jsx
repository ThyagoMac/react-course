import "./styles.css"

export const TextInput = ({ searchValue, handleSearch, placeholder }) => {
  return (
    <input
      className="text-input"
      type="search"
      placeholder={placeholder}
      onChange={handleSearch}
      value={searchValue}
    />
  )
}