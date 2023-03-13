export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
}

export interface Member {
  name?: string;
  subtitle?: string;
  imageSrc?: string | StaticImageData;
  twitter?: string;
}
