export enum RepositoriesTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCCES = "@repositories/LOAD_SUCCCES",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}

export interface Repository {
  id?: number;
  image?: string;
  title?: string;
  price?: string;
  category?: string;
  description?: string;
}

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
