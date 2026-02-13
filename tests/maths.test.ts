import { describe, it, expect } from 'vitest';
import {
	add,
	subtract,
	multiply,
	divide,
	power,
	squareRoot,
	average,
	median,
	min,
	max,
	sum,
	getStatistics,
	factorial,
	isEven,
	isOdd,
	round,
} from '../src/maths';

describe('Opérations mathématiques de base', () => {
	describe('add', () => {
		it('devrait additionner deux nombres positifs', () => {
			expect(add(2, 3)).toBe(5);
		});

		it('devrait additionner des nombres négatifs', () => {
			expect(add(-2, -3)).toBe(-5);
		});

		it('devrait additionner un nombre positif et un négatif', () => {
			expect(add(5, -3)).toBe(2);
		});
	});

	describe('subtract', () => {
		it('devrait soustraire deux nombres', () => {
			expect(subtract(5, 3)).toBe(2);
		});

		it('devrait gérer les résultats négatifs', () => {
			expect(subtract(3, 5)).toBe(-2);
		});
	});

	describe('multiply', () => {
		it('devrait multiplier deux nombres positifs', () => {
			expect(multiply(4, 5)).toBe(20);
		});

		it('devrait multiplier par zéro', () => {
			expect(multiply(5, 0)).toBe(0);
		});

		it('devrait multiplier des nombres négatifs', () => {
			expect(multiply(-3, -4)).toBe(12);
		});
	});

	describe('divide', () => {
		it('devrait diviser deux nombres', () => {
			const result = divide(10, 2);
			expect(result.success).toBe(true);
			if (result.success) {
				expect(result.value).toBe(5);
			}
		});

		it('devrait retourner une erreur lors de la division par zéro', () => {
			const result = divide(10, 0);
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error).toBe('Division par zéro impossible');
			}
		});

		it('devrait gérer les divisions décimales', () => {
			const result = divide(7, 2);
			expect(result.success).toBe(true);
			if (result.success) {
				expect(result.value).toBe(3.5);
			}
		});
	});

	describe('power', () => {
		it('devrait calculer la puissance d\'un nombre', () => {
			expect(power(2, 3)).toBe(8);
		});

		it('devrait gérer la puissance 0', () => {
			expect(power(5, 0)).toBe(1);
		});

		it('devrait gérer les puissances négatives', () => {
			expect(power(2, -2)).toBe(0.25);
		});
	});

	describe('squareRoot', () => {
		it('devrait calculer la racine carrée d\'un nombre', () => {
			expect(squareRoot(9)).toBe(3);
		});

		it('devrait calculer la racine carrée de 0', () => {
			expect(squareRoot(0)).toBe(0);
		});

		it('devrait lancer une erreur pour les nombres négatifs', () => {
			expect(() => squareRoot(-4)).toThrow('Impossible de calculer la racine carrée d\'un nombre négatif');
		});
	});
});

describe('Fonctions statistiques', () => {
	describe('average', () => {
		it('devrait calculer la moyenne d\'un tableau de nombres', () => {
			expect(average([1, 2, 3, 4, 5])).toBe(3);
		});

		it('devrait calculer la moyenne de nombres décimaux', () => {
			expect(average([1.5, 2.5, 3.5])).toBe(2.5);
		});

		it('devrait lancer une erreur pour un tableau vide', () => {
			expect(() => average([])).toThrow('Impossible de calculer la moyenne d\'un tableau vide');
		});
	});

	describe('median', () => {
		it('devrait calculer la médiane d\'un tableau impair', () => {
			expect(median([1, 3, 5, 7, 9])).toBe(5);
		});

		it('devrait calculer la médiane d\'un tableau pair', () => {
			expect(median([1, 2, 3, 4])).toBe(2.5);
		});

		it('devrait gérer un tableau non trié', () => {
			expect(median([5, 1, 9, 3, 7])).toBe(5);
		});

		it('devrait lancer une erreur pour un tableau vide', () => {
			expect(() => median([])).toThrow('Impossible de calculer la médiane d\'un tableau vide');
		});
	});

	describe('min', () => {
		it('devrait trouver le minimum d\'un tableau', () => {
			expect(min([5, 2, 8, 1, 9])).toBe(1);
		});

		it('devrait gérer les nombres négatifs', () => {
			expect(min([5, -2, 8, -10, 9])).toBe(-10);
		});

		it('devrait lancer une erreur pour un tableau vide', () => {
			expect(() => min([])).toThrow('Impossible de trouver le minimum d\'un tableau vide');
		});
	});

	describe('max', () => {
		it('devrait trouver le maximum d\'un tableau', () => {
			expect(max([5, 2, 8, 1, 9])).toBe(9);
		});

		it('devrait gérer les nombres négatifs', () => {
			expect(max([-5, -2, -8, -10, -1])).toBe(-1);
		});

		it('devrait lancer une erreur pour un tableau vide', () => {
			expect(() => max([])).toThrow('Impossible de trouver le maximum d\'un tableau vide');
		});
	});

	describe('sum', () => {
		it('devrait calculer la somme d\'un tableau', () => {
			expect(sum([1, 2, 3, 4, 5])).toBe(15);
		});

		it('devrait retourner 0 pour un tableau vide', () => {
			expect(sum([])).toBe(0);
		});

		it('devrait gérer les nombres négatifs', () => {
			expect(sum([5, -3, 2, -1])).toBe(3);
		});
	});

	describe('getStatistics', () => {
		it('devrait retourner toutes les statistiques', () => {
			const stats = getStatistics([1, 2, 3, 4, 5]);
			expect(stats.mean).toBe(3);
			expect(stats.median).toBe(3);
			expect(stats.min).toBe(1);
			expect(stats.max).toBe(5);
			expect(stats.sum).toBe(15);
			expect(stats.count).toBe(5);
		});

		it('devrait lancer une erreur pour un tableau vide', () => {
			expect(() => getStatistics([])).toThrow('Impossible de calculer les statistiques d\'un tableau vide');
		});
	});
});

describe('Fonctions mathématiques avancées', () => {
	describe('factorial', () => {
		it('devrait calculer la factorielle de 0', () => {
			expect(factorial(0)).toBe(1);
		});

		it('devrait calculer la factorielle de 1', () => {
			expect(factorial(1)).toBe(1);
		});

		it('devrait calculer la factorielle de 5', () => {
			expect(factorial(5)).toBe(120);
		});

		it('devrait lancer une erreur pour les nombres négatifs', () => {
			expect(() => factorial(-1)).toThrow('La factorielle n\'est pas définie pour les nombres négatifs');
		});

		it('devrait lancer une erreur pour les nombres non entiers', () => {
			expect(() => factorial(3.5)).toThrow('La factorielle n\'est définie que pour les nombres entiers');
		});
	});

	describe('isEven', () => {
		it('devrait identifier les nombres pairs', () => {
			expect(isEven(2)).toBe(true);
			expect(isEven(4)).toBe(true);
			expect(isEven(0)).toBe(true);
		});

		it('devrait identifier les nombres impairs', () => {
			expect(isEven(1)).toBe(false);
			expect(isEven(3)).toBe(false);
		});

		it('devrait gérer les nombres négatifs', () => {
			expect(isEven(-2)).toBe(true);
			expect(isEven(-3)).toBe(false);
		});
	});

	describe('isOdd', () => {
		it('devrait identifier les nombres impairs', () => {
			expect(isOdd(1)).toBe(true);
			expect(isOdd(3)).toBe(true);
		});

		it('devrait identifier les nombres pairs', () => {
			expect(isOdd(2)).toBe(false);
			expect(isOdd(4)).toBe(false);
			expect(isOdd(0)).toBe(false);
		});

		it('devrait gérer les nombres négatifs', () => {
			expect(isOdd(-3)).toBe(true);
			expect(isOdd(-2)).toBe(false);
		});
	});

	describe('round', () => {
		it('devrait arrondir à l\'entier le plus proche par défaut', () => {
			expect(round(3.7)).toBe(4);
			expect(round(3.2)).toBe(3);
		});

		it('devrait arrondir à un nombre de décimales spécifié', () => {
			expect(round(3.14159, 2)).toBe(3.14);
			expect(round(3.14159, 3)).toBe(3.142);
		});

		it('devrait gérer les nombres négatifs', () => {
			expect(round(-3.7)).toBe(-4);
			expect(round(-3.14159, 2)).toBe(-3.14);
		});
	});
});
