import { useEffect, useState } from 'react';

export default function useBanner(MAX_SIZE: number) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const SCROLL_INTERVAL_TIME = 4000;

  const onClickBefore = () => {
    if (currentBanner === 0) setCurrentBanner(MAX_SIZE);
    else setCurrentBanner((prev) => prev - 1);
  };
  const onClickNext = () => {
    if (currentBanner === MAX_SIZE) setCurrentBanner(0);
    else setCurrentBanner((prev) => prev + 1);
  };

  useEffect(() => {
    const InfinityScroll = () => {
      if (currentBanner >= MAX_SIZE) setCurrentBanner(0);
      else setCurrentBanner((prev) => prev + 1);
    };
    setTimeout(InfinityScroll, SCROLL_INTERVAL_TIME);
    return clearTimeout(currentBanner);
  }, [MAX_SIZE, currentBanner]);

  return { currentBanner, onClickBefore, onClickNext };
}
