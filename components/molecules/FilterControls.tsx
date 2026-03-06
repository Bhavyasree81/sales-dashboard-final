"use client";

import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function FilterControls({ threshold, setThreshold, reset }: any) {

  return (
    <div>
      <Input value={threshold} onChange={setThreshold} />
      <Button label="Reset" onClick={reset} />
    </div>
  );
}