import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export interface Contact {
  id: string;
  first?: string;
  last?: string;
  favorite?: boolean;
  twitter?: string;
  createdAt: number;
}

export async function getContacts(query: string | null): Promise<Contact[]> {
  await fakeNetwork(`getContacts:${query}`);
  let contacts: Contact[] | null = await localforage.getItem("contacts");
  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact(): Promise<Contact> {
  await fakeNetwork();
  const id = Math.random().toString(36).substring(2, 9);
  const contact: Contact = { id, createdAt: Date.now() };
  const contacts = await getContacts(null);
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id: string): Promise<Contact | null> {
  await fakeNetwork(`contact:${id}`);
  const contacts: Contact[] | null = await localforage.getItem("contacts");
  if (!contacts) return null;
  const contact = contacts.find((c) => c.id === id);
  return contact ?? null;
}

export async function updateContact(id: string, updates: Partial<Contact>): Promise<Contact | null> {
  await fakeNetwork();
  const contacts: Contact[] | null = await localforage.getItem("contacts");
  if (!contacts) return null;
  const contact = contacts.find((c) => c.id === id);
  if (!contact) throw new Error("No contact found for " + id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id: string): Promise<boolean> {
  const contacts: Contact[] | null = await localforage.getItem("contacts");
  if (!contacts) return false;
  const index = contacts.findIndex((c) => c.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts: Contact[]): Promise<Contact[]> {
    return localforage.setItem("contacts", contacts);
  }

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: Record<string, boolean> = {};

async function fakeNetwork(key?: string): Promise<void> {
  if (!key) {
    fakeCache = {};
    return;
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key as string] = true;
  return new Promise<void>((res) => {
    setTimeout(res, Math.random() * 800);
  });
}