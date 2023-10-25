import { styled } from "styled-components";

export const Table = styled.table`
  font-size: 16px;
  background-color: #3f51b5;
  color: #fff;
  margin-top: 50px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
  border-collapse: collapse;
  width: 100%;
`;

export const Thead = styled.thead`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
`;

export const TableHeader = styled.th`
  padding: 12px;
`;

export const TableBody = styled.tbody`
  background-color: #3f51b5;
`;

export const TableData = styled.td`
  padding: 12px;
  text-align: center;
`;

export const ButtonTable = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  padding: 6px 10px;
  border: 1px solid #3f51b5;
  background-color: #fff;
  color: #3f51b5;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  &:hover,
  &:focus {
    background-color: #3f51b5;
    color: #fff;
    border: 1px solid #3f51b5;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
