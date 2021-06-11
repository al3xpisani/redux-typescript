import {useState} from 'react';
import {useSelector} from 'react-redux';
import {useActions} from '../hooks/useActions';
import {RootState} from '../state/reducers';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const {searchRepositories} = useActions();

  //like to map props to state
  const {data, error, loading} = useSelector((state: RootState) => state.repositories);
  console.log('data', data)
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  }

  return(
    <div>
      <form onSubmit={onSubmit} >
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && 
      data.map((item) => <div>{item}</div>)}
    </div>
  )
}

export default RepositoriesList