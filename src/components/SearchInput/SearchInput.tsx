import React, {
  ChangeEventHandler,
  FC,
  KeyboardEventHandler,
  useRef,
  useState,
} from "react";
import { BiSearch } from "react-icons/bi";
import { useIsSmallScreen } from "../../customHooks/useIsSmallScreen";
import "./SearchInput.scss";

interface Props {
  onSearch: (value: string) => void;
}

const SearchInput: FC<Props> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const searchInputRef = useRef<any>();

  const isSmallScreen = useIsSmallScreen();

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      (searchInputRef.current as HTMLElement).click();
    }
  };

  return (
    <div className="search-input-container">
      <input
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
      <div
        className="search-btn-container"
        ref={searchInputRef}
        onClick={() => onSearch(inputValue)}
      >
        <BiSearch color={isSmallScreen ? "white" : "black"} />
      </div>
    </div>
  );
};

export default SearchInput;
