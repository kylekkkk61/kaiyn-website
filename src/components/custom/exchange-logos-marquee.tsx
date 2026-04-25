import { Marquee } from "@/components/ui/marquee";

const exchanges = [
  "binance",
  "bingx",
  "bitget",
  "btcc",
  "bybit",
  "gateio",
  "lbank",
  "mexc",
  "okx",
  "pionex",
  "weex",
] as const;

export function ExchangeLogosMarquee() {
  return (
    <section className="bg-black py-12 md:py-16">
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <Marquee pauseOnHover className="[--duration:40s] [--gap:3rem]">
          {exchanges.map((name) => (
            // biome-ignore lint/performance/noImgElement: logos have varied aspect ratios; next/image's required width/height props trigger spurious "width or height modified" warnings here.
            <img
              key={name}
              src={`/img/exchange-logo/${name}.png`}
              alt={name}
              className="h-8 w-auto opacity-70 brightness-0 invert"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
