import { getContact } from "../contacts";
import { Params } from "react-router-dom";

interface RouteParams extends Params {
  contactId: string;
}

export const loader = async ({ params }: { params: RouteParams}) => {
  if (!params?.contactId) {
    throw new Error("Missing contactId");
  }
  const { contactId } = params;
  const contact = await getContact(contactId);
  return { contact };
}
