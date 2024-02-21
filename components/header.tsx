import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="flex items-center justify-center py-1 px-2 shadow-lg w-full">
      <div className="w-full flex items-center justify-between p-2 rounded-lg">
        <Button
          variant="outline"
          className="font-mono"
          size="sm"
        >
          <Link href="/">lito.codes</Link>
        </Button>
        <div className="flex items-center justify-center space-x-2">
          <Button
            asChild
            className="font-mono"
            size="sm"
          >
            <Link href="/contact">Connect</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
          >
            <ThemeToggle />
          </Button>
        </div>
      </div>
    </header>
  );
};
