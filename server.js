const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { sign, authenticate } = require("./Authenticate");
const { hash, decodePassword } = require("./hashpassword");
// to import the obj destructure is done

const categories = require("./categories");
const app = express();
const PORT = 7000;

app.use(bodyParser.json());

// connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/blogapp", { useNewUrlParser: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("unable to connect with the database", err);
  });

const BlogModel = require("./BlogModel");
const UserModel = require("./UserModel");

// require User, Blogs and category model
app.post("/api/login", async (req, res) => {
  try {

    const { email, password } = req.body; //hash password to do
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.send({ error: "User not found" });
    }

    const hashedPassword = user.password;
    const decodeP = await decodePassword(password, hashedPassword);
    console.log(decodeP);
    if (!decodeP) {
      return res.send("passwords do not match");
    }
    const token = sign(user);
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(" /api/login", error);
  }
});

app.post("/api/signup", async (req, res) => {
  try {

    const { name, email, password } = req.body;
    const validate = await UserModel.findOne({ email: email });

    if (validate) {
      return res.status(403).send("Email already exists");
    }

    const hashp = await hash(password);
    console.log("hashp : ", hashp);

    const user = await new UserModel({ name, email, password: hashp }).save();
    const token = sign(user);
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(" /api/signup", error);
  }
});

app.get("/api/blogs", async (req, res) => {
  // READ
  // fetch all blogs
  try {
    const token = req.headers.authorization;

    const auth = await authenticate(token);
    if (auth.err) {
      return res.status(403).json({ err: auth.err_msg });
    }

    const response = await BlogModel.find();
    res.json(response);
  } catch (error) {
    console.error("/api/user", error);
  }
});

app.get("/api/user", async (req, res) => {
  // READ
  // fetch all users

  try {
    const token = req.headers.authorization;

    const auth = await authenticate(token);
    if (auth.err) {
      return res.status(403).json({ err: auth.err_msg });
    }
    const user = await UserModel.find({});
    res.json(user);
  } catch (error) {
    console.error("/api/user", error);
  }
});

app.get("/api/blogs/:userId", async (req, res) => {
  // READ
  // fetch all blogs for a user
  try {
    const token = req.headers.authorization;

    const auth = await authenticate(token);
    if (auth.err) {
      return res.status(403).json({ err: auth.err_msg });
    }
    const { userId } = req.params;
    // check if the user exists
    const userBlogs = await BlogModel.find({ userId });
    const user = await UserModel.findOne({ _id: userId });
    /*if (!user) {
      return res.send({
        error: " the user id does not match enter a valid id "
      });
    }*/
    res.json(userBlogs);
  } catch (error) {
    console.error("/api/blogs/:userId", error);
  }
});

/*app.get("/api/blog/:category", async (req, res) => {
  try {
    const { category } = req.params;
    if (!category || !categories.includes(category)) {
      console.log("category : ", category);
    }
    const blogCat = await BlogModel.find({ category });
    res.json(blogCat);
  } catch (error) {
    console.error("/api/blog/:category Failed : ", error);
  }
});*/
app.get("/api/user/:email", async (req, res) => {
  try {
    const token = req.headers.authorization;

    const auth = await authenticate(token);
    if (auth.err) {
      return res.status(403).json({ err: auth.err_msg });
    }
    const { email } = req.params;
    if (!email) {
      console.log("not a valid email id  ");
    }

    const user = await UserModel.find({ email });
    res.json(user);
  } catch (error) {
    console.error(" /api/user/:email", error);
  }
});

app.post("/api/blogs", async (req, res) => {
  // CREATE
  // insert a blog for a user

  try {
    const token = req.headers.authorization;

    const auth = await authenticate(token);
    if (auth.err) {
      return res.status(403).json({ err: auth.err_msg });
    }
    console.log("req.body : ", req.body);
    const { title, content, userId, category } = req.body;
    if (!userId) {
      return res.send({ error: "Userid required" });
    }
    const blog = await new BlogModel({
      title,
      content,
      userId,
      category
    }).save();
    res.json(blog);
  } catch (error) {
    console.error(" /api/blogs", error);
  }
});

app.put("/api/blogs/", async (req, res) => {
  // UPDATE
  // update a blog for a user
  // validate if the user has the access to update that blog
  try {
    const token = req.headers.authorization;

    const auth = await authenticate(token);
    if (auth.err) {
      return res.status(403).json({ err: auth.err_msg });
    }
    const { blogId, title, content } = req.body; // object destructuring
    //await BlogModel.update({_id: blogId}, {title, content});
    if (!blogId) {
      return res.send({ error: "enter a valid id" });
    }
    const updatedblog = await BlogModel.update(
      { _id: blogId },
      { title, content }
    );

    res.json(updatedblog);
  } catch (error) {
    console.error(" /api/blogs", error);
  }
});

app.delete("/api/blogs/:blogId", async (req, res) => {
  // DELETE
  // delete a blog for a user
  // validate if the user has the access to delete that blog
  try {
    const token = req.headers.authorization;

    const auth = await authenticate(token);
    if (auth.err) {
      return res.status(403).json({ err: auth.err_msg });
    }
    const { blogId } = req.params;
    if (!blogId) {
      return res.send({ error: "enter a valid id" });
    }
    await BlogModel.remove({ _id: blogId });
    res.json({ success: true }); //specify obj
  } catch {
    console.error("/api/blogs/:blogId", error);
  }
});


app.listen(PORT, () => {
  console.log(`express server started at port : ${PORT}`);
});
