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

import { postAPI } from '@/api';

export default function WriteContainer() {
  const router = useRouter();
  const ReactQuill = dynamic(() => import('react-quill'), {
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

  const onChangeQuill = (e, a, b, c) => {};

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
  const { id } = useSelector((state: indexState) => ({
    id: state.userData.user.id,
  }));

  const onSubmitWrite = async (e: React.FormEvent) => {
    e.preventDefault();
    // titleRef.current?.focus();
    const title = titleRef.current?.value as string;

    try {
      const res = await postAPI.post({
        data: {
          title,
          desc,
          liked: 0,
          userId: id,
          time: Date.now().toString(),
        },
      });
      const postId = res.data.data.id;
      Notiflix.Notify.success('성공적으로 작성되었습니다!');
      router.push(`/post/${postId}`);
    } catch (error) {
      console.log(error);
    }

    // console.log(desc);
  };
  return (
    <>
      <Header />
      <section>
        <form className={styles.wrapper} onSubmit={onSubmitWrite}>
          <input ref={titleRef} className={styles.title} placeholder="제목" />
          <ReactQuill
            theme="snow"
            onBlur={(e, a, b) => setDesc(b.getHTML())}
            onChange={onChangeQuill}
            modules={quillModules}
            formats={quillFormats}
            className={styles.quill}
            placeholder="내용"
            value={desc}
            bounds={'hi'}
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
