export async function GET(){
    return Response.json({message:"Sucess",status:20});
}

export async function POST(req){
    const {name,price}=await req.json();
    return Response.json({
    data:{
        n:name,
        p:price,
    },
    message:"Success",
    status:20,
});
}