import React, { createContext, Dispatch, FC, useState } from "react";
import Header from "../components/Header/Header";
import HomeContent from "../components/HomeContent/HomeContent";
import { ISearchListResponse } from "../generics/interfaces/responses";

export interface ISearchResultContext {
  searchResult: ISearchListResponse | null;
  setSearchResult: Dispatch<React.SetStateAction<ISearchListResponse | null>>;
}

export const SearchResultContext = createContext<
  ISearchResultContext | undefined
>(undefined);

const Home: FC = () => {
  const [searchResult, setSearchResult] = useState<ISearchListResponse | null>(
    null
  );
  return (
    <SearchResultContext.Provider value={{ searchResult, setSearchResult }}>
      <div>
        <Header />
        <HomeContent />
      </div>
    </SearchResultContext.Provider>
  );
};

export default Home;
