import { useState } from 'react';

export default function Filter() {
  const [visibleFilter, setVisibleFilter] = useState(null);

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter);
  };

  return (
    <div className="App">
      <div className="filter__choose">
        <div
          className="filter__button button-author _btn-text"
          onClick={() => toggleVisibleFilter('author')}
        >
          исполнителю
        </div>
        {visibleFilter === 'author' && (
          <div className="filter-performer">
            <input
              className="filter__text"
              type="checkbox"
              placeholder="Michael Jackson"
              id="MichaelJackson"
            />
            <label htmlFor="Michael Jackson">Michael Jackson</label>
            <input
              className="filter__text"
              type="checkbox"
              placeholder="Frank Sinatra"
              id="Frank Sinatra"
            />
            <label htmlFor="Frank Sinatra">Frank Sinatra</label>
            <input
              className="filter__text"
              type="checkbox"
              placeholder="Calvin Harris"
              id="Calvin Harris"
            />
            <label htmlFor="Calvin Harris">Calvin Harris</label>
            <input
              className="filter__text"
              type="checkbox"
              placeholder="Zhu"
              id="Zhu"
            />
            <label htmlFor="Zhu">Zhu</label>
            <input
              className="filter__text"
              type="checkbox"
              placeholder="Arctic Monkeys"
              id="Arctic Monkeys"
            />
            <label htmlFor="Arctic Monkeys">Arctic Monkeys</label>
          </div>
        )}
      </div>
      <div className="filter__choose">
        <div
          className="filter__button button-year _btn-text"
          onClick={() => toggleVisibleFilter('year')}
        >
          году выпуска
        </div>
        {visibleFilter === 'year' && (
          <div className="filter-year">
            <input
              className="filter-new"
              type="radio"
              placeholder="Более новые"
              id="new"
            />
            <label htmlFor="new">Более новые</label>
            <input
              className="filter-old"
              type="radio"
              placeholder="Более старые"
              id="old"
            />
            <label htmlFor="new">Более старые</label>
          </div>
        )}
      </div>
      <div className="filter__choose">
        <div
          className="filter__button button-genre _btn-text"
          onClick={() => toggleVisibleFilter('genre')}
        >
          жанру
        </div>
        {visibleFilter === 'genre' && (
          <div className="filter-performer">
            <input
              className="filter__text"
              type="checkbox"
              placeholder="Рок"
              id="Рок"
            />
            <label htmlFor="Рок">Рок</label>
            <input
              className="filter__text"
              type="checkbox"
              placeholder="Хип-хоп"
              id="Хип-хоп"
            />
            <label htmlFor="Хип-хоп">Хип-хоп</label>
            <input
              className="filter__text"
              type="checkbox"
              placeholder="Поп-музыка"
              id="Поп-музыка"
            />
            <label htmlFor="Поп-музыка">Поп-музыка</label>
            <input
              className="filter__text"
              type="checkbox"
              placeholder="Техно"
              id="Техно"
            />
            <label htmlFor="Техно">Техно</label>
            <input
              className="filter__text"
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
