import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from "./style";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({
  title,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <Container
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <Title>Loading...</Title>
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  )
}