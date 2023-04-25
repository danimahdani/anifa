import CarouselAnime from "./components/parts/CarouselAnime"
// import AnimePopular from "./components/anime-popular";

export default async function Home() {
  return (
    <div className=''>
      {/* <AnimePopular /> */}
      <section className='px-5 py-10 lg:px-24 mx-auto'>
        <CarouselAnime />
      </section>
    </div>
  )
}
