// 'use client';
// import React, { JSX } from 'react';

// interface UnderlinedHeadingProps {
//   text: string;
//   className?: string;
//   align?: 'left' | 'center' | 'right';
// }

// export default function UnderlinedHeading({
//   text,
//   className = '',
//   align = 'left'
// }: UnderlinedHeadingProps) {
//   return (
//     <h2
//       className={`py-6 sm:py-10 ${
//         align === 'left' ? 'text-left' :
//         align === 'right' ? 'text-right' :
//         'text-center'
//       } text-black text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold ${className}`}
//     >
//       <s
//         style={{
//           textDecoration: 'underline',
//           textDecorationColor: '#3CC78F99',
//           textDecorationThickness: '20%',
//           textDecorationSkipInk: 'none',
//           textUnderlineOffset: '-15%',
//         }}
//       >
//         {text}
//       </s>
//     </h2>
//   );
// }

'use client';
import React, { JSX } from 'react';

interface UnderlinedHeadingProps {
  text: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  size?: string; // Added size prop
}

export default function UnderlinedHeading({
  text,
  className = '',
  align = 'left',
  size, // Added size prop
}: UnderlinedHeadingProps) {
  return (
    <h2
      className={`py-6 sm:py-10 ${
        align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'
      } text-black ${size || 'text-4xl sm:text-3xl md:text-5xl lg:text-6xl'} font-bold ${className}`}
    >
      <s
        style={{
          textDecoration: 'underline',
          textDecorationColor: '#3CC78F99',
          textDecorationThickness: '20%',
          textDecorationSkipInk: 'none',
          textUnderlineOffset: '-15%',
        }}
      >
        {text}
      </s>
    </h2>
  );
}
