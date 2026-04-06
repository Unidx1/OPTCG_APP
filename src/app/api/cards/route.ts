import supabase from "@/lib/database";

export async function GET(request: Request) {

    const {searchParams} = new URL(request.url)

    const card_search = searchParams.get("search") || ""

    const {data, error } = await supabase
        .from("Cards")
        .select("*")
        .or(`card_name.ilike.%${card_search}%,card_number.ilike.%${card_search}%`)
    
    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
    return new Response(JSON.stringify(data), { status: 200 })
}

