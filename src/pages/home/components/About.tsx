export default function About() {
  return (
    <section id="about" className="relative py-24 bg-background-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 stripe-bg rounded-md"></div>
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20male%20construction%20equipment%20operator%20standing%20confidently%20next%20to%20an%20orange%20skid%20steer%20loader%20machine%20at%20an%20outdoor%20industrial%20worksite%20under%20warm%20afternoon%20sunlight%2C%20wearing%20safety%20helmet%20and%20work%20uniform%2C%20clean%20neutral%20background%20with%20dirt%20ground%2C%20cinematic%20documentary%20photography%20style%2C%20highly%20detailed%20realistic%20portrait&width=1000&height=1200&seq=about-01&orientation=portrait"
                alt="삼부자중기 작업자"
                className="relative w-full h-[620px] object-cover object-top rounded-xl border border-background-200"
              />
              <div className="absolute -bottom-6 -right-6 bg-foreground-950 text-background-50 rounded-xl p-6 max-w-[240px]">
                <div
                  className="text-primary-500 text-5xl leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  12년+
                </div>
                <div className="text-sm mt-2 text-background-200">
                  현장에서 다져진 노하우로 어떤 작업이든 깔끔하게 마무리합니다.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold tracking-wider">
              <i className="ri-hammer-fill w-3 h-3 flex items-center justify-center"></i>
              ABOUT US · 회사 소개
            </div>
            <h2
              className="mt-4 text-4xl md:text-5xl leading-tight text-foreground-950"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              현장에서 답합니다.
              <br />
              <span className="text-primary-500">삼부자중기</span>
            </h2>
            <p className="mt-5 text-foreground-700 leading-relaxed text-base md:text-lg">
              삼부자중기는 서울·경기 전지역을 커버하는 스키드로더(바브캣) 작업 전문 업체입니다. 소규모
              단독주택 현장부터 대형 재개발 부지까지, 어떤 환경에서도 <b className="text-foreground-950">
              빠른 투입과 깔끔한 마무리</b>를 최우선으로 합니다.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                {
                  i: "ri-time-fill",
                  t: "당일 현장 투입",
                  d: "긴급 현장도 최대한 빠르게 대응합니다.",
                },
                {
                  i: "ri-shield-check-fill",
                  t: "안전 최우선",
                  d: "정기 점검된 장비, 숙련된 오퍼레이터.",
                },
                {
                  i: "ri-price-tag-3-fill",
                  t: "합리적인 단가",
                  d: "현장 규모에 맞춘 유연한 견적.",
                },
                {
                  i: "ri-map-pin-2-fill",
                  t: "서울·경기 전지역",
                  d: "지역 상관없이 신속 출동합니다.",
                },
              ].map((f) => (
                <div
                  key={f.t}
                  className="p-5 rounded-lg bg-background-100 border border-background-200 hover:border-primary-400 transition-colors"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-md bg-primary-500 text-foreground-950 mb-3">
                    <i className={`${f.i} w-5 h-5 flex items-center justify-center text-xl`}></i>
                  </div>
                  <div className="text-foreground-950 font-bold">{f.t}</div>
                  <div className="text-sm text-foreground-600 mt-1">{f.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="tel:010-3778-9007"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-md bg-foreground-950 text-background-50 hover:bg-foreground-800 font-bold whitespace-nowrap cursor-pointer transition-colors"
              >
                <i className="ri-phone-fill w-4 h-4 flex items-center justify-center"></i>
                지금 상담 전화
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-foreground-950 font-bold hover:text-primary-600 cursor-pointer"
              >
                작업 종류 보기
                <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}