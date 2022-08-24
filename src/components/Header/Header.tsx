import React, { FC } from 'react'
import { AiFillYoutube } from "react-icons/ai";
import { SiYoutubetv } from "react-icons/si";
import "./Header.scss";
import SearchInput from '../SearchInput/SearchInput';
import { useIsSmallScreen } from '../../customHooks/useIsSmallScreen';

const Header: FC = () => {

  const isSmallScreen = useIsSmallScreen(460);

  return (
    <div className='header-container'>
      <div className='header-container__youtube-icon'>
        {
          isSmallScreen ?
          <AiFillYoutube size={50} color="white" /> :
          <SiYoutubetv size={80} color="var(--red)" />
        }
      </div>
      <div className='header-container__search-input-container'>
        <SearchInput />
      </div>
    </div>
  )
}

export default Header;
