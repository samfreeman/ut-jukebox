
import { data } from '@shared/model/Song'
import Song from './Song'


export const Songs = () => {
	return (
		<div className="flex-col">
			{data.map(song => <Song key={song.id} song={song} />)}
		</div>
	)
}


export default Songs
