import { Box, Center, Divider, Group, Table, Text, ThemeIcon, Title, useMantineTheme } from '@mantine/core';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { IconWallet } from '@tabler/icons';

const Metamask = () => {
    const { account, chainId } = useEthers();
    const etherBalance = useEtherBalance(account);
    const theme = useMantineTheme();
    const dark = theme.colorScheme === 'dark';

    return (
        <Box
            sx={{
                border: `1px solid ${dark ? theme.colors.dark['5'] : theme.colors.gray['3']}`,
                borderRadius: theme.radius.md,
                background: dark ? theme.colors.gray['9'] : theme.white,
                boxShadow: theme.shadows.lg,
            }}
            p="md">
            <Title order={5} weight={600}>
                Wallet Details
            </Title>
            <Divider variant="dashed" mt="xs" mb="md" />
            {account ? (
                <Table verticalSpacing={8} sx={{ fontWeight: 500 }}>
                    <tbody>
                        {account && (
                            <tr>
                                <td>Account</td>
                                <td>
                                    <Text color="dimmed" weight={400}>
                                        {account}
                                    </Text>
                                </td>
                            </tr>
                        )}
                        {chainId && (
                            <tr>
                                <td>Chain ID</td>
                                <td>
                                    <Text color="dimmed" weight={400}>
                                        {chainId}
                                    </Text>
                                </td>
                            </tr>
                        )}
                        {etherBalance && (
                            <tr>
                                <td>Balance</td>
                                <td>
                                    <Text color="dimmed" weight={400}>
                                        {etherBalance && formatEther(etherBalance)} ETH
                                    </Text>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            ) : (
                <Center my={40}>
                    <Box sx={{ textAlign: 'center' }}>
                        <ThemeIcon color="indigo" variant="light" size={38} radius="xl" mb={5}>
                            <IconWallet size={24} />
                        </ThemeIcon>
                        <Text size="sm" weight={500}>
                            No wallet connected!
                        </Text>
                        <Text color={'dimmed'} size="sm">
                            Please connect wallet to view details
                        </Text>
                    </Box>
                </Center>
            )}
        </Box>
    );
};

export default Metamask;
