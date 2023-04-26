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

export interface GenreColorized {
  mal_id: number
  name: string
  url: string
  count: number
  colorText: string
  color: string
}

export interface AnimeTypeCompleted {
  mal_id: number
  url: string
  images: {
    jpg: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
    webp: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
  }
  trailer: Trailer
  approved: boolean
  titles: Title[]
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  source: string
  episodes: null
  status: string
  airing: boolean
  aired: Aired
  duration: string
  rating: string
  score: null
  scored_by: null
  rank: null
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: null
  season: string
  year: number
  broadcast: Broadcast
  producers: Genre[]
  studios: Genre[]
  genres: Genre[]
  themes: Genre[]
}

export interface Aired {
  from: Date
  to: null
  prop: Prop
  string: string
}

export interface Prop {
  from: From
  to: From
}

export interface From {
  day: number | null
  month: number | null
  year: number | null
}

export interface Broadcast {
  day: null
  time: null
  timezone: null
  string: string
}

export interface Genre {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Image {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface Title {
  type: string
  title: string
}

export interface Trailer {
  youtube_id: string
  url: string
  embed_url: string
  images: Images
}

export interface Images {
  image_url: string
  small_image_url: string
  medium_image_url: string
  large_image_url: string
  maximum_image_url: string
}
