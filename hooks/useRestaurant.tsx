import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import {
  ALL_RESTAURANTS,
  FIND_RESTAURANT,
} from '../models/restaurants/restaurants.query'

const useRestaurant = (id?: string) => {
  if (id) {
    const { data, loading } = useQuery(FIND_RESTAURANT, {
      variables: { id: id },
    })

    return [data, loading]
  }
  const { data, loading } = useQuery(ALL_RESTAURANTS)
  return [data, loading]
}

export default useRestaurant
