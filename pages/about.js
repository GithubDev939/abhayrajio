import Link from 'next/link'
import styles from '../styles/about.module.css'

export default function Home() {
  return (
      <html className = {styles.body}>
        <body>
          <div className = {styles.makeheight}>
            <Link href={'/'}>
              <a className={styles.logo}>
                ABHAYRAJIO Home
              </a>
            </Link>
          </div>
          <h1 className = {styles.maintext}>About Me</h1>
          <div className = {styles.textbox}>
            <p className = {styles.text}>
              Hi. My name is Abhay. I'm a high schooler from Seattle, Washington. 
              I am a beginner programmer and regularly compete in CodeForces 
              competitions as well as the annual USACO competitions. To a lesser extent, I also 
              compete in (annual) AMC10/12 competitions. This website will contain my journey
              of in and out-of-school events. Join me as I venture through my life!
            </p>
          </div>
        </body>
      </html>
  )
}