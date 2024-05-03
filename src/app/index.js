"use client"

import { useEffect, useState } from 'react';

export default function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('none');
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY;
      if (currentOffset > prevOffset) {
        setScrollDir('down');
      } else if (currentOffset < prevOffset) {
        setScrollDir('up');
      }
      setPrevOffset(currentOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevOffset]);

  return scrollDir;
}
