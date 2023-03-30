type ListItems = { text: string; onClick: () => void };

type ModalProps = {
  // primary: boolean;
  // isSearch: boolean;
  // label: string;
  // placeholder?: string;
  list: ListItems[];
  type?: 'header' | 'more' | '';
};

export default ModalProps;
