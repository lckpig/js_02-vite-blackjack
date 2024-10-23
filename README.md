## BlackJack en JavaScript

Este proyecto es una implementación básica del juego de BlackJack utilizando JavaScript. El juego enfrenta a un jugador contra la banca, y el objetivo es conseguir una mano lo más cercana posible a 21 puntos sin superarlos.

### Funcionalidades:
- Se genera una baraja estándar de 52 cartas (sin comodines).
- El jugador y la banca reciben cartas y pueden "pedir" o "plantarse".
- Las cartas J, Q, K valen 10 puntos, el As puede valer 1 o 11 puntos según la mano.
- El jugador gana si su mano está más cerca de 21 que la de la banca, o si la banca se pasa de 21.

### Reglas:
- Si el jugador supera los 21 puntos, pierde automáticamente.
- La banca debe plantarse cuando su mano llega a 17 o más puntos.
- Si la banca supera los 21 puntos, el jugador gana automáticamente.
