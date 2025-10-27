import BigNumber from 'bignumber.js'
import { DEFAULT_DECIMALS } from './config'

export const toBig = (val: BigNumber.Value) => new BigNumber(val)

const isNaN = (val: BigNumber.Value | null | undefined) => val == null || toBig(val).isNaN()

export const weiToAmount = (weiNum: string | number, decimals = DEFAULT_DECIMALS) => {
	return isNaN(weiNum) ? '--' : toBig(weiNum).shiftedBy(toBig(decimals).negated().toNumber()).toString()
}

export const removeTrailingZeroThenFormat = (input : BigNumber.Value, precision = DEFAULT_DECIMALS, opts?: {
	isNilExpression?: boolean
	rm?: BigNumber.RoundingMode
}) => {
	const { isNilExpression = false, rm = BigNumber.ROUND_DOWN} = opts ?? {}

	return (!isNaN(input) && !isNilExpression ? `${toBig(input).dp(precision, rm).toFormat()}` : '--')
}
