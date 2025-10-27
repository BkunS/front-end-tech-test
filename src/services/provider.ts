import { RPC_PROVIDER_URL } from 'utils/config'
import { getDefaultProvider } from '@ethersproject/providers'

export const provider = getDefaultProvider(RPC_PROVIDER_URL)
