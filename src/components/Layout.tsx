
import { DivProps } from '@client/DomProps'


export const Layout = ({ children }: DivProps) => (
	<div className='flex flex-col max-h-screen min-h-screen px-8 py-4 overflow-hidden font-body bg-zinc-800 text-slate-300'>
		{children}
	</div>
)


export default Layout
