import { useCallback, useEffect, useMemo, useState } from 'react'

// import { Interface, format } from "@ethersproject/abi"
import xvsAbi from 'assets/xvsAbi.json'

export const useBalanceData = () => {
	const [amount, setAmount] = useState('0')
	const [loading, setLoading] = useState(false)

	const balanceOf = useMemo(() => xvsAbi?.find((item) => item.name === 'balanceOf'), [])
	console.log(balanceOf)

	const fetchData = useCallback(async () => {
		try {
			setLoading(true)
			// TODO: 
			setAmount('1')
		} catch (err) {
			console.warn(err)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchData()
	}, [])

	return {
		amount,
		loading,
		refetch: fetchData,
	}
}
