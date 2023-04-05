import ButtonProps from './button.type';
import styles from './Button.module.css';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const Button = ({
  primary = false,
  label,
  type,
  children,
}: ButtonProps) => {
  return (
    <button type={type} className={cx(!!children ? 'imageBtn' : 'defaultBtn')}>
      {!!children ? children : label}
    </button>
  );
};

export default Button;
