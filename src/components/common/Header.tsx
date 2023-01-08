import { Container, Group, Title, UnstyledButton, ActionIcon, Text, useMantineTheme, useMantineColorScheme, Button } from '@mantine/core';
import { IconMoon, IconBrightnessDown, IconWallet } from '@tabler/icons';
import Logo from './Logo';
import { useEthers } from '@usedapp/core';

const Header = () => {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const { activateBrowserWallet, deactivate, account } = useEthers();

    return (
        <Container size="lg">
            <Group position="apart" py={8}>
                <Group spacing={8}>
                    <Logo color={dark ? 'white' : theme.colors.dark['6']} size={34} />
                    <Title order={6} size={16} weight={600}>
                        Neptune Mutual
                    </Title>
                </Group>
                <Group position="right">
                    {account ? (
                        <Button leftIcon={<IconWallet />} color="red" onClick={deactivate}>
                            Disconnect MetaMask
                        </Button>
                    ) : (
                        <Button leftIcon={<IconWallet />} color="indigo" onClick={() => activateBrowserWallet()}>
                            Connect MetaMask
                        </Button>
                    )}
                    <UnstyledButton component="span" onClick={() => toggleColorScheme()}>
                        <Group spacing={7}>
                            <ActionIcon variant="light" color="gray" radius="xl">
                                {' '}
                                {dark ? <IconBrightnessDown color={theme.colors.yellow['6']} /> : <IconMoon size={22} />}
                            </ActionIcon>
                            <Text weight={500} size="sm" sx={{ userSelect: 'none' }}>
                                {dark ? 'Light' : 'Dark'}
                            </Text>
                        </Group>
                    </UnstyledButton>
                </Group>
            </Group>
        </Container>
    );
};

export default Header;
