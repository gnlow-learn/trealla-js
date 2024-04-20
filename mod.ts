import {
    load,
    Prolog,
} from "https://esm.sh/trealla@0.17.41"

await load()

const pl = new Prolog()

await pl.consultText(`
    like(a, b).
`)

const query = pl.query(`
    like(a, X).
`)

for await (const answer of query) {
    console.log(answer)
}