// components/ui/TalkButton.tsx
import Link from "next/link";
import Strings from "@/constants/strings";

const TalkButtons = () => {
  return (
    <div className="flex gap-4">
      <Link
        className="app__filled_btn min-w-[10rem] text-center"
        href={Strings.telegramLink}
        target="_blank"
      >
        Let&apos;s Talk
      </Link>

      <Link
        className="app__outlined_btn min-w-[10rem] text-center"
        href="/cv"
      >
        CV
      </Link>
    </div>
  );
};

export default TalkButtons;
