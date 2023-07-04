import React from 'react'
import './Books.css'
import '../App.css'
import BookDisplay from '../components/BookDisplay'
import Princples from '../assets/bookCovers/Principles.jpg'
import Transformation from '../assets/bookCovers/Transformation.jpg'

function Books({handleScroll, bookWrapperRef}) {
  return (
    <div id='BookWrapper' ref={bookWrapperRef} onScroll={handleScroll}>
      <div id='book-overlay'></div>
      <div className='book-header'>
        <p className='header-content'>BOOKS</p>
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
    title: 'Principles of Nature: An engineer\'s analysis and observations of nature',
    description: 'Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas Beyond the curtain presented to people in modern times is the natural arena that has allowed organic life to thrive. Although society is bombarded with modern ideas',
    image: Princples,
    amazonLink: 'https://www.amazon.com/Principles-Nature-engineers-analysis-observations-ebook/dp/B0BGSVTDHS/ref=sr_1_2?crid=1DZ8E3EOG6YYO&keywords=ridge+makavelli+transformation&qid=1679768817&sprefix=Ridge+maka%2Caps%2C447&sr=8-2',
    takealotLink: 'https://www.takealot.com/principles-of-nature/PLID91612084',
    smashwordsLink: 'https://www.smashwords.com/books/view/1167927',
    date: '28 Sep 2022',
    author: 'by  Ridge Makavelli'
  },
  {
    id: 2,
    title: 'Transformation: An engineer\'s practical opinion on change and growth',
    description: 'Every product of being is a result of the process of becoming that encompasses the changes to which it is subjected. There is a common thread between Adam and Eve, coal and crude oil. As a natural resource, crude oil is drilled from deep underground and taken through the vicious cycles of energy exchange to obtain various petrochemical products. Also found deep underground, coal is taken for a ride through certain processes to yield its value. Adam and Eve, symbolical as they are, went through various phases to become adults and care for themselves outside the Garden of Eden. Each of these analogies involve transformation: change and growth.In Transformation, Ridge Makavelli draws analogies from engineering practice, philosophy, life, nature and personal experiences to paint an image of some of the elements of change. Transformation signifies the thread connecting the past, present and future and thus the ability to change and grow. Transformation considers the value of what someone creates for themselves and amid life’s fluctuations. Makavelli outlines that the value of one’s transformation is in the ability to learn how to live; then how to live better and finally how to live better with other species around them. Bringing practicality into the fundamentals of change, it is also a sign of humility to realise change may be different for each person. Hence, Transformation offers an engineer’s practical opinion on change and growth.',
    image: Transformation,
    amazonLink: 'https://www.amazon.com/Transformation-engineers-practical-opinion-change-ebook/dp/B0BCJX4GTH/ref=sr_1_1?qid=1687880337&refinements=p_27%3ARidge+Makavelli&s=digital-text&sr=1-1&text=Ridge+Makavelli',
    takealotLink: 'https://www.takealot.com/transformation/PLID91608813',
    smashwordsLink: 'https://www.smashwords.com/books/view/1163514',
    date: '30 Aug 2022',
    author: 'by  Ridge Makavelli'
  }

]
