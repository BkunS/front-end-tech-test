import { FC, HTMLAttributes, memo } from 'react'

import { clx } from 'utils/clx'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & { loading?: boolean }

const baseClassName =
	'flex text-[16px] font-[600] rounded-[8px] gap-[12px] bg-[#3A78FF] justify-center items-center px-[24px] py-[12px] hover:cursor-pointer hover:opacity-80 duration-200'

export const Button: FC<ButtonProps> = memo(({ loading, children, className, ...props }) => {
	return (
		<button
			className={clx(
				baseClassName,
				{
					['hover:cursor-not-allowed']: loading,
					['opacity-[60]']: loading,
				},
				className,
			)}
			{...props}
		>
			{loading ? 'Loading' : children}
		</button>
	)
})

Button.displayName = 'Button'
