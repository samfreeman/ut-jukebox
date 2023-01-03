
import { DivProps } from '@client/DomProps'


export const Layout = ({ children }: DivProps) => (
	<div className='border-spacing-4'>
		{children}
	</div>
)


export default Layout
