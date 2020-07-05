// boolean (true / false)
let isOpen : Boolean
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 10

// array (type[])
let items: string[]
items = ['foo', 'bar']

let totals: Array<number>
totals = [1,2,3,4]

// tuple
let blog: [number, string, string]
blog = [1, 'blogger', 'political']

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any is not cool :/ you can change tsconfig to not accept any 
let coisa: any
coisa = 'string' // true, 1, [1]

// void
function logger(): void {
    console.log('foo');
}

// null | undefined
type Bla = string | undefined

// never 
function error(): never {
    throw new Error("error");
}

// object 
let cart: object

cart ={
    key: 'fiii'
}


