export default function Hero() {
  return (
    <section id="top" className="relative min-h-[820px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=Powerful%20industrial%20skid%20steer%20loader%20bobcat%20machine%20on%20a%20dusty%20construction%20site%20with%20dramatic%20warm%20orange%20sunset%20lighting%2C%20dust%20particles%20flying%20in%20the%20air%2C%20cinematic%20wide%20shot%2C%20heavy%20equipment%20photography%2C%20gritty%20textures%2C%20urban%20demolition%20background%2C%20high%20contrast%20moody%20atmosphere%2C%20professional%20construction%20equipment%20advertisement%20style&width=1920&height=1080&seq=hero-bobcat-01&orientation=landscape')",
          backgroundPosition: "center top",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/85 via-foreground-950/70 to-foreground-950/95"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Diagonal stripes decorative */}
      <div className="absolute top-24 left-0 h-3 w-full stripe-bg opacity-80"></div>
      <div className="absolute bottom-0 left-0 h-3 w-full stripe-bg opacity-80"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 animate-fadeInUp">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500 text-foreground-950 font-bold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-foreground-950 animate-pulse"></span>
              당일 현장투입 가능!
            </div>

            {/* Title */}
            <h1
              className="text-background-50 leading-[0.95] tracking-tight text-6xl md:text-8xl mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              스키드로더
              <br />
              <span className="text-primary-500">작업 전문</span>
            </h1>

            <p className="text-lg md:text-xl text-background-200 max-w-xl mb-8 leading-relaxed">
              서울·경기 전지역 <span className="text-accent-400 font-bold">신속 출동</span> · 소규모 현장부터
              장기 현장까지, 삼부자중기가 <span className="text-accent-400 font-bold">깔끔하고 확실하게</span>{" "}
              마무리합니다.
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["서울 · 경기 전지역", "소규모 현장 OK", "장기 · 단기 모두", "신속·깔끔한 작업"].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full bg-background-50/10 border border-background-50/20 text-background-50 text-sm whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:010-3778-9007"
                className="group flex items-center justify-center gap-3 h-16 px-8 rounded-md bg-primary-500 hover:bg-primary-400 text-foreground-950 font-black text-xl whitespace-nowrap cursor-pointer transition-all"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground-950 text-primary-500 group-hover:rotate-12 transition-transform">
                  <i className="ri-phone-fill w-5 h-5 flex items-center justify-center"></i>
                </div>
                010-3778-9007
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 h-16 px-8 rounded-md bg-background-50/10 hover:bg-background-50/20 border border-background-50/30 text-background-50 font-bold text-base whitespace-nowrap cursor-pointer transition-colors"
              >
                견적 문의하기
                <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
              </a>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-background-50/15 max-w-lg">
              {[
                { n: "30+", l: "년 현장 경력" },
                { n: "3,000+", l: "누적 작업 현장" },
                { n: "24H", l: "신속 응대" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="text-primary-500 text-3xl md:text-4xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.n}
                  </div>
                  <div className="text-background-200 text-xs md:text-sm mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side floating machine card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative animate-floatY">
              <div className="absolute -inset-6 bg-primary-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-primary-500 bg-foreground-950">
                <img
                  src="https://readdy.ai/api/search-image?query=Yellow%20orange%20industrial%20skid%20steer%20loader%20bobcat%20machine%20detailed%20side%20view%20on%20a%20plain%20dark%20studio%20background%20with%20dramatic%20cinematic%20lighting%2C%20heavy%20construction%20equipment%20studio%20photography%2C%20clean%20isolated%20subject%2C%20powerful%20heroic%20composition%2C%20matte%20finish%2C%20professional%20advertising%20visual%2C%20high%20detail%20mechanical%20elements&width=900&height=1000&seq=hero-machine-02&orientation=portrait"
                  alt="스키드로더 바브캣"
                  className="w-full h-[520px] object-cover object-top"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1 rounded-md bg-primary-500 text-foreground-950 text-xs font-black tracking-wider">
                    SKID LOADER
                  </span>
                  <span className="px-3 py-1 rounded-md bg-foreground-950 text-primary-500 text-xs font-black tracking-wider border border-primary-500">
                    2026 MODEL
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground-950 via-foreground-950/80 to-transparent p-6">
                  <div className="text-primary-500 text-xs font-bold tracking-wider">삼부자중기 전용 장비</div>
                  <div
                    className="text-background-50 text-3xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    다목적 스키드로더
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 bg-background-50 rounded-xl p-4 border-l-4 border-primary-500 flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500 text-foreground-950">
                  <i className="ri-timer-flash-fill w-6 h-6 flex items-center justify-center text-2xl"></i>
                </div>
                <div>
                  <div className="text-xs text-foreground-600">평균 도착시간</div>
                  <div className="text-foreground-950 font-black text-lg">2시간 이내</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}