import Counter from './components/Counter';

/**
 * App component
 * @return {JSX.Element} JSX.Element
 */
function App(): JSX.Element {
  return (
    <div>
      <h1 className="text-center">Revite</h1>
      <Counter />
    </div>
  );
}

export default App;
