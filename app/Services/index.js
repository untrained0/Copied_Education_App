import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clpfbvlseljbo01t7bu9gc11s/master";

export const getCourseList = async (level) => {
    const query = gql`
    query CourseList {
        courses(where: {level: `+level+`}) {
          id
          banner {
            url
          }
          chapter {
            id
            title
            content {
              heading
              description {
                markdown
              }
              output {
                markdown
              }
            }
          }
          description {
            markdown
          }
          name
          level
          price
          tag
          time
          author
        }
      }
      `

      const result = await request(MASTER_URL, query);
      return result;
}