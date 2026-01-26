import mongoose, {Schema} from "mongoose";

import jwt from "jsonwebtoken";   //jwt is a bearer token, its like a key..if anyone sends this token, data is sent to them

import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        username: {
            type:String,
            required: true,
            lowercase: true,
            trim:true,
            unique: true, 
            index:true
        },
        email:{
            type:String,
            required: true,
            lowercase: true,
            trim:true,
            unique: true
        },
        fullname:{
            type:String,
            required: true,
            lowercase: true,
            trim:true,
            index: true
        },
        avatar:{
            type:String, //cloudinary url
            required: true,
        },
        coverImage:{
            type: String //cloudinary url
        },
        watchHistory:[
            {
            type: Schema.Types.ObjectId,
            ref : "Video"
            }
        ],
        password:{
            type: String,
            required: [true,'Password is required !!']

        },
        refreshToken:{
            type: String
        }
        
    } , {
        timestamps: true
    }
)

userSchema.pre("save", async function(next){    //pre hook is used for the event "save"
     if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)//10 is a number of saltrounds of the encryption
    (next) 

})

userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id : this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id : this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: RERESH_TOKEN_EXPIRY
    }
)
}
    
export const User = mongoose.model("User",userSchema)