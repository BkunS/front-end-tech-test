import { FC, HTMLAttributes, memo } from 'react'

import { useBalanceData } from 'hooks/useBalanceData'
import { clx } from 'utils/clx'
import { ASSET_NAME } from 'utils/config'

import { Button } from './common/Button'

const wrapperClassName =
	'flex flex-col gap-[32px] w-full items-center lg:w-fit lg:items-start p-[16px] lg:p-[40px] bg-[#282931] lg:bg-transparent rounded-[0_0_24px_24px] lg:rounded-none'

export const Balance: FC<HTMLAttributes<HTMLDivElement>> = memo(({ className, ...props }) => {
	const { amount, refetch, loading } = useBalanceData()

	return (
		<div className={clx(wrapperClassName, className)} {...props}>
			<div className="banner-title">Treasury balance</div>
			<div className="banner-amount">
				{amount} {ASSET_NAME}
			</div>
			<Button onClick={refetch} loading={loading} className="w-full lg:w-fit">
				Refresh
			</Button>
		</div>
	)
})

Balance.displayName = 'Balance'
