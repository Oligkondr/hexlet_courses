enum ModalStatus {
    Closed,
    Opened,
}

const buildModal = (text: string, status: ModalStatus): { text: string, status: ModalStatus } => {
    return {text, status};
}

const modal = buildModal('hexlet forever', ModalStatus.Opened);
const modal2 = buildModal('hexlet forever', ModalStatus.Closed);
console.log(modal);
console.log(modal2);
