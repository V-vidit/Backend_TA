import { NextRequest, NextResponse } from "next/server";
import {students} from "../data";

export async function GET(req:NextRequest) {
    return NextResponse.json(students);
}

export async function POST(req: NextRequest) {
    const data=await req.json();
    const newStudent={
        id: students.length+1,
        name: data.name
    };

    students.push(newStudent);
    return NextResponse.json({
        newStudent
    },{status: 201});
}

