
import { data } from '@shared/model/Song'
import Song from './Song'


export const Songs = () => {
	return (
		<div className='flex flex-col flex-wrap content-start max-h-full gap-2 overflow-auto'>
			{data.map(song => <Song key={song.id} song={song} />)}
		</div>
	)
}


export default Songs
