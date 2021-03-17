interface EntryTypeInterface{
    phoneNumber?: string,
    name?: string,
    hospital?: string,
    dueDate?: string,
    appointments?:AppointmentsInterface,
}

interface AppointmentsInterface{
    expected?: number,
    visited?: number,
    visitsDates?: object
}