import styled from "styled-components";

export default function Button({ children, onClick }) {
  return <Btn onClick={onClick}>{children}</Btn>;
}

const Btn = styled.button`
  background-color: var(--action-color);
  color: var(--white-color);
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.4rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
