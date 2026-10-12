'use client';

import React, { createContext, useContext } from 'react';
import { PortfolioData } from './types';
import { defaultPortfolioData } from './portfolio-config';

const PortfolioContext = createContext<PortfolioData>(defaultPortfolioData);

export function PortfolioProvider({
  data,
  children,
}: {
  data?: PortfolioData;
  children: React.ReactNode;
}) {
  return (
    <PortfolioContext.Provider value={data || defaultPortfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio(): PortfolioData {
  const context = useContext(PortfolioContext);
  return context || defaultPortfolioData;
}
