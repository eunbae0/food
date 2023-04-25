export type PostParams = {
  data: {
    title: string;
    description: string;
    liked: number;
    thumbNail: string;
    user: string;
    time: string;
    desc: string;
  };
};
export type PostResponse = {
  data: {
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
