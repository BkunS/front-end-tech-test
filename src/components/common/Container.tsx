import { FC, HTMLAttributes, memo } from 'react'

import { clx } from 'utils/clx'

const rootClassNames = 'w-full px-[16px] md:px-[24px]'
const innerClassNames = 'mx-auto lg:max-w-[976px]'

export const Container: FC<HTMLAttributes<HTMLDivElement>> = memo(
	({ children, className, ...props }) => {
		return (
			<div className={clx(rootClassNames, className)} {...props}>
				<div className={innerClassNames}>{children}</div>
			</div>
		)
	},
)

Container.displayName = 'Container'
