import React, { PropsWithChildren } from "react"

const ContainerLayout = ({ children }: PropsWithChildren) => {
  return <div className='px-5 py-10 lg:px-24 mx-auto'>{children}</div>
}

export default ContainerLayout
