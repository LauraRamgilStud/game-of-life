CONWAYS GAME OF LIFE

_Rules_:

1. Any live cell with fewer than two live neighbours dies, by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbors dies, by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, by reproduction.

Optæl alle cellers naboer og taget beslutninger, FØR vi ændrer en celles tilstand.

- lav nyt tomt grid kaldet nextGeneration
- scan igennem den eksisterende model
- for hver celle:
  - beregn antal naboer
  - beslut hvad der skal ske
  - skriv resultatet ind i nextGeneration
- erstat model med nextGeneration
