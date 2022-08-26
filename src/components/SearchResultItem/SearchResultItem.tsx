import React, { FC } from "react";
import { ISnippet } from "../../generics/interfaces/responses";
import { formatDate } from "../../utils/dateTimeUtils";
import "./SearchResultItem.scss";

interface Props {
  type: "video" | "channel";
  data: ISnippet;
}

const SearchResultItem: FC<Props> = ({ data }) => {
  const formattedDate = formatDate(data.publishedAt);

  return (
    <div className="videoContainer">
      <div className="videoContainer__picture">
        <picture>
          <source media="(min-width:800px)" src={data.thumbnails.high?.url} />
          <source media="(min-width:650px)" src={data.thumbnails.medium?.url} />
          <img src={data.thumbnails.default?.url} alt={data.title}></img>
        </picture>
      </div>

      <div className="videoContainer__description">
        <div className="videoContainer__description__title">{data.title}</div>
        <div>
          {data.channelTitle} | {formattedDate}
        </div>
        <div>{data.description}</div>
      </div>
    </div>
  );
};

export default SearchResultItem;
