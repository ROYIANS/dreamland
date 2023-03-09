// @ts-nocheck
import styles from '@/styles/MainScreen.module.css'
import BLOG from '@/blog.config';
import {CSSProperties, useEffect, useState} from "react";
import moment from "moment";
import {isApple, isBrowser, isPortableDevice} from "@/util/judgement";

export function MainScreen() {
  const [batteryInfo, setBatteryInfo] = useState({
    '--battery-charging': 0,
    '--battery-level': 100
  } as CSSProperties)
  const [weather, setWeatherInfo] = useState({
    city: '小梦岛',
    info: {
      tip: '未获取到你所在城市信息',
      low: '',
      high: '',
      type: ''
    }
  })
  const [time, setTime] = useState('')

  useEffect(() => {
    if (isBrowser() && navigator && 'getBattery' in navigator) {
      // @ts-ignore
      navigator.getBattery().then(battery => {
        updateChargeInfo();
        updateLevelInfo();

        function updateChargeInfo() {
          setBatteryInfo({
            '--battery-charging': battery.charging ? 1 : 0,
            '--battery-level': battery.level * 100
          })
        }

        function updateLevelInfo() {
          setBatteryInfo({
            '--battery-charging': battery.charging ? 1 : 0,
            '--battery-level': battery.level * 100
          })
        }

        battery.addEventListener("levelchange", () => {
          updateLevelInfo();
        });

        battery.addEventListener("chargingchange", () => {
          updateChargeInfo();
        });
      })
    }

    if (isBrowser()) {
      fetch('https://api.vvhan.com/api/weather').then(res => {
        res.json().then(data => {
          setWeatherInfo(data)
        })
      })
    }

    if (isBrowser()) {
      setTime(moment().format('HH:mm'))
      setInterval(() => {
        setTime(moment().format('HH:mm'))
      }, 1000)
    }
  }, [])

  return (
    <>
      <header className={styles.dreamlandTop}>
        <nav className={styles.statusBar}>
          <div className="max-w-[60%] overflow-hidden whitespace-nowrap text-ellipsis">
            <span className="font-serif font-bold">{BLOG.SITE_NAME}</span>
          </div>
          <div className={styles.statusBarRight}>
            <span className="hidden lg:block">{weather?.city} {weather?.info?.type} {weather?.info?.low} {weather?.info?.high} {weather?.info?.tip}</span>
            <span className="block lg:hidden">{weather?.city} {weather?.info?.type}</span>
            <span>&emsp;</span>
            <span>{time}</span>
            <span>&emsp;</span>
            <span className={styles.battery} style={batteryInfo}></span>
          </div>
        </nav>
        <nav className={styles.navBar}>
          <div className={styles.appIconGroup}>
            <div className={styles.appIcon}>
              <i className="ri-home-line"></i>
              <span>主页</span>
            </div>
            <div className={styles.appIcon}>
              <i className="ri-arrow-left-line"></i>
              <span>后退</span>
            </div>
            <div className={styles.appIcon}>
              <i className="ri-settings-line"></i>
              <span>设置</span>
            </div>
          </div>
          <div className={styles.rightGroup}>
            <div className={styles.searchBar}>
              <i className="ri-search-line"></i>
              <input type="text" placeholder="搜索" />
            </div>
            <div className={styles.moreBtn}>
              <i className="ri-more-2-line"></i>
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.blogMain}>
        <div className={styles.blogCalenderBread}>
          <span>2023年03月</span>
          <span>/</span>
          <span>第09周</span>
          <span>
            <i className="ri-arrow-left-line"></i>
            <span>&emsp;</span>
            <i className="ri-arrow-right-line"></i>
          </span>
        </div>
        <article className={styles.blogContent}>
          <p>123</p>
          <h1>芒草深处</h1>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
          <p>123165</p>
        </article>
      </main>
      <footer className={styles.footer}>
        <div className="col-span-3 lg:col-span-2 lg:text-left">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">萌ICP备 20230101号</a>
        </div>
        <div className="col-span-3 lg:col-span-2">{BLOG.SINCE} - {new Date().getFullYear()}</div>
        <div className="col-span-6 lg:col-span-2 lg:text-right">
          <i className="ri-copyright-line"></i>
          <span>{BLOG.AUTHOR}</span>
          <span>&emsp;/&emsp;</span>
          <span>powered by <a href="">DreamlandBook</a></span>
        </div>
      </footer>
    </>
  );
}
