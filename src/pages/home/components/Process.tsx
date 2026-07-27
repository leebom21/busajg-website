const steps = [
  {
    icon: "ri-phone-line",
    title: "01. 전화 상담",
    desc: "현장 위치, 작업 범위, 원하는 일정을 편하게 알려주세요.",
  },
  {
    icon: "ri-file-list-3-line",
    title: "02. 무료 견적",
    desc: "현장 조건에 맞춰 합리적인 견적을 최대한 빠르게 안내드립니다.",
  },
  {
    icon: "ri-truck-line",
    title: "03. 장비 출동",
    desc: "확정된 일정에 맞춰 서울·경기 전지역, 당일 현장 투입 가능.",
  },
  {
    icon: "ri-checkbox-circle-line",
    title: "04. 작업 · 마무리",
    desc: "숙련된 오퍼레이터가 신속하고 깔끔하게 현장을 정리합니다.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-background-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-200 text-secondary-900 text-xs font-bold tracking-wider">
            <i className="ri-flow-chart w-3 h-3 flex items-center justify-center"></i>
            PROCESS · 진행 절차
          </div>
          <h2
            className="mt-4 text-4xl md:text-5xl text-foreground-950 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            전화 한 통이면 <span className="text-primary-500">끝</span>
          </h2>
          <p className="mt-4 text-foreground-700">
            복잡한 절차 없이 4단계로 빠르게 진행됩니다.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* dashed connector */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-secondary-300"></div>

          {steps.map((s, i) => (
            <div key={s.title} className="relative bg-background-50 rounded-xl p-6 border border-background-200 hover:border-primary-400 transition-colors">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-foreground-950 text-primary-500 mb-4 relative z-10">
                <i className={`${s.icon} w-6 h-6 flex items-center justify-center text-2xl`}></i>
              </div>
              <h3
                className="text-foreground-950 text-xl mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-foreground-600 leading-relaxed">{s.desc}</p>
              <div
                className="absolute top-4 right-4 text-6xl leading-none text-secondary-200"
                style={{ fontFamily: "var(--font-label)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}