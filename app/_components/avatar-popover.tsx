import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Image from "next/image";
import { useState, useTransition } from "react";
import { FaArrowLeft, FaArrowRight, FaS, FaSpinner } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarPopoverProps {
  value: string;
  onSetValue: (value: string) => void;
  disabled?: boolean;
}

const AvatarPopover = ({ value, onSetValue, disabled }: AvatarPopoverProps) => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  const page_1 = Array.from({ length: 16 }, (_, index) => index);
  const page_2 = Array.from({ length: 16 }, (_, index) => index + 16);
  const page_3 = Array.from({ length: 16 }, (_, index) => index + 32);

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

  const onAvatarClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    startTransition(() => {
      onSetValue((e.target as HTMLImageElement).src);
      setOpen(false);
    });
  };

  return (
    <Popover open={open}>
      <PopoverTrigger
        disabled={disabled}
        className="block"
        onClick={() => setOpen(!open)}
      >
        <Avatar className="h-14 w-14 rounded-lg">
          {pending ? (
            <div className="flex items-center justify-center w-full animate-pulse bg-white">
              <FaSpinner className="w-8 h-8 animate-spin-slow text-muted-foreground" />
            </div>
          ) : (
            <AvatarImage src={value} />
          )}
          <AvatarFallback>
            <Image
              src="https://xsgames.co/randomusers/assets/avatars/pixel/50.jpg"
              alt="Avatar"
              width={56}
              height={56}
              className=""
            />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-4 bg-primary text-muted">
        <Tabs
          defaultValue="male"
          className="bg-primary"
        >
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
            <TabsTrigger
              className="flex w-full"
              value="pixel"
            >
              Pixel
            </TabsTrigger>
          </TabsList>
          <TabsContent value="male">
            {page === 1 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
                {page_1.map((index) => (
                  <Image
                    key={index}
                    data-src={`https://xsgames.co/randomusers/assets/avatars/male/${index}.jpg`}
                    src={`https://xsgames.co/randomusers/assets/avatars/male/${index}.jpg`}
                    alt={`Avatar ${index}`}
                    className="rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                    width={56}
                    height={56}
                    onClick={onAvatarClick}
                  />
                ))}
              </div>
            )}
            {page === 2 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
                {page_2.map((index) => (
                  <Image
                    key={index}
                    data-src={`https://xsgames.co/randomusers/assets/avatars/male/${index}.jpg`}
                    src={`https://xsgames.co/randomusers/assets/avatars/male/${index}.jpg`}
                    alt={`Avatar ${index}`}
                    className="rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                    width={56}
                    height={56}
                    onClick={onAvatarClick}
                  />
                ))}
              </div>
            )}
            {page === 3 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
                {page_3.map((index) => (
                  <Image
                    key={index}
                    data-src={`https://xsgames.co/randomusers/assets/avatars/male/${index}.jpg`}
                    src={`https://xsgames.co/randomusers/assets/avatars/male/${index}.jpg`}
                    alt={`Avatar ${index}`}
                    className="rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                    width={56}
                    height={56}
                    onClick={onAvatarClick}
                  />
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="pixel">
            {page === 1 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
                {page_1.map((index) => (
                  <Image
                    key={index}
                    data-src={`https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`}
                    src={`https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`}
                    alt={`Avatar ${index}`}
                    className="rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                    width={56}
                    height={56}
                    onClick={onAvatarClick}
                  />
                ))}
              </div>
            )}
            {page === 2 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
                {page_2.map((index) => (
                  <Image
                    key={index}
                    data-src={`https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`}
                    src={`https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`}
                    alt={`Avatar ${index}`}
                    className="rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                    width={56}
                    height={56}
                    onClick={onAvatarClick}
                  />
                ))}
              </div>
            )}
            {page === 3 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
                {page_3.map((index) => (
                  <Image
                    key={index}
                    data-src={`https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`}
                    src={`https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`}
                    alt={`Avatar ${index}`}
                    className="rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                    width={56}
                    height={56}
                    onClick={onAvatarClick}
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
                    data-src={`https://xsgames.co/randomusers/assets/avatars/female/${index}.jpg`}
                    src={`https://xsgames.co/randomusers/assets/avatars/female/${index}.jpg`}
                    alt={`Avatar ${index}`}
                    className="rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                    width={56}
                    height={56}
                    onClick={onAvatarClick}
                  />
                ))}
              </div>
            )}
            {page === 2 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
                {page_2.map((index) => (
                  <Image
                    key={index}
                    data-src={`https://xsgames.co/randomusers/assets/avatars/female/${index}.jpg`}
                    src={`https://xsgames.co/randomusers/assets/avatars/female/${index}.jpg`}
                    alt={`Avatar ${index}`}
                    className="rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                    width={56}
                    height={56}
                    onClick={onAvatarClick}
                  />
                ))}
              </div>
            )}
            {page === 3 && (
              <div className="grid grid-cols-4 gap-y-1 gap-x-1 place-content-center">
                {page_3.map((index) => (
                  <Image
                    key={index}
                    data-src={`https://xsgames.co/randomusers/assets/avatars/female/${index}.jpg`}
                    src={`https://xsgames.co/randomusers/assets/avatars/female/${index}.jpg`}
                    alt={`Avatar ${index}`}
                    className="rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                    width={56}
                    height={56}
                    onClick={onAvatarClick}
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
          <span className="text-sm">{`Page ${page}`}</span>
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
