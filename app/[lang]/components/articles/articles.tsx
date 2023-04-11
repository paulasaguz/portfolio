import Image from 'next/image'

import Typography from '../ui/Typography'

import ArticleOneImage from "@/public/images/article.jpeg"
import ArticleTwoImage from "@/public/images/article2.png"

import s from './articles.module.css'

const Articles = () => {
  return (
    <div className='ctn mb-8 mt-12'>
      <h2>Blog posts</h2>
      <div className="flex flex-wrap gap-4">
        <a target="_blank" href="https://medium.com/@paulajohana/tips-para-hacer-tu-primer-prueba-técnica-frontends-c18f5a813434" className={s.root}>
          <div className={s.imgCtn}>
            <Image
              alt="article cover"
              src={ArticleOneImage}
              fill
            />
          </div>
          <Typography Tag="p" variant='body'>Apr 17, 2020 · 6 min read</Typography>
          <h3>Tips para hacer tu primer prueba técnica (frontends)</h3>
          <Typography Tag="p" variant='body'>Learn some tips for your technical test</Typography>
        </a>
        <a target="_blank" href="https://medium.com/@paulajohana/introducci%C3%B3n-a-css-in-js-con-emotion-79dbc2d06f95" className={s.root}>
          <div className={s.imgCtn}>
            <Image 
              alt="article cover"
              src={ArticleTwoImage}
              width={200}
              height={200}
            />
          </div>
          <Typography Tag="p" variant='body'>Feb 3, 2020 · 5 min read</Typography>
          <h3>Introducción a CSS-in-JS con Emotion</h3>
          <Typography Tag="p" variant='body'>Learn about CSS-in-JS</Typography>
        </a>
      </div>
    </div>
  )
}

export default Articles