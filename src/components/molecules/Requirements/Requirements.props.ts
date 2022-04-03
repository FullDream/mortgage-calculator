import { CustomerRequirements } from "interfaces/offer";

export interface RequirementsProps
	extends Omit<
		CustomerRequirements,
		'manAgeAtRepayment' | 'femaleAgeAtRepayment' | 'fullExperience' | 'salary'
	> {}