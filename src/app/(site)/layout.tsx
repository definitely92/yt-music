import React from 'react';
import Header from '@/components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full">
            <Header>{children}</Header>
        </div>
    );
};

export default Layout;
