
import { Song as SongEntity } from '@shared/model/Song'
import { DivProps } from '@client/DomProps'


export type Props = DivProps<{
	song: SongEntity
}>



export const Song = ({ song }: Props) => {
	const Title = ({ song }: Props) => {
		const Name = ({ song }: Props) => (
			<p
				className={
					'max-w-[172px] max-h-[32px] '
					+ 'font-bold text-amber-700 '
					+ 'whitespace-nowrap overflow-hidden overflow-ellipsis'
				}
			>
				{song.name}
			</p>
		)

		const Artist = ({ song }: Props) => (
			<p className='text-xs'>{song.artist}</p>
		)

		return (
			<div className='flex flex-col'>
				<Name song={song} />
				<Artist song={song} />
			</div>
		)
	}

	const Detail = ({ song }: Props) => {
		const Singer = ({ song }: Props) => (
			<p>{song.singer}</p>
		)

		const Tuning = ({ song }: Props) => (
			<p className='text-orange-400'>{song.tuning}</p>
		)

		return (
			<div className='flex flex-col items-end'>
				<Singer song={song} />
				<Tuning song={song} />
			</div>
		)
	}

	return (
		<div
			className={
				'flex flex-row justify-between '
				+ 'w-64 px-2 py-1 '
				+ 'border-2 border-solid rounded-md '
				+ 'cursor-pointer '
				+ 'bg-stone-900 border-slate-400'
			}
			title={`${song.name} - ${song.artist} - ${song.singer} - ${song.tuning}`}
		>
			<Title song={song} />
			<Detail song={song} />
		</div>
	)
}


export default Song
