import styled from "styled-components";
import { useState } from "react";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const reset = (e) => {
    setEditorText("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(event) => reset(event)}>
                <img src="data:image/png;base64,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" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="/images/user.svg" alt="" />
                <span>Name</span>
              </UserInfo>

              <textarea
                value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                placeholder="What do you want to talk about"
                autoFocus={true}
              />
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton>
                  <img src="/images/share-image.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/share-video.svg" alt="" />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img src="/images/share-comment.svg" />
                  <span>Anyone</span>
                </AssetButton>
              </ShareComment>

              <PostButton disabled={!editorText ? true : false}>
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5px;
  align-items: center;
`;

const Content = styled.div`
  background-color: white;
  width: 100%;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 2;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  button {
    min-width: auto;
    border: none;

    background: transparent;
    img {
      pointer-events: none;
      height: 30px;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: none;
  padding: 8px 12px;
  textarea {
    border-radius: 8px;
    padding-inline: 5px;
    height: 90px;
    resize: none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  img {
    border-radius: 50%;
    width: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    padding: 5px;
  }
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AttachAssets = styled.div`
  display: flex;
  align-items: center;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  margin-right: 8px;
  border-radius: 50%;
  border: none;
  outline: none;
  justify-content: center;
  background: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.08);

  ${AssetButton} {
    border-radius: 50px;
    padding: 5px 10px;
    img {
      height: 19px;
    }
    span {
      font-size: 14px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
      padding: 0 5px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  padding: 0 16px;
  border-radius: 20px;
  background: ${(props) => (props.disabled ? "#b8b8b8" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "#5a5a5a" : "#fff")};
  font-size: 16px;
  letter-spacing: 1.1px;
  border: none;
  outline: none;
  &:hover {
    background: ${(props) => (props.disabled ? "#b8b8b8" : "#004182")};
  }
`;

export default PostModal;
