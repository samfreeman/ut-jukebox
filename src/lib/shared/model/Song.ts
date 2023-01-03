
import { Entity, nextId } from './Entity'
import { Singer } from './Singer'
import { Tuning } from './Tuning'


export interface Song extends Entity {
	name: string,
	artist: string,
	singer: Singer,
	tuning: Tuning
}


const song = (name: string, artist: string, code: string): Song => ({
	id: nextId('Song'),
	name,
	artist,
	singer: code.startsWith('b') ? 'Brandon' : 'Joey',
	tuning: code.endsWith('e') ? 'Eb' : 'Drop Db'
})


export const data: Song[] = [
	song('A Warrior\'s Call', 'Volbeat', 'be'),
	song('Animals', 'Nickelback', 'jd'),
	song('Are You Gonna Be My Girl', 'Jet', 'je'),
	song('Are You Gonna Go My Way', 'Lenny Kravitz', 'be'),
	song('Bad Girlfriend', 'Theory of a Deadman', 'bd'),

	song('Basket Case', 'Green Day', 'be'),
	song('Bawitdaba', 'Kid Rock', 'be'),
	song('Blow', 'Ed Sheeran / Bruno Mars', 'je'),
	song('Bodies', 'Drowning Pool', 'jd'),
	song('Bombtrack', 'Rage Against the Machine', 'je'),

	song('Bound For The Floor', 'Local H', 'je'),
	song('Breed', 'Nirvana', 'je'),
	song('Bulls On Parade', 'Rage Against the Machine', 'je'),
	song('Click, Click, Boom', 'Saliva', 'jd'),
	song('Cochise', 'Audioslave', 'be'),

	song('Cold Hard Bitch', 'Jet', 'je'),
	song('Come Out And Play', 'The Offspring', 'je'),
	song('Control', 'Puddle of Mud', 'bd'),
	song('Crackerman', 'Stone Temple Pilots', 'be'),
	song('Crazy Bitch', 'Buckcherry', 'je')
]
