import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="flex items-center justify-center py-1 px-2 shadow-lg">
      <div className="w-full flex items-center justify-between p-2 rounded-lg">
        <Button variant="outline">lito.codes</Button>
        <div className="flex items-center justify-center space-x-2">
          <Button>Connect</Button>
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
