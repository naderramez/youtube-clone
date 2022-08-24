import React, { ChangeEventHandler, FC, useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { useIsSmallScreen } from '../../customHooks/useIsSmallScreen';
import "./SearchInput.scss";

interface Props {
  onSearch?: (value: string) => void;
}

const SearchInput: FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState<string>("");

  const isSmallScreen = useIsSmallScreen();

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setInput(value);
  }

  return (
    <div className='search-input-container'>
      <input value={input} onChange={onInputChange} />
      <div className='search-btn-container'>
        <BiSearch color={isSmallScreen ? "white" : "black"} />
      </div>
    </div>
  )
}

export default SearchInput;
