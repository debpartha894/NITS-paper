import './App.css';
import { Link } from 'react-router-dom';
import GetDeps from './utils/getDeps';
import Loading from './components/loading';
import { useMemo } from 'react';

function App() {
  const [deps, loading] = GetDeps()
  console.log(deps)


  if (loading) return <Loading />

  return (
    <div className="whole-class-x py-3">
      <h1 className='text-lg text-center font-medium italic'>Choose Your Department</h1>
      <div className="grid-col-3 gap-10 pt-4">
        {!loading && deps && deps.map((dep, i) => {
          return <Link key={i} to={`/department/${dep.nickName.toLowerCase()}`}>
            <div className="card-zoom">
              <img src={dep.depImg} className="card-zoom-image depImg" alt="dep-img" />
              <h1 className="card-zoom-text">{dep.nickName}</h1>
            </div>
          </Link>
        })}
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
