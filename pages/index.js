import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/index.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <html className = {styles.body}>
        <body>
          <div className = {styles.makeheight}>
            <Link href={'/'}>
              <a className={styles.logo}>
                ABHAYRAJIO Home
              </a>
            </Link>
            <div className = {styles.rightside}>
              <Link href={`/about`}>
                <a className = {styles.removeunderline}><p className = {styles.textwfont}>ABOUT</p></a>
              </Link>
            </div>
          </div>
          <h1 className = {styles.maintext}>Hello There!<br></br>I'm Abhay Raj<span className = {styles.codepointer}>.</span></h1>
          <p className = {styles.text}>And this is a high schooler's<br></br>personal website.</p>
        </body>
        <div className={styles.arrowdown}></div>
        <h2 className = {styles.blogtitle}>BLOG POSTS</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`}>
              <a>
                <div className = {styles.blogpost}>
                  <li className = {styles.text} key={id}>
                  <p>
                    <span className = {styles.leftside}>{title}</span>
                    <span className = {styles.rightside}>{date}</span>
                  </p> 
                  </li>
                </div>
              </a>
            </Link>
          ))}
        </ul>
        </html>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

/*
<html className = {styles.body}>
        <body>
          <div className = {styles.makeheight}>
            <Link href={'/'}>
              <a className={styles.logo}>
                ABHAYRAJIO Home
              </a>
            </Link>
            <div className = {styles.rightside}>
              <Link href={`/about`}>
                <a className = {styles.removeunderline}><p className = {styles.textwfont}>ABOUT</p></a>
              </Link>
            </div>
          </div>
          <h1 className = {styles.maintext}>Hello There!<br></br>I'm Abhay Raj<span className = {styles.codepointer}>.</span></h1>
          <p className = {styles.text}>And this is a high schooler's<br></br>personal website.</p>
        </body>
        <div className={styles.arrowdown}></div>
        <h2 className = {styles.blogtitle}>BLOG POSTS</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`}>
              <a>
                <div className = {styles.blogpost}>
                  <li className = {styles.text} key={id}>
                  <p>
                    <span className = {styles.leftside}>{title}</span>
                    <span className = {styles.rightside}>{date}</span>
                  </p> 
                  </li>
                </div>
              </a>
            </Link>
          ))}
        </ul>
        </html>
*/