/**
 * fields.js
 *
 * Common field helper factories for the module configuration UI.
 * Keeps config definitions concise and reusable by encapsulating default
 * shaping for text, number, and static text fields.
 */

/**
 * Build a text input field definition.
 * @param {object} opts
 * @returns {import('@companion-module/base').SomeCompanionConfigField}
 */

export function textInput(opts) {
	const {
		id,
		label,
		width,
		defaultValue,
		isRequired,
		required,
		tooltip,
		placeholder,
		isVisibleExpression,
		regex,
	} = opts

	return {
		type: 'textinput',
		id,
		label,
		width,
		// Companion expects `default`
		default: defaultValue ?? '',
		// Companion expects `required`
		required: Boolean(required ?? isRequired),
		tooltip,
		placeholder,
		isVisibleExpression,
		regex,
	}
}

/**
 * Build a numeric input field definition with validation.
 * @param {object} opts
 * @returns {import('@companion-module/base').SomeCompanionConfigField}
 */
export function numberInput(opts) {
	const {
		id,
		label,
		width = 6,
		defaultValue = 0,
		min,
		max,
		step,
		required,
		isRequired,
		isVisibleExpression,
		tooltip,
	} = opts

	const field = {
		type: 'number',
		id,
		label,
		width,
		// Companion expects `default`
		default: defaultValue,
		// Companion expects `required`
		required: Boolean(required ?? isRequired),
		tooltip,
		isVisibleExpression,
	}

	if (min !== undefined) field.min = min
	if (max !== undefined) field.max = max
	if (step !== undefined) field.step = step

	return field
}

export function staticText({
	id,
	label,
	width = 12,
	value,
}) {
	/**
	 * Static text description block.
	 * @type {import('@companion-module/base').SomeCompanionConfigField}
	 */
	return {
		type: 'static-text',
		id,
		label,
		width,
		value,
	}
}
