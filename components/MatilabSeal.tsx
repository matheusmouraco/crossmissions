import Image from "next/image";
import { cn } from "@/lib/cn";

/** "Desenvolvido por Matilab" + selo de qualidade, com link para a agência. */
export function MatilabSeal({ className, size = "md" }: { className?: string; size?: "sm" | "md" }) {
  return (
    <a
      href="https://matilab.com.br"
      target="_blank"
      rel="noopener"
      aria-label="Desenvolvido por Matilab, selo de qualidade (abre em nova aba)"
      className={cn("group inline-flex items-center gap-2.5 text-[13px] text-white/60 transition-colors hover:text-white", className)}
    >
      <span>Desenvolvido por</span>
      <Image
        src="/img/selo-matilab.png"
        alt=""
        width={640}
        height={240}
        sizes="200px"
        className={cn("w-auto rounded-[5px] transition-transform duration-200 group-hover:-translate-y-0.5", size === "sm" ? "h-6" : "h-9")}
      />
    </a>
  );
}
