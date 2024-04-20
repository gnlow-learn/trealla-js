import {
    load,
    Prolog,
} from "https://esm.sh/trealla@0.17.41"

await load()

const pl = new Prolog()

await pl.consultText(`
    fib(0, 1) :- !.
    fib(1, 1) :- !.
    fib(X, Y) :-
        X1 is X - 1,
        X2 is X - 2,
        fib(X1, Y1),
        fib(X2, Y2),
        Y is Y1 + Y2.
`)

const query = pl.query(`
    fib(10, Y).
`)

for await (const answer of query) {
    console.log(answer)
}