import styles from './Banner.module.css';
import Image from 'next/image';

import useBanner from '@/hooks/useBanner';

const imgArr = [
  'banner_sample1',
  'banner_sample2',
  'banner_sample3',
  'banner_sample4',
];

export const Banner = () => {
  const MAX_SIZE = imgArr.length - 1;
  const { currentBanner, onClickBefore, onClickNext } = useBanner(MAX_SIZE);
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
