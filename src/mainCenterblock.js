import PlaylistItem from './PlaylistItem';
import Filter from './mainFilter';
import Skeleton from './Skeleton';
import { useState } from 'react';
import { useEffect } from 'react';

function Centerblock() {
const [isLoading, setIsLoading] = useState(true);
useEffect(()=>{
  setIsLoading(true)
  const skeleton = setTimeout(()=>{
    setIsLoading(false)
  }, 3000)
  return()=>clearTimeout(skeleton)
},[])

  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="./img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <Filter />
      </div>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="./img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          {isLoading ? (
            [...new Array(11)].map((_, index) => <Skeleton key={index} />)
          ) : (
            <PlaylistItem />
          )}

          {
            // eslint-disable-next-line react/no-array-index-key
            Array.from({ length: 11 }).map((item, index) => (
              <PlaylistItem key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
export default Centerblock;
