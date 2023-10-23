import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <section className="bg-amber-300">{children}</section>;
}