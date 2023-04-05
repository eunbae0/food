import ModalProps from './modal.type';
import styles from './Modal.module.css';
import classNames from 'classnames/bind';
import { ForwardedRef, forwardRef } from 'react';

const cx = classNames.bind(styles);

export const Modal = forwardRef(
  ({ type, list }: ModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={cx('ModalContainer', type)}
        ref={ref}
        // onClick={modalOutSideClick}
      >
        <ul className={cx('listWrapper')}>
          {list.map((list) => (
            <li
              key={list.label}
              className={cx('button')}
              onClick={list.onClick}
            >
              {list.label}
            </li>
          ))}
        </ul>
      </div>
    );
  },
);

Modal.displayName = 'Modal';
export default Modal;
