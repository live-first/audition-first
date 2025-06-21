import { imgInit, ImgType } from './img'

export type ArtistType = {
  name: string
  img: ImgType | string
  x?: string | null
  day1: boolean | null
  day2: boolean | null
  day3: boolean | null
  read?: string
}

export const UnitInit: ArtistType = {
  name: '',
  img: imgInit,
  x: '',
  day1: null,
  day2: null,
  day3: null,
}
