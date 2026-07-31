import { Facebook, Github, Instagram } from "lucide-react";
import type { FC } from "react";
import { XLogo } from "../../../components/xLogo";

const contacts: {
  cmd: string;
  href: string;
  label: string;
  icon: FC<{ size?: number }>;
}[] = [
  {
    cmd: "github",
    href: "https://github.com/PadThaicreator",
    label: "PadThaicreator",
    icon: Github,
  },
  {
    cmd: "x",
    href: "https://x.com/mydiarywithU",
    label: "mydiarywithU",
    icon: XLogo,
  },
  {
    cmd: "facebook",
    href: "https://www.facebook.com/PPNA62",
    label: "Poonnawit Poosakul",
    icon: Facebook,
  },
  {
    cmd: "instagram",
    href: "https://www.instagram.com/pp_namo/",
    label: "pp_namo",
    icon: Instagram,
  },
];

export const ContactContent = () => {
  return (
    <div className="max-w-3xl">
      <div className="mono text-xs text-gray-400 mb-4">portfolio › contact.sh</div>

      <div className="ide-code">
        <div className="tok-comment mb-1"># let's get in touch</div>
        <div className="mb-4">
          <span className="tok-key">$</span> echo contact.sh
        </div>

        <div className="flex flex-col gap-3">
          {contacts.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group w-fit"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-600 group-hover:border-violet-300 group-hover:text-violet-600 transition">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="tok-key">{c.cmd}</span>
                  <span className="tok-punc"> → </span>
                  <span className="text-gray-700 group-hover:text-violet-600 transition">
                    {c.label}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
