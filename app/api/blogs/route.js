// import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    // await connectDB();

    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    return Response.json(blogs);

  } catch (error) {
    return Response.json(
      { message: "Error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    // await connectDB();

    const body = await req.json();

    const blog = await Blog.create(body);

    return Response.json(blog);

  } catch (error) {
    return Response.json(
      { message: "Error" },
      { status: 500 }
    );
  }
}