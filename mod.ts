import {
    load,
    Prolog,
    Predicate,
    Compound,
} from "https://esm.sh/trealla@0.17.41"

await load()

const pl = new Prolog()

const succ = new Predicate<Compound<
    "succ", [number, number]
>>(
    "succ", 2,
    async function*(_pl, _subq, goal) {
        const [a, b] = goal.args
        goal.args[1] = a + 1
        yield goal
    }
    
)
await pl.register(succ)

await pl.consultText(`
`)

const query = pl.query(`
    succ(1, Y).
`)

for await (const answer of query) {
    console.log(answer)
}