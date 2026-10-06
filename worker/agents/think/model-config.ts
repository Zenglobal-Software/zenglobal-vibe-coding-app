import { ModelSize, type AIModelConfig } from '../inferutils/config.types';

export const THINK_MODEL_ID = 'deepseek/deepseek-flash';

export const THINK_MODEL_CONFIG: AIModelConfig = {
	name: 'DeepSeek Flash',
	size: ModelSize.REGULAR,
	provider: 'deepseek',
	creditCost: 1,
	contextSize: 131_072,
	nonReasoning: true,
};
