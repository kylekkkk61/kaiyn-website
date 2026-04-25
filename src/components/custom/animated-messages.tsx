"use client";

import { useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { AnimatedMessageList } from "@/components/custom/animated-message-list";
import { cn } from "@/lib/utils";

type MessageData = {
  id: string;
  author: string;
  text: string;
};

const ICON_SRC = "/img/icon-light.svg";

const messages: MessageData[] = [
  {
    id: "1",
    author: "Kaiyn",
    text: "BTC 4H structure aligned, watching for breakout.",
  },
  {
    id: "2",
    author: "Kaiyn",
    text: "Entry triggered at 117,275.",
  },
  {
    id: "3",
    author: "Kaiyn",
    text: "TP1 hit, moving SL to BE.",
  },
  {
    id: "4",
    author: "Kaiyn",
    text: "Closing 50% at TP2.",
  },
  {
    id: "5",
    author: "Kaiyn",
    text: "Trade closed +3.8R.",
  },
];

function ChatMessage({ author, text }: Omit<MessageData, "id">) {
  return (
    <figure
      className={cn(
        "relative w-fit max-w-[320px]",
        "transform-gpu rounded-2xl rounded-bl-sm p-3",
        "bg-white/5 backdrop-blur-md",
        "[border:1px_solid_rgba(255,255,255,.1)]",
      )}
    >
      <div className="flex flex-row items-start gap-2">
        <Image
          src={ICON_SRC}
          alt=""
          width={28}
          height={28}
          className="size-7 shrink-0"
        />
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-white text-xs">{author}</span>
          <p className="text-sm text-white/80">{text}</p>
        </div>
      </div>
    </figure>
  );
}

export function AnimatedMessagesBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="absolute inset-x-2 top-4 flex h-[300px] flex-col overflow-hidden px-2 pt-2 pb-12 [mask-image:linear-gradient(to_bottom,transparent_10%,#000_100%)]"
    >
      {isInView && (
        <AnimatedMessageList delay={1500} className="flex-1 items-start">
          {messages.map((item) => (
            <ChatMessage key={item.id} author={item.author} text={item.text} />
          ))}
        </AnimatedMessageList>
      )}
    </div>
  );
}
