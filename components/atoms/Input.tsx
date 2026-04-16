type Props = {
  value: number | "";
  onChange: (value: number | "") => void;
};

export default function Input({ value, onChange }: Props) {
  return (
    <input
      type="number"
      value={value}
      placeholder="Enter sales threshold"
      className="border p-2 rounded"
      onChange={(e) => {
        const val = e.target.value;

        if (val === "") {
          onChange("");
        } else {
          onChange(Number(val));
        }
      }}
    />
  );
}