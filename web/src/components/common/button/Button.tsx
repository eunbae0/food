import ButtonProps from './button.type';
import styles from './Button.module.css';

export const Button = ({ primary = false, label, type }: ButtonProps) => {
  return (
    <button type={type} className={styles.buttonWrapper}>
      {label}
    </button>
  );
};

export default Button;
