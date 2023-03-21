import Image from 'next/image';
import InputProps from './input.type';
import styles from './Input.module.css';

export const Input = ({
  primary = false,
  isSearch = false,
  label,
}: InputProps) => {
  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value;
  };
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} onChange={onChangeInput} />
    </div>
  );
};

export default Input;
