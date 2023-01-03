
export interface Entity {
	id?: number
}

const ids = new Map<string, number>()

export const nextId = (key: string): number => {
	const id = ids.get(key) ?? 0
	ids.set(key, id + 1)
	return id
}
