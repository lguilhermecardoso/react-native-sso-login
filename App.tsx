import { SignIn } from './src/screens/SigIn';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}