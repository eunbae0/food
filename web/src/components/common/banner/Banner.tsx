import styles from './Banner.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const imgArr = [
  'banner_sample1',
  'banner_sample2',
  'banner_sample3',
  'banner_sample4',
];

export const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const MAX_SIZE = imgArr.length - 1;
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

  return (
    <section className={styles.section}>
      <ul
        className={styles.ul}
        style={{
          transform: `translateX(${-1 * (100 * currentBanner)}%)`,
        }}
      >
        {imgArr.map((d) => (
          <li key={d} className={styles.li}>
            <div className={styles.image}>{d}</div>
          </li>
        ))}
      </ul>
      <Image
        src={'/navigate_before.svg'}
        alt={''}
        width={24}
        height={24}
        className={styles.navigate_before}
        onClick={onClickBefore}
      />
      <Image
        src={'/navigate_next.svg'}
        alt={''}
        width={24}
        height={24}
        className={styles.navigate_next}
        onClick={onClickNext}
      />
    </section>
  );
};

export default Banner;
