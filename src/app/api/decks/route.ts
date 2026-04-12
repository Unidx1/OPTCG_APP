import supabase from "@/lib/database";

export async function POST(request: Request) {

    const body = await request.json()

    const { error } = await supabase
        .from("Decks")
        .insert(body)
    
    if (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 })
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 })
    
}


