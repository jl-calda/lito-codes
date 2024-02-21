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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaFemale, FaMale } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//xsgames.co/randomusers/assets/avatars/male/78.jpg

const AvatarPopover = () => {
  const [page, setPage] = useState(1);
  const [avatar, setAvatar] = useState("");

  const page_1 = Array.from({ length: 20 }, (_, index) => index);
  const page_2 = Array.from({ length: 20 }, (_, index) => index + 20);
  const page_3 = Array.from({ length: 20 }, (_, index) => index + 40);

  const onPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(3);
    }
  };

  const onNextPage = () => {
    if (page < 3) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="w-[50px] h-[50px]">
          <AvatarImage src={avatar} />
          <AvatarFallback>
            <Image
              src="https://xsgames.co/randomusers/assets/avatars/pixel/50.jpg"
              alt="Avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-4">
        <Tabs defaultValue="male">
          <TabsList className="w-full flex justify-between">
            <TabsTrigger
              className="flex w-full"
              value="male"
            >
              Male
            </TabsTrigger>
            <TabsTrigger
              className="flex w-full"
              value="female"
            >
              Female
            </TabsTrigger>
          </TabsList>
          <TabsContent value="male">
            {page === 1 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
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
            )}
            {page === 2 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
                {page_2.map((index) => (
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
            )}
            {page === 3 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
                {page_3.map((index) => (
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
            )}
          </TabsContent>
          <TabsContent value="female">
            {page === 1 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
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
            )}
            {page === 2 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
                {page_2.map((index) => (
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
            )}
            {page === 3 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
                {page_3.map((index) => (
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
            )}
          </TabsContent>
        </Tabs>

        <div className="flex flex-row items-center justify-around space-x-2 col-span-2 ">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full text-muted-foreground"
            onClick={onPreviousPage}
          >
            <FaArrowLeft className="w-4 h-4" />
          </Button>
          <span className="text-muted-foreground text-xs">{`Page ${page}`}</span>
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

export default AvatarPopover;
