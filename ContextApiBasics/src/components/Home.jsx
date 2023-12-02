import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { basicOps } from './utility/basicOps';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProduct] = useState(null);
  const [sortDirection, setSortDirection] = useState(0);

  useEffect(() => {
    (async function () {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const productData = await response.json();

      productData.forEach((elem) => {
        console.log(elem.title);
      });

      setProduct(productData);
    })();
  }, []);

  const modifiedArr = basicOps(products, searchTerm, sortDirection);
  console.log('Boom: ', modifiedArr);

  return (
    <>
      <header className='nav_wrapper'>
        <div className='searchSort_wrapeer'>
          <input
            className='search_input'
            type='text'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />

          <div className='icon-container'>
            {' '}
            <ArrowCircleUpIcon
              style={{ color: 'white' }}
              fontSize='large'
              onClick={() => {
                setSortDirection(1);
              }}
            ></ArrowCircleUpIcon>
            <ArrowCircleDownIcon
              style={{ color: 'white' }}
              fontSize='large'
              onClick={() => {
                setSortDirection(-1);
              }}
            ></ArrowCircleDownIcon>
          </div>
        </div>
      </header>

      <main className='product_wrapper'>
        {modifiedArr === null ? (
          <h3>...Loading</h3>
        ) : (
          <>
            {modifiedArr.map((product) => {
              return (
                <div className='product'>
                  <img src={product.image} alt='' className='product_image' />
                  <div className='product_meta'>
                    <p className='product_title'>{product.title}</p>
                    <p className='Price'>$ {product.price}</p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </main>
    </>
  );
}

export default Home;
