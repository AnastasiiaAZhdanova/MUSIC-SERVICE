import SkeletonPlaylist from './SkeletonPlaylist';
import { useState } from 'react';
import { useEffect } from 'react';

function Sidebar() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const skeleton = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(skeleton);
  }, []);

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar" />
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            {isLoading ? (
              <SkeletonPlaylist />
            ) : (
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="./img/playlist01.png"
                  alt="day's playlist"
                />
              </a>
            )}
          </div>
          <div className="sidebar__item">
            {isLoading ? (
              <SkeletonPlaylist />
            ) : (
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="./img/playlist02.png"
                  alt="day's playlist"
                />
              </a>
            )}
          </div>
          <div className="sidebar__item">
            {isLoading ? (
              <SkeletonPlaylist />
            ) : (
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="./img/playlist03.png"
                  alt="day's playlist"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
