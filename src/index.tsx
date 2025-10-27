// sort-imports-ignore

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App'
import './styles/tailwind.css'
import './styles/reset.css'
import './styles/styles.css'

import BigNumber from 'bignumber.js'
// Make sure no number is displayed in exponent format, and default to rounding down
BigNumber.config({ EXPONENTIAL_AT: 1e9, ROUNDING_MODE: BigNumber.ROUND_DOWN })

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>,
)
