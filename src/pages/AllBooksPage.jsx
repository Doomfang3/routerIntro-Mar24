import { Link } from 'react-router-dom'

const hpTitle = 'harrypotter'

const AllBooksPage = () => {
  return (
    <>
      <h1>List of books</h1>
      <div>
        <Link to={`/books/${hpTitle}`}>Harry Potter</Link>
      </div>
      <Link to='/books/silmarilion'>Silmarilion</Link>
    </>
  )
}

export default AllBooksPage
