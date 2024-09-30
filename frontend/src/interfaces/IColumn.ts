export type IColumn = {
  id: string | "";
  title: string | "";
  cardsIds: string[] | [];
  position: number | 0;
  created_at: Date | null;
  updated_at: Date | null;
};
