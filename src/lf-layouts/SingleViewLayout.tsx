'use client'

import { Container } from '@mui/material'
import { ReactNode } from 'react'

export type LayoutProps = {
  header: ReactNode
  main?: ReactNode
  allView?: ReactNode
  footer?: ReactNode
}

export const SingleViewLayout = (props: LayoutProps) => {
  const { header, main, allView, footer } = props

  return (
    <div>
      <header className='fixed w-full h-16 z-50'>{header}</header>
      <main className='min-h-[900px] flex flex-col bg-gradient '>
        <div className='h-16'></div>
        <Container maxWidth='lg'>{main}</Container>
        {allView}
      </main>
      <footer>{footer}</footer>
    </div>
  )
}
