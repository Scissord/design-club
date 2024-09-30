import { IColumn, ICard } from '@interfaces';

export type IBoard = {
  columns: { [key: string]: IColumn } | {};
  cards: { [key: string]: ICard } | {};
  order: string[] | [],
};