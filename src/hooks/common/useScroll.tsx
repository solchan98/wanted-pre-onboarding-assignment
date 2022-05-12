import { RefObject, UIEvent, useRef } from 'react';

type ReturnTypes = [RefObject<HTMLElement>, (e: UIEvent<HTMLElement>, handler: Function) => void, () => void]

const useScroll = (): ReturnTypes => {
  const scrollRef = useRef<HTMLElement>(null);

  const onScroll = (e: UIEvent<HTMLElement>, handler: Function) => {
    const currentScroll = e.currentTarget.scrollTop;
    const mainClientHeight = scrollRef.current?.clientHeight || 0;
    const mainClientScrollHeight = scrollRef.current?.scrollHeight || 0;
    if(currentScroll >= mainClientScrollHeight - mainClientHeight - 100) { // 마지막 아이템 반 정도 보이는 수준
      handler();
    }
  };

  const scrollToTop = () => scrollRef.current && scrollRef.current.scrollTo(0, 0);
  return [scrollRef, onScroll, scrollToTop];
};

export default useScroll;