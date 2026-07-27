const items = [
  {
    title: "서울 은평구 · 단독주택 부지 정리",
    tag: "토사 정리",
    img: "https://readdy.ai/api/search-image?query=Skid%20steer%20loader%20smoothing%20out%20soil%20on%20a%20residential%20house%20lot%20construction%20site%2C%20warm%20late%20afternoon%20lighting%2C%20clean%20muted%20background%20with%20fence%20and%20trees%20in%20distance%2C%20detailed%20industrial%20photography%2C%20cinematic%20realistic%20texture&width=900&height=1100&seq=gallery-01&orientation=portrait",
  },
  {
    title: "경기 파주 · 창고 철거 후 정리",
    tag: "철거 정리",
    img: "https://readdy.ai/api/search-image?query=Skid%20steer%20loader%20clearing%20debris%20on%20a%20post-demolition%20warehouse%20site%20with%20scattered%20metal%20and%20concrete%20pieces%2C%20warm%20diffused%20sunlight%2C%20wide%20open%20outdoor%20industrial%20background%2C%20cinematic%20heavy%20equipment%20photography%20with%20simple%20muted%20tones&width=900&height=1100&seq=gallery-02&orientation=portrait",
  },
  {
    title: "서울 강서구 · 공장 노면 청소",
    tag: "브러쉬 작업",
    img: "https://readdy.ai/api/search-image?query=Skid%20steer%20loader%20with%20sweeper%20brush%20attachment%20cleaning%20a%20large%20factory%20yard%20concrete%20surface%2C%20soft%20natural%20light%2C%20clean%20industrial%20background%20with%20factory%20building%20blurred%20behind%2C%20detailed%20cinematic%20photography&width=900&height=1100&seq=gallery-03&orientation=portrait",
  },
  {
    title: "경기 안양 · 상가 폐기물 상차",
    tag: "폐기물 상차",
    img: "https://readdy.ai/api/search-image?query=Skid%20steer%20loader%20lifting%20construction%20debris%20into%20a%20dump%20truck%20at%20a%20commercial%20building%20renovation%20site%2C%20warm%20natural%20lighting%2C%20clean%20street%20background%2C%20highly%20detailed%20industrial%20action%20photography%2C%20cinematic%20realistic&width=900&height=1100&seq=gallery-04&orientation=portrait",
  },
  {
    title: "서울 관악구 · 지하 주차장 정리",
    tag: "협소 공간",
    img: "https://readdy.ai/api/search-image?query=Compact%20mini%20skid%20steer%20loader%20operating%20inside%20a%20dim%20concrete%20underground%20parking%20garage%2C%20artificial%20warm%20lighting%2C%20narrow%20industrial%20interior%20background%2C%20detailed%20realistic%20photography%2C%20cinematic%20heavy%20equipment%20scene&width=900&height=1100&seq=gallery-05&orientation=portrait",
  },
  {
    title: "경기 김포 · 부지 평탄 작업",
    tag: "평탄 작업",
    img: "https://readdy.ai/api/search-image?query=Skid%20steer%20loader%20leveling%20a%20large%20open%20dirt%20lot%20with%20fresh%20smooth%20tracks%20on%20the%20ground%2C%20golden%20hour%20warm%20lighting%2C%20simple%20muted%20rural%20background%2C%20detailed%20cinematic%20construction%20photography&width=900&height=1100&seq=gallery-06&orientation=portrait",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-background-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-200 text-accent-900 text-xs font-bold tracking-wider">
              <i className="ri-image-fill w-3 h-3 flex items-center justify-center"></i>
              PORTFOLIO · 작업 사례
            </div>
            <h2
              className="mt-4 text-4xl md:text-5xl text-foreground-950 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              현장에서 <span className="text-primary-500">직접 증명</span>합니다
            </h2>
          </div>
          <p className="max-w-md text-foreground-700">
            서울·경기 각지에서 진행한 실제 현장 사례입니다. 유사한 현장이 있다면 편하게 상담 주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((g) => (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-xl border border-background-200 hover:border-primary-400 transition-colors cursor-pointer"
            >
              <div className="h-[420px] overflow-hidden">
                <img
                  src={g.img}
                  alt={g.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground-950 via-foreground-950/20 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-primary-500 text-foreground-950 text-xs font-bold">
                  {g.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                  className="text-background-50 text-xl leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {g.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}