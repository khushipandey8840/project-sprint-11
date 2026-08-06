export default function Button({ text, onClick }) {
  return (
    <button aria-label="button" onClick={onClick}>
      {text}
    </button>
  );
}