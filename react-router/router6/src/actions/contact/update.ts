import { type Params } from "react-router";
import { updateContact } from "../../contacts";

export async function action({ request, params } : {request: Request, params: Params}) {
    if (!params?.contactId) {
        throw new Error("Missing contactId");
    }
    const { contactId } = params;
    const formData = await request.formData();

    return updateContact(contactId, {
      favorite: formData.get("favorite") === "true",
    });
  }
  