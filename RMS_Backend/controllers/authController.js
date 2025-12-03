import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const Signup = async(req,res) => {
    const {name, email, password} = req.body;
    try {
        const user = await User.find({email: email});
        if(!user){
            return res.json({success:true, message: 'You mail already register login please'});
        }
        const hashedPassword = await bcrypt.hashSync(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        return res.json({success:true, message: 'User Registed'});

    } catch (error) {
        console.log(error,message)
    }
}

export const Signin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Use findOne to get a single user object
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ success: false, message: "Incorrect email" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ success: false, message: "Invalid credentials" });
      }
  
      return res.status(200).json({ success: true, user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  };