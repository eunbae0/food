import Image from 'next/image';
import InputProps from './input.type';
import styles from './Input.module.css';
import classNames from 'classnames/bind';
import { ForwardedRef, forwardRef } from 'react';

const cx = classNames.bind(styles);

export const Input = forwardRef(
  (
    { primary = false, isSearch = false, label, placeholder, type }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
      e.currentTarget.value;
    };
    return (
      <div className={cx('inputWrapper')}>
        <label className={cx('label')}>{label}</label>
        {isSearch && (
          <Image
            src="/search.svg"
            width={48}
            height={48}
            alt={'search'}
            className={cx('searchImg')}
          />
        )}
        <input
          className={cx('input', isSearch && 'searchInput')}
          type={type}
          placeholder={placeholder}
          onChange={onChangeInput}
          ref={ref}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
