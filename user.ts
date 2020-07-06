//accountInfo
//charInfo
//playerInfo

type AccountInfo = {
    id: number,
    name: string, 
    email?: string
}

const account: AccountInfo = {
    id: 123,
    name: "Isaac"
}

type CharInfo = {
    nickname: string,
    level: number
}

const char: CharInfo = {
    nickname: 'Izimo',
    level: 10
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: 'Isaac',
    nickname: 'Izimo',
    level: 11
}