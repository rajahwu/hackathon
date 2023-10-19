import { getContact } from "../contacts";

interface RouteParams {
  contactId: string;
}


export async function loader({ params }: { params: RouteParams }) {
  const { contactId } = params;
  const contact = await getContact(contactId);
  return { contact };
}