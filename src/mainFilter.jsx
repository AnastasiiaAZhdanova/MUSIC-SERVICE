import { useState } from 'react';
import s from './mainFilter.module.css';
import './example\ stratos\ font/Stratos-Medium.woff2';

export default function Filter() {
  const [visibleFilter, setVisibleFilter] = useState(null);

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter);
  };

  return (
    <div className={s.App}>
      <div className={s.filter__choose}>
        <div
          className={`${s.filter__button} ${s.buttonAuthor} ${s._btnText}`}
          onClick={() => toggleVisibleFilter('author')}
        >
          исполнителю
        </div>
        {visibleFilter === 'author' && (
          <div className={s.filterPerformer}>
            <input
              className={s.filter__text}
              type="checkbox"
              placeholder="Michael Jackson"
              id="MichaelJackson"
            />
            <label htmlFor="Michael Jackson">Michael Jackson</label>
            <input
              className={s.filter__text}
              type="checkbox"
              placeholder="Frank Sinatra"
              id="Frank Sinatra"
            />
            <label htmlFor="Frank Sinatra">Frank Sinatra</label>
            <input
              className={s.filter__text}
              type="checkbox"
              placeholder="Calvin Harris"
              id="Calvin Harris"
            />
            <label htmlFor="Calvin Harris">Calvin Harris</label>
            <input
              className={s.filter__text}
              type="checkbox"
              placeholder="Zhu"
              id="Zhu"
            />
            <label htmlFor="Zhu">Zhu</label>
            <input
              className={s.filter__text}
              type="checkbox"
              placeholder="Arctic Monkeys"
              id="Arctic Monkeys"
            />
            <label htmlFor="Arctic Monkeys">Arctic Monkeys</label>
          </div>
        )}
      </div>
      <div className={s.filter__choose}>
        <div
          className={`${s.filter__button} ${s.buttonYear} ${s._btnText}`}
          onClick={() => toggleVisibleFilter('year')}
        >
          году выпуска
        </div>
        {visibleFilter === 'year' && (
          <div className={s.filterYear}>
            <input
              className={s.filterNew}
              type="radio"
              placeholder="Более новые"
              id="new"
            />
            <label htmlFor="new">Более новые</label>
            <input
              className={s.filterOld}
              type="radio"
              placeholder="Более старые"
              id="old"
            />
            <label htmlFor="new">Более старые</label>
          </div>
        )}
      </div>
      <div className={s.filter__choose}>
        <div
          className={`${s.filter__button} ${s.buttonGenre} ${s._btnText}`}
          onClick={() => toggleVisibleFilter('genre')}
        >
          жанру
        </div>
        {visibleFilter === 'genre' && (
          <div className={s.filterPerformer}>
            <input
              className={s.filter__text}
              type="checkbox"
              placeholder="Рок"
              id="Рок"
            />
            <label htmlFor="Рок">Рок</label>
            <input
              className={s.filter__text}
              type="checkbox"
              placeholder="Хип-хоп"
              id="Хип-хоп"
            />
            <label htmlFor="Хип-хоп">Хип-хоп</label>
            <input
              className={s.filter__text}
              type="checkbox"
              placeholder="Поп-музыка"
              id="Поп-музыка"
            />
            <label htmlFor="Поп-музыка">Поп-музыка</label>
            <input
              className={s.filter__text}
              type="checkbox"
              placeholder="Техно"
              id="Техно"
            />
            <label htmlFor="Техно">Техно</label>
            <input
              className={s.filter__text}
              type="checkbox"
              placeholder="Инди"
              id="Инди"
            />
            <label htmlFor="Инди">Инди</label>
          </div>
        )}
      </div>
    </div>
  );
}
