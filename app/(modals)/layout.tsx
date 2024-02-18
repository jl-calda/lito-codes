import { ModalLayoutHeader } from "./_component/modal-layout-header";

interface ModalLayoutProps {
  children: React.ReactNode;
}

import "../globals.css";

const ModalLayout = ({ children }: ModalLayoutProps) => {
  return (
    <body className="flex flex-col items-center space-y-2 max-h-[100vh] bg-secondary">
      <ModalLayoutHeader />
      <div className="flex-1 relative pt-10 w-full h-full p-6 flex items-center justify-center">
        {children}
      </div>
    </body>
  );
};

export default ModalLayout;
