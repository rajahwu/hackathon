import { redirect, type Params } from "react-router-dom";
import { deleteContact } from "../../contacts";

export async function action({ params }: { params: Params }) {
    if (!params?.contactId) {
        throw new Error("Missing contactId");
    }
    console.log(params)
    
    
    const { contactId } = params;
    
    if(contactId === "mglwsfh") {
        throw new Error("no not bestie");
    }

    await deleteContact(contactId);
    return redirect("/");
}