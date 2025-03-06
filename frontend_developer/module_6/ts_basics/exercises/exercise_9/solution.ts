enum ModalStatus {
    Closed,
    Opened,
}

const buildModal = (text: string, state: ModalStatus): { text: string, state: ModalStatus } => {
    return {text, state};
}

const modal = buildModal('hexlet forever', ModalStatus.Opened);
const modal2 = buildModal('hexlet forever', ModalStatus.Closed);
console.log(modal);
console.log(modal2);
