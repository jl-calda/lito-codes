import { ModalLayoutHeader } from "./_component/modal-layout-header";

interface ModalLayoutProps {
  children: React.ReactNode;
}

import "../globals.css";

const ModalLayout = ({ children }: ModalLayoutProps) => {
  return (
    <body className="flex flex-col items-center space-y-2 max-h-[100vh] bg-secondary">
      <ModalLayoutHeader />
      <div className="flex-1 flex items-center justify-center max-w-7xl md:h-[calc(((100vh-8rem)*(13/9))*(9/13))] relative md:w-[calc((100vh-8rem)*(13/9))] w-[calc(100vw-2rem)] md:p-2">
        {children}
      </div>
    </body>
  );
};

export default ModalLayout;
