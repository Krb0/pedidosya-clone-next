import { gql } from '@apollo/client'

export const ALL_RESTAURANTS = gql`
  query {
    restaurantes {
      _id
      nombre
      logo
      simpleOpinion {
        rating
        opinionCount
      }
      tipo
      envio
      minimo
    }
  }
`

export const FIND_RESTAURANT = gql`
  query findRestaurant($id: String) {
    restaurante(id: $id) {
      _id
      tipo
      envio
      nombre
      minimo
      platos {
        foto
        _id
        nombre
        precio
      }
      simpleOpinion {
        rating
        opinionCount
      }
    }
  }
`
