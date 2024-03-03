CONWAYS GAME OF LIFE

_Rules_:

1. Any live cell with fewer than two live neighbours dies, by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbors dies, by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, by reproduction.

Implementeringer:

- kode med adskilt model og view - begge dele skal være et “grid”, og din model skal være et 2D array (array af arrays).
- nemt at ændre grid-størrelse. Globale variabler-
- View og Model-funktioner
- Funktion til at tælle naboer - og en anden funktion til at beslutte om en celle lever eller dør.
- Tælle og vise antallet af generationer der er blevet vist siden programmet startede.
- brugerflade hvor brugeren minimum kan:
  - tømme grid’et fuldstændig for levende celler
  - tilføje tilfældige levende celler rundt omkring på grid’et (må ikke slette dem der er)
- Generationer skal beregnes automatisk
