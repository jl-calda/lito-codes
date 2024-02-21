import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";

//xsgames.co/randomusers/assets/avatars/male/78.jpg

const AvatarDropdown = () => {
  const [page, setPage] = useState(1);
  const [avatar, setAvatar] = useState("");
  const page_1 = Array.from({ length: 10 }, (_, index) => index);
  const page_2 = Array.from({ length: 10 }, (_, index) => index + 10);
  const page_3 = Array.from({ length: 10 }, (_, index) => index + 20);
  const page_4 = Array.from({ length: 10 }, (_, index) => index + 30);
  const page_5 = Array.from({ length: 10 }, (_, index) => index + 40);

  const onPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(5);
    }
  };

  const onNextPage = () => {
    if (page < 5) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  return (
    <Popover>
      <PopoverTrigger>avatars</PopoverTrigger>
      <PopoverContent className="grid grid-cols-2 gap-x-2 gap-y-4 place-content-center shadow-xl">
        {page === 1 && (
          <>
            <div className="flex flex-col gap-y-2">
              <p className="text-muted-foreground text-center font-semibold">
                Male
              </p>
              <div className="grid grid-cols-2 gap-y-1 gap-x-1 place-content-center">
                {page_1.map((index) => (
                  <Image
                    key={index}
                    src={`https://xsgames.co/randomusers/assets/avatars/male/${index}.jpg`}
                    alt={`Avatar ${index}`}
                    className="rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                    width={50}
                    height={50}
                    onClick={() =>
                      setAvatar(
                        `https://xsgames.co/randomusers/assets/avatars/male/${index}.jpg`
                      )
                    }
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-muted-foreground text-center font-semibold">
                Female
              </p>
              <div className="grid grid-cols-2 gap-y-1 gap-x-1 place-content-center">
                {page_1.map((index) => (
                  <Image
                    key={index}
                    src={`https://xsgames.co/randomusers/assets/avatars/female/${index}.jpg`}
                    alt={`Avatar ${index}`}
                    className="rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                    width={50}
                    height={50}
                    onClick={() =>
                      setAvatar(
                        `https://xsgames.co/randomusers/assets/avatars/female/${index}.jpg`
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </>
        )}

        <div className="flex flex-row items-center justify-around space-x-2 col-span-2 ">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full text-muted-foreground"
            onClick={onPreviousPage}
          >
            <FaArrowLeft className="w-4 h-4" />
          </Button>
          <span className="text-muted-foreground text-sm">{`Page ${page}`}</span>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full text-muted-foreground"
            onClick={onNextPage}
          >
            <FaArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AvatarDropdown;
