import _ from 'underscore';
import { createDeck as createNewDeck, pickCard, cardCreateImage, cardCalculateValue } from './usecases'

let deck = [];
const cardTypes = ['C', 'D', 'H', 'S'],
	specialCards = ['A', 'J', 'Q', 'K'];


let puntosJugadores = [];

const PUNTOS_TOTALES_GANAR = 21;

// REFERENCIAS HTML
const btnNuevo = document.querySelector( '#btnNuevo' ),
	btnPedir = document.querySelector( '#btnPedir' ),
	btnDetener = document.querySelector( '#btnDetener' );

const marcadores = document.querySelectorAll( "small" );

const divsCartasJugadores = document.querySelectorAll( '.divCartas' );



// RESET
const resetGame = ( numJugadores = 2 ) => {
	console.clear();

	puntosJugadores = [];
	for( let i = 0; i < numJugadores; i++ ) {
		puntosJugadores.push( 0 );
	}
	marcadores.forEach( marcador => marcador.innerText = 0 );

	divsCartasJugadores.forEach( divCartasPlayer => divCartasPlayer.innerHTML = '' );

	deck = createNewDeck( cardTypes, specialCards );

	btnNuevo.disabled = true;
	btnPedir.disabled = false;
	btnDetener.disabled = false;
}



// POINTS
const acumularPuntos = ( turnoJugador, cardPoints ) => {

	const newPoints = puntosJugadores[turnoJugador] + cardPoints;

	puntosJugadores[turnoJugador] = newPoints;
	marcadores[turnoJugador].innerText = newPoints;
	return newPoints;
}

const addAndCheckPoints = ( cardPoints, turno ) => {
	const puntos = acumularPuntos( turno, cardPoints );

	if( turno != puntosJugadores.length - 1 ) {
		if( puntos > PUNTOS_TOTALES_GANAR ) {
			console.warn( 'Lo siento mucho, perdiste' );
			ejecutarTurnoComputadora();
		} else if( puntos === PUNTOS_TOTALES_GANAR ) {
			console.warn( '21, genial!' );
			ejecutarTurnoComputadora();
		}
	}
}

// CARDS
const cardCreate = ( deck, turno, divCarta ) => {
	const carta = pickCard( deck );
	divCarta.append( cardCreateImage( carta ) );
	addAndCheckPoints( cardCalculateValue( carta ), turno );
}

// BOTONES
btnNuevo.addEventListener( 'click', () => resetGame() );

btnPedir.addEventListener( 'click', () => {
	cardCreate( deck, 0, divsCartasJugadores[0] );
} );

btnDetener.addEventListener( 'click', () => {
	ejecutarTurnoComputadora();
} );



// TURNO COMPUTADORA
const ejecutarTurnoComputadora = () => {
	btnPedir.disabled = true;
	btnDetener.disabled = true;
	turnoComputadora( puntosJugadores[0] );
}

const turnoComputadora = ( puntosComparar ) => {
	const turno = puntosJugadores.length - 1;
	do {
		cardCreate( deck, turno, divsCartasJugadores[turno] );
	} while( puntosJugadores[turno] < puntosComparar && puntosComparar <= PUNTOS_TOTALES_GANAR );

	checkFinalResult();
}



// FINAL RESULT
const checkFinalResult = () => {

	const [puntosJugador, puntosComputadora] = puntosJugadores;

	setTimeout( () => {
		if( puntosJugador > PUNTOS_TOTALES_GANAR ) {
			alert( "Lo siento, te pasaste de 21. ¡Perdiste!" );
		} else if( puntosComputadora > PUNTOS_TOTALES_GANAR ) {
			alert( "¡La computadora se pasó de 21! ¡Ganaste!" );
		} else if( puntosJugador === PUNTOS_TOTALES_GANAR && puntosComputadora === PUNTOS_TOTALES_GANAR ) {
			alert( "¡Empate! Ambos tienen 21." );
		} else if( puntosJugador === PUNTOS_TOTALES_GANAR ) {
			alert( "¡21! ¡Ganaste!" );
		} else if( puntosComputadora === PUNTOS_TOTALES_GANAR ) {
			alert( "La computadora tiene 21. ¡Perdiste!" );
		} else if( puntosJugador > puntosComputadora ) {
			alert( `¡Ganaste! Tienes ${puntosJugador} puntos, la computadora tiene ${puntosComputadora}.` );
		} else if( puntosComputadora > puntosJugador ) {
			alert( `¡Perdiste! La computadora tiene ${puntosComputadora} puntos, tú tienes ${puntosJugador}.` );
		} else {
			alert( `¡Empate! Ambos tienen ${puntosJugador} puntos.` );
		}
	}, 1000 );

	btnNuevo.disabled = false;
}
