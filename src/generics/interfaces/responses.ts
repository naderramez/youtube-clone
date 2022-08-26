export interface IThumbnail {
  url: string;
  width?: number;
  height?: number;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default?: IThumbnail;
    medium?: IThumbnail;
    high?: IThumbnail;
  }
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export type TSearchResultKind = "youtube#channel" | "youtube#video" | "youtube#playlist";

export interface ISearchResult {
  kind: "youtube#searchResult";
  etag: string;
  id: {
    kind: TSearchResultKind;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  }
  snippet: ISnippet
}

export interface ISearchListResponse {
  kind: "youtube#searchListResponse";
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  },
  items: ISearchResult[]
}
