import type { DivisionResult, Statistics } from './types';

/**
 * Additionne deux nombres
 */
export function add(a: number, b: number): number {
	return a + b;
}

/**
 * Soustrait deux nombres
 */
export function subtract(a: number, b: number): number {
	return a - b;
}

/**
 * Multiplie deux nombres
 */
export function multiply(a: number, b: number): number {
	return a * b;
}

/**
 * Divise deux nombres avec gestion d'erreur
 */
export function divide(a: number, b: number): DivisionResult {
	if (b === 0) {
		return {
			success: false,
			error: 'Division par zéro impossible',
		};
	}
	return {
		success: true,
		value: a / b,
	};
}

/**
 * Calcule la puissance d'un nombre
 */
export function power(base: number, exponent: number): number {
	return Math.pow(base, exponent);
}

/**
 * Calcule la racine carrée d'un nombre
 */
export function squareRoot(x: number): number {
	if (x < 0) {
		throw new Error('Impossible de calculer la racine carrée d\'un nombre négatif');
	}
	return Math.sqrt(x);
}

/**
 * Calcule la moyenne d'un tableau de nombres
 */
export function average(numbers: number[]): number {
	if (numbers.length === 0) {
		throw new Error('Impossible de calculer la moyenne d\'un tableau vide');
	}
	const sum = numbers.reduce((acc, num) => acc + num, 0);
	return sum / numbers.length;
}

/**
 * Calcule la médiane d'un tableau de nombres
 */
export function median(numbers: number[]): number {
	if (numbers.length === 0) {
		throw new Error('Impossible de calculer la médiane d\'un tableau vide');
	}
	
	const sorted = [...numbers].sort((a, b) => a - b);
	const middle = Math.floor(sorted.length / 2);
	
	if (sorted.length % 2 === 0) {
		return (sorted[middle - 1] + sorted[middle]) / 2;
	}
	
	return sorted[middle];
}

/**
 * Trouve le minimum d'un tableau de nombres
 */
export function min(numbers: number[]): number {
	if (numbers.length === 0) {
		throw new Error('Impossible de trouver le minimum d\'un tableau vide');
	}
	return Math.min(...numbers);
}

/**
 * Trouve le maximum d'un tableau de nombres
 */
export function max(numbers: number[]): number {
	if (numbers.length === 0) {
		throw new Error('Impossible de trouver le maximum d\'un tableau vide');
	}
	return Math.max(...numbers);
}

/**
 * Calcule la somme d'un tableau de nombres
 */
export function sum(numbers: number[]): number {
	return numbers.reduce((acc, num) => acc + num, 0);
}

/**
 * Calcule les statistiques complètes d'un tableau de nombres
 */
export function getStatistics(numbers: number[]): Statistics {
	if (numbers.length === 0) {
		throw new Error('Impossible de calculer les statistiques d\'un tableau vide');
	}
	
	return {
		mean: average(numbers),
		median: median(numbers),
		min: min(numbers),
		max: max(numbers),
		sum: sum(numbers),
		count: numbers.length,
	};
}

/**
 * Calcule la factorielle d'un nombre
 */
export function factorial(n: number): number {
	if (n < 0) {
		throw new Error('La factorielle n\'est pas définie pour les nombres négatifs');
	}
	if (!Number.isInteger(n)) {
		throw new Error('La factorielle n\'est définie que pour les nombres entiers');
	}
	if (n === 0 || n === 1) {
		return 1;
	}
	return n * factorial(n - 1);
}

/**
 * Vérifie si un nombre est pair
 */
export function isEven(n: number): boolean {
	return n % 2 === 0;
}

/**
 * Vérifie si un nombre est impair
 */
export function isOdd(n: number): boolean {
	return n % 2 !== 0;
}

/**
 * Arrondit un nombre à un nombre de décimales spécifié
 */
export function round(value: number, decimals: number = 0): number {
	const multiplier = Math.pow(10, decimals);
	return Math.round(value * multiplier) / multiplier;
}
