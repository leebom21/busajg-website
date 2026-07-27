export default function Footer() {
  return (
    <footer className="relative bg-background-900 text-background-200">
      <div className="h-2 stripe-bg"></div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center rounded-md bg-primary-500 text-foreground-950">
                <i className="ri-truck-fill w-6 h-6 flex items-center justify-center text-2xl"></i>
              </div>
              <div>
                <div
                  className="text-background-50 text-2xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  삼부자중기
                </div>
                <div className="text-xs text-primary-400 tracking-widest">SKID LOADER PRO</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              서울·경기 전지역 스키드로더(바브캣) 작업 전문 업체.
              당일 현장투입, 신속·깔끔한 작업으로 믿고 맡길 수 있는 파트너가 되겠습니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { i: "ri-map-pin-2-fill", t: "서울 · 경기 전지역" },
                { i: "ri-time-fill", t: "24H 연락 가능" },
              ].map((b) => (
                <div
                  key={b.t}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-800 border border-background-700 text-sm"
                >
                  <i
                    className={`${b.i} w-4 h-4 flex items-center justify-center text-primary-400`}
                  ></i>
                  <span>{b.t}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="text-background-50 text-base mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              바로가기
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { l: "회사소개", h: "#about" },
                { l: "작업종류", h: "#services" },
                { l: "작업사례", h: "#gallery" },
                { l: "진행절차", h: "#process" },
                { l: "자주묻는질문", h: "#faq" },
                { l: "견적문의", h: "#contact" },
              ].map((l) => (
                <li key={l.h}>
                  <a
                    href={l.h}
                    className="hover:text-primary-400 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {l.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-background-50 text-base mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              연락처
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:010-3778-9007"
                  className="flex items-center gap-2 text-primary-400 font-bold text-lg hover:text-primary-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-phone-fill w-4 h-4 flex items-center justify-center"></i>
                  010-3778-9007
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-message-2-fill w-4 h-4 flex items-center justify-center mt-1 text-primary-400"></i>
                <span>문자 문의 언제든 환영</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-briefcase-4-fill w-4 h-4 flex items-center justify-center mt-1 text-primary-400"></i>
                <span>장기·단기 계약 모두 가능</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-background-400">
          <div>© 2026 삼부자중기. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-4">
            <span>사업자: 삼부자중기</span>
            <span>스키드로더 · 바브캣 임대 및 작업</span>
          </div>
        </div>
      </div>
    </footer>
  );
}