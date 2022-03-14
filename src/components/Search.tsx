import Context from '../context';
import Button from './Button';
import { useContext } from 'react';

function Search(): JSX.Element {
  const { users, searchInput, submitHandler, clearHandler } =
    useContext(Context);

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search"
        ref={searchInput}
      />
      <Button text="Search" cls="search__button" onClick={submitHandler} />
      {users.length > 0 ? (
        <Button text="CL" cls="search__clear" onClick={clearHandler} />
      ) : null}
    </div>
  );
}

export default Search;
