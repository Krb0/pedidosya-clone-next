import { gql } from '@apollo/client'
export const ADD_RESTAURANT = gql`
  mutation AddTodo(
    $logo: String!
    $tipo: Type!
    $fondo: String!
    $nombre: String!
    $envio: Int!
    $minimo: Int!
  ) {
    addRestaurante(
      logo: $logo
      tipo: $tipo
      fondo: $fondo
      nombre: $nombre
      envio: $envio
      minimo: $minimo
    ) {
      _id
    }
  }
`
