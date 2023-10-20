import { getContacts } from "../contacts";

export async function loader({ request } : { request: Request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts, q };
  }