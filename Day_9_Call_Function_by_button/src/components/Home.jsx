
import Handle from "./Handle"
export default function Home(){
    function normalFunction() {
        console.log("Normal Function Called");
    }

    const arrowFunction = () => {
        console.log("Arrow Function Called");
    };

    function greet(name) {
        console.log("Hello " + name);
    }

  return (
    <div>
      <h1>Function Call Demo</h1>

      {/* Normal Function */}
      <button onClick={normalFunction}>
        Normal Function
      </button>

      {/* Arrow Function */}
      <button onClick={arrowFunction}>
        Arrow Function
      </button>

      {/* Inline Arrow */}
      <button onClick={() => console.log("Inline Arrow")}>
        Inline Arrow
      </button>

      {/* With Parameter */}
      <button onClick={() => greet("Priyanshu")}>
        With Parameter
      </button>
    </div>
  );
    
    
}
