import Ticket from "@/app/(models)/Tickets";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const foundTicket = await Ticket.findById(id);
    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error occured while fetching" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    const deleted = await Ticket.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Ticket Delete", ticket: deleted },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error occured while deleting" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;

    const updated = await Ticket.findByIdAndUpdate(id, { ...ticketData });
    return NextResponse.json(
      { message: "Ticket Updated", ticket: updated },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error occured while updating" },
      { status: 500 }
    );
  }
}
