import { Auth } from "../../../../common/types/auth";
import { Account } from "../../../../common/types/account";

// Initalize App type
export type Profile = {
    auth?: Auth,
	account?: Account,
}

export type ProfileState = Profile & {
    loading: boolean
}
