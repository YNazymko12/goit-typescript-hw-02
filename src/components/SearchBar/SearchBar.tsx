import { useState } from 'react';
import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

type Props = {
  onSearch: (value: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSearch(searchValue);
    setSearchValue('');
  };
  return (
    <div>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={handleChange}
          />
          <button className={css.button} type="submit">
            <span className={css.span}>Search</span>
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
