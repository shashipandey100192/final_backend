import studensModel from "../models/studentAdmission.js";

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const deleuser = await studensModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "delete selected user", status: 400, data: deleuser })
}

export const edituserinfo = async (req, res) => {
    const { id } = req.params;
    const { sname, roll, mobile, email, dob, password, gender, fathername, working } = req.body;
    const allfild = { sname, roll, mobile, email, dob, password, gender, fathername, working }

    const update = await studensModel.findByIdAndUpdate(id, allfild, { new: true })
    res.status(200).json({ msg: "update successfully", status: 256, data: update })

}


export const singleuserdata = async (req, res) => {
    const { id } = req.params;
    const singleu = await studensModel.find({ _id: id });
    res.status(200).json({ msg: "successfully", status: 250, user: singleu })

}
