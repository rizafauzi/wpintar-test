import gql from 'graphql-tag'

const GET_ALL_TRIP = gql`
  query AllTripsQuery {
    trips {
      id
      data {
        title
        thumbnail {
          file_name
          id
          url
        }
      }
    }
  }
`;

export {
  GET_ALL_TRIP
}
