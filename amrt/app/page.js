import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/BURN.png"
          alt="AMRT logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Invest by contacting{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              invest@amrt.ca
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            See your investment grow risk free.
          </li>
          <li className="tracking-[-.01em]">
            Withdraw your profits at any time.
          </li>
          <li className="tracking-[-.01em]">
            Enjoy the benefits of a secure and profitable investment.
          </li>
          <li className="tracking-[-.01em]">
            Professionally managed by our PMC AMRT Property Management Inc.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="mailto:invest@amrt.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Invest Now
          </a>

        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
        <a
          className="flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © 2024{" "}
          <span className="font-semibold">AMRT Development Inc.</span>
        </a>
      </footer>
    </div>
  );
}
