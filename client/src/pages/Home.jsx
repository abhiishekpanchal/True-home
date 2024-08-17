import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListingItem from '../components/ListingItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css/bundle'

function Home() {
  const [offerListings, setOfferlistings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferlistings(data);
        fetchRentListings();
      } catch(error) {
        console.error(error);
      }
    }

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch(error) {
        console.error(error);
      }
    }

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch(error) {
          console.error(error);
        }
    }

    fetchOfferListings();
  }, [])

  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-4xl lg:text-8xl'>Find your next 
          <span className='text-slate-500'> perfect</span> 
          <br /> place with ease
        </h1>
        <div className='text-gray-400 text-lg sm:text-3xl'>TrueHomes is the best place to find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link className='text-lg sm:text-2xl text-blue-800 font-bold hover:underline' to={"/search"}>Let's get started...</Link>
      </div>
      
      {/* swiper */}
      <Swiper navigation>
        {
          offerListings && offerListings.length > 0 && offerListings.map((listing) => (
            <SwiperSlide>
              <div style={{background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize: 'cover'}} 
              className='h-[600px]' key={listing._id}>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      {/* listing resuls for offer, sale and rent */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-bold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline font-semibold' to={'/search?offer=true'}>
                Show more offers
              </Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {
                offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))
              }
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-bold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline font-semibold' to={'/search?type=rent'}>
                Show more places for rent
              </Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {
                rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))
              }
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-bold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline font-semibold' to={'/search?offer=true'}>
                Show more places for sale
              </Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {
                saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))
              }
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home