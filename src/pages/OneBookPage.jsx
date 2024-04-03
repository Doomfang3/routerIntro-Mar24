import { useParams, useSearchParams } from 'react-router-dom'

const OneBookPage = () => {
  //const { bookId } = useParams()
  const params = useParams()
  console.log({ params })
  const [searchParams, setSearchParams] = useSearchParams()

  console.log({ searchParams: searchParams.get('pizza') })
  return <>Page about: {params.bookId}</>
}

export default OneBookPage
