import BigNumber from 'bignumber.js'
import { Balance } from 'components/Balance'
import { Container } from 'components/common/Container'
import { useBalanceData } from 'hooks/useBalanceData'

// Make sure no number is displayed in exponent format, and default to rounding down
BigNumber.config({ EXPONENTIAL_AT: 1e9, ROUNDING_MODE: BigNumber.ROUND_DOWN })

function App() {
	const balanceData = useBalanceData()
	return (
		<Container className="pt-[64px]">
			<div id="banner-card" role="banner">
				<Balance className="hidden lg:flex" {...balanceData} />
			</div>

			<Balance className="lg:hidden" {...balanceData} />
		</Container>
	)
}

export default App
