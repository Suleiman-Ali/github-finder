import Context from '../context';
import Button from './Button';
import { useContext } from 'react';

function Search(): JSX.Element {
  const { users, searchInput, submitHandler, clearHandler } =
    useContext(Context);

  return (
    <form className="search" onSubmit={submitHandler}>
      <input
        type="text"
        className="search__input"
        placeholder="Search"
        ref={searchInput}
      />
      <Button text="Search" cls="search__button" type="submit" />
      {users.length > 0 ? (
        <Button
          text="CL"
          cls="search__clear"
          onClick={clearHandler}
          type="button"
        />
      ) : null}
    </form>
  );
}

export default Search;
