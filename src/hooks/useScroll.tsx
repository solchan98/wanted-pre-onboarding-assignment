import { RefObject, UIEvent, useRef } from 'react';

type ReturnTypes = [RefObject<HTMLElement>, (e: UIEvent<HTMLElement>) => void, () => void]

const useScroll = (): ReturnTypes => {
  const scrollRef = useRef<HTMLElement>(null);

  const onScroll = (e: UIEvent<HTMLElement>) => {
    const currentScroll = e.currentTarget.scrollTop;
    const mainClientHeight = scrollRef.current?.clientHeight || 0;
    const mainClientScrollHeight = scrollRef.current?.scrollHeight || 0;
    /** TODO API CALL */
  };

  const scrollToTop = () => scrollRef.current?.scrollTop && scrollRef.current?.scrollTo(0, 0);
  return [scrollRef, onScroll, scrollToTop];
};

export default useScroll;