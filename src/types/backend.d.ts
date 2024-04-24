export { };
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

declare global {

  interface IMeta {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
  }

  interface IBrand {
    _id: string;
    title: string;
    urlImage: string;
  }

  interface IBlog {
    _id: string;
    title: string;
    description: string;
    idRole: string;
    color: string;
    video: string[]
    photo: string[];
    thumb: string;
    createdAt: string;
    updatedAt: string;
    isFeatured: boolean;
  }

  interface IRole {
    _id: string;
    nameRole: string;
    description: string;
    thumb: string;
  }

  interface IRequest {
    url: string;
    method: string;
    body?: { [key: string]: any };
    queryParams?: any;
    useCredentials?: boolean;
    headers?: any;
    nextOption?: any;
  }

  interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: {
      meta: IMeta;
      result: T[];
    };
  }

  interface IBackendResBlog<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T
  }

}