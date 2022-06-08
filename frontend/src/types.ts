export type Store = {
  id: number;
  name: string;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByGender = {
  gender: Gender;
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type Summary = {
  avg: number;
  count: number;
  max: number;
  min: number;
  sum: number;
};
