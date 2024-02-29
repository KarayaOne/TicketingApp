import Ticket from "../../(models)/Tickets";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("POST RAN");
  try {
    const body = await req.json();
    const ticketData = body.formData;
    const ticket = await Ticket.create(ticketData);

    return NextResponse.json(
      { ticket: ticket, message: "Ticket Created" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Error", error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error", error: err.message },
      { status: 500 }
    );
  }
}
