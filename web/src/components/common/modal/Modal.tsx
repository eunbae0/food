import ModalProps from './modal.type';
import styles from './Modal.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const Modal = ({ type, list }: ModalProps) => {
  return (
    <div className={cx('ModalContainer', type)}>
      <div className={cx('listWrapper')}>
        {list.map((list) => (
          <button
            key={list.text}
            className={cx('button')}
            onClick={list.onClick}
          >
            {list.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Modal;
