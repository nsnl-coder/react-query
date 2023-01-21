import { Link } from 'react-router-dom';

function Home(): JSX.Element {
  return (
    <div className="flex justify-center gap-x-4 items-center h-screen pb-40">
      <Link to="/todos">
        <div className="w-40 h-40 bg-blue-300 flex justify-center items-center text-2xl font-bold hover:text-white cursor-pointer">
          See To do
        </div>
      </Link>
      <Link to="/todos/new">
        <div className="w-40 h-40 bg-blue-300 flex justify-center items-center text-2xl font-bold hover:text-white cursor-pointer">
          Add to do
        </div>
      </Link>
    </div>
  );
}

export default Home;
