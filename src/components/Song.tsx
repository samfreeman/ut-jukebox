
import { Song as SongEntity } from '@shared/model/Song'
import { DivProps } from '@client/DomProps'


export type Props = DivProps<{
	song: SongEntity
}>


export const Song = ({ song }: Props) => {
	return (
		<div className="flex-row">
			<span>{song.name}</span>
			<span>{song.artist}</span>
			<span>{song.singer}</span>
			<span>{song.tuning}</span>
		</div>
	)
}


export default Song
