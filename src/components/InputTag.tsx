import styled from "styled-components";

interface InputTagProps {
  children: string;
  name: string;
}

export default function InputTag({ children, name }: InputTagProps) {
  return (
    <>
      <TagInput type="radio" id={children} name={name} />
      <TagLabel htmlFor={children}>{children}</TagLabel>
    </>
  );
}

const TagInput = styled.input`
  display: none;
  &:checked + label {
    background-color: var(--white-color);
    color: var(--black-color);
  }
`

const TagLabel = styled.label`
  display: block;
  color: var(--white-color);
  padding: 10px;
  font-size: var(--font-smz);
  border: 1px solid var(--white-color);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  font-weight: var(--font-bw);
`;