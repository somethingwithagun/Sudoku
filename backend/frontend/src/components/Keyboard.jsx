import '../Keyboard.css'

const numbers = [
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
  {id:6},
  {id:7},
  {id:8},
  {id:9}];

export default function Keyboard({onDigitPress, onErasePress}) {
   const listItems = numbers.map(btn =>
        <button key={btn.id}
                className="keyboard-button"
                onClick={() => onDigitPress(btn.id)}>
            {btn.id}
        </button>
    );
  return (
    <div className="keyboard-button-list">
      {listItems}
      <button className="keyboard-button"
              onClick={() => onErasePress()}>
                X
              </button>
    </div>
  );
}