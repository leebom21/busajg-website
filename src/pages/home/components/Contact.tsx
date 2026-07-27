import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [textareaLen, setTextareaLen] = useState(0);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const honeypot = String(formData.get("website_alt") || "").trim();

    if (honeypot) {
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

      formData.forEach((value, key) => {
        body.append(key, String(value));
      });

      const response = await fetch(
        "https://readdy.ai/api/form/d9jfqjuc26n1c7c5q4pg",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: body.toString(),
        },
      );

      const responseText = await response.text();

      let parsed: {
        code?: string;
        meta?: {
          message?: string;
          detail?: string;
        };
      } | null = null;

      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg =
        parsed?.meta?.message ||
        parsed?.meta?.detail ||
        responseText ||
        "";

      if (
        !response.ok ||
        parsed?.code !== "OK" ||
        /spam/i.test(serverMsg)
      ) {
        setStatus("error");
        setErrorMsg(
          serverMsg ||
            "문의 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.",
        );
        return;
      }

      setStatus("success");
      formEl.reset();
      setTextareaLen(0);
    } catch {
      setStatus("error");
      setErrorMsg(
        "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-foreground-950 py-24"
    >
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="stripe-bg absolute left-0 right-0 top-0 h-2" />

      <div
        className="absolute bottom-0 right-0 h-full w-1/2 bg-cover bg-right opacity-30"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=Dramatic%20orange%20skid%20steer%20loader%20silhouette%20against%20a%20dark%20industrial%20background%2C%20heavy%20construction%20equipment%20mood%20photograph%2C%20cinematic%20warm%20rim%20lighting%2C%20muted%20simple%20backdrop%2C%20detailed%20realistic%20texture&width=1400&height=1400&seq=contact-bg&orientation=squarish')",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/20 px-3 py-1 text-xs font-bold tracking-wider text-primary-400">
              <i className="ri-mail-send-fill flex h-3 w-3 items-center justify-center" />
              CONTACT · 견적 문의
            </div>

            <h2
              className="mt-4 text-4xl leading-tight text-background-50 md:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              지금 바로
              <br />
              <span className="text-primary-500">견적 받으세요</span>
            </h2>

            <p className="mt-5 leading-relaxed text-background-200">
              간단한 정보만 남겨주시면 최대한 빠르게 연락드립니다. 급한
              현장은 전화가 가장 빠릅니다.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:010-3778-9007"
                className="group flex cursor-pointer items-center gap-4 rounded-xl bg-primary-500 p-5 text-foreground-950 transition-colors hover:bg-primary-400"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground-950 text-primary-500 transition-transform group-hover:rotate-12">
                  <i className="ri-phone-fill flex h-6 w-6 items-center justify-center text-2xl" />
                </div>

                <div>
                  <div className="text-xs font-bold tracking-widest opacity-70">
                    TEL
                  </div>

                  <div
                    className="mt-1 text-3xl leading-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    010-3778-9007
                  </div>
                </div>
              </a>

              <a
                href="sms:010-3778-9007"
                className="flex cursor-pointer items-center gap-4 rounded-xl border border-background-50/15 bg-background-50/5 p-5 text-background-50 transition-colors hover:bg-background-50/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background-50/10 text-primary-400">
                  <i className="ri-message-2-fill flex h-6 w-6 items-center justify-center text-2xl" />
                </div>

                <div>
                  <div className="text-xs font-bold tracking-widest text-background-300">
                    SMS
                  </div>
                  <div className="mt-1 text-xl font-bold">
                    문자 문의도 환영합니다
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-background-50/15 bg-background-50/5 p-5 text-background-50">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background-50/10 text-primary-400">
                  <i className="ri-map-pin-2-fill flex h-6 w-6 items-center justify-center text-2xl" />
                </div>

                <div>
                  <div className="text-xs font-bold tracking-widest text-background-300">
                    AREA
                  </div>
                  <div className="mt-1 text-xl font-bold">
                    서울 · 경기 전지역
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border-t-4 border-primary-500 bg-background-50 p-8 md:p-10">
              <h3
                className="mb-2 text-2xl text-foreground-950 md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                간편 견적문의
              </h3>

              <p className="mb-6 text-sm text-foreground-600">
                필수 정보만 남겨주세요. * 표시는 필수 항목입니다.
              </p>

              {status === "success" ? (
                <div className="rounded-lg border border-primary-200 bg-primary-50 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-foreground-950">
                    <i className="ri-check-line flex h-8 w-8 items-center justify-center text-3xl" />
                  </div>

                  <h4 className="text-xl font-bold text-foreground-950">
                    문의가 접수되었습니다!
                  </h4>

                  <p className="mt-2 text-sm text-foreground-700">
                    담당자가 최대한 빠르게 연락드리겠습니다. 급하시다면
                    010-3778-9007로 바로 전화 주세요.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 h-11 cursor-pointer whitespace-nowrap rounded-md bg-foreground-950 px-6 text-sm font-bold text-background-50"
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
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-bold text-foreground-800">
                        성함 <span className="text-primary-600">*</span>
                      </span>

                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="홍길동"
                        className="mt-2 h-12 w-full rounded-md border border-background-300 bg-background-50 px-4 text-sm text-foreground-950 focus:border-primary-500 focus:outline-none"
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
                        className="mt-2 h-12 w-full rounded-md border border-background-300 bg-background-50 px-4 text-sm text-foreground-950 focus:border-primary-500 focus:outline-none"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-bold text-foreground-800">
                        작업 지역 <span className="text-primary-600">*</span>
                      </span>

                      <div className="relative mt-2">
                        <select
                          name="area"
                          required
                          className="h-12 w-full cursor-pointer appearance-none rounded-md border border-background-300 bg-background-50 px-4 pr-12 text-sm text-foreground-950 focus:border-primary-500 focus:outline-none"
                        >
                          <option value="">지역을 선택해 주세요</option>
                          <option>서울</option>
                          <option>경기 북부</option>
                          <option>경기 남부</option>
                          <option>인천</option>
                          <option>기타 (메모에 기재)</option>
                        </select>

                        <i className="ri-arrow-down-s-line pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xl text-foreground-600" />
                      </div>
                    </label>

                    <label className="block">
                      <span className="text-sm font-bold text-foreground-800">
                        작업 종류 <span className="text-primary-600">*</span>
                      </span>

                      <div className="relative mt-2">
                        <select
                          name="service"
                          required
                          className="h-12 w-full cursor-pointer appearance-none rounded-md border border-background-300 bg-background-50 px-4 pr-12 text-sm text-foreground-950 focus:border-primary-500 focus:outline-none"
                        >
                          <option value="">작업 종류를 선택해 주세요</option>
                          <option>토사 정리 · 평탄 작업</option>
                          <option>폐기물 정리 및 상차</option>
                          <option>철거 후 정리 작업</option>
                          <option>브러쉬 작업 (쓸기/청소)</option>
                          <option>협소 공간 작업</option>
                          <option>기타 (메모에 기재)</option>
                        </select>

                        <i className="ri-arrow-down-s-line pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xl text-foreground-600" />
                      </div>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-bold text-foreground-800">
                      희망 작업일
                    </span>

                    <input
                      type="date"
                      name="preferred_date"
                      className="mt-2 h-12 w-full rounded-md border border-background-300 bg-background-50 px-4 text-sm text-foreground-950 focus:border-primary-500 focus:outline-none"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-foreground-800">
                      현장 상세 메모
                      <span className="ml-2 text-xs font-normal text-foreground-500">
                        ({textareaLen}/500)
                      </span>
                    </span>

                    <textarea
                      name="memo"
                      rows={5}
                      maxLength={500}
                      onChange={(event) =>
                        setTextareaLen(event.target.value.length)
                      }
                      placeholder="현장 위치, 작업 범위, 참고 사항 등을 편하게 남겨주세요."
                      className="mt-2 w-full resize-none rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-950 focus:border-primary-500 focus:outline-none"
                    />
                  </label>

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
                    <div className="rounded-md border border-primary-300 bg-primary-100 p-4 text-sm text-primary-900">
                      {errorMsg}
                    </div>
                  )}

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex h-14 min-h-[56px] flex-1 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 text-base font-black text-foreground-950 transition-colors hover:bg-primary-400 disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <>
                          <i className="ri-loader-4-line flex h-5 w-5 animate-spin items-center justify-center" />
                          접수 중...
                        </>
                      ) : (
                        <>
                          견적 문의 보내기
                          <i className="ri-send-plane-fill flex h-5 w-5 items-center justify-center" />
                        </>
                      )}
                    </button>

                    <a
                      href="tel:010-3778-9007"
                      className="flex h-14 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-foreground-950 px-6 font-bold text-background-50 transition-colors hover:bg-foreground-800"
                    >
                      <i className="ri-phone-fill flex h-4 w-4 items-center justify-center" />
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