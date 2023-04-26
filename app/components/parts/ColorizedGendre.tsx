import { GenreColorized } from "@/app/intefaces"
import clsx from "clsx"
import React from "react"

const ColorizedGendre = ({ genreId }: { genreId: number }) => {
  const allGendres: GenreColorized[] = [
    {
      mal_id: 1,
      name: "Action",
      url: "https://myanimelist.net/anime/genre/1/Action",
      count: 4617,
      colorText: "text-[#fefefe]",
      color: "bg-[#e74c3c]"
    },
    {
      mal_id: 2,
      name: "Adventure",
      url: "https://myanimelist.net/anime/genre/2/Adventure",
      count: 3794,
      colorText: "text-[#fefefe]",
      color: "bg-[#3498db]"
    },
    {
      mal_id: 5,
      name: "Avant Garde",
      url: "https://myanimelist.net/anime/genre/5/Avant_Garde",
      count: 737,
      colorText: "text-[#fefefe]",
      color: "bg-[#8e44ad]"
    },
    {
      mal_id: 46,
      name: "Award Winning",
      url: "https://myanimelist.net/anime/genre/46/Award_Winning",
      count: 234,
      colorText: "text-[#fefefe]",
      color: "bg-[#f1c40f]"
    },
    {
      mal_id: 4,
      name: "Comedy",
      url: "https://myanimelist.net/anime/genre/4/Comedy",
      count: 7065,
      colorText: "text-[#fefefe]",
      color: "bg-[#f39c12]"
    },
    {
      mal_id: 8,
      name: "Drama",
      url: "https://myanimelist.net/anime/genre/8/Drama",
      count: 2808,
      colorText: "text-[#fefefe]",
      color: "bg-[#c0392b]"
    },
    {
      mal_id: 10,
      name: "Fantasy",
      url: "https://myanimelist.net/anime/genre/10/Fantasy",
      count: 5158,
      colorText: "text-[#fefefe]",
      color: "bg-[#9b59b6]"
    },
    {
      mal_id: 47,
      name: "Gourmet",
      url: "https://myanimelist.net/anime/genre/47/Gourmet",
      count: 139,
      colorText: "text-[#fefefe]",
      color: "bg-[#27ae60]"
    },
    {
      mal_id: 14,
      name: "Horror",
      url: "https://myanimelist.net/anime/genre/14/Horror",
      count: 524,
      colorText: "text-[#fefefe]",
      color: "bg-[#2c3e50]"
    },
    {
      mal_id: 7,
      name: "Mystery",
      url: "https://myanimelist.net/anime/genre/7/Mystery",
      colorText: "text-[#fefefe]",
      count: 836,
      color: "bg-[#2980b9]"
    },
    {
      mal_id: 22,
      name: "Romance",
      url: "https://myanimelist.net/anime/genre/22/Romance",
      colorText: "text-[#fefefe]",
      count: 2029,
      color: "bg-[#e91e63]"
    },
    {
      mal_id: 24,
      name: "Sci-Fi",
      url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      colorText: "text-[#fefefe]",
      count: 3058,
      color: "bg-[#34495e]"
    },
    {
      mal_id: 36,
      name: "Slice of Life",
      url: "https://myanimelist.net/anime/genre/36/Slice_of_Life",
      colorText: "text-[#fefefe]",
      count: 1736,
      color: "bg-[#16a085]"
    },
    {
      mal_id: 30,
      name: "Sports",
      url: "https://myanimelist.net/anime/genre/30/Sports",
      colorText: "text-[#fefefe]",
      count: 758,
      color: "bg-[#1abc9c]"
    },
    {
      mal_id: 37,
      name: "Supernatural",
      url: "https://myanimelist.net/anime/genre/37/Supernatural",
      colorText: "text-[#fefefe]",
      count: 1495,
      color: "bg-[#f372b0]"
    },
    {
      mal_id: 41,
      name: "Suspense",
      url: "https://myanimelist.net/anime/genre/41/Suspense",
      colorText: "text-[#fefefe]",
      count: 232,
      color: "bg-[#d35400]"
    },
    {
      mal_id: 51,
      name: "Anthropomorphic",
      url: "https://myanimelist.net/anime/genre/51/Anthropomorphic",
      colorText: "text-[#fefefe]",
      count: 779,
      color: "bg-[#95a5a6]"
    },
    {
      mal_id: 52,
      name: "CGDCT",
      url: "https://myanimelist.net/anime/genre/52/CGDCT",
      colorText: "text-[#fefefe]",
      count: 201,
      color: "bg-[#f7dc6f]"
    },
    {
      mal_id: 53,
      name: "Childcare",
      url: "https://myanimelist.net/anime/genre/53/Childcare",
      colorText: "text-[#fefefe]",
      count: 63,
      color: "bg-[#e67e22]"
    },
    {
      mal_id: 54,
      name: "Combat Sports",
      url: "https://myanimelist.net/anime/genre/54/Combat_Sports",
      colorText: "text-[#fefefe]",
      count: 90,
      color: "bg-[#6c5ce7]"
    },
    {
      mal_id: 81,
      name: "Crossdressing",
      url: "https://myanimelist.net/anime/genre/81/Crossdressing",
      colorText: "text-[#fefefe]",
      count: 37,
      color: "bg-[#ff00ff]"
    },
    {
      mal_id: 55,
      name: "Delinquents",
      url: "https://myanimelist.net/anime/genre/55/Delinquents",
      colorText: "text-[#fefefe]",
      count: 49,
      color: "bg-[#f1a9a0]"
    },
    {
      mal_id: 39,
      name: "Detective",
      url: "https://myanimelist.net/anime/genre/39/Detective",
      colorText: "text-[#fefefe]",
      count: 283,
      color: "bg-[#8e44ad]"
    },
    {
      mal_id: 56,
      name: "Educational",
      url: "https://myanimelist.net/anime/genre/56/Educational",
      colorText: "text-[#fefefe]",
      count: 241,
      color: "bg-[#3498db]"
    },
    {
      mal_id: 57,
      name: "Gag Humor",
      url: "https://myanimelist.net/anime/genre/57/Gag_Humor",
      colorText: "text-[#fefefe]",
      count: 225,
      color: "bg-[#f1c40f]"
    },
    {
      mal_id: 58,
      name: "Gore",
      url: "https://myanimelist.net/anime/genre/58/Gore",
      colorText: "text-[#fefefe]",
      count: 162,
      color: "bg-[#c0392b]"
    },
    {
      mal_id: 35,
      name: "Harem",
      url: "https://myanimelist.net/anime/genre/35/Harem",
      colorText: "text-[#fefefe]",
      count: 422,
      color: "bg-[#9b59b6]"
    },
    {
      mal_id: 59,
      name: "High Stakes Game",
      url: "https://myanimelist.net/anime/genre/59/High_Stakes_Game",
      colorText: "text-[#fefefe]",
      count: 38,
      color: "bg-[#27ae60]"
    },
    {
      mal_id: 13,
      name: "Historical",
      url: "https://myanimelist.net/anime/genre/13/Historical",
      colorText: "text-[#fefefe]",
      count: 1454,
      color: "bg-[#2c3e50]"
    },
    {
      mal_id: 60,
      name: "Idols (Female)",
      url: "https://myanimelist.net/anime/genre/60/Idols_Female",
      colorText: "text-[#fefefe]",
      count: 267,
      color: "bg-[#2980b9]"
    },
    {
      mal_id: 62,
      name: "Isekai",
      url: "https://myanimelist.net/anime/genre/62/Isekai",
      colorText: "text-[#fefefe]",
      count: 293,
      color: "bg-[#e91e63]"
    },
    {
      mal_id: 63,
      name: "Iyashikei",
      url: "https://myanimelist.net/anime/genre/63/Iyashikei",
      colorText: "text-[#fefefe]",
      count: 182,
      color: "bg-[#34495e]"
    },
    {
      mal_id: 64,
      name: "Love Polygon",
      url: "https://myanimelist.net/anime/genre/64/Love_Polygon",
      colorText: "text-[#fefefe]",
      count: 75,
      color: "bg-[#16a085]"
    },
    {
      mal_id: 65,
      name: "Magical Sex Shift",
      url: "https://myanimelist.net/anime/genre/65/Magical_Sex_Shift",
      colorText: "text-[#fefefe]",
      count: 29,
      color: "bg-[#1abc9c]"
    },
    {
      mal_id: 66,
      name: "Mahou Shoujo",
      url: "https://myanimelist.net/anime/genre/66/Mahou_Shoujo",
      colorText: "text-[#fefefe]",
      count: 270,
      color: "bg-[#f372b0]"
    },
    {
      mal_id: 17,
      name: "Martial Arts",
      url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
      colorText: "text-[#fefefe]",
      count: 551,
      color: "bg-[#d35400]"
    },
    {
      mal_id: 18,
      name: "Mecha",
      url: "https://myanimelist.net/anime/genre/18/Mecha",
      colorText: "text-[#fefefe]",
      count: 1224,
      color: "bg-[#95a5a6]"
    },
    {
      mal_id: 67,
      name: "Medical",
      url: "https://myanimelist.net/anime/genre/67/Medical",
      colorText: "text-[#fefefe]",
      count: 39,
      color: "bg-[#f7dc6f]"
    },
    {
      mal_id: 38,
      name: "Military",
      url: "https://myanimelist.net/anime/genre/38/Military",
      colorText: "text-[#fefefe]",
      count: 673,
      color: "bg-[#e67e22]"
    },
    {
      mal_id: 19,
      name: "Music",
      url: "https://myanimelist.net/anime/genre/19/Music",
      colorText: "text-[#fefefe]",
      count: 3280,
      color: "bg-[#6c5ce7]"
    },
    {
      mal_id: 6,
      name: "Mythology",
      url: "https://myanimelist.net/anime/genre/6/Mythology",
      colorText: "text-[#fefefe]",
      count: 602,
      color: "bg-[#ff00ff]"
    },
    {
      mal_id: 68,
      name: "Organized Crime",
      url: "https://myanimelist.net/anime/genre/68/Organized_Crime",
      colorText: "text-[#fefefe]",
      count: 71,
      color: "bg-[#f1a9a0]"
    },
    {
      mal_id: 69,
      name: "Otaku Culture",
      url: "https://myanimelist.net/anime/genre/69/Otaku_Culture",
      colorText: "text-[#fefefe]",
      count: 78,
      color: "bg-[#8e44ad]"
    },
    {
      mal_id: 20,
      name: "Parody",
      url: "https://myanimelist.net/anime/genre/20/Parody",
      colorText: "text-[#fefefe]",
      count: 727,
      color: "bg-[#3498db]"
    },
    {
      mal_id: 70,
      name: "Performing Arts",
      url: "https://myanimelist.net/anime/genre/70/Performing_Arts",
      colorText: "text-[#fefefe]",
      count: 111,
      color: "bg-[#f1c40f]"
    },
    {
      mal_id: 71,
      name: "Pets",
      url: "https://myanimelist.net/anime/genre/71/Pets",
      colorText: "text-[#fefefe]",
      count: 93,
      color: "bg-[#c0392b]"
    },
    {
      mal_id: 40,
      name: "Psychological",
      url: "https://myanimelist.net/anime/genre/40/Psychological",
      colorText: "text-[#fefefe]",
      count: 409,
      color: "bg-[#27ae60]"
    },
    {
      mal_id: 3,
      name: "Racing",
      url: "https://myanimelist.net/anime/genre/3/Racing",
      colorText: "text-[#fefefe]",
      count: 196,
      color: "bg-[#2c3e50]"
    },
    {
      mal_id: 72,
      name: "Reincarnation",
      url: "https://myanimelist.net/anime/genre/72/Reincarnation",
      count: 108,
      colorText: "text-[#fefefe]",
      color: "bg-[#2980b9]"
    },
    {
      mal_id: 73,
      name: "Reverse Harem",
      url: "https://myanimelist.net/anime/genre/73/Reverse_Harem",
      count: 72,
      colorText: "text-[#fefefe]",
      color: "bg-[#e91e63]"
    },
    {
      mal_id: 74,
      name: "Romantic Subtext",
      url: "https://myanimelist.net/anime/genre/74/Romantic_Subtext",
      count: 47,
      colorText: "text-[#fefefe]",
      color: "bg-[#34495e]"
    },
    {
      mal_id: 21,
      name: "Samurai",
      url: "https://myanimelist.net/anime/genre/21/Samurai",
      count: 219,
      colorText: "text-[#fefefe]",
      color: "bg-[#16a085]"
    },
    {
      mal_id: 23,
      name: "School",
      url: "https://myanimelist.net/anime/genre/23/School",
      count: 1920,
      colorText: "text-[#fefefe]",
      color: "bg-[#1abc9c]"
    },
    {
      mal_id: 75,
      name: "Showbiz",
      url: "https://myanimelist.net/anime/genre/75/Showbiz",
      count: 33,
      color: "bg-[#f372b0]",
      colorText: "text-[#fefefe]"
    },
    {
      mal_id: 29,
      name: "Space",
      url: "https://myanimelist.net/anime/genre/29/Space",
      count: 591,
      colorText: "text-[#fefefe]",
      color: "bg-[#d35400]"
    },
    {
      mal_id: 11,
      name: "Strategy Game",
      url: "https://myanimelist.net/anime/genre/11/Strategy_Game",
      count: 316,
      colorText: "text-[#fefefe]",
      color: "bg-[#95a5a6]"
    },
    {
      mal_id: 31,
      name: "Super Power",
      url: "https://myanimelist.net/anime/genre/31/Super_Power",
      count: 629,
      colorText: "text-[#fefefe]",
      color: "bg-[#f7dc6f]"
    },
    {
      mal_id: 76,
      name: "Survival",
      url: "https://myanimelist.net/anime/genre/76/Survival",
      count: 83,
      colorText: "text-[#fefefe]",
      color: "bg-[#e67e22]"
    },
    {
      mal_id: 77,
      name: "Team Sports",
      url: "https://myanimelist.net/anime/genre/77/Team_Sports",
      count: 300,
      colorText: "text-[#fefefe]",
      color: "bg-[#6c5ce7]"
    },
    {
      mal_id: 78,
      name: "Time Travel",
      url: "https://myanimelist.net/anime/genre/78/Time_Travel",
      count: 127,
      colorText: "text-[#fefefe]",
      color: "bg-[#ff00ff]"
    },
    {
      mal_id: 32,
      name: "Vampire",
      url: "https://myanimelist.net/anime/genre/32/Vampire",
      count: 153,
      colorText: "text-[#fefefe]",
      color: "bg-[#f1a9a0]"
    },
    {
      mal_id: 79,
      name: "Video Game",
      url: "https://myanimelist.net/anime/genre/79/Video_Game",
      count: 134,
      colorText: "text-[#fefefe]",
      color: "bg-[#8e44ad]"
    },
    {
      mal_id: 80,
      name: "Visual Arts",
      url: "https://myanimelist.net/anime/genre/80/Visual_Arts",
      count: 87,
      colorText: "text-[#fefefe]",
      color: "bg-[#3498db]"
    },
    {
      mal_id: 48,
      name: "Workplace",
      url: "https://myanimelist.net/anime/genre/48/Workplace",
      count: 160,
      colorText: "text-[#fefefe]",
      color: "bg-[#f1c40f]"
    },
    {
      mal_id: 43,
      name: "Josei",
      url: "https://myanimelist.net/anime/genre/43/Josei",
      count: 117,
      colorText: "text-[#fefefe]",
      color: "bg-[#c0392b]"
    },
    {
      mal_id: 15,
      name: "Kids",
      url: "https://myanimelist.net/anime/genre/15/Kids",
      count: 5909,
      colorText: "text-[#fefefe]",
      color: "bg-[#27ae60]"
    },
    {
      mal_id: 42,
      name: "Seinen",
      url: "https://myanimelist.net/anime/genre/42/Seinen",
      count: 941,
      colorText: "text-[#fefefe]",
      color: "bg-[#2c3e50]"
    },
    {
      mal_id: 25,
      name: "Shoujo",
      url: "https://myanimelist.net/anime/genre/25/Shoujo",
      count: 657,
      colorText: "text-[#fefefe]",
      color: "bg-[#2980b9]"
    },
    {
      mal_id: 27,
      name: "Shounen",
      url: "https://myanimelist.net/anime/genre/27/Shounen",
      count: 1904,
      colorText: "text-[#fefefe]",
      color: "bg-[#e91e63]"
    }
  ]

  return (
    <>
      {allGendres.map(
        (e: GenreColorized) =>
          e.mal_id == genreId && (
            <span key={e.mal_id} className={clsx("px-2 py-1 rounded-md font-semibold", e.colorText, e.color)}>
              {e.name}
            </span>
          )
      )}
    </>
  )
}

export default ColorizedGendre
