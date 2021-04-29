module.exports = mongoose => {
    const Users = mongoose.model(
        "tutorial",
        mongoose.Schema(
            {
                id: String,
                name: String,
                password: String
            },
            { timestamps: true }
        )
    );

    return Users;
};