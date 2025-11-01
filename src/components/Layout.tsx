import { ReactNode } from "react";
import Bujji from "./Bujji";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {children}
      <Bujji />
    </div>
  );
};

export default Layout;
