import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Message = ({ children, primary }) => {
  return <MessageWrapper primary={primary}>{children}</MessageWrapper>;
};

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.primary ? "1rem" : " 3.8rem")};

  h2 {
    margin: 1.3rem 0;
    opacity: 0.85;
  }

  h3 {
    color: rgb(255 100 100);
    font-style: italic;
  }

  p {
    margin: 1rem 0;
    opacity: 0.65;
    line-height: 1.1;
    text-align: center;
  }

  img {
    margin-top: ${(props) => (props.primary ? "2rem" : " 0.5rem")};
    width: ${(props) => (props.primary ? "13rem" : " 2.5rem")};
    opacity: 0.75;
  }

  .introMessage {
    margin: 1.3rem 0;
    opacity: 0.8;
    color: var(--vscode-foreground);
  }

  .sidebarEmptyIcon {
    margin-bottom: 1.3rem;
    font-size: 2rem;
    opacity: 0.65;
  }
`;

Message.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
};

export default Message;