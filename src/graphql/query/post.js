import gql from 'graphql-tag'

const GET_ALL_POST = gql`
  query AllPostsQuery {
    posts {
      data {
        title
        total_comments
        total_likes
        body {
          text
        }
        thumbnail {
          url
        }
      }
    }
  }
`;

export {
  GET_ALL_POST
}