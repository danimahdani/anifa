import AnimePopular from "./components/anime-popular"
import CarouselAnime from "./components/parts/CarouselAnime"

export default async function Home() {
  return (
    <div className=''>
      <section className='px-5 py-10 lg:px-24 mx-auto'>
        <AnimePopular />
        <CarouselAnime />
      </section>
    </div>
  )
}
