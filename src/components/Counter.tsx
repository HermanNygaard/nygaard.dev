import { useReducer } from "react";
import { Button } from "./Button";

export function Counter() {
  const [state, dispatch] = useReducer((x) => x + 1, 0);

  return <Button onClick={dispatch}>Count is {state}</Button>;
}
