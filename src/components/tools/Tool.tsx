interface ToolProps {
  name: string;
}

export function Tool({ name }: ToolProps) {
  return (
    <div className="bg-gray-800/50 px-4 py-3 rounded-lg hover:bg-gray-700/50 transition-colors">
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );
}