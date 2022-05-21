import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import Footers from './homePage/Footers'
import NewModel from './newModel/NewModel'


export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footers />
      <NewModel />
      <Footer />



    </>
  )
}
