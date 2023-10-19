import { getContacts } from "../contacts"

export async function loader() {
    const contacts = await getContacts(null)
    return { contacts }
}
