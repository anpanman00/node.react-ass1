import styled from "styled-components";

const PostItem = (props) => {
    return (        
    <>
        <PostItemContainer>
            <PostImageContainer>
                Post Image!!
            </PostImageContainer>
            <PostDataContainer>
            <PostDataTitle>{props.title}</PostDataTitle>
            <PostDataDate>{props.month} {props.date} , {props.year}</PostDataDate>
            <PostDataTag>{props.tag}</PostDataTag>    
            </PostDataContainer>
        </PostItemContainer>
    </>
)
}



const PostItemContainer = styled.div`
    height: 150px;
    width: 400px;
  
    margin: 50px 10px;
  
    display: flex;
    flex-direction: row;

`;

const PostImageContainer = styled.div`
    height: 150px;
    width: 150px;
    
    background-color: coral;
`;

const PostDataContainer = styled.div`
    height: 130;
    width: 280;
  
    padding: 10px;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const PostDataTitle = styled.p`
    color: coral;
    font-size: 20px;
    font-weight: 700;
  
    margin: 0 0 20px 0;
    padding: 0;
`;

const PostDataDate = styled.p`
    color: pink;
    font-size: 20px;
  
    margin: 0;
    padding: 0;
`;

const PostDataTag = styled.p`
    color: pink;
    font-size: 20px;
  
    margin: 0;
    padding: 0;
`;

export default PostItem;