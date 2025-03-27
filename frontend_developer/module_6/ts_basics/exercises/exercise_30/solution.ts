enum Permission {
    READ,
    WRITE,
    DELETE,
}

type User = {
    login: string,
};

type AdminPermission = {
    permission: Permission,
};

type Admin = AdminPermission & User & {}

const addAdmin = (user: User): Admin => {
    return {
        ...user,
        permission: Permission.READ
    }
}
