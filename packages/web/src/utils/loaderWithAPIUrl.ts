export const loaderWithAPIUrl = ({ src }: { src: string | undefined }) =>
  `${process.env.NEXT_PUBLIC_API_URL}${src}`;

export default loaderWithAPIUrl;
