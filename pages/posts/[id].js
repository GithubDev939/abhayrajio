import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import styles from '../../styles/post.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Post({ postData }) {
  return (
    <html className = {styles.body}>
      <body className = {styles.body}>
        <!-- Begin Web-Stat code v 7.0 -->
        <span id="wts2073993"></span>
        <script>var wts=document.createElement('script');wts.async=true;
        wts.src='https://app.wts2.one/log7.js';document.head.appendChild(wts);
        wts.onload = function(){ wtslog7(2073993,2); };
        </script><noscript><a href="https://www.web-stat.com">
        <img src="https://app.wts2.one/7/2/2073993.png" 
        alt="Web-Stat analytics"></a></noscript>
        <!-- End Web-Stat code v 7.0 -->
      <div>
            <Link href={'/'}>
              <a className={styles.logo}>
                ABHAYRAJIO Home
              </a>
            </Link>
          </div>
        <h1 className = {styles.maintext}> {postData.title} </h1>
        <p className = {styles.text}>written {postData.date}/></p>
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
