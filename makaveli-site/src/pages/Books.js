import React from 'react'
import './Books.css'
import BookDisplay from '../components/BookDisplay'

function Books() {
  return (
    <div className='wrapper'>
      <div className='book-header'>
        <h1 className='header-content'>Books</h1>
      </div>
      <div className="book-list">
        {data.map((item, index) => (
          <BookDisplay className="book" title={item.title} description={item.description} image={item.image} amazonLink={item.amazonLink} takealotLink={item.takealotLink} date={item.date} author={item.author}></BookDisplay>
        ))}
      </div>
      
    </div>
  )
}

export default Books

const data = [
  {
    title: 'Book 1',
    description: 'This is the first book',
    image: '',
    amazonLink: '',
    takealotLink: '',
    date: '28 Sep 2022',
    author: 'John Doe'
  }
]
