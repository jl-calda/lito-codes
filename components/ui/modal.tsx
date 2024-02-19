import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const router = useRouter();
  return (
    <Dialog
      defaultOpen
      modal
      onOpenChange={() => router.back()}
    >
      <DialogContent className="border-none w-auto overflow-hidden rounded-xl">
        {children}
      </DialogContent>
    </Dialog>
  );
};
