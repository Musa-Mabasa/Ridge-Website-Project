import React from 'react'
import './Books.css'
import BookDisplay from '../components/BookDisplay'
import Princples from '../assets/bookCovers/Principles.jpg'

function Books() {
  return (
    <div className='wrapper'>
      <div className='book-header'>
        <h1 className='header-content'>Books</h1>
      </div>
      <div className="book-list">
        {data.map((item, index) => (
          <BookDisplay key={item.id} className="book" title={item.title} description={item.description} image={item.image} amazonLink={item.amazonLink} takealotLink={item.takealotLink} smashwordsLink={item.smashwordsLink} date={item.date} author={item.author}></BookDisplay>
        ))}
      </div>
      
    </div>
  )
}

export default Books

const data = [
  {
    id: 1,
    title: 'Book 1',
    description: 'Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas',
    image: Princples,
    amazonLink: 'https://www.amazon.com/Principles-Nature-engineers-analysis-observations-ebook/dp/B0BGSVTDHS/ref=sr_1_2?crid=1DZ8E3EOG6YYO&keywords=ridge+makavelli+transformation&qid=1679768817&sprefix=Ridge+maka%2Caps%2C447&sr=8-2',
    takealotLink: '',
    smashwordsLink: '',
    date: '28 Sep 2022',
    author: 'by John Doe'
  },
  {
    id: 2,
    title: 'Book 1',
    description: 'Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas',
    image: Princples,
    amazonLink: 'https://www.amazon.com/Principles-Nature-engineers-analysis-observations-ebook/dp/B0BGSVTDHS/ref=sr_1_2?crid=1DZ8E3EOG6YYO&keywords=ridge+makavelli+transformation&qid=1679768817&sprefix=Ridge+maka%2Caps%2C447&sr=8-2',
    takealotLink: '',
    smashwordsLink: '',
    date: '28 Sep 2022',
    author: 'by John Doe'
  }

]
