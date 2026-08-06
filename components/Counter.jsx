import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>

      <Button
        text="Increment"
        onClick={() => setCount(count + 1)}
      />
    </div>
  );
}