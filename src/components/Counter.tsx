/**
 * Counter component
 * @return {JSX.Element} JSX.Element
 */
export default function Counter(): JSX.Element {
  return (
    <div>
      <label className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        Count 0
      </label>
      <button>add</button>
      <button>minus</button>
    </div>
  );
}
