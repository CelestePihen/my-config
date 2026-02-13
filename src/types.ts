/**
 * Type pour les opérations mathématiques de base
 */
export type MathOperation = (a: number, b: number) => number;

/**
 * Type pour les fonctions mathématiques unaires
 */
export type UnaryMathOperation = (x: number) => number;

/**
 * Type pour les résultats de division avec gestion d'erreur
 */
export type DivisionResult = {
	success: true;
	value: number;
} | {
	success: false;
	error: string;
};

/**
 * Type pour les statistiques d'un tableau de nombres
 */
export interface Statistics {
	mean: number;
	median: number;
	min: number;
	max: number;
	sum: number;
	count: number;
}
