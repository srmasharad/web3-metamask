import { MantineProvider, ColorSchemeProvider, Container, ColorScheme } from '@mantine/core';
import { DAppProvider } from '@usedapp/core';

import { useState } from 'react';
import Header from './components/common/Header';
import CryptoConverterForm from './components/CryptoConverterForm';
import Metamask from './components/Metamask';
import { config } from './utils/config';

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

    // Dark and light mode toggler
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <DAppProvider config={config}>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                    <Header />
                    <CryptoConverterForm />
                    <Container size={530}>
                        <Metamask />
                    </Container>
                </MantineProvider>
            </ColorSchemeProvider>
        </DAppProvider>
    );
}

export default App;
