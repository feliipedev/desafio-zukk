export const goToLogin = (history) => {
    history.push("/login")
}

export const goToRegisteredCustomers= (history) => {
    history.push("/")
}
export const goToAddUser = (history) => {
    history.push("/add")
}
export const goToEditUser = (history, id) =>{
    history.push(`/users/${id}`)
}