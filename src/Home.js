import React, { useState } from 'react'
import styled from 'styled-components'
import Product from './Product';

function Home({ id, title, image, price, rating }) {
    
    return (
        <Container>
            <Banner>

            </Banner>
            <ProductCover>
          <Product
            id="12321341"
            title="Dr Trust Professional Series Finger Tip Pulse Oximeter With Audio Visual Alarm and Respiratory Rate(Blue)"
            price={3499}
            rating={3}
            image="https://i.ibb.co/tpxjvCJ/71-M-09ee9-AL-SL1500.jpg"
          />
          <Product
            id="49538094"
            title="Dr Trust (USA) Waterproof Flexible Tip Digital Thermometer (White) … …"
            price={285}
            rating={4}
            image="https://i.ibb.co/QY9yMqz/61e-T2-Cpr6l-L-SL1500.jpg"
          />
        </ProductCover>

        <ProductCover>
          <Product
            id="4903850"
            title="CARE VIEW Non-Woven Fabric Reuseable N95 Mask (White, Without Valve, Pack of 10) for Unisex"
            price={546}
            rating={4}
            image="https://i.ibb.co/zXCXS4N/61y-M-GQ8j-PL-SL1080.jpg"
          />
          <Product
            id="23445930"
            title="HealthSense FS 550 Nano-Cure Facial Ionic Steamer (White Pink)"
            price={2500}
            rating={5}
            image="https://i.ibb.co/DgkQPy5/71sh3-Rp-La-UL-SL1500.jpg"
          />
          <Product
            id="3254354345"
            title="
            Lifebuoy Hand Sanitizer Super Hero Kit | Superman & Wonder Woman | Anti bacterial 70% Alcohol based Sanitizer "
            price={180}
            rating={5}
            image="https://i.ibb.co/72Sdkzd/61-BEW8-8-VRS-SL1164.jpg"
          />
        </ProductCover>

        <ProductCover>
          <Product
            id="90829332"
            title="Omron HEM 7120 Fully Automatic Digital Blood Pressure Monitor With Intellisense Technology For Most Accurate Measurement"
            price={2250}
            rating={4}
            image="https://i.ibb.co/bKQWkqn/81e-Ifnf-Hi-IL-SL1500.jpg"
          />
        </ProductCover>
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`
const ProductCover = styled.div`
     display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
`

const Banner = styled.div`
    background-image: url('https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    z-index: 1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    display: flex;
`