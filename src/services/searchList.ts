import { ISearchListResponse } from "../generics/interfaces/responses";
import { getRequest } from "./axiosClient";

const searchListURL = "search";

export interface ISearchListRequestParams {
  part: "snippet";
  forContentOwner?: boolean;
  forDeveloper?: boolean;
  forMine?: boolean;
  relatedToVideoId?: string;
  channelId?: string;
  channelType?: string;
  eventType?: string;
  location?: string;
  locationRadius?: string;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  order?: string;
  pageToken?: string;
  publishedAfter?: string;
  publishedBefore?: string;
  q?: string;
  regionCode?: string;
  relevanceLanguage?: string;
  safeSearch?: string;
  topicId?: string;
  type?: string;
  videoCaption?: string;
  videoCategoryId?: string;
  videoDefinition?: string;
  videoDimension?: string;
  videoDuration?: string;
  videoEmbeddable?: string;
  videoLicense?: string;
  videoSyndicated?: string;
  videoType?: string;
}

export type ISearchListParams = Omit<ISearchListRequestParams, "part">;

export const getSearchList = (params: ISearchListParams = {}) => {
  const requestParams: ISearchListRequestParams = {
    part: "snippet",
    ...params
  }

  return getRequest<ISearchListResponse>(searchListURL, requestParams);
}
