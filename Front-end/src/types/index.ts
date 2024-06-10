export interface DataType {
  plates: [];
  drinks: [];
}
export interface DataTypeOrder {
  orders: [];
}

export interface Items {
  id: number;
  nome: string;
}

export interface ItemsOrder {
  nome: string;
  bebida_id: string;
  prato_id: string;
}

export interface Props {
  data: [] | undefined;
  func: (childrenData: Items[]) => void;
  disabled: boolean;
}

export interface List {
  item: Items;
  func: (item: Items[]) => void;
}

export interface Plate {
  funcPlate: (item: Items[]) => void;
}
export interface Drink {
  funcDrink: (item: Items[]) => void;
}
