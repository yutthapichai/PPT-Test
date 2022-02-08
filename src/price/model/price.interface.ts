export interface PriceState {
  Code: number;
  Description: string;
  IsNotify: boolean;
  IsChange?: boolean;
  ChangeDate: string;
  ChangeTime: string;
  ListOfPrice: ListOfPriceState[];
}

export interface ListOfPriceState {
  MAT_NAME: string;
  DIVISION_ID: number;
  DIVISION_NAME: string;
  MAT_NAME2: string;
  MAT_ID: string;
  PRICE: number;
}
