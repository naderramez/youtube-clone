import React, { Context, FC, useContext } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { SiYoutubetv } from "react-icons/si";
import "./Header.scss";
import SearchInput from "../SearchInput/SearchInput";
import { useIsSmallScreen } from "../../customHooks/useIsSmallScreen";
import { getSearchList, ISearchListParams } from "../../services/searchList";
import { ISearchResultContext, SearchResultContext } from "../../pages/Home";

const Header: FC = () => {
  const isSmallScreen = useIsSmallScreen(460);

  const { setSearchResult } = useContext(
    SearchResultContext as Context<ISearchResultContext>
  );

  const onSearch = (value: string) => {
    const requestParams: ISearchListParams = {
      q: value,
      maxResults: 25,
    };

    getSearchList(requestParams).then((res) => {
      console.log("res", res);
      setSearchResult(res.data);
    });
  };

  return (
    <div className="header-container">
      <div className="header-container__youtube-icon">
        {isSmallScreen ? (
          <AiFillYoutube size={50} color="white" />
        ) : (
          <SiYoutubetv size={80} color="var(--red)" />
        )}
      </div>
      <div className="header-container__search-input-container">
        <SearchInput onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Header;
