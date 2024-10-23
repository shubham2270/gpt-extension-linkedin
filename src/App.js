import "./App.css";

function App() {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Welcome to My Chrome Extension!</h1>
      <p className='mt-2 text-gray-700'>
        Chrome extension built with React and Tailwind CSS.
      </p>
      <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Click Me
      </button>
    </div>
  );
}

export default App;
