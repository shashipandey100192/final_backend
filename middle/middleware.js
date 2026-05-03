import jwt from "jsonwebtoken";

const mysecuritykey = "sdfsjdfhjsdhfjsdfh";

// export const verifyToken = (req, res, next) => {
//   try {
//     const token = req.cookies.token;

//     if (!token) {
//       res.status(401).json({ msg: "No token provided",status:401 });
//     }
    
//     const decoded = jwt.verify(token, mysecuritykey);
//     req.user = decoded;

//     next();
//   } catch (err) {
//     return res.status(403).json({ msg: "Invalid token" });
//   }
// };

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ 
        msg: "No token provided",
        status: 401 
      });
    }

    const decoded = jwt.verify(token, mysecuritykey);
    req.user = decoded;

    return next();
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
};