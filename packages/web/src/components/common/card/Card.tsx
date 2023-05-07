import Image from 'next/image';
import { useRouter } from 'next/router';

import CardProps from './card.type';
import styles from './Card.module.css';
import { authAPI } from '@/api';

import Button from '@/components/common/button/Button';
import loaderWithAPIUrl from '@/utils/loaderWithAPIUrl';

export const Header = ({ data }: CardProps) => {
  const router = useRouter();
  const onClickCard = () => {
    router.push(`/post/${data.id}`);
  };
  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Image
            loader={loaderWithAPIUrl}
            src={data.attributes.profileImg.url}
            width={40}
            height={40}
            alt=""
            className={styles.profileImg}
          />
          <div className={styles.userWrapper}>
            <span className={styles.user}>{data.attributes.username}</span>
            <span className={styles.date}>{data.attributes.time}</span>
          </div>
        </div>
        <div>
          <Button
            primary={false}
            withImg={true}
            imgSrc={'/more.svg'}
            imgWidth={48}
            imgHeight={48}
            imgAlt={'more'}
          ></Button>
        </div>
      </header>
      <section className={styles.section} onClick={onClickCard}>
        <Image src="" width={360} height={188} alt="" />
        <div className={styles.bottomWrapper}>
          <h2 className={styles.h2}>{data.attributes.title}</h2>
          <p className={styles.p}>{data.attributes.desc}</p>
        </div>
      </section>
    </article>
  );
};

export default Header;
