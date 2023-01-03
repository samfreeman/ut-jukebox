
export const Test = () => {
	const message = new class { x: any }().hasOwnProperty('x') ?
		'Transpiler is configured correctly'
		: 'Transpiler is not configured correctly'

	const color = message.includes('not')
		? 'text-red-400'
		: 'text-green-400'
	return (
		<div className={`m-4 text-lg ${color}`}>
			{message}
		</div>
	)
}

export default Test
