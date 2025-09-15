export type CardProps = {
  title: string;
  buttonText: string;
  list?: string[];
  children?: React.ReactNode;
  img?: string;
  price?: number;
  description?: string;
};