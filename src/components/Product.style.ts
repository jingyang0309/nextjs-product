import styled, { css } from "styled-components";

export const Product = styled.div`
  display: flex;
  padding: 24px;
  gap: 16px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 4px 4px 12px 1px rgb(0 0 0 / 20%);
  min-height: 240px;
  width: 600px;
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const ImageWrapper = styled.div`
  width: 120px;
  height: 167px;
  position: relative;
`;

export const ProductTitle = styled.a`
  color: #333;
  font-size: 20px;
  transition: all 0.3s;
  &:hover {
    color: #783f8e;
  }
`;

export const ProductDescription = styled.div<{ $all?: boolean }>`
  color: #7d7d7d;
  font-size: 16px;
  width: 400px;
  ${({ $all }) =>
    !$all &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`;

export const ProductPrice = styled.div`
  font-size: 24px;
`;
