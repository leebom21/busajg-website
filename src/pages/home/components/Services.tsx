const services = [
  {
    tag: "01",
    icon: "ri-landscape-fill",
    title: "토사 정리 · 평탄 작업",
    desc: "부지 조성, 흙 고르기, 잔토 반출 및 평탄화 작업까지 한 번에.",
    img: "https://readdy.ai/api/search-image?query=Orange%20skid%20steer%20loader%20machine%20leveling%20dirt%20soil%20on%20a%20flat%20construction%20site%20ground%2C%20dust%20flying%20in%20warm%20late%20afternoon%20sunlight%2C%20wide%20outdoor%20industrial%20photography%20with%20a%20simple%20neutral%20background%2C%20cinematic%20heavy%20equipment%20action%20shot%2C%20highly%20detailed%20realistic%20texture&width=1000&height=800&seq=service-01&orientation=landscape",
  },
  {
    tag: "02",
    icon: "ri-delete-bin-6-fill",
    title: "폐기물 정리 및 상차",
    desc: "건설 폐기물, 잔재물 신속 수거 및 상차. 트럭 상차까지 원스톱 처리.",
    img: "https://readdy.ai/api/search-image?query=Orange%20skid%20steer%20loader%20loading%20construction%20waste%20debris%20into%20a%20dump%20truck%20at%20an%20outdoor%20demolition%20site%2C%20warm%20natural%20lighting%2C%20industrial%20heavy%20equipment%20work%20photography%2C%20simple%20muted%20background%2C%20detailed%20mechanical%20action%2C%20professional%20cinematic%20composition&width=1000&height=800&seq=service-02&orientation=landscape",
  },
  {
    tag: "03",
    icon: "ri-hammer-fill",
    title: "철거 후 정리 작업",
    desc: "철거 후 나온 잔재, 콘크리트 조각 등 현장 정리 전문. 다음 공정 준비 완료.",
    img: "https://readdy.ai/api/search-image?query=Skid%20steer%20loader%20clearing%20concrete%20rubble%20and%20debris%20on%20a%20post-demolition%20site%2C%20broken%20concrete%20blocks%20scattered%20around%2C%20warm%20industrial%20lighting%2C%20detailed%20heavy%20equipment%20cleanup%20action%20shot%2C%20simple%20dusty%20background%2C%20realistic%20cinematic%20photography%20style&width=1000&height=800&seq=service-03&orientation=landscape",
  },
  {
    tag: "04",
    icon: "ri-brush-4-fill",
    title: "브러쉬 작업 (쓸기/청소)",
    desc: "브러쉬 어태치먼트로 도로·주차장·현장 노면 청소. 먼지 없이 깔끔하게.",
    img: "https://readdy.ai/api/search-image?query=Skid%20steer%20loader%20with%20a%20wide%20rotating%20sweeper%20brush%20attachment%20cleaning%20a%20concrete%20street%20surface%2C%20sweeping%20dust%20and%20small%20debris%2C%20warm%20outdoor%20lighting%2C%20clean%20industrial%20photography%20with%20muted%20background%2C%20detailed%20mechanical%20motion%2C%20cinematic%20realistic%20texture&width=1000&height=800&seq=service-04&orientation=landscape",
  },
  {
    tag: "05",
    icon: "ri-focus-3-fill",
    title: "협소 공간 작업 가능",
    desc: "좁은 골목, 지하 주차장, 실내 현장까지 진입 가능한 소형 스키드로더 운용.",
    img: "https://readdy.ai/api/search-image?query=Compact%20mini%20skid%20steer%20loader%20operating%20in%20a%20narrow%20alley%20between%20buildings%2C%20tight%20urban%20construction%20space%20with%20warm%20directional%20lighting%2C%20detailed%20heavy%20equipment%20photography%20on%20a%20simple%20neutral%20background%2C%20cinematic%20industrial%20scene%2C%20realistic%20mechanical%20details&width=1000&height=800&seq=service-05&orientation=landscape",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-foreground-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-2 stripe-bg"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold tracking-wider">
              <i className="ri-tools-fill w-3 h-3 flex items-center justify-center"></i>
              SERVICES · 작업 종류
            </div>
            <h2
              className="mt-4 text-4xl md:text-6xl leading-tight text-background-50"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              스키드로더가 할 수 있는
              <br />
              <span className="text-primary-500">모든 것</span>
            </h2>
          </div>
          <p className="max-w-md text-background-200 text-base leading-relaxed">
            현장 조건과 목적에 맞춰 어태치먼트를 교체하여 다양한 작업을 신속하게 처리합니다.
            아래 항목 외에도 요청 사항이 있다면 편하게 문의주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={s.tag}
              className={`group relative rounded-xl overflow-hidden bg-background-950 border border-foreground-800 hover:border-primary-500 transition-all ${
                idx === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className={`relative ${idx === 0 ? "h-72" : "h-64"} overflow-hidden`}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground-950 via-foreground-950/40 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded bg-primary-500 text-foreground-950 text-sm font-black"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    NO. {s.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-md bg-foreground-950/80 border border-primary-500 text-primary-500 backdrop-blur">
                  <i className={`${s.icon} w-6 h-6 flex items-center justify-center text-2xl`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-background-50 text-2xl mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.title}
                </h3>
                <p className="text-background-300 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 pt-4 border-t border-foreground-800 flex items-center justify-between text-sm">
                  <span className="text-primary-400 font-bold">전문 처리</span>
                  <a
                    href="#contact"
                    className="flex items-center gap-1 text-background-50 hover:text-primary-400 cursor-pointer"
                  >
                    문의하기 <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="rounded-xl p-8 bg-primary-500 text-foreground-950 flex flex-col justify-between">
            <div>
              <i className="ri-customer-service-2-fill w-10 h-10 flex items-center justify-center text-4xl mb-4"></i>
              <h3
                className="text-3xl leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                필요한 작업이
                <br />
                리스트에 없나요?
              </h3>
              <p className="mt-3 text-sm text-foreground-900">
                편하게 전화 주시면 현장 조건 듣고 바로 견적 도와드립니다.
              </p>
            </div>
            <a
              href="tel:010-3778-9007"
              className="mt-6 inline-flex items-center justify-center gap-2 h-12 rounded-md bg-foreground-950 text-primary-500 font-black hover:bg-foreground-900 cursor-pointer whitespace-nowrap transition-colors"
            >
              <i className="ri-phone-fill w-4 h-4 flex items-center justify-center"></i>
              010-3778-9007
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}