import { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'

export const Checkmark = () => {
  const [selectedVersion, setSelectedVersion] = useState(null)

  const versions = [
    { name: 'version 1.0', code: 'NY' },
    { name: 'version 1.2', code: 'RM' },
    { name: 'version 1.3', code: 'LDN' },
    { name: 'version 2.0', code: 'IST' },
    { name: 'version 2.1', code: 'PRS' }
  ]

  return (
    <div className="checkmark-container">
      <Dropdown
        value={selectedVersion}
        onChange={(e) => setSelectedVersion(e.value)}
        options={versions}
        optionLabel="name"
        placeholder="Historial de versiones"
        className="version-dropdown"
        checkmark={true}
        highlightOnSelect={false}
      />
    </div>
  )
}
