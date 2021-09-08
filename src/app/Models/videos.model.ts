export interface YoutubeResponse {
  kind:          string;
  etag:          string;
  nextPageToken: string;
  pageInfo:      PageInfo;
  items:         Item[];
}

export interface Item {
  kind:    Kind;
  etag:    string;
  id:      string;
  snippet: Snippet;
}

export enum Kind {
  YoutubePlaylist = "youtube#playlist",
}

export interface Snippet {
  publishedAt:  Date;
  channelId:    ChannelID;
  title:        string;
  description:  string;
  thumbnails:   Thumbnails;
  channelTitle: ChannelTitle;
  localized:    Localized;
}

export enum ChannelID {
  UC9IKtxn9AIGelnYmwYr0Lxw = "UC9IKtxn9AIGelnYmwYr0Lxw",
}

export enum ChannelTitle {
  CodelyTVRedescubreLaProgramación = "CodelyTV - Redescubre la programación",
}

export interface Localized {
  title:       string;
  description: string;
}

export interface Thumbnails {
  default:  Default;
  medium:   Default;
  high:     Default;
  standard: Default;
  maxres:   Default;
}

export interface Default {
  url:    string;
  width:  number;
  height: number;
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}
