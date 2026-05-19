import connectDB from "@/lib/mongodb";
import Service from "@/models/Service";

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    await Service.findByIdAndDelete(params.id);

    return Response.json({
      message: "Deleted",
    });

  } catch (error) {
    return Response.json(
      { message: "Error" },
      { status: 500 }
    );
  }
}