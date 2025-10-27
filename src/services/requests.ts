import { BigNumberish } from '@ethersproject/bignumber'
import { useQuery } from '@tanstack/react-query'
import { iface } from 'services/interface'
import { provider } from 'services/provider'
import { DEFAULT_DECIMALS, TREASURY_ACCOUNT_ADDRESS, XVS_CONTRACT_ADDRESS } from 'utils/config'

const commonQueryOptions = {
	retry: 2,
	retryDelay: 2000,
}

const getBalanceOf = async (address: string = TREASURY_ACCOUNT_ADDRESS) => {
	const reqData = iface.encodeFunctionData('balanceOf', [address])
	const respData = await provider.call({
		to: XVS_CONTRACT_ADDRESS,
		data: reqData,
	})
	return iface.decodeFunctionResult('balanceOf', respData) as BigNumberish[]
}

export const useBalanceOf = (address: string) =>
	useQuery({
		queryKey: ['balanceOf', address],
		queryFn: () => getBalanceOf(address),
		select: (results) => results?.[0],
		...commonQueryOptions,
		staleTime: 0,
	})

const getDecimals = async () => {
	const reqData = iface.encodeFunctionData('decimals', [])
	const respData = await provider.call({
		to: XVS_CONTRACT_ADDRESS,
		data: reqData,
	})
	return iface.decodeFunctionResult('decimals', respData)?.[0] as number
}

export const useDecimals = () =>
	useQuery({
		queryKey: ['decimals'],
		queryFn: getDecimals,
		...commonQueryOptions,
		initialData: DEFAULT_DECIMALS,
		staleTime: 10 * 60 * 1000, // 10 mins (could be longer). Since decimals are not likely to change, set a staleTime to avoid refetching when refreshing.
	})
