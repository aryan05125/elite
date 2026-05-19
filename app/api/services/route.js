import connectDB from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET() {
  try {
    await connectDB();

    const services = await Service.find().sort({
      createdAt: -1,
    });

    return Response.json(services);

  } catch (error) {
    return Response.json(
      { message: "Error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const service = await Service.create(body);

    return Response.json(service);

  } catch (error) {
    return Response.json(
      { message: "Error" },
      { status: 500 }
    );
  }
}