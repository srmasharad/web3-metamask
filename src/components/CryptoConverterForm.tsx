import { useState } from 'react';
import { Group, Title, ActionIcon, Text, useMantineTheme, Box, Divider, NumberInput, Button, Container } from '@mantine/core';
import { IconSwitchHorizontal } from '@tabler/icons';

const CryptoConverterForm = () => {
    const theme = useMantineTheme();
    const dark = theme.colorScheme === 'dark';
    const [nepValue, setNepValue] = useState<number>(0);
    const [busdValue, setBusdValue] = useState<number>(0);
    const [switchConverter, setSwitchConverter] = useState<boolean>(false);

    // On Nep input field handle change
    const onNEPHandleChange = (val: number) => {
        if (!switchConverter) {
            const busdValue = val * 3;
            setNepValue(val);
            setBusdValue(() => {
                if (val) return busdValue;
                else return 0;
            });
        } else {
            const nepValue = val / 3;
            setBusdValue(val);
            setNepValue(() => {
                if (val) return nepValue;
                else return 0;
            });
        }
    };

    // On BUSD input field handle change
    const onBUSDHandleChange = (val: number) => {
        if (!switchConverter) {
            setBusdValue(Number(val));
        } else {
            setNepValue(Number(val));
        }
    };

    // Clear input field value
    const handleClear = () => {
        setNepValue(0);
        setBusdValue(0);
    };

    // Clear input field value and set to initial value
    const handleReset = () => {
        setNepValue(0);
        setBusdValue(0);
        setSwitchConverter(false);
    };
    return (
        <Container size={550} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
                my={50}
                sx={{
                    border: `1px solid ${dark ? theme.colors.dark['5'] : theme.colors.gray['3']}`,
                    borderRadius: theme.radius.md,
                    background: dark ? theme.colors.gray['9'] : theme.white,
                    boxShadow: theme.shadows.lg,
                }}
                p="md"
                px="lg"
                pb={25}>
                <Group position="apart">
                    <Title order={5} weight={600}>
                        Crypto Converter
                    </Title>
                    <Text weight={600} size="xs" color="dimmed">
                        {!switchConverter ? '1 NEP = 3 BUSD' : '1 BUSD = 0.33 NEP'}
                    </Text>
                </Group>
                <Divider variant="dashed" mt="xs" mb="md" />
                <Group mb="md">
                    <NumberInput
                        label={!switchConverter ? 'NEP' : 'BUSD'}
                        placeholder="0.00"
                        value={!switchConverter ? nepValue : busdValue}
                        precision={2}
                        onChange={(val) => onNEPHandleChange(Number(val))}
                    />
                    <ActionIcon variant="light" color="indigo" radius="xl" mt={25} onClick={() => setSwitchConverter(!switchConverter)}>
                        <IconSwitchHorizontal size={18} />
                    </ActionIcon>
                    <NumberInput
                        label={!switchConverter ? 'BUSD' : 'NEP'}
                        placeholder="0.00"
                        value={!switchConverter ? busdValue : nepValue}
                        precision={2}
                        onChange={(val) => onBUSDHandleChange(Number(val))}
                    />
                </Group>
                <Button mr={8} variant="light" color="indigo" compact onClick={handleClear}>
                    Clear
                </Button>
                <Button variant="light" color="indigo" compact onClick={handleReset}>
                    Reset
                </Button>
            </Box>
        </Container>
    );
};

export default CryptoConverterForm;
