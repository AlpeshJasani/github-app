import mongoose from "mongoose";

// create Schema 
const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			default: "", // user can delete on github
		},
		profileUrl: {
			type: String,
			required: true,
		},
		avatarUrl: {
			type: String,
		},
		likedProfiles: {
			type: [String],
			default: [],
		},
		likedBy: [
			{
				username: {
					type: String,
					required: true,
				},
				avatarUrl: {
					type: String,
				},
				likedDate: {
					type: Date,
					default: Date.now,
				},
			},
		],
	},
	{ timestamps: true } // createdAt and updatedAt add in the Schema
);

// Create model
const User = mongoose.model("User", userSchema);

export default User;
