type Props = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-black"
    >
      {label}
    </button>
  );
}