import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  var incrementCount = 1;

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={`/images/MAIN_${incrementCount++}.jpg`} alt={product.name} fluid />
            <Carousel.Caption>
              <h2>
                ONLY: ${product.price}!
              </h2>
              <h3>
                DON'T <strong>MISS</strong> YOUR CHANCE !
              </h3>
              <p>{product.name}</p>
            </Carousel.Caption>
          </Link>
          <div class="mask"></div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
