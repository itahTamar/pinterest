export interface Pin {
  pin_id: number,
  image: string,
  title: string,
  description?: string,
  link?: string,
  category: string,
  username: string
}

export interface PinData {
  0: {
     pin_id: number,
  image: string,
  title: string,
  description?: string,
  link?: string,
  category: string,
  username: string
  },
 length: number
}