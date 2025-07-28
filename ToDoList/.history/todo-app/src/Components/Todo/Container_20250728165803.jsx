import React from 'react'
import Header from './Header'
import Input from './Input'


const Container = () => {
  return (
    <div className="container">
        <Header />
        <Input />
        <List />
        <Footer />
    </div>
  )
}

export default Container