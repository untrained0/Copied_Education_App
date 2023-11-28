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
                html
              }
              output {
                markdown
                html
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

export const enrollCourse = async (courseID, userEmail) => {
  const mutationQuery = gql`
  mutation MyMutation {
    createUserEnrolledCourse(
      data: {courseId: "`+courseID+`", userEmail: "`+userEmail+`", course: {connect: {id: "`+courseID+`"}}}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `

  const result = await request(MASTER_URL, mutationQuery);
  return result;
}

export const getUserEnrolledCourse = async (courseId, userEmail) => {
  const query = gql`
  query GetUserEnrolledCourse {
    userEnrolledCourses(
      where: {userEmail: "`+userEmail+`", courseId: "`+courseId+`"}
    ) {
      completedChapter {
        chapterId
      }
      id
      courseId
    }
  }
  `

  const result = await request(MASTER_URL, query);
  return result;
}

export const createNewUser = async (email, name, password) => {
  const mutationQuery = gql`
  mutation MyMutation {
    createRegister(
      data: {email: "`+email+`", password: "`+password+`", confirmPassword: "`+password+`", fullName: "`+name+`"}
    ) {
      id
    }
    publishManyRegistersConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }  
  ` 

  const result = await request(MASTER_URL, mutationQuery);
  return result;
}

export const makeChapterComplete = async (chapterId, recordId) => {
  const mutationQuery = gql`
  mutation MyMutation {
    updateUserEnrolledCourse(
      data: {completedChapter: {create: {data: {chapterId: "`+chapterId+`"}}}}
      where: {id: "`+recordId+`"}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `

  const result = await request(MASTER_URL, mutationQuery);
  return result;
}