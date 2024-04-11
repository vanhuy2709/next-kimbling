export { };
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

declare global {

  interface IRole {
    meta: {
      current: number,
      pageSize: number,
      pages: number,
      total: number
    },
    result: [
      {
        _id: string,
        nameRole: string,
        description: string,
        thumb: string
      }
    ]
  }

  interface IBlogByRole {
    _id: string,
    title: string,
    description: string,
    idRole: string,
    color: string,
    video: string[],
    photo: string[],
    thumb: string,
    createdAt: string,
    updatedAt: string,
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
    data?: T;
  }

}