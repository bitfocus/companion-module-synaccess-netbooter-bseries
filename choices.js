/**
 * choices.js
 *
 * Dropdown choice helpers shared across actions, feedbacks, and presets.
 * Centralizes construction of outlet and ON/OFF options to keep UI
 * definitions consistent across the module.
 */

/**
 * Build outlet choices based on detected port count.
 * @param {number} portCount
 * @returns {{ id: number, label: string }[]}
 */
export function outletChoices(portCount) {
	const max = portCount === 2 ? 2 : 5
	const choices = []
	for (let i = 1; i <= max; i++) {
		choices.push({ id: i, label: `Outlet ${i}` })
	}
	return choices
}

export const onOffChoices = [
	{ id: 1, label: 'ON' },
	{ id: 0, label: 'OFF' },
]
