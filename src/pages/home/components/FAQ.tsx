import { useState } from "react";

const faqs = [
  {
    q: "어느 지역까지 출동 가능한가요?",
    a: "서울과 경기 전지역이 기본 서비스 지역입니다. 인근 지역도 상황에 따라 대응 가능하니 편하게 문의 주세요.",
  },
  {
    q: "당일 현장 투입이 정말 가능한가요?",
    a: "네, 장비 스케줄이 비어 있는 경우 당일 현장 투입이 가능합니다. 급한 현장은 전화 주시면 최대한 빠르게 조율해드립니다.",
  },
  {
    q: "소규모 현장도 견적 받을 수 있나요?",
    a: "물론입니다. 단독주택, 상가, 좁은 골목 현장 등 소규모 작업도 얼마든지 환영합니다. 협소 공간 전용 소형 장비도 운용하고 있습니다.",
  },
  {
    q: "장기 임대(계약)도 가능한가요?",
    a: "가능합니다. 장기 현장은 별도의 할인 단가를 적용해 드리며, 오퍼레이터 포함 여부에 따라 견적을 다르게 안내드립니다.",
  },
  {
    q: "견적은 어떻게 요청하나요?",
    a: "010-3778-9007로 전화 주시거나, 하단 견적문의 폼을 작성해 주시면 최대한 빠르게 연락드립니다.",
  },
  {
    q: "폐기물 상차만 별도로 진행 가능한가요?",
    a: "네, 폐기물 상차 단독 작업도 진행합니다. 수량과 종류에 따라 트럭 배차까지 안내 가능합니다.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 bg-background-100">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-200 text-secondary-900 text-xs font-bold tracking-wider">
            <i className="ri-question-answer-fill w-3 h-3 flex items-center justify-center"></i>
            FAQ · 자주 묻는 질문
          </div>
          <h2
            className="mt-4 text-4xl md:text-5xl text-foreground-950"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            궁금한 점 <span className="text-primary-500">여기서 확인</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className={`rounded-xl border overflow-hidden transition-colors ${
                open === i
                  ? "bg-background-50 border-primary-500"
                  : "bg-background-50 border-background-200 hover:border-primary-300"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left px-6 py-5 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-primary-500 text-xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground-950 font-bold text-base md:text-lg">{f.q}</span>
                </div>
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full bg-background-100 text-foreground-950 transition-transform ${
                    open === i ? "rotate-180 bg-primary-500" : ""
                  }`}
                >
                  <i className="ri-arrow-down-s-line w-5 h-5 flex items-center justify-center"></i>
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5 pl-[74px] text-foreground-700 leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}