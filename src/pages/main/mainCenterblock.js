import PlaylistItem from '../../PlaylistItem';
import Filter from './mainFilter';
import Skeleton from '../../Skeleton';
import { useState } from 'react';
import { useEffect } from 'react';
import s from'./mainCenterblock.module.css';
import '../../example\ stratos\ font/Stratos-Medium.woff2';

export const Centerblock=()=> {
  
const [isLoading, setIsLoading] = useState(true);
useEffect(()=>{
  setIsLoading(true)
  const skeleton = setTimeout(()=>{
    setIsLoading(false)
  }, 3000)
  return()=>clearTimeout(skeleton)
},[])

  return (
    <div className={`${s.main__centerblock} ${s.centerblock}`}>
      <div className={`${s.centerblock__search} ${s.search}`}>
        <svg className={s.search__svg}>
          <use xlinkHref="./img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className={s.search__text}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={s.centerblock__h2}>Треки</h2>
      <div className={`${s.centerblock__filter} ${s.filter}`}>
        <div className={s.filter__title}>Искать по:</div>
        <Filter />
      </div>
      <div className={s.centerblock__content}>
        <div className={`${s.content__title} ${s.playlistTitle}`}>
          <div className={`${s.playlistTitle__col} ${s.col01}`}>Трек</div>
          <div className={`${s.playlistTitle__col} ${s.col02}`}>ИСПОЛНИТЕЛЬ</div>
          <div className={`${s.playlistTitle__col} ${s.col03}`}>АЛЬБОМ</div>
          <div className={`${s.playlistTitle__col} ${s.col04}`}>
            <svg className={s.playlistTitle__svg} alt="time">
              <use xlinkHref="./img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <div className={`${s.content__playlist} ${s.playlist}`}>
          {isLoading ? (
            [...new Array(11)].map((_, index) => <Skeleton key={index} />)
          ) : (
            <PlaylistItem />
          )}

          {
            // eslint-disable-next-line react/no-array-index-key
            Array.from({ length:11 }).map((item, index) => (
              <PlaylistItem key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
export default Centerblock;
