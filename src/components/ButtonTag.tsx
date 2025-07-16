import styled from "styled-components";

interface ButtonTagProps {
  color: "white" | "black";
  padding: "default" | "wide";
}

export const ButtonTag = styled.button<ButtonTagProps>`
  color: var(--white-color);
  border: ${({ color }) =>
    color === "white" ? "1px solid var(--white-color)" : "none"};
  background-color: ${({ color }) =>
    color === "white" ? "transparent" : "var(--black-color)"};
  width: 100%;
  padding: ${({ padding }) => (padding === "default" ? "10px" : "20px 10px")};
  border-radius: 10px;
  font-size: var(--font-smz);
  font-weight: var(--font-bw);
`;
