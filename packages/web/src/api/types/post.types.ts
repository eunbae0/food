export type PostParams = {
  data: {
    title: string;
    liked: number;
    thumbNail?: string;
    userId: number;
    time: string;
    desc: string;
  };
};
export type PostResponse = {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      liked: number;
      thumbNail: string;
      user: string;
      time: string;
      desc: string;
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
};
