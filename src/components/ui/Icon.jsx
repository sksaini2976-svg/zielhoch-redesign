import React from 'react';
import * as icons from 'lucide-react';

const Icon = ({ name, ...props }) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) {
    return null; // Or return a default icon
  }
  return <LucideIcon {...props} />;
};

export default Icon;
