"use client";

import Input from "../atoms/Input";
import Button from "../atoms/Button";

type Props = {
  threshold: number | "";
  setThreshold: (value: number | "") => void;
  reset: () => void;
};

export default function FilterControls({ threshold, setThreshold, reset }: Props) {

  return (
    <div>
      <Input value={threshold} onChange={setThreshold} />
      <Button label="Reset" onClick={reset} />
    </div>
  );
}