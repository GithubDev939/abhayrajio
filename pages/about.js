import Link from 'next/link'
import styles from '../styles/about.module.css'

export default function Home() {
  return (
      <html className = {styles.body}>
        <body className = {styles.body}>
          <!-- Begin Web-Stat code v 7.0 -->
          <span id="wts2073994"></span>
          <script>var wts=document.createElement('script');wts.async=true;
          wts.src='https://app.wts2.one/log7.js';document.head.appendChild(wts);
          wts.onload = function(){ wtslog7(2073994,2); };
          </script><noscript><a href="https://www.web-stat.com">
          <img src="https://app.wts2.one/7/2/2073994.png" 
          alt="Web-Stat analytics"></a></noscript>
          <!-- End Web-Stat code v 7.0 -->
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
