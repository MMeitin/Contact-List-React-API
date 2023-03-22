const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contact: {
        id: '',
        full_name: "",
        email: "",
        agenda_slug: "mmeitin_agenda",
        address: "",
        phone: "",
      },
    },
    actions: {
      editContact: (contact) => {
        setStore({ contact });
      },
      delContact: (id) => {
        // Obtener el store actual 
        const store = getStore();
        // Filtrar el array de contactos para eliminar el que tenga el id dado 
        const newContacts = store.contacts.filter(contact => contact.id !== id); 
        // Actualizar el store con el nuevo array de contactos 
        setStore({ contact: newContacts }); 
      }
    },
  };
};

export default getState;
