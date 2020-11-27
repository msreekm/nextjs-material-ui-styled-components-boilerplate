import InfoBox from '../components/InfoBox'
import Submit from '../components/Submit'
import PostList, {
  ALL_POSTS_QUERY,
  allPostsQueryVars,
} from '../components/PostList'
import { initializeApollo, addApolloState } from '../lib/apolloClient'
import styled from 'styled-components'
import MyLayout from '../layouts/MyLayout'
import Link from 'next/link'

const Title = styled.h1`
  font-size: 22px;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const IndexPage = () => (
  <>
    <Title>Home page</Title>
    <Link href="/client-only">Client Only</Link>

    <InfoBox>ℹ️ This page shows how to use SSG with Apollo.</InfoBox>
    <Submit />
    <PostList />
  </>
)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  })
}

IndexPage.Layout = MyLayout

export default IndexPage
