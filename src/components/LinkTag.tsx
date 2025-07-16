import styled from "styled-components";

interface LinkTagProps {
  color: "white" | "black",
  width: "fit" | "100%"
  padding: "default" | "wide"
}

export const LinkTag = styled.a<LinkTagProps>`
  color: var(--white-color);
  border: ${({color}) => (color === "white" ? "1px solid var(--white-color)" : "none")};
  background-color: ${({color}) => (color === "white" ? "transparent" : "var(--black-color)")};
  width: ${({width}) => (width === "fit" ? "fit-content" : "100%")};
  padding: ${({padding}) => (padding === "default" ? "10px" : "20px 10px")};
  border-radius: 10px;
  font-size: var(--font-smz);
  font-weight: var(--font-bw);
`