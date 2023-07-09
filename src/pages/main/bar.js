import SkeletonBar from '../../SkeletonBar';
import { useState } from 'react';
import { useEffect } from 'react';
import s from './bar.module.css';
import '../../example stratos font/Stratos-Medium.woff2';
import AudioPlayer from '../../Audio';

function Bar() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const skeleton = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(skeleton);
  }, []);

  return (
    <div>
      <div className={s.bar}>
        <div className={s.bar__content}>
          <div className={`${s.bar__player} ${s.player}`}>
            <div className={s.player__controls}>
              
              
                <AudioPlayer src="./media/Bobby_Marleni_-_Dropin.mp3" />
                
              
              <div className={`${s.player__btnRepeat} ${s._btnIcon}`}>
                <svg className={s.player__btnRepeatSvg} alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </svg>
              </div>
              <div className={`${s.player__btnShuffle} ${s._btnIcon}`}>
                <svg className={s.player__btnShuffleSvg} alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </svg>
              </div>
            </div>

            <div className={`${s.player__trackPlay} ${s.trackPlay}`}>
              {isLoading ? (
                <SkeletonBar />
              ) : (
                <div className={s.trackPlay__contain}>
                  <div className={s.trackPlay__image}>
                    <svg className={s.trackPlay__svg} alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className={s.trackPlay__author}>
                    <a className={s.trackPlay__authorLink} href="http://">
                      Ты та...
                    </a>
                  </div>
                  <div className={s.trackPlay__album}>
                    <a className={s.trackPlay__albumLink} href="http://">
                      Баста
                    </a>
                  </div>
                </div>
              )}

              <div className={s.trackPlay__likeDis}>
                <div className={`${s.trackPlay__like} ${s._btnIcon}`}>
                  <svg className={s.trackPlay__likeSvg} alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                </div>
                <div className={`${s.trackPlay__dislike} ${s._btnIcon}`}>
                  <svg className={s.trackPlay__dislikeSvg} alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
export default Bar;
