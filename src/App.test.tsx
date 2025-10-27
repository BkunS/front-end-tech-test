import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'

import App from './App'

const queryClient = new QueryClient()

const AppWithQueryClient = (
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
)

test('renders banner card', () => {
	render(AppWithQueryClient)

	const ele = screen.getByRole('banner')

	expect(ele).toBeInTheDocument()
})

test('renders title', () => {
	render(AppWithQueryClient)

	const [ele] = screen.getAllByText('Treasury balance')

	expect(ele).toBeInTheDocument()
})

test('renders balance amount', () => {
	render(AppWithQueryClient)

	const [eke] = screen.getAllByRole('contentinfo')

	expect(eke).toBeInTheDocument()
})

test('renders refresh button', () => {
	render(AppWithQueryClient)

	const [ele] = screen.getAllByRole('button', { name: /refresh|(loading...)/i })

	expect(ele).toBeInTheDocument()
})
