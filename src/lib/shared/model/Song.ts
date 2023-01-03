
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

const rage = 'Rage Against the Machine'
const stp = 'Stone Temple Pilots'
const rhcp = 'Red Hot Chili Peppers'
const audio = 'Audioslave'
const aic = 'Alice In Chains'
const sound = 'Soundgarden'
const green = 'Green Day'
const saliva = 'Saliva'
const jet = 'Jet'
const seether = 'Seether'
const doors3 = '3 Doors Down'
const shine = 'Shinedown'
const gnr = 'Guns N\' Roses'
const god = 'Godsmack'

export const data: Song[] = [
	song('A Warrior\'s Call', 'Volbeat', 'be'),
	song('Animals', 'Nickelback', 'jd'),
	song('Are You Gonna Be My Girl', jet, 'je'),
	song('Are You Gonna Go My Way', 'Lenny Kravitz', 'be'),
	song('Bad Girlfriend', 'Theory of a Deadman', 'bd'),

	song('Basket Case', green, 'be'),
	song('Bawitdaba', 'Kid Rock', 'be'),
	song('Blow', 'Ed Sheeran / Bruno Mars', 'je'),
	song('Bodies', 'Drowning Pool', 'jd'),
	song('Bombtrack', rage, 'je'),

	song('Bound For The Floor', 'Local H', 'je'),
	song('Breed', 'Nirvana', 'je'),
	song('Bulls On Parade', rage, 'je'),
	song('Click, Click, Boom', saliva, 'jd'),
	song('Cochise', audio, 'be'),

	song('Cold Hard Bitch', jet, 'je'),
	song('Come Out And Play', 'The Offspring', 'je'),
	song('Control', 'Puddle of Mud', 'bd'),
	song('Crackerman', stp, 'be'),
	song('Crazy Bitch', 'Buckcherry', 'je'),

	song('Cumbersome', 'Seven Mary Three', 'be'),
	song('Dead And Bloated', stp, 'be'),
	song('Down In A Hole', aic, 'be'),
	song('Down With The Sickness', 'Disturbed', 'jd'),
	song('Everlong', 'Foo Fighters', 'bd'),

	song('Everything Zen', 'Bush', 'je'),
	song('Exploder', audio, 'be'),
	song('Face To The Floor', 'Chevelle', 'bd'),
	song('Fake It', seether, 'bd'),
	song('Fell On Black Days', sound, 'be'),

	song('Give It Away', rhcp, 'je'),
	song('Guerrilla Radio', rage, 'je'),
	song('Hard To Handle', 'Black Crowes', 'je'),
	song('Hemorrhage', 'Fuel', 'be'),
	song('Here Without You', doors3, 'be'),

	song('Hot In Herre', 'The Wedding Band (Lil Wayne)', 'je'),
	song('I Am The Highway', audio, 'be'),
	song('I\'ll Follow You', shine, 'bd'),
	song('Inside Out', 'Eve 6', 'be'),
	song('Interstate Love Song', stp, 'be'),

	song('It\'s Been Awhile', 'Staind', 'be'),
	song('Killing In The Name Of', rage, 'jd'),
	song('Kryptonite', doors3, 'be'),
	song('Ladies And Gentlemane', saliva, 'bd'),
	song('Last Resort', 'Papa Roach', 'je'),

	song('Like A Stone', audio, 'be'),
	song('Man In The Box', aic, 'be'),
	song('My Own Worst Enemy', 'Lit', 'je'),
	song('Outshined', sound, 'bd'),
	song('Plush', stp, 'be'),

	song('Pure Massacre', 'Silverchair', 'bd'),
	song('Remedy', seether, 'bd'),
	song('Roll Right', rage, 'je'),
	song('Santeria', 'Sublime', 'je'),
	song('Save Me', shine, 'be'),

	song('Sex Type Thing', stp, 'be'),
	song('Shine', 'Collective Soul', 'bd'),
	song('Show Me How To Live', audio, 'jd'),
	song('Simple Man', 'Lynyrd Skynyrd', 'be'),
	song('Sleep Now In The Fire', rage, 'je'),

	song('Slither', 'Velvet Revolver', 'bd'),
	song('Smells Like Teen Spirit', 'Nirvana', 'be'),
	song('Song 2', 'Blur', 'je'),
	song('Sound Of Madness', shine, 'bd'),
	song('Spoonman', sound, 'bd'),

	song('Suck My Kiss', rhcp, 'je'),
	song('Sweet Child O\' Mine', gnr, 'je'),
	song('Testify', rage, 'jd'),
	song('The Distance', 'Cake', 'je'),
	song('The Middle', 'Jimmy Eat World', 'bd'),

	song('The Otherside', rhcp, 'be'),
	song('Them Bones', aic, 'bd'),
	song('Uptown Funk', 'Bruno Mars', 'je'),
	song('Welcome To The Jungle', gnr, 'je'),
	song('Whatever', god, 'bd'),

	song('When I Come Around', green, 'be'),
	song('Wish You Were Here', 'Incubus', 'be'),
	song('Whiskey Hangover', god, 'bd'),
	song('Wicked Garden', stp, 'be'),
	song('Would?', aic, 'be')
]
