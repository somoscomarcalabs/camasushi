export interface SushiItem {
  id: number,
  name: string,
  ingredients: string[],
  description: string,
  is_fried: boolean,
  price: number,
  image: string,
  pieces: number,
}

export interface MenuCategory {
  name: string,
  items: SushiItem[]
}
