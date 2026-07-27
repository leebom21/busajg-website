import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [textareaLen, setTextareaLen] = useState(0);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const honeypot = String(formData.get("website_alt") || "").trim();
    if (honeypot) {
      // Silently pretend success
      setStatus("success");
      formEl.reset();
      setTextareaLen(0);
      return;
    }
    formData.delete("website_alt");

    const memo = String(formData.get("memo") || "");
    if (memo.length > 500) {
      setStatus("error");
      setErrorMsg("메모는 500자 이내로 작성해 주세요.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const body = new URLSearchParams();
      formData.forEach((v, k) => body.append(k, String(v)));

      const response = await fetch("https://readdy.ai/api/form/d9jfqjuc26n1c7c5q4pg", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      const responseText = await response.text();
      let parsed: { code?: string; meta?: { message?: string; detail?: string } } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }
      const serverMsg =
        parsed?.meta?.message || parsed?.meta?.detail || responseText || "";

      if (!response.ok || parsed?.code !== "OK" || /spam/i.test(serverMsg)) {
        setStatus("error");
        setErrorMsg(serverMsg || "문의 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        return;
      }

      setStatus("success");
      formEl.reset();
      setTextareaLen(0);
    } catch (err) {
      setStatus("error");
      setErrorMsg("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-foreground-950 overflow-hidden">
      <div className="absolute inset-0 opacity-30 grid-pattern"></div>
      <div className="absolute top-0 left-0 right-0 h-2 stripe-bg"></div>
      <div
        className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 bg-cover bg-right"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=Dramatic%20orange%20skid%20steer%20loader%20silhouette%20against%20a%20dark%20industrial%20background%2C%20heavy%20construction%20equipment%20mood%20photograph%2C%20cinematic%20warm%20rim%20lighting%2C%20muted%20simple%20backdrop%2C%20detailed%20realistic%20texture&width=1400&height=1400&seq=contact-bg&orientation=squarish')",
        }}
      ></div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left side info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold tracking-wider">
              <i className="ri-mail-send-fill w-3 h-3 flex items-center justify-center"></i>
              CONTACT · 견적 문의
            </div>
            <h2
              className="mt-4 text-4xl md:text-6xl leading-tight text-background-50"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              지금 바로
              <br />
              <span className="text-primary-500">견적 받으세요</span>
            </h2>
            <p className="mt-5 text-background-200 leading-relaxed">
              간단한 정보만 남겨주시면 최대한 빠르게 연락드립니다. 급한 현장은 전화가 가장 빠릅니다.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:010-3778-9007"
                className="flex items-center gap-4 p-5 rounded-xl bg-primary-500 text-foreground-950 hover:bg-primary-400 transition-colors cursor-pointer group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-foreground-950 text-primary-500 group-hover:rotate-12 transition-transform">
                  <i className="ri-phone-fill w-6 h-6 flex items-center justify-center text-2xl"></i>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest opacity-70">TEL</div>
                  <div
                    className="text-3xl leading-none mt-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    010-3778-9007
                  </div>
                </div>
              </a>

              <a
                href="sms:010-3778-9007"
                className="flex items-center gap-4 p-5 rounded-xl bg-background-50/5 border border-background-50/15 text-background-50 hover:bg-background-50/10 transition-colors cursor-pointer"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-background-50/10 text-primary-400">
                  <i className="ri-message-2-fill w-6 h-6 flex items-center justify-center text-2xl"></i>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest text-background-300">SMS</div>
                  <div className="text-xl mt-1 font-bold">문자 문의도 환영합니다</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-xl bg-background-50/5 border border-background-50/15 text-background-50">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-background-50/10 text-primary-400">
                  <i className="ri-map-pin-2-fill w-6 h-6 flex items-center justify-center text-2xl"></i>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest text-background-300">AREA</div>
                  <div className="text-xl mt-1 font-bold">서울 · 경기 전지역</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-background-50 rounded-2xl p-8 md:p-10 border-t-4 border-primary-500">
              <h3
                className="text-foreground-950 text-2xl md:text-3xl mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                간편 견적문의
              </h3>
              <p className="text-sm text-foreground-600 mb-6">
                필수 정보만 남겨주세요. * 표시는 필수 항목입니다.
              </p>

              {status === "success" ? (
                <div className="p-8 rounded-lg bg-primary-50 border border-primary-200 text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-500 text-foreground-950 mx-auto mb-4">
                    <i className="ri-check-line w-8 h-8 flex items-center justify-center text-3xl"></i>
                  </div>
                  <h4 className="text-xl font-bold text-foreground-950">문의가 접수되었습니다!</h4>
                  <p className="text-sm text-foreground-700 mt-2">
                    담당자가 최대한 빠르게 연락드리겠습니다. 급하시다면 010-3778-9007로 바로 전화 주세요.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 h-11 px-6 rounded-md bg-foreground-950 text-background-50 text-sm font-bold cursor-pointer whitespace-nowrap"
                  >
                    새 문의 작성하기
                  </button>
                </div>
              ) : (
                <form
                  id="quote-request-form"
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-sm font-bold text-foreground-800">
                        성함 <span className="text-primary-600">*</span>
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="홍길동"
                        className="mt-2 w-full h-12 rounded-md border border-background-300 bg-background-50 px-4 text-sm text-foreground-950 focus:outline-none focus:border-primary-500"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-bold text-foreground-800">
                        연락처 <span className="text-primary-600">*</span>
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="010-0000-0000"
                        className="mt-2 w-full h-12 rounded-md border border-background-300 bg-background-50 px-4 text-sm text-foreground-950 focus:outline-none focus:border-primary-500"
                      />
                    </label>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-sm font-bold text-foreground-800">
                        작업 지역 <span className="text-primary-600">*</span>
                      </span>
                      <select
                        name="area"
                        required
                        className="mt-2 w-full h-12 rounded-md border border-background-300 bg-background-50 px-4 pr-8 text-sm text-foreground-950 focus:outline-none focus:border-primary-500 cursor-pointer"
                      >
                        <option value="">지역을 선택해 주세요</option>
                        <option>서울</option>
                        <option>경기 북부</option>
                        <option>경기 남부</option>
                        <option>인천</option>
                        <option>기타 (메모에 기재)</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-sm font-bold text-foreground-800">
                        작업 종류 <span className="text-primary-600">*</span>
                      </span>
                      <select
                        name="service"
                        required
                        className="mt-2 w-full h-12 rounded-md border border-background-300 bg-background-50 px-4 pr-8 text-sm text-foreground-950 focus:outline-none focus:border-primary-500 cursor-pointer"
                      >
                        <option value="">작업 종류를 선택해 주세요</option>
                        <option>토사 정리 · 평탄 작업</option>
                        <option>폐기물 정리 및 상차</option>
                        <option>철거 후 정리 작업</option>
                        <option>브러쉬 작업 (쓸기/청소)</option>
                        <option>협소 공간 작업</option>
                        <option>기타 (메모에 기재)</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-bold text-foreground-800">희망 작업일</span>
                    <input
                      type="date"
                      name="preferred_date"
                      className="mt-2 w-full h-12 rounded-md border border-background-300 bg-background-50 px-4 text-sm text-foreground-950 focus:outline-none focus:border-primary-500"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-foreground-800">
                      현장 상세 메모
                      <span className="text-xs font-normal text-foreground-500 ml-2">
                        ({textareaLen}/500)
                      </span>
                    </span>
                    <textarea
                      name="memo"
                      rows={5}
                      maxLength={500}
                      onChange={(e) => setTextareaLen(e.target.value.length)}
                      placeholder="현장 위치, 작업 범위, 참고 사항 등을 편하게 남겨주세요."
                      className="mt-2 w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-950 focus:outline-none focus:border-primary-500 resize-none"
                    />
                  </label>

                  {/* Honeypot */}
                  <div className="field-alt-wrap" aria-hidden="true">
                    <label>
                      Website
                      <input
                        type="text"
                        name="website_alt"
                        tabIndex={-1}
                        autoComplete="off"
                        readOnly
                      />
                    </label>
                  </div>

                  {status === "error" && errorMsg && (
                    <div className="p-4 rounded-md bg-primary-100 border border-primary-300 text-sm text-primary-900">
                      {errorMsg}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex-1 h-14 rounded-md bg-primary-500 hover:bg-primary-400 disabled:opacity-70 text-foreground-950 font-black text-base whitespace-nowrap cursor-pointer transition-colors flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <i className="ri-loader-4-line w-5 h-5 flex items-center justify-center animate-spin"></i>
                          접수 중...
                        </>
                      ) : (
                        <>
                          견적 문의 보내기
                          <i className="ri-send-plane-fill w-5 h-5 flex items-center justify-center"></i>
                        </>
                      )}
                    </button>
                    <a
                      href="tel:010-3778-9007"
                      className="flex items-center justify-center gap-2 h-14 px-6 rounded-md bg-foreground-950 hover:bg-foreground-800 text-background-50 font-bold whitespace-nowrap cursor-pointer transition-colors"
                    >
                      <i className="ri-phone-fill w-4 h-4 flex items-center justify-center"></i>
                      바로 전화
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}