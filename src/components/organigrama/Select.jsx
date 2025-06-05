import { Dropdown } from 'primereact/dropdown'
import { useEffect, useState } from 'react'

export const Select = ({ selectedOption, setSelectedOption }) => {
  const [optionsSelect, setOptionsSelect] = useState([])

  useEffect(() => {
    setOptionsSelect(getSelectOptions(api))
  }, [])

  return (
    <div className="select select__container">
      <Dropdown
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.value)}
        options={optionsSelect}
        optionLabel="name"
        placeholder="Selecciona un nodo"
        className="select__dropdown"
      />
    </div>
  )
}
