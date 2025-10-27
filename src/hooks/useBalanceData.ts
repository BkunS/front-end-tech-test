import { useCallback, useMemo } from 'react'

import { useBalanceOf, useDecimals } from 'services/requests'
import { TREASURY_ACCOUNT_ADDRESS } from 'utils/config'
import { removeTrailingZeroThenFormat, weiToAmount } from 'utils/number'

export const useBalanceData = () => {
	const { data: decimals, isLoading: decimalsLoading, refetch: refetchDecimals, isFetching: decimalsFetching } = useDecimals()
	const {
		data: balance,
		isLoading: balanceLoading,
		refetch: refetchBalance,
		isFetching: balanceFetching,
	} = useBalanceOf(TREASURY_ACCOUNT_ADDRESS)

	const amount = useMemo(() => {
		try {
			if (balance == null) return '--'
			return removeTrailingZeroThenFormat(weiToAmount(balance?.toString(), decimals))
		} catch (_) {
			return '--'
		}
	}, [balance, decimals])

	const loading = useMemo(
		() => decimalsLoading || balanceLoading || decimalsFetching || balanceFetching,
		[balanceFetching, balanceLoading, decimalsFetching, decimalsLoading],
	)
	const refetch = useCallback(() => {
		refetchDecimals()
		refetchBalance()
	}, [refetchBalance, refetchDecimals])

	return {
		amount,
		loading,
		refetch,
	}
}
