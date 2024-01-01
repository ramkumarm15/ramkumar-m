export interface Navigation {
  prevPage?: PageInfo;
  nextpage?: PageInfo;
}

export interface PageInfo {
  name?: string;
  url?: string;
}
