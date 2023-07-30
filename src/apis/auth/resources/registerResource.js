import moment from "moment";
import { baseUrl } from "../../../common/constants/configConstants";

export default class RegisterResource {
    constructor(data) {
        this._id = data._id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.countryCode = data.countryCode;
        this.phone = data.phone;
        this.isVerify = data.isVerify;
        this.image = data.image !== null ? baseUrl(data.image) : null
        this.joinedAt = moment(data.createdAt).unix()
    }
}