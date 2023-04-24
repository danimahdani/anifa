export interface Anime {
  mal_id?: number
  title_english: string
  title: string
  aired: {
    prop: {
      from: {
        year: number
      }
    }
  }
  images: {
    webp: {
      large_image_url: string
    }
  }
  year: number
}
export interface AnimeType {
  mal_id?: number
  title_english: string
  title: string
  image: string
  year: number
}
