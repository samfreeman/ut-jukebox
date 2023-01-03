
import { Song as SongEntity } from '@shared/model/Song'
import { DivProps } from '@client/DomProps'


export type Props = DivProps<{
	song: SongEntity
}>



export const Song = ({ song }: Props) => {
	const Title = ({ song }: Props) => {
		const Name = ({ song }: Props) => (
			<p className='text-lg'>{song.name}</p>
		)

		const Artist = ({ song }: Props) => (
			<p className='text-sm'>{song.artist}</p>
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
			<p>{song.tuning}</p>
		)

		return (
			<div className='flex flex-col items-end'>
				<Singer song={song} />
				<Tuning song={song} />
			</div>
		)
	}

	return (
		<div className='flex flex-row justify-between px-2 py-1 border-2 border-solid rounded-md bg-stone-900 w-80 border-slate-400'>
			<Title song={song} />
			<Detail song={song} />
		</div>
	)
}


export default Song
