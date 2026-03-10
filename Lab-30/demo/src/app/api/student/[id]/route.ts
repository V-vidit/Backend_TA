import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: {params: Promise<{id: string}>}) {
    try{
        const {id}=await params;

        const student= await prisma.student.findUnique({
            where:{
                student_id: Number(id)
            }
        });

        return NextResponse.json(student);
    }   
    catch(err){
        return NextResponse.json({message: "Internal Server Error"}, {status:500});
    } 
}

export async function PUT(req: NextRequest, {params}: {params: Promise<{id: string}>}) {
    try{
        const {id}=await params;

        const body=await req.json();

        const student=await prisma.student.update({
            where:{
                student_id: Number(id)
            },
            data: {
                student_name: body.student_name,
                email: body.email,
                enrollment_no: body.enrollment_no,
            }
        })

        return NextResponse.json(student);
    }
    catch(err){
        return NextResponse.json({message: "Internal Server Error"}, {status:500});
    }
}

export async function DELETE(req: NextRequest,  {params}: {params: Promise<{id: string}>}) {
    try{
        const {id}=await params;
        const student = await prisma.student.delete({
            where: {
                student_id: Number(id)
            }
        });

        return NextResponse.json({deletedStudent: student});
    }   
    catch(err){
        return NextResponse.json({message: "Internal Server Error"}, {status:500});
    } 
}