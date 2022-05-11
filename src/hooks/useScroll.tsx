import { RefObject, UIEvent, useRef } from 'react';

type ReturnTypes = [RefObject<HTMLElement>, (e: UIEvent<HTMLElement>) => void]

const useScroll = (): ReturnTypes => {
  const scrollRef = useRef<HTMLElement>(null);

  const onScroll = (e: UIEvent<HTMLElement>) => {

    const currentScroll = e.currentTarget.scrollTop;
    const mainClientHeight = scrollRef.current?.clientHeight || 0;
    const mainClientScrollHeight = scrollRef.current?.scrollHeight || 0;
    if(currentScroll === mainClientScrollHeight - mainClientHeight) {
      // TODO API CALL ...
    }
    // [3] = [1] + [2]
  };
  return [scrollRef, onScroll];
};

export default useScroll;