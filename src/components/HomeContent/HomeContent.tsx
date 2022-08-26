import React, { Context, FC, useContext } from "react";
import { ISearchResultContext, SearchResultContext } from "../../pages/Home";
import SearchResultItem from "../SearchResultItem/SearchResultItem";

const HomeContent: FC = () => {
  const { searchResult } = useContext(
    SearchResultContext as Context<ISearchResultContext>
  );

  const items = searchResult ? searchResult.items : [];

  return (
    <div>
      {items.map((searchResult) => {
        if (searchResult.id.kind === "youtube#video") {
          return (
            <SearchResultItem
              key={searchResult.id.videoId}
              type="video"
              data={searchResult.snippet}
            />
          );
        } else if (searchResult.id.kind === "youtube#channel") {
          return (
            <SearchResultItem
              key={searchResult.id.channelId}
              type="channel"
              data={searchResult.snippet}
            />
          );
        }
      })}
    </div>
  );
};

export default HomeContent;
