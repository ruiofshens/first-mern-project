import mongoose from 'mongoose';

//Each schema maps to a MongoDB collection
const postSchema = mongoose.Schema({
    title: String, // String is shorthand for {type: String}
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//Convert schema to a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;