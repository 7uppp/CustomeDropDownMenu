import { useState } from 'react'
import style from './dropDownMenu.module.scss'

interface DropDownMenuProps {
  options: string[]
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsDropDownOpen(false)
  }

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  return (
    <div className={style['dropdown-container']}>
      <button onClick={toggleDropDown}>
        <span>{selectedOption ? null : 'Click here'}</span>

        {isDropDownOpen && (
          <ul className={style['dropdown-menu']}>
            {options.map((option) => (
              <li key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
        {selectedOption && (
          <input type="text" value={selectedOption} readOnly />
        )}
      </button>
    </div>
  )
}

export default DropDownMenu
