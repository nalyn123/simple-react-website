export interface SlidesProps {
  [key: number]: number;
}
export interface SlideProps {
  img?: string;
  title: string;
  id: number;
}
export interface SliderProps {
  data: SlideProps[];
  slides?: number | SlidesProps;
  gap?: number | string;
  spaceStart?: number | string;
  hasArrow?: boolean;
  hasPaging?: boolean;
  title?: string;
}
