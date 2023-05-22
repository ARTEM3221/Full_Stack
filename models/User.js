import mongoos from "mongoose";

const UserSchema = new mongoos.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        require: true,
    },
    avatarUrl: String,
}, 
{
    timestamps: true,
});

export default mongoos.model('User', UserSchema)