export interface IUser {
	_id?: string;
	name?: string;
	email?: string;
	balance?: number;
	password?: string;
	gender?: number;
	country?: string;
	language?: string;
	img?: string;
	description?: string;
	favorites?: Array<string>;
	characters?: Array<string>;
	device?: any;
	oauthFacebook?: any;
	confirmed?: boolean;
	token?: string;
	fake?: boolean;
}