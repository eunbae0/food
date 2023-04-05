import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './WriteHeader.module.css';

import Header from '@/components/common/header';
import Button from '@/components/common/button/Button';

function WriteHeader() {
  const router = useRouter();
  const onClickBackBtn = () => {
    router.back();
  };
  return (
    <Header>
      <Button primary={false}>
        <Image
          src="/back.svg"
          width={48}
          height={48}
          alt={'search'}
          onClick={onClickBackBtn}
        />
      </Button>
    </Header>
  );
}

export default WriteHeader;
