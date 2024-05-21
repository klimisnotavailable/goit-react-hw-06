import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { filter,contactsList } from "../../redux/contactsSlice";

export default function ContactsList() {
    const value = useSelector(contactsList);
    const nameToSearch = useSelector(filter);
    const [contacts, setContacts] = useState(value);
  
    useEffect(() => {
        setContacts(value)
    }, [value]);

    const filteredContacts = contacts.filter(contact => {
    return contact.newContact.name.toLowerCase().includes(nameToSearch.toLowerCase().trim())
    });

    const contactsMarkup = filteredContacts.map((contact) => {
        return <li key={crypto.randomUUID()} className={css.contactItem}><Contact contact={contact} ></Contact></li>
    });
    return <ul>{contactsMarkup}</ul>;
}