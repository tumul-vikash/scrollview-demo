import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import Card from './components/Card';

const App = () => {

  const data = [{
    "name": "hero Product",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "info": "OMG This just came out today!",
    "image": "http://placehold.it/940x300/999/CCC"
  },
  {
    "name": "Product 1",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "info": "This is the latest and greatest product from Derp corp.",
    "image": "http://placehold.it/300x300/999/CCC"
  },
  {
    "name": "Product 2",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "offer": "BOGOF",
    "image": "http://placehold.it/300x300/999/CCC"
  },
  {
    "name": "Product 3",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "http://placehold.it/300x300/999/CCC"
  },
  {
    "name": "Product 4",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "offer": "No srsly GTFO",
    "image": "http://placehold.it/300x300/999/CCC"
  },{
    "name": "Product 5",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "http://placehold.it/300x300/999/CCC"
  },
  {
    "name": "Product 6",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "info": "This is the latest and greatest product from Derp corp.",
    "offer": "info with offer",
    "image": "http://placehold.it/300x300/999/CCC"
  }]

  return (
    <ScrollView horizontal>
      {
        data.map((data, index) => {
          return (
            <Card key={index} name={data.name} details={data.detail} price={data.price} />
          )
        })
      }
    </ScrollView>
  )
}

export default App