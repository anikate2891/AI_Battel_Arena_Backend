import mongoose from "mongoose";
declare const chatModel: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    problem: string;
    solution_1?: string | null;
    solution_2?: string | null;
    judge?: {
        solution_1_score?: number | null;
        solution_2_score?: number | null;
        solution_1_feedback?: string | null;
        solution_2_feedback?: string | null;
    } | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    problem: string;
    solution_1?: string | null;
    solution_2?: string | null;
    judge?: {
        solution_1_score?: number | null;
        solution_2_score?: number | null;
        solution_1_feedback?: string | null;
        solution_2_feedback?: string | null;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: mongoose.Types.ObjectId;
    problem: string;
    solution_1?: string | null;
    solution_2?: string | null;
    judge?: {
        solution_1_score?: number | null;
        solution_2_score?: number | null;
        solution_1_feedback?: string | null;
        solution_2_feedback?: string | null;
    } | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: mongoose.Types.ObjectId;
    problem: string;
    solution_1?: string | null;
    solution_2?: string | null;
    judge?: {
        solution_1_score?: number | null;
        solution_2_score?: number | null;
        solution_1_feedback?: string | null;
        solution_2_feedback?: string | null;
    } | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    problem: string;
    solution_1?: string | null;
    solution_2?: string | null;
    judge?: {
        solution_1_score?: number | null;
        solution_2_score?: number | null;
        solution_1_feedback?: string | null;
        solution_2_feedback?: string | null;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    userId: mongoose.Types.ObjectId;
    problem: string;
    solution_1?: string | null;
    solution_2?: string | null;
    judge?: {
        solution_1_score?: number | null;
        solution_2_score?: number | null;
        solution_1_feedback?: string | null;
        solution_2_feedback?: string | null;
    } | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    userId: mongoose.Types.ObjectId;
    problem: string;
    solution_1?: string | null;
    solution_2?: string | null;
    judge?: {
        solution_1_score?: number | null;
        solution_2_score?: number | null;
        solution_1_feedback?: string | null;
        solution_2_feedback?: string | null;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    problem: string;
    solution_1?: string | null;
    solution_2?: string | null;
    judge?: {
        solution_1_score?: number | null;
        solution_2_score?: number | null;
        solution_1_feedback?: string | null;
        solution_2_feedback?: string | null;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default chatModel;
//# sourceMappingURL=chatModel.d.ts.map