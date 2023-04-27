import { BaseTypeWithData } from '.';

export type PostData = {
  id: number;
  attributes: {
    title: string;
    liked: number;
    thumbNail: string;
    user: string;
    time: string;
    desc: string;
    userId: number;
    username: string;
    profileImg: {
      formats: string;
      url: string;
    };
    thumbnail: {
      data?: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
};

export type PostDataArray = Array<PostData>;

export type PostPostData = {
  title: string;
  liked: number;
  thumbNail?: string;
  userId: number;
  time: string;
  desc: string;
};

export type PostParams = BaseTypeWithData<PostPostData>;

export type PostResponse = BaseTypeWithData<PostData>;

export type getPostParams = number;

export type getPostsResponse = BaseTypeWithData<PostDataArray>;

export type getPostResponse = BaseTypeWithData<PostData>;
