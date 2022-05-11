import { RefObject, UIEvent, useRef } from 'react';

type ReturnTypes = [RefObject<HTMLElement>, (e: UIEvent<HTMLElement>, handler: Function) => void, () => void]

const useScroll = (): ReturnTypes => {
  const scrollRef = useRef<HTMLElement>(null);

  const onScroll = (e: UIEvent<HTMLElement>, handler: Function) => {
    const currentScroll = e.currentTarget.scrollTop;
    const mainClientHeight = scrollRef.current?.clientHeight || 0;
    const mainClientScrollHeight = scrollRef.current?.scrollHeight || 0;
    if(currentScroll === mainClientScrollHeight - mainClientHeight) {
      handler();
    }
    // [3] = [1] + [2]
  };

  const scrollToTop = () => scrollRef.current && scrollRef.current.scrollTo(0, 0);
  return [scrollRef, onScroll, scrollToTop];
};

export default useScroll;