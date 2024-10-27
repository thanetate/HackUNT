import dbConnect from "@/app/lib/dbConnect";
import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";

// Define a User schema
const UserSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  password: { type: String, default: null },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  gender_interest: { type: String, required: true },
  url1: { type: String, required: true },
  about: { type: String, required: true },
  matches: { type: [String], default: [] },
});

// Create a User model if not already created
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export async function GET() {
  try {
    // Connect to the MongoDB database
    await dbConnect();

    // Fetch users from the 'users' collection
    const users = await User.find({});
    console.log(users); // Log the fetched users

    // Return the users as a JSON response
    return NextResponse.json({ users });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Connect to the MongoDB database
    await dbConnect();

    // Create a new user
    const newUser = new User({
      user_id: body.user_id,
      password: body.password,
      name: body.name,
      gender: body.gender,
      gender_interest: body.gender_interest,
      url1: body.url1,
      about: body.about,
      matches: body.matches || [],
    });

    // Save the user to the database
    await newUser.save();
    console.log("User inserted successfully:", newUser);

    // Return a success response
    return NextResponse.json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
