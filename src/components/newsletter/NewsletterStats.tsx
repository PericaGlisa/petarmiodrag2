interface Stat {
  value: string;
  label: string;
}

export function NewsletterStats() {
  const stats: Stat[] = [
    { value: "1.2K+", label: "subscribers" },
    { value: "52+", label: "issues sent" },
    { value: "12+", label: "months of insights" }
  ];

  return (
    <div className="flex gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col">
          <span className="text-2xl font-bold text-white">{stat.value}</span>
          <span className="text-sm text-gray-400">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}