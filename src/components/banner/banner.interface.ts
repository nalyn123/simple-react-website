export interface BannerProps {
  gap?: number | string;
  hasPaging?: boolean;
  data: BannerDataProps[];
}

export interface BannerDataProps {
  id: number;
  title?: string;
}
