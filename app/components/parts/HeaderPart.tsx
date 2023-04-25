import Link from "next/link"
import React from "react"

const HeadersPart = ({ title, url }: { title: string; url: string }) => {
  return (
    <div className='flex justify-between'>
      <h3 className='text-lg text-white font-bold mb-2'>{title}</h3>
      <Link href={url}>
        <h3 className='text-md text-white font-bold mb-2'>See More</h3>
      </Link>
    </div>
  )
}

export default HeadersPart
