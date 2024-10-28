import React from 'react';

interface LayoutProps {
  header: React.ReactNode; 
  footer: React.ReactNode; 
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ header, footer, children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {header}
      <main className="flex-1">
        {children}
      </main>
      {footer}
    </div>
  );
};

export default Layout;
