import s from'./myTracks.module.css';
import '../../example stratos font/Stratos-Medium.woff2';
import Nav from '../main/mainNav';
import Bar from '../main/bar';

export const Mytracks = () => {
    
  return (
    <>
      <Nav />
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
      <h2 className={s.centerblock__h2}>Мои треки</h2>
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
        <div className={s.playlist__item}>
        <div className={`${s.playlist__track} ${s.track}`}>
                <div className={s.track__title}>
                  <div className={s.track__titleImage}>
                    <svg className={s.track__titleSvg} alt="music">
                <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className={s.track__titleText}>
              <a className={s.track__titleLink} href="http://">
                Guilt <span className="track__titleSpan"></span>
              </a>
            </div>
          </div>
          <div className={s.track__author}>
            <a className={s.track__authorLink} href="http://">
              Nero
            </a>
          </div>
          <div className={s.track__album}>
            <a className={s.track__albumLink} href="http://">
              Welcome Reality
            </a>
          </div>
          <div className={s.track__time}>
            <svg className={s.track__timeSvg} alt="time">
              <use xlinkHref="./img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className={s.track__timeText}>4:44</span>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
      
      <Bar />
    </>
  );
};