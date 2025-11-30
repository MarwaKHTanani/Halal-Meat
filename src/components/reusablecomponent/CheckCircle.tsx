import React from 'react';
import { Check } from 'lucide-react';
function CheckCircle({
  bg = '[#B6282D]',
  size = 16,
  iconColor = 'text-white',
}: {
  bg?: string;
  size?: number;
  iconColor?: string;
}) {
  return (
    <div>
      <Check className={` rounded-2xl p-1 `} style={{width:size , height:size , background:bg , color:iconColor}}/>
    </div>
  );
}

export default CheckCircle;
