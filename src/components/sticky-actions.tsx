import { MessageCircle, Phone } from "lucide-react";
import { useQuote } from "@/components/quote-provider";
import { WHATSAPP_URL } from "@/lib/orchids";

/** Floating WhatsApp bubble + sticky mobile action bar. */
export function StickyActions() {
  const { open } = useQuote();

  return (
    <>
      <button
        type="button"
        onClick={() => open()}
        aria-label="Get a WhatsApp quote"
        className="surface-sky pulse-sky fixed right-3 bottom-[calc(5.25rem+env(safe-area-inset-bottom))] z-40 grid h-12 w-12 place-items-center rounded-full text-primary-foreground shadow-lift transition-transform hover:scale-105 sm:right-4 sm:h-14 sm:w-14 md:bottom-8"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 px-3 pt-2.5 backdrop-blur-md md:hidden"
        style={{ paddingBottom: "calc(0.65rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 min-h-11 items-center justify-center gap-1.5 rounded-full border border-primary/25 px-2 text-xs font-semibold text-primary sm:h-12 sm:gap-2 sm:text-sm"
        >
          <Phone className="h-4 w-4 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>
        <button
          type="button"
          onClick={() => open()}
          className="surface-sky flex h-11 min-h-11 items-center justify-center gap-1.5 rounded-full px-2 text-xs font-semibold text-primary-foreground sm:h-12 sm:gap-2 sm:text-sm"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          <span className="truncate">Get Quote</span>
        </button>
      </div>
    </>
  );
}
