import Head from 'next/head'
import BLOG from '@/blog.config'
import styles from '../styles/Home.module.css'
import {MainScreen} from "@/components/commonPage/MainScreen";
import {CircleAndDotCursor} from '@/components/commonPage/CircleAndDotCursor'
import {Component} from "react";
import {isPortableDevice} from "@/util/judgement";

if (typeof window !== 'undefined') {
  //阻止双指放大页面
  document.documentElement.addEventListener("gesturestart", function (event) {
    event.preventDefault();
  });
}

export default class Home extends Component {

  componentDidMount() {
    // 挂载鼠标样式
    const cursor = new CircleAndDotCursor()
    if (isPortableDevice()) {
      document.onmousemove = function (event) {
        cursor.move(event)
      }
      document.onclick = function () {
        cursor.click()
      }
    } else {
      cursor.remove()
    }
  }

  render() {
    return (
      <>
        <Head>
          <title>{BLOG.SITE_TITLE}</title>
          <meta name="viewport"
                content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1,user-scalable=0,viewport-fit=cover" />
        </Head>
        <div className="curzr" hidden></div>
        <div className={styles.dreamland}>
          <MainScreen />
        </div>
      </>
    )
  }
}
