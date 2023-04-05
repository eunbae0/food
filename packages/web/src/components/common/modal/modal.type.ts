type ListItems = { label: string; onClick: () => void };

type ModalProps = {
  // primary: boolean;
  // isSearch: boolean;
  // label: string;
  // placeholder?: string;
  list: ListItems[];
  type?: 'header' | 'more' | '';
  // modalOutSideClick?: (e: React.MouseEvent) => void;
};

export default ModalProps;
