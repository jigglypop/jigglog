import React, { useEffect } from 'react'
import { RiKakaoTalkLine } from 'react-icons/ri'
import styled from 'styled-components'

const KakaoButton = styled.button`
  border-radius: 50%;
  border: none;
  width: 45px;
  height: 45px;
  margin: 5px;
  background-color:#141414;
  transition: all 0.5s ease-in-out;
  border: 2px solid #ffe259;
  box-shadow : 0 0 5px gray;
  .kakao-inner{
    width: 30px;
    height: 30px;
  }
  &:hover {
    box-shadow : 0 0 20px gray;
  }
`

const KakaoShareButton = ({ title, image } : any) => {
  useEffect(() => {
    createKakaoButton()
  }, [])
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    let Window : any = window
    if (Window.Kakao) {
      const kakao = Window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init('ff408d7503485d500776f4baafb4c66f')
      }
      kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: title,
          description: '#jigglog',
          imageUrl: require(`~/resources/${image}`), 
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 0,
          commentCount: 0,
          // sharedCount: 333,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    }
  }
  return (
    <div className="kakao-share-button">
      <KakaoButton id="kakao-link-btn">
        <RiKakaoTalkLine color="#ffe259" className="kakao-inner"/>
      </KakaoButton>
    </div>
  )
}
export default KakaoShareButton

