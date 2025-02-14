import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 52px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
`;