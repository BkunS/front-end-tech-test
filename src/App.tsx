import { Balance } from 'components/Balance'
import { Container } from 'components/common/Container'

function App() {
	return (
		<Container className="pt-[64px]">
			<div className="banner-card">
				<Balance className="hidden lg:flex" />
			</div>

			<Balance className="lg:hidden" />
		</Container>
	)
}

export default App
