const items = [
  "서울 전지역",
  "경기 전지역",
  "당일 현장투입",
  "소규모 OK",
  "장기·단기",
  "신속 견적",
  "깔끔한 작업",
  "합리적 단가",
];

export default function MarqueeStrip() {
  return (
    <div className="relative py-5 bg-primary-500 overflow-hidden border-y-4 border-foreground-950">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-6 px-8">
            <i
              className="ri-star-fill w-5 h-5 flex items-center justify-center text-foreground-950"
            ></i>
            <span
              className="text-foreground-950 text-2xl md:text-3xl tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}