import styled from "@emotion/styled";

const Boton = styled.button`
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  border: 1px solid #d1d1d1;
  padding: 0.8rem 2rem;
  margin-right: 2rem auto;
  background-color: ${(props) => (props.bgColor ? `#DA552F` : "white")};
  color: ${(props) => (props.bgColor ? "white" : "#000")};
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Boton;
