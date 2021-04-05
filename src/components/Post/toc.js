import React, { useRef, useEffect } from "react";
import { TocItemDiv } from './styled'



export const InSection = ( props ) => {
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            const tocId  = entry.target.className.split('isId:')[1].split(' ')[0].toString()
            const tocItem = document.getElementById(`${tocId}`)
            const tocItems = document.querySelectorAll('.tocitem')
            tocItems.forEach((item) => {
              item.classList.remove('isintersect')
            })
            if (tocItem){
              tocItem.classList.add('isintersect')
            }
          } 
          entry.target.classList.toggle('isintersect')
        });
      });
      observer.observe(domRef.current);
      return () => observer && observer.disconnect();
    }, []);
    return (
      <TocItemDiv
        className={`isId:${props.groupId}`}
        ref={domRef}>
        {props.children}
      </TocItemDiv>
    );
  }