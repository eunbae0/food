import { useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

import { updateUser } from '@/modules/user';
import { indexState } from '@/modules';

import styles from '@/styles/Write.module.css';

import Notiflix from 'notiflix';
import Header from '@/components/write/Header';
import Button from '@/components/common/button/Button';

import 'react-quill/dist/quill.snow.css';
import { quillFormats } from '@/constants/quill';
// import { quillModules, quillFormats } from '@constants/quill';

export default function WriteContainer() {
  const router = useRouter();
  const ReactQuill = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

  const { isLogin, rehydrated } = useSelector(
    (state: indexState) => ({
      isLogin: state.userData.isLogin,
      rehydrated: state._persist.rehydrated,
    }),
    shallowEqual,
  );
  // console.log('hi');
  if (rehydrated && !isLogin) {
    Notiflix.Notify.failure('글쓰기를 하려면 로그인 해주세요!');
    // router.push('/');
  }

  const titleRef = useRef<HTMLInputElement>(null);

  // quill
  const [desc, setDesc] = useState('');
  const imageHandler = () => {};

  const onChangeQuill = (e: string) => {
    setDesc(e);
  };

  const quillModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          [
            'bold',
            'italic',
            'underline',
            'strike',
            'link',
            'blockquote',
            'image',
          ],
          [{ list: 'ordered' }, { list: 'bullet' }],
        ],
        handlers: {
          // 이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
          image: imageHandler,
        },
      },
    }),
    [],
  );
  //onSubmit
  const onSubmitWrite = (e: React.FormEvent) => {
    e.preventDefault();
    const title = titleRef.current?.value as string;
  };

  return (
    <>
      <Header />
      <section>
        <form className={styles.wrapper} onSubmit={onSubmitWrite}>
          <input ref={titleRef} className={styles.title} placeholder="제목" />
          <ReactQuill
            theme="snow"
            onChange={onChangeQuill}
            modules={quillModules}
            formats={quillFormats}
            className={styles.quill}
            placeholder="내용"
            value={desc}
          >
            <div className={styles.editingArea} />
          </ReactQuill>
          <Button type="submit" primary={false} label="작성완료" />
        </form>
      </section>
    </>
  );
}

// WriteContainer.getInitialProps = async () => {
//   return { isLogin: true };
// };
