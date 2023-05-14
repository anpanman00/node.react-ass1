import styled from "styled-components";
import PostItem from "./PostItem.js";

const App = () => {
    return (
        <>
            <ParentComponent>
                <LeftComponent>
                    <LeftTitleContainer>
                        <LeftTitleItem>twinkle_potato</LeftTitleItem>
                        <LeftTitleItem>과제</LeftTitleItem>
                    </LeftTitleContainer>
                </LeftComponent>
                <RightComponent>
                    <RightPostContainer>
                        <PostItem title={'강촌 mt'} date={12} month={'May'} year={2023} tag={'#cecom'}/>
                        <PostItem title={'리액트 스터디'} date={8} month={'May'} year={2023} tag={'#cecom #study'}/>
                        <PostItem title={'개강총회'} date={17} month={'Apr'} year={2023} tag={'#cecom'}/> 
                        <PostItem title={'BOJ'} date={9} month={'May'} year={2023} tag={'#cecom #study'}/>           
                    </RightPostContainer>
                </RightComponent>
            </ParentComponent>
        </>
    );
}
//vh, vw:현재 실행중인 스크린 크기에 맞춤
const ParentComponent = styled.div`
    height: 100vh; 
    width: 100vw;
    
    display: flex;
    flex-direction: row;
`;
//%: 부모요소에 맞춤
//글씨 위치 고정하고 쭉 이어지게 하는방법??
const LeftComponent = styled.div`
    height: 100%;
    width: 400px;
  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
 
    background-color: orangered;
`;

const RightComponent = styled.div`
    height: 100%;
    width: 100%;

`;

const LeftTitleContainer = styled.div`
    height: 200px;
    width: 100%;
  
    padding: 30px;
  
    display: flex;
    flex-direction: column;
`;

const LeftTitleItem = styled.p`
    color: white;
    font-size: 50px;
  
    margin: 0;
    padding: 0;
`;

const RightPostContainer = styled.div`
    width: 100%;
  
    padding: 50px;
  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

export default App;
