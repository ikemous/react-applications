type Password = string;

const startingPass = "";

type Action = {
    type: string,
    payload: string
}

export const passwordReducer = (state: Password = startingPass, action: Action) => {
    switch(action.type) {
        case "CREATE_PASSWORD":
            return state = action.payload;
        default:
            return state;
    }
};