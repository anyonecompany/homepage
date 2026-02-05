
// Fix: Import React to resolve React namespace in .ts files
import React from 'react';

export interface Step {
  title: string;
  description: string;
}

export interface MetricCard {
  value: string;
  label: string;
  suffix?: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  weight: number;
  icon: React.ReactNode;
}
