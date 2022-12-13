import mongoose from 'mongoose';

const ConsecutivoSchema= new mongoose.Schema({
    consecutivoMuestra:{
        type: Number,
        required: true,
        default:1

    },
    consecutivoOferta:{
        type: Number,
        required: true,
        defaul:1
    },
    iva:{
        type:Number,
        required:true,
        default:19
    },

    consecutivoInforme: {
        type:Number,
        default:1
    },
})

export default mongoose.model("Consecutivo",ConsecutivoSchema)
