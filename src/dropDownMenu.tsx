import { useState } from 'react'
import style from './dropDownMenu.module.scss'
import downArrowIcon from '../../assets/images/downArrowIcon.svg'

interface DropdownProps {
  options: string[]
  defaultOption?: number
  selectedOption: (n: number) => void
  image?: string
  customStyle?: React.CSSProperties
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  image,
  defaultOption,
  selectedOption,
  customStyle,
}) => {
  const [selected, setSelected] = useState<number | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleOptionClick = (option: number) => {
    setSelected(option)
    selectedOption(option)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div
      className={style['dropdown-container']}
      onClick={toggleDropdown}
      style={customStyle}>
      <span className={style['dropdown-label']}>
        {selected ? options[selected] : options[defaultOption || 0]}
      </span>
      <img src={downArrowIcon} alt="downArrowIcon" />
      {isDropdownOpen && (
        <ul className={style['dropdown-menu']}>
          {options.map((option, index) => (
            <li key={option} onClick={() => handleOptionClick(index)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      {image && (
        <img src={`${image}`} alt="downArrowIcon" onClick={toggleDropdown} />
      )}
    </div>
  )
}

export default Dropdown
