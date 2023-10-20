import { redirect, type Params } from "react-router-dom";
import { updateContact } from "../../contacts";

export async function action({ request, params }: { request: Request, params: Params }) {
    if (!params?.contactId) {
        throw new Error("Missing contactId");
    }
    const { contactId } = params;

    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(contactId, updates);
    return redirect(`/contacts/${contactId}`);
}
