export interface Pin {
  pin_id: number,
  image: string,
  title: string,
  description?: string,
  link?: string,
  category: number
  username: string
}

export interface PinData {
  0: {
     pin_id: number,
  image: string,
  title: string,
  description?: string,
  link?: string,
  category: number
  username: string
  },
 length: number
}