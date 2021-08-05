import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import styles from '../../styles/post.module.css'
import Head from 'next/head'
import Date from '../../components/date'
import Link from 'next/link'

export default function Post({ postData }) {
  return (
    <html>
      <body className = {styles.body}>
      <div>
            <Link href={'/'}>
              <a className={styles.logo}>
                ABHAYRAJIO Home
              </a>
            </Link>
          </div>
        <h1 className = {styles.maintext}> {postData.title} </h1>
        <p className = {styles.text}>written <Date dateString={postData.date} /></p>
        <div className = {styles.blogpost}>
          <div className = {styles.posttext} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </body>
    </html>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}