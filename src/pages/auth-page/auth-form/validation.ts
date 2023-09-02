const REQUIRED_FIELD = "Required field";
export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.match(/[а-яА-я]/)) {
            return 'Cyrillic is not allowed'
        }

        return true;
    }
}

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.length < 6) {
            return 'Password must be more than 6 chars length'
        }
        return true;
    }
}