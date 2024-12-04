import { toHex } from '@metamask/controller-utils';
import { NETWORKS_CHAIN_ID, RWA_METAVERSE } from '../../../app/constants/network';
import images from '../../../app/images/image-icons';

/* eslint-disable @typescript-eslint/no-require-imports, import/no-commonjs */
const InfuraKey = process.env.MM_INFURA_PROJECT_ID;
const infuraProjectId = InfuraKey;

export const RWA_METAVERSE_CONFIG = {
  chainId: `0x${Number(18688).toString(16)}`,
  nickname: 'RWA Metaverse',
  rpcEndpoints: [
    {
      url: 'https://rwa.binavy.com',
      networkClientId: `rpc_${`0x${Number(18688).toString(16)}`}_0`,
      type: 'custom',
      name: 'RWA Metaverse Main',
    }
  ],
  defaultRpcEndpointIndex: 0,
  ticker: 'R',
  nativeCurrency: 'R',
  name: 'RWA Metaverse',
  blockExplorerUrls: ['http://35.220.178.218'],
  defaultBlockExplorerUrlIndex: 0,
  imageSource: images.R_TOKEN,
  imageUrl: images.R_TOKEN,
};

export const Networks = {
  [RWA_METAVERSE]: {
    name: 'RWA Metaverse',
    chainId: `0x${Number(18688).toString(16)}`,
    rpcEndpoint: 'https://rwa.binavy.com',
    networkClientId: `rpc_${`0x${Number(18688).toString(16)}`}_0`,
    type: 'custom',
  }
};

export const PopularList = [
  {
    name: 'RWA Metaverse',
    chainId: `0x${Number(18688).toString(16)}`,
    shortName: 'RWA',
    networkType: RWA_METAVERSE,
    imageSource: images.R_TOKEN,
    rpcUrl: 'https://rwa.binavy.com',
    ticker: 'R',
    tickerId: 'r',
    rpcPrefs: {
      blockExplorerUrl: 'http://35.220.178.218',
      imageSource: images.R_TOKEN,
      imageUrl: images.R_TOKEN,
    },
  },
  {
    chainId: toHex('43114'),
    nickname: 'Avalanche C-Chain',
    rpcUrl: `https://avalanche-mainnet.infura.io/v3/${infuraProjectId}`,
    ticker: 'AVAX',
    rpcPrefs: {
      blockExplorerUrl: 'https://snowtrace.io',
      imageSource: images.AVALANCHE,
      imageUrl: images.AVALANCHE,
    },
  },
  {
    chainId: toHex('42161'),
    nickname: 'Arbitrum One',
    rpcUrl: `https://arbitrum-mainnet.infura.io/v3/${infuraProjectId}`,
    ticker: 'ETH',
    rpcPrefs: {
      blockExplorerUrl: 'https://arbiscan.io',
      imageSource: images.ARBITRUM,
      imageUrl: images.ARBITRUM,
    },
  },
  {
    chainId: toHex('56'),
    nickname: 'BNB Smart Chain Mainnet',
    rpcUrl: 'https://bsc-dataseed1.binance.org',
    ticker: 'BNB',
    warning: true,
    rpcPrefs: {
      blockExplorerUrl: 'https://bscscan.com',
      imageSource: images.BINANCE,
      imageUrl: images.BINANCE,
    },
  },
  {
    chainId: toHex('8453'),
    nickname: 'Base',
    rpcUrl: `https://mainnet.base.org`,
    ticker: 'ETH',
    warning: true,
    rpcPrefs: {
      blockExplorerUrl: 'https://basescan.org',
      imageSource: images.BASE,
      imageUrl: images.BASE,
    },
  },
  {
    chainId: toHex('10'),
    nickname: 'OP Mainnet',
    rpcUrl: `https://optimism-mainnet.infura.io/v3/${infuraProjectId}`,
    ticker: 'ETH',
    rpcPrefs: {
      blockExplorerUrl: 'https://optimistic.etherscan.io',
      imageSource: images.OPTIMISM,
      imageUrl: images.OPTIMISM,
    },
  },
  {
    chainId: toHex('11297108109'),
    nickname: 'Palm',
    rpcUrl: `https://palm-mainnet.infura.io/v3/${infuraProjectId}`,
    ticker: 'PALM',
    rpcPrefs: {
      blockExplorerUrl: 'https://explorer.palm.io',
      imageSource: images.PALM,
      imageUrl: images.PALM,
    },
  },
  {
    chainId: toHex('137'),
    nickname: 'Polygon Mainnet',
    rpcUrl: `https://polygon-mainnet.infura.io/v3/${infuraProjectId}`,
    ticker: 'POL',
    rpcPrefs: {
      blockExplorerUrl: 'https://polygonscan.com',
      imageSource: images.POLYGON,
      imageUrl: images.POLYGON,
    },
  },
  {
    chainId: toHex('324'),
    nickname: 'zkSync Mainnet',
    rpcUrl: `https://mainnet.era.zksync.io`,
    ticker: 'ETH',
    warning: true,
    rpcPrefs: {
      blockExplorerUrl: 'https://explorer.zksync.io/',
      imageSource: images.ZK_SYNC,
      imageUrl: images.ZK_SYNC,
    },
  },
];

/**
 * List of popularList will change in the future, removing networks from the list will lead to users not
 * seeing the logo of the network anymore.
 * We can keep this new list updated with any network removed from the popular list so we keep returning the logo of the network.
 */
export const UnpopularNetworkList = [
  {
    chainId: toHex('250'),
    nickname: 'Fantom Opera',
    rpcUrl: 'https://rpc.ftm.tools/',
    ticker: 'FTM',
    warning: true,
    rpcPrefs: {
      blockExplorerUrl: 'https://ftmscan.com',
      imageSource: images.FANTOM,
      imageUrl: images.FANTOM,
    },
  },
  {
    chainId: toHex('1666600000'),
    nickname: 'Harmony Mainnet Shard 0',
    rpcUrl: 'https://api.harmony.one/',
    ticker: 'ONE',
    warning: true,
    rpcPrefs: {
      blockExplorerUrl: 'https://explorer.harmony.one',
      imageSource: images.HARMONY,
      imageUrl: images.HARMONY,
    },
  },
];

export const CustomNetworkImgMapping: Record<`0x${string}`, string> = {
  '0xe': images.FLARE_MAINNET, // Flare Mainnet
  '0x13': images.SONGBIRD, // Songbird Testnet
};
