import { ChainId } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

export const config = {
    readOnlyChainId: ChainId.Mainnet,
    readOnlyUrls: {
        [ChainId.Mainnet]: getDefaultProvider('mainnet'),
    },
};
